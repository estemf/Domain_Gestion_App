# Domain_Gestion_App

Ce projet est le résultat d'un travail d'équipe réalisé sur une durée de deux semaines dans le cadre de ma formation.

## Objectif

L'objectif du projet était de développer un site web permettant à un utilisateur de gérer des noms de domaine. Voici les principales fonctionnalités :

- **Utilisateur :**
  - Recherche de noms de domaine disponibles.
  - Réservation et gestion des noms de domaine via un compte personnel.
  
- **Administrateur :**
  - Consultation de l'état des serveurs DNS.
  - Accès à des statistiques sur les utilisateurs de la plateforme.

## Mise en place

Si vous venez d'installer le projet, vous devrez installer quelques prérequis pour pouvoir exécuter correctement le projet.

### 1 - Dépendances

Commencez par ouvrir le dossier de l'application dans votre éditeur de code. Pour ma part, j'utilise [Visual Studio Code](https://code.visualstudio.com/Download). Ouvrez le dossier "AppReact".

Ensuite, ouvrez un nouveau terminal et exécutez la commande suivante :

```bash
npm run dev
```
Cette commande instalerra tout les dépendance que le projet e besoin pour fonctionner correctement, faite la meme chose avec le dossier de l'API

## 2. Base de Données

Pour pouvoir accéder à un compte personnel et donc à la gestion des noms de domaine, il vous faudra mettre en place la base de données. Voici les étapes à suivre :

### Installation et configuration de la base de données

1. **Installez un logiciel de gestion de bases de données**  
   Pour ma part, j'utilise [DBeaver](https://dbeaver.io/download/), mais vous pouvez utiliser un autre logiciel de votre choix.

2. **Créez une nouvelle connexion en PostgreSQL**  
   Une fois DBeaver ouvert, créez une nouvelle connexion avec PostgreSQL. Vous pouvez modifier les informations de connexion si nécessaire, mais gardez à l'esprit que ces informations devront également être modifiées dans l'API. Le mot de passe par défaut dans l'API est `root`.

3. **Accédez à l'architecture de la base de données**  
   Dépliez l'architecture jusqu'à atteindre le fichier `public`, qui devrait ressembler à ceci :

```
PostgreSQL (localhost:5432)
│
└── Bases de données
    └── postgres
        └── Schémas
            └── public
                └── Tables
```

4. **Restaurer la base de données**  
Faites un clic droit sur le dossier `public`, puis sélectionnez `Restore`. Cherchez ensuite le fichier de sauvegarde fourni avec le projet, nommé `bdd-sauvegarde.sql`, et démarrez la restauration.

### Configuration de l'API

Si vous avez modifié les informations de connexion dans DBeaver, vous devrez également les mettre à jour dans l'API. Pour ce faire, ouvrez votre éditeur de code et modifiez les fichiers suivants :
- `.env`
- `index.js`

## Lancement du projet

Pour lancer le projet, ouvrez le fichier exécutable `Lancer Node et React.bat`, qui permet d'exécuter l'ensemble du projet.

