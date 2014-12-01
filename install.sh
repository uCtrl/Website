#!/bin/bash

npm install -g less
npm install -g clean-bower-installer
npm install -g grunt-cli

if [[ "$OSTYPE" == "msys" ]]; then
	npm install clean-bower-installer
fi

if [ -f serverConf.json ]
then
    echo '{' >> serverConf.json
    echo '    "host": "server.com",' >> serverConf.json
    echo '    "port": 21,' >> serverConf.json
    echo '    "authKey": {' >> serverConf.json
    echo '        "username": "username1",' >> serverConf.json
    echo '        "password": "password1"' >> serverConf.json
    echo '    }' >> serverConf.json
    echo '}' >> serverConf.json
fi

