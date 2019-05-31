#!/usr/bin/env bash

set -eu

BRANCH=$1
NPM_TOKEN=$2

case "$BRANCH" in
    master)
        /home/circleci/angular2-tslint-rules/deploy-npm.sh
        ;;
esac
