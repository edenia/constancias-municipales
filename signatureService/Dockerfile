# syntax=docker/dockerfile:1

FROM python:3.8-slim-buster

WORKDIR /app

ENV FVA_HOST http://bccr.fva.cr/
ENV STUB_SCHEME https
ENV STUB_HOST firmadorexterno.bccr.fi.cr
ENV RECEPTOR_HOST http://bccr.fva.cr/
ENV DEFAULT_BUSSINESS 1
ENV DEFAULT_ENTITY 1
ENV RECEPTOR_CLIENT pyfva.receptor.client

ENV REQUESTS_CA_BUNDLE /app/Certificados/ca_nacional_CR.pem
ENV REQUESTS_CA_PATH /app/Certificados/ca_nacional_CR.pem
ENV REQUESTS_CERT_PATH /app/Certificados/bccr_agent.pem
ENV REQUESTS_KEY_PATH /app/Certificados/bccr_agent_key.pem
ENV TZ=America/Costa_Rica

COPY . .

COPY requirements.txt requirements.txt
RUN pip3 install --trusted-host pypi.org --trusted-host files.pythonhosted.org -U Flask
RUN pip3 install --trusted-host pypi.org --trusted-host files.pythonhosted.org pyfva
# RUN echo "America/Costa_Rica" > /etc/timezone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata
# RUN pip3 install -r requirements.txt


CMD ["python3", "-m" , "flask", "run", "--host=0.0.0.0"]