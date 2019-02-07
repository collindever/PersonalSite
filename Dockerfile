FROM node:current-alpine as node-builder

COPY Flask-App /run/Flask-App/
COPY React-App /run/React-App/
WORKDIR /run/React-App/
RUN npm install
RUN npm run build

FROM python:3.6.8-alpine

WORKDIR /run/
COPY --from=node-builder /run/Flask-App .
RUN pip install -r requirements.txt
CMD ["python", "run.py"]