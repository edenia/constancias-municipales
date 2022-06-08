# syntax=docker/dockerfile:1

FROM python:3.8-slim-buster

WORKDIR /app

ENV TZ=America/Costa_Rica

COPY . .

RUN pip3 install --trusted-host pypi.org --trusted-host files.pythonhosted.org -U Flask
RUN pip3 install --trusted-host pypi.org --trusted-host files.pythonhosted.org pyfva
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

CMD ["python3", "-m" , "flask", "run", "--host=0.0.0.0"]