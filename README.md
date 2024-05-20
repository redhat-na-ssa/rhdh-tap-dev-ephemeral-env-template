# Dev Build Branch Template

This repository contains the Backstage Template used to create the Kubernetes resources needed to build/deploy a simple quarkus application it shows when developer creates new branches and commit their code it builds an image with the new branch name and also when a merge request is created it deploys a new ephemeral environment to run integration testing required.

Once the merge request is merged it deletes the ephemeral environement it created.

## Introduction

This template has been designed to work only with TAP demo (https://demo.redhat.com/catalog?item=babylon-catalog-prod/enterprise.redhat-tap-demo.prod&utm_source=webapp&utm_medium=share-link) it assumes all the infrastructure rquired are available.

## Registering Template.

This new template can be registerted on developer hub instance with Register existing component from create section. The URL should be https://github.com/redhat-na-ssa/rhdh-tap-dev-ephemeral-env-template/blob/main/template.yaml

## Application Flow

Application flow is shown below.

![Application Flow](assets/DevbuildBranches.png)

## How to Demo.

Create a new instance of application by using this template ("Dev Branch Builds - Securing a Quarkus Service Software Supply Chain" )once registered. This template as of now only works with internal image registry.

Please update the following URLs. These URL should point to current TAP demo instance.

1) Image Registry : OpenShift on step 2
2) Cluster URL on step 3
3) Gitlab URL on step 4

Once the application is created, start the regular build from master branch by making a change in index.html file. Also create a new branch for the created application like `feature-abc`

``` 
   git checkout -b feature-abc

   # make change to index.html as part of this branch

   git add .
   git commit -m "Added new branch"
   git push --set-upstream origin feature-abc 
```

This will start a new build for branch `feature-abc`
