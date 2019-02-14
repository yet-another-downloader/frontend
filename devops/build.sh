#!/usr/bin/env bash

export CI_DEPLOY_TAG=${BUILD_NUMBER}

cd ../

export HOME_FOLDER=`pwd`

echo "Create docker config"
mkdir /root/.docker
# deploy dockers
echo $DOCKER_AUTH_CONFIG > /root/.docker/config.json

function build {
    echo "Build in docker"

    DOCKER_IMAGE=docker-local.artifactory.corp.nbakaev.com/yad-frontend
    DOCKER_JOB_IMAGE_TAG=${DOCKER_IMAGE}:${BUILD_NUMBER}

    echo "Tag pipeline job tag"
    docker build -t $DOCKER_JOB_IMAGE_TAG .
    docker push $DOCKER_JOB_IMAGE_TAG

    echo "Tag imaginarium docker tag"
    docker tag $DOCKER_JOB_IMAGE_TAG $DOCKER_IMAGE:$CI_DEPLOY_TAG
    docker push $DOCKER_IMAGE:$CI_DEPLOY_TAG

    # if we are on master - also tag latest
    if [[ "${CI_COMMIT_REF_NAME}" == "master" ]];then
        echo "Label latest docker tag & push"
        docker tag $DOCKER_JOB_IMAGE_TAG $DOCKER_IMAGE:latest
        docker push $DOCKER_IMAGE:latest
    fi
}

set -e

build

echo "Docker build tag ${CI_DEPLOY_TAG}"

exit 0
