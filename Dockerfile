FROM ubuntu:20.04 as dev
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get -y update && apt-get -y install curl git
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get install -y nodejs 
# RUN curl "https://install.meteor.com/" | sh
COPY . /app/src
WORKDIR /app/src

RUN npm install
