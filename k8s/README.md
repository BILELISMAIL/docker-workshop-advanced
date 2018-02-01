# HowTo

```bash
kubectl create -f app-svc.yml
kubectl create -f mysql.yml
kubectl create -f mysql-svc.yml
kubectl create -f app.yml
POD=$(kubectl get pods | grep mysql | awk '{print $1}')
kubectl port-forward $POD 3306:3306
# in another terminal, after MySQL is ready
cat ../app/data.sql | mysql -p -h127.0.0.1 -uroot
```

Pour afficher l'application via minikube: ``minikube service app``.

## Utilisation de la Google Cloud Container Registry

```bash
kubectl create secret docker-registry gcr-json-key \
          --docker-server=https://eu.gcr.io \
          --docker-username=_json_key \
          --docker-password="$(cat ./ClusterEurope2018-206077fbc947.json)" \
          --docker-email=ludovic.piot@thegaragebandofit.com

kubectl patch serviceaccount default \
          -p '{"imagePullSecrets": [{"name": "gcr-json-key"}]}'
```