#!/bin/bash

set -e

# Deployment to Bluemix stage1
if [[ -n "$CF_USERNAME" && -n "$CF_PASSWORD" ]]; then
  # Use the URL to a Debian 64 bit installer select from here:
  # https://github.com/cloudfoundry/cli/releases
  # This is the source file after following the redirect
  wget https://s3.amazonaws.com/go-cli/releases/v6.12.4/cf-cli_amd64.deb -qO temp.deb && sudo dpkg -i temp.deb

  rm temp.deb

  # TODO: confirm what space we want to use
  CF_ORGANIZATION=${CF_ORGANIZATION:-Watson-Platform-Alpha}
  CF_SPACE=${CF_SPACE:-demos}

  cf api https://api.stage1.ng.bluemix.net
  cf login --u $CF_USERNAME --p $CF_PASSWORD --o $CF_ORGANIZATION --s $CF_SPACE

  BRANCH_NAME=$(echo $TRAVIS_BRANCH | sed -e 's/[^A-Za-z0-9._-]/-/g')
  STAGE_APP_NAME="wdc-`dirname $TRAVIS_REPO_SLUG`-${BRANCH_NAME}"
  cf push -f manifest-stage.yml $STAGE_APP_NAME -n $STAGE_APP_NAME
else
  echo "Skip deploy to Bluemix because CF_USERNAME or CF_PASSWORD are empty"
  exit 1
fi
