# Define the application directory
from os import path
BASE_DIR = path.abspath(path.dirname(__file__))

# Application threads. A common general assumption is
# using 2 per available processor cores - to handle
# incoming requests using one and performing background
# operations using the other.
THREADS_PER_PAGE = 2


# Enable protection agains *Cross-site Request Forgery (CSRF)*
CSRF_ENABLED     = True