## Infared Signal Transmission

#### Overview
 Electronics 1 was the third circuit analysis class I had to take covering transistors and diodes.  The motivating project for this class was to build a system capable of transmitting an infrared signal to a reciever maximizing distance.  The transmitter was largerly designed for us while the receiver required design as well as implementation. Project highlights include:

 * Transmitter
  - Runs off a 9V battery
  - CMOS ring oscillator at 20kHz
  - limited to 50 mA output
  - drives infrared LED

* Receiver
  - +/- 12V
  - Three multiple feedback bandpass filters
  - one transistor based amplifier
  - detected reliable singal at 4-5 meters

#### Transmitter

![picture of complete transmitter circuit](/static/content/Hardware/Infared_Signal_Transmission/transmitter-img.jpg)

* Linear Regulator

  The linear regulator was constructed from a LM317 attached to a 9V battery regulated
  down to 5V.  This ist to run the CMOS Oscillator and the MCP6001 opamp which
  operates from 0-5V.  Some added circuitry includes bypass capcitors to and a
  status LED just as an indicator of when the circuit is on.

  According to the datasheet the equation for calculating Vout is $V_{REF}(1 + R2/R1)$
  where the reference voltage is 1.25V.  We selected a 100 ohms resistor for R1
  and two 150 ohms resistors for an R2 of 300 ohms to achieve an output of 5V.

  The regulator presented unique challenges when it came to achieving the perform
  desired.  Because the regulator directly powers a ring oscillator there are
  moments in time when the is 0mA draw on the voltage regulator.  This along with
  originally selecting resistor values that were high (10x5) caused issues with
  the circuit.  The performance reliability of the overall circuit was improved
  by changing the values of R1 and R2 to lower values.  Further improvement can
  be achieved by putting a relatively large resistor in parallel to the output
  to provide a constant small current draw on the output of the regulator.

* Ring Oscillator

  The ring oscillator was based around a CD4007 IC which has 4 CMOS inverters of
  which we use an odd number 3 to create an oscillator.  This was designed to create
  a signal at 20kHz which was achieved by placing one 4.7nF and two 10nF capacitors
  between each stage of the output and ground. Below is the netlist for the oscillator.

      .include CD4007_SpiceModel.cir

      Vs 1 0 DC 5

      * NODE 2 == Output from first CMOS input for 2nd CMOS
      * NODE 3 == Output from the 2nd CMOS input for 3rd CMOS
      * NODE 4 == Output from the 3rd CMOS input for the 1st CMOS

      Xmos 3 1 2 0 3 4 0 2 0 3 1 4 2 1 CMOS4007
      C1 2 0 10n
      C2 3 0 4.7n
      C3 4 0 10n

      .Tran 50u 6m 4.5m
      .END

 This circuit was able to produce the desired signal that was then feed into and
 amplifying circuit to drive the final LED output.

* Op-Amp

  The opamp used was a MCP6001 which uses 5V and 0V rails and the output was used
  to drive a IR1503 infrared LED.  Since the current limit of the opamp is only
  20mA a 2N3904 NPN was used to increase the current to our desired maximum of 50mA.
  This amplifier was also designed to take the output of the oscillator which was
  sinusoidal and create a square wave with an approximately 50% duty cycle. The
  LED itself is current driven so resistors were placed in series with ground to
  generate the appropriate current across the LED.

  ![Transmitters amplifying circuit schematic](/static/content/Hardware/Infared_Signal_Transmission/transmitter-amplifier-circuit.jpg)

  In order to get as close to the 50mA mark as possible we used 3 resistors in
  parallel. Two 100 ohm resistors and 1 470 ohm resistor. This gave us an equivalent
  resistance of 45.9 ohm which was enough to give us 49.9mA of current.  The
  photo above displays the second stage used to achieve the correct current.  A
  first stage was used and a separate op-amp circuit constructed to create a square
  wave with a 50% duty cycle which is noticeable in the final output below.

  ![Final transmitter output](/static/content/Hardware/Infared_Signal_Transmission/transmitter-output.jpg)

#### Receiver

![Schematic of receiver circuit](/static/content/Hardware/Infared_Signal_Transmission/complete-receiver-circut.png)

The receiver circuit is powered by +12V and -12V rails.  A photo-diode receives
a signal from our transmitter and emits a current proportional to the amount of
infra-red light striking the diode.  This is fed into a trans-impedance amplifier
which converts the current into an amplified voltage.  Because infra-red comes
from many environmental sources a bandpass filters is used to remove as much noise
as possible and isolate our transmitter's signal. Three cascading identical multi-feedback
band pass filter accomplish filtering out the noise as well as amplifying the signal.
 A transistor based amplifier is also included which serves as a final gain stage.
 The overall gain of the circuit is approximately 80dB which helps achieve further
 distances while still maintaining signal integrity.

* Multi-Feedback Topology Band Pass Filter

  a Multi-Feedback Bandpass Filter was designed with a bandwidth of 1800Hz and a
  gain of 10dB. The circuit was designed with a mid-frequency 20kHz. To simplify
  the circuit design $C_{1}=C_{2}$.

  ![Schematic for the lf347 band pass](/static/content/Hardware/Infared_Signal_Transmission/lf347-single-stage.png)

  Multiple topologies were examined in the process of designing the receiver. Ultimately,
  a multi-feedback bandpass filter was selected. This was the hardest section of
  the design project.  We ran into many cases where our simulations did not line
  up with our observed results. A working band pass filter was finally realized
  across all three stage when each opamp was hand tuned by selecting resistor values
  close to that of the calculated value but through observation achieved the center
  frequency of 20kHz.  Once this was done we were able to get a gain equivalent to
  what we were expecting from our simulations.

      ACTIVE FILTER DESIGN FOR RECEIVER CIRCUIT

      .include LF347_SpiceModel.cir

      V1 1 0 DC 0 AC 1
      R1 1 2 68k
      R2 3 4 1.47Meg
      R3 2 0 560
      C1 2 4 220p
      C2 2 3 220p

      Eoa 4 0 3 0 100000

      .AC DEC 100 10k 1Meg
      .END

* Transistor Based Amplifier

  The transistor based amplifier was used as the final output stage of our receiver
   circuit.  An N-type MOSFET was selected to remove any current coming from our source.

  ![Schematic for Transistor based Amp](/static/content/Hardware/Infared_Signal_Transmission/nmos-amplifer.png)

  A capacitor was placed between our signal and the gate in order to eliminate any
  DC components our our signal.  A DC bias is obtained with a voltage divider
  between the circuits 12V and supplies -9.3V our gain from this circuit is about
  13. The C1 value was selected to provide a high pass filter with a cutoff frequency
  of about 1000Hz.

![Photo of finished Receiver Circuit](/static/content/Hardware/Infared_Signal_Transmission/receiver-img.jpg)

#### Summary

#### References

[Resistor Color Code Calculator](https://www.allaboutcircuits.com/tools/resistor-color-code-calculator/) pretty much open every lab


