# Demo app

Cette application est basée sur l'app de démonstration de Symfony, avec un backend MySQL.

Avant de lancer l'application, le fichier ``data.sql`` doit être importé dans MySQL.

Dans K8s, cela peut être fait à l'aide d'un ``init container`` ([doc](http://kubernetes.io/docs/user-guide/production-pods/#handling-initialization)).

## HowTo

```bash
docker build --tag eu.gcr.io/clustereurope2018/symfony2_demo:app .
# publish the docker image in Google Cloud Container Registry
gcloud docker -- push eu.gcr.io/clustereurope2018/symfony2_demo:app
docker run --name mysql --env MYSQL_ROOT_PASSWORD=toto42 --detach mysql:5.6
# wait a little for MySQL to be ready.

cat data.sql | docker run --attach stdin --attach stdout --attach stderr --interactive --link mysql:mysql --rm mysql:5.6 sh -c 'exec mysql -hmysql -uroot -ptoto42'

# retrieve the docker image from Google Cloud Container Registry and run it
docker run --link mysql:mysql --rm --publish 8080:80 --interactive --tty eu.gcr.io/clustereurope2018/symfony2_demo:app
```

L'application est disponible [ici](http://localhost:8080): vous pouvez la parcourir et vous connecter au backoffice.

## Variables d'environnement

Voici les variables d'environnement disponibles pour les containers:

### mysql

* ``MYSQL_ROOT_PASSWORD``
* ``MYSQL_DATABASE``
* ``MYSQL_USER``
* ``MYSQL_PASSWORD``

### eu.gcr.io/clustereurope2018/symfony2_demo:app

* ``SYMFONY__DATABASE__HOST``
* ``SYMFONY__DATABASE__PORT``
* ``SYMFONY__DATABASE__NAME``
* ``SYMFONY__DATABASE__USER``
* ``SYMFONY__DATABASE__PASSWORD``
