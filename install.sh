#!/bin/bash

npm install -g less
npm install -g clean-bower-installer
npm install -g grunt-cli

if [[ "$OSTYPE" == "msys" ]]; then
	npm install clean-bower-installer
fi