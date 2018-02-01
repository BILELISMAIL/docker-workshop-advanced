# HowTo

```bash
kubectl create -f redis.yml -f redis-svc.yml
kubectl replace -f app.yml
```

La dernière commande va effectuer un rolling-update sur le ``deployment`` app.

Pour vérifier que Redis est bien utilisé, vous pouvez utiliser la commande suivante :

```bash
POD=$(kubectl get pods | grep redis | awk '{print $1}')
kubectl exec $POD -- redis-cli keys '*'
```

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