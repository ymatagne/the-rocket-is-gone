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


## Demo 1
Using Docker
ng build --prod --build-optimizer --aot
docker build -t "mypresentation" .
docker run -d -p 80:80 --name "toto" mypresentation
docker exec -it mypresentation bash
docker ps
docker stop toto
docker rm  mypresentation

## Demo 2
Using Rkt
cd /tmp/rkt
vagrant up
vagrant ssh
cd /tmp/
wget https://github.com/containers/build/releases/download/v0.4.0/acbuild-v0.4.0.tar.gz
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
