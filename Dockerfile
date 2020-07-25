FROM ubuntu:20.04 as dev
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get -y update && apt-get -y install curl nodejs npm git g++ build-essential
RUN curl "https://install.meteor.com/" | sh
COPY . /app/src
WORKDIR /app/src

#RUN meteor npm install --save @babel/runtime bootstrap rollbar
#RUN npm install --save @babel/runtime bootstrap rollbar

#ENTRYPOINT ["node"]
#CMD ["main.js"]
#CMD ["meteor", "run", "--settings=settings-dev.json"]
#CMD ["bash"]
RUN meteor npm install
ENV METEOR_ALLOW_SUPERUSER 1
ENV IMAGE_URL /img/
CMD ["meteor", "run"]