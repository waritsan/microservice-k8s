# microservice-k8s

## Initial setup
1. Install ingress-nginx
2. create env variable
```
kubectl create secret generic jwt-secret --from-literal=jwt=asdf
```
## Start development
```
skaffold dev
```
