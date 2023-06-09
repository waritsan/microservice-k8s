# microservice-k8s

## Set env variable for the first time.
kubectl create secret generic jwt-secret --from-literal=jwt=asdf

## Start development
skaffold dev
