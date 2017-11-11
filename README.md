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


## For the demo

### Install Vagrant

### Up VM

vagrant up

vagrant ssh

## Demo Docker
sudo su -
cd /tmp/data
docker build -t "mypresentation" .
docker run -d -p 10080:80 --name "toto" mypresentation

goto http://localhost:10080/home

docker exec -it toto sh
docker ps
docker stop toto
docker rm toto

## Demo RKT
Unsing RKT with docker
 rkt run --insecure-options=image --port=80-tcp:10083 docker://nginx
 

## Demo SWARM
docker swarm init --advertise-addr 192.168.0.19
docker info
docker node ls
docker service create --replicas 3 --name mypresentations --publish 10082:80 mypresentation 
docker service ls
docker service inspect --pretty mypresentations
docker service ps mypresentations
docker ps
docker stop 1 docker
docker stop 2 docker

docker service rm mypresentations

## Create ACI container
Using Rkt
acbuild begin
acbuild set-name mypresentation
acbuild dependency add quay.io/coreos/alpine-sh
acbuild run -- apk update
acbuild run -- apk add nginx
acbuild port add http tcp 80
acbuild copy-to-dir dist/* /usr/share/nginx/html
acbuild set-exec -- /usr/sbin/nginx -g "daemon off;"
acbuild write mypresentation.aci
acbuild end
ls -lai
rkt --insecure-options=image run /tmp/data/mypresentation.aci --port=http:10085

## Build OCI direcly
buildah build-using-dockerfile .
buildah containers
buildah images

# Cleanup
buildah unmount $container
buildah rm $container

./acbuild begin
./acbuild set-name example.com/nginx
./acbuild dependency add quay.io/coreos/alpine-sh
./acbuild run -- apk update
./acbuild run -- apk add nginx
./acbuild port add http tcp 80
./acbuild mount add html /usr/share/nginx/html
./acbuild set-exec -- /usr/sbin/nginx -g "daemon off;"
./acbuild write nginx.aci
./acbuild end
mkdir test
echo "Hello, world!" > test/index.html
systemd-run rkt run --insecure-options=image /home/core/acbuild-v0.4.0/nginx.aci --volume html,kind=host,source=/home/core/acbuild-v0.4.0/test --port=http:8081

## Demo 3
Using SWARM
