docker build -t pos-front-end-image:latest .
docker run -d -p 8081:80 --name pos-front-end pos-front-end-image
docker tag pos-front-end-image:latest mirafi/pos-front-end-image:v_0.1
docker push mirafi/pos-front-end-image:v_0.1
#Kubenatese
kind load docker-image pos-front-end-image:latest

# Registery http://localhost:5000/v2/_catalog
# docker run -d -p 5000:5000 --name registry registry:2

# Kuber
minikube start --driver=docker --kubernetes-version=v1.34.0 
or
minikube start --driver=docker --kubernetes-version=v1.34.0 --image-repository=k8s.gcr.io

minikube dashboard --url
kubectl apply -f deployment.yaml
minikube service pos-front-end-service
