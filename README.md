# Workshop #5 - Docker avancé

Les branches :

* ``master`` : ce document
* ``app`` : la version initiale de l'application
* ``redis`` : la version de l'application adaptée pour Redis

**Ne vous spoilez pas et n'allez sur les autres branches que quand on vous l'indique.**

## Création de l'image Docker

_Sur votre laptop_

Exercice : créer une image Docker qui fait tourner [l'application de démonstration de Symfony](https://github.com/symfony/symfony-demo).
Cette application s'installe avec la commande ``symfony demo``. **Il faut utiliser MySQL comme base de données.**

À la fin de cet exercice, vous devez avoir :

* un container MySQL,
* un container avec l'application qui est linké au premier et qui expose un port,
* l'application fonctionnelle dans votre navigateur.

Solution :

* [code](https://github.com/theGarageBandOfIT/docker-workshop-advanced/tree/app/app)
* [image Docker construite](https://console.cloud.google.com/gcr/images/clustereurope2018/EU/symfony2_demo?project=clustereurope2018&gcrImageListsize=50) (choisir le tag ``app``)

## Installation de minikube

_Sur votre laptop_

### MacOS X

```bash
brew install docker-machine-driver-xhyve
sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.11.0/minikube-darwin-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/
minikube start --vm-driver=xhyve
minikube dashboard
```

## Déploiement sur minikube

_Sur minikube_

Exercice : faire tourner l'application dans minikube.

À la fin de cet exercice, vous devez avoir :

* un ``deployment`` et un ``service`` MySQL,
* un ``deployment`` et un ``service`` pour l'application,
* l'application dans votre navigateur.

Tip : Si vous avez créé un service pour l'application, vous pouvez l'afficher en exécutant ``minikube service <nom_du_service>``

Solution :

* [code](https://github.com/theGarageBandOfIT/docker-workshop-advanced/tree/app/k8s)

## Scale-out

_Sur minikube_

Exercice : augmenter le nombre de pods dans le déploiement de l'application.

À la fin de cet exercice, vous devez avoir 2+ pods qui tournent en parallèle pour l'application dans minikube.

Que remarque-t-on ?

## Redis

_Sur votre laptop_

Exercice : adapter l'application pour qu'elle utilise Redis comme backend de stockage des sessions.

À la fin de cet exercice, vous devez avoir :

* un container MySQL,
* un container Redis,
* un container avec l'application qui est linké aux deux premiers et qui expose un port,
* l'application fonctionnelle dans votre navigateur.

Solution :

* [code](https://github.com/theGarageBandOfIT/docker-workshop-advanced/tree/redis/app)
* [image Docker construite](https://console.cloud.google.com/gcr/images/clustereurope2018/EU/symfony2_demo?project=clustereurope2018&gcrImageListsize=50) (choisir le tag ``app-redis``)

## Déploiement sur minikube

_Sur minikube_

Exercice : déployer la nouvelle version de l'application sur minikube.

À la fin de cet exercice, vous devez avoir :

* un ``deployment`` et un ``service`` Redis supplémentaire,
* un ``deployment`` de l'application avec 2+ pods qui utilisent la nouvelle image Docker,
* l'application complètement fonctionnelle dans votre navigateur.

Solution :

* [code](https://github.com/theGarageBandOfIT/docker-workshop-advanced/tree/redis/k8s)

## Utilisation de Helm

### Présentation

[Helm](https://github.com/kubernetes/helm) est un outil inspiré de [Yum](https://doc.fedora-fr.org/wiki/YUM_:_Configuration_du_gestionnaire_de_paquets) pour `Linux` ou de [Homebrew](https://brew.sh/index_fr.html) pour `MacOS X`, qui permet de déployer toute une _stack_ verticale de _pods_ `Kubernetes`, avec ses dépendances, en une seule instruction.

On pourrait dire qu'il s'agit du `docker-compose` pour `Kubernetes`.

La _stack_ verticale de pods est décrite dans des fichiers de configuration nommés _charts_.

[Kubeapps](https://hub.kubeapps.com) est un dépôt Web de _charts_ prêts à l'emploi et mis à disposition par la communauté.

### Installation de Helm

#### MacOS X

Le composant client de `Helm` s'installe via `Homebrew`.

```bash
brew install kubernetes-helm
```

#### Installation de Tiller

Le déploiement du composant serveur de `Helm` (nommé `Tiller`) se fait depuis le composant client.

```bash
helm init
```

### Déploiement de l'application via Helm

_Sur votre laptop_

Exercice : créer un chart Helm qui déploie [l'application de démonstration de Symfony](https://github.com/symfony/symfony-demo).
**On considère la base de données mySQL déjà installée.**

À la fin de cet exercice, vous devez avoir :

* votre pod MySQL, avec sa donnée,
* un pod avec l'application qui est linké au premier et qui expose un port,
* l'application fonctionnelle dans votre navigateur.

Solution :

* [code version app](https://github.com/theGarageBandOfIT/docker-workshop-advanced/tree/app/charts)
* [code version app](https://github.com/theGarageBandOfIT/docker-workshop-advanced/tree/redis/charts)
