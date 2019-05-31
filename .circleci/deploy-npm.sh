#!/usr/bin/env bash

set -eu

NPM_TOKEN=$1

echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > /home/circleci/angular2-tslint-rules/
npm publish
