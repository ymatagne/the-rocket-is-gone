# TheRocketIsGone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Demo Time

### Install Vagrant

Go to https://www.vagrantup.com/

### Install Demo repository

`git clone https://github.com/ymatagne/coreos-vagrant`

`cd coreos-vagrant`

`vagrant up`

`vagrant status`

`vagrant ssh core-01`

`exit`

### Demo Time

#### I've not data directory !

`exit`

`vagrant provision`

`vagrant ssh core-01`

#### How to work coreos

`vi user-data.sample`

Explain how CoreOs Work with this configuration file

#### How to build Docker container

`vagrant ssh core-01`

`sudo su -`

`cd /tmp/data`

`docker build -t "mypresentation" .`

`docker run -d -p 10080:80 --name "toto" mypresentation`

`docker exec -it toto sh`

`docker stats`

`docker ps`

goto http://localhost:10080/home

`rkt list`

`docker stop toto`

`docker rm toto`

#### How to use rkt with Docker container

`sudo systemd-run rkt run --insecure-options=image --port=80-tcp:10083 docker://nginx`
 
 goto http://172.17.8.101:10083/

`rkt list`

`rkt image list`

`sudo rkt enter 22a02e9b`

`sudo rkt stop 22a02e9b`

`sudo rkt rm 22a02e9b`


#### How to build ACI/OCI images

`git clone https://github.com/containers/build acbuild`

`cd acbuild`

`./build-docker`

Avantage container : For install or deploy applications, docker everywhere

`cd /tmp/data/`

`sudo sh build-aci.sh`

`ls -lai`

`sudo systemd-run rkt run --insecure-options=image --port=http:10084 /tmp/data/mypresentationaci.aci`

`docker images`


#### How to install swarm

`ifconfig`

`docker swarm init --advertise-addr 172.17.8.101`

`vagrant ssh core-02`

`docker swarm join --token SWMTKN-1-3yiae01mt7w1bbnz1zza1qnu8s08rb9tu4xemf5evza1zjj073-1xhexobuq8ek0gh8slcoht1b7 172.17.8.101:2377`

`vagrant ssh core-03`

`docker swarm join --token SWMTKN-1-3yiae01mt7w1bbnz1zza1qnu8s08rb9tu4xemf5evza1zjj073-1xhexobuq8ek0gh8slcoht1b7 172.17.8.101:2377`

`docker info`

Swarm is active and contains 3 nodes

`docker node ls`


#### How to deploy new services in swarm clusters

`docker service create --replicas 5 --name mypresentations --publish 10082:80 ymatagne/rocketisgone:latest`

`docker service ls`

`docker service inspect --pretty mypresentations`

`docker service ps mypresentations`

goto http://172.17.8.101:10082/

goto core-02 and core-03 : You constat that containers are started

goto core-01 and stop container

`docker stop ls`

#### How to monitor your cluster

create this files :

`vim compose.yml`

<pre>
version: "3"
services:
  dashboard:
    image: charypar/swarm-dashboard
    volumes:
    - "/var/run/docker.sock:/var/run/docker.sock"
    ports:
    - 8080:8080
    environment:
      PORT: 8080
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.role == manager
</pre>

`docker stack deploy -c compose.yml svc`

`docker service ls`

goto http://172.17.8.101:8080/

stop one os

`docker service create --name portainer --publish 9000:9000 --replicas=1 --constraint 'node.role == manager' --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock portainer/portainer -H unix:///var/run/docker.sock`

goto http://172.17.8.101:9000/


Deploy new service, all things is news... it so fast.
