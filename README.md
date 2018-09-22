
#### Install dependencies:

Remove any old versions of nodejs and npm.
Update to the latest version of node and npm:

```
sudo apt-get-install nodejs
npm install
```

You may need to do "ln -s /usr/bin/nodejs /usr/bin/node",
because there appears to be Debian/Ubuntu difference in the simlink name.

#### Build:

```
source ./verbatim.sh
webpack
```

#### Run:

Currently there is only a basic mock up interface in mock.html