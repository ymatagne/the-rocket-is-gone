system("
  if [ #{ARGV[0]} = 'up' ]; then
    ng build --prod --build-optimizer --aot
    fi
")

$buildah = <<SCRIPT
echo Install buildah
dnf -y install \
        make \
        golang \
        bats \
        btrfs-progs-devel \
        device-mapper-devel \
        glib2-devel \
        gpgme-devel \
        libassuan-devel \
        ostree-devel \
        git \
        bzip2 \
        go-md2man \
        runc \
        skopeo-containers
mkdir buildah
cd buildah
export GOPATH=`pwd`
git clone https://github.com/projectatomic/buildah ./src/github.com/projectatomic/buildah
cd ./src/github.com/projectatomic/buildah
make
make install
echo "alias buildah=/usr/local/bin/buildah" >> /root/.bashrc
date > /etc/vagrant_provisioned_at
SCRIPT

$docker = <<SCRIPT
echo Install docker
URL=https://download.docker.com/linux/fedora/docker-ce.repo
dnf -y install dnf-plugins-core
dnf config-manager --add-repo ${URL}
dnf config-manager --set-enabled docker-ce-edge
dnf install -y docker-ce
systemctl start docker
systemctl enable docker
date > /etc/vagrant_provisioned_at
SCRIPT

$acbuild = <<SCRIPT
echo Install acbuild
git clone https://github.com/containers/build acbuild
cd acbuild
./build
echo "export ACBUILD_BIN_DIR=/home/vagrant/acbuild/bin/" >> /root/.bashrc
echo "export PATH=$PATH:$ACBUILD_BIN_DIR:/home/vagrant/acbuild/bin/" >> /root/.bashrc
date > /etc/vagrant_provisioned_at
SCRIPT

$rkt = <<SCRIPT
echo Install rkt
sudo dnf -y install rkt
date > /etc/vagrant_provisioned_at
SCRIPT

$dns = <<SCRIPT
echo Change dnsfile
rm -f /etc/resolv.conf 
echo "nameserver 8.8.8.8" >> /etc/resolv.conf
date > /etc/vagrant_provisioned_at
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "fedora/26-cloud-base"
  config.vm.box_version = "20170705"
  
  config.vm.network "public_network", bridge: "en1"

  for i in 10080..10100
    config.vm.network :forwarded_port, guest: i, host: i
  end

  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 2
  end
  
  config.vm.provision "shell", inline: $buildah
  config.vm.provision "shell", inline: $docker
  config.vm.provision "shell", inline: $rkt
  config.vm.provision "shell", inline: $dns
  config.vm.provision "shell", inline: $acbuild

  config.vm.provision "file", source: "dist", destination: "/tmp/data/dist"
  config.vm.provision "file", source: "nginx", destination: "/tmp/data/nginx"
  config.vm.provision "file", source: "Dockerfile", destination: "/tmp/data/Dockerfile"
  
end
