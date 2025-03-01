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

Si vous venez de télécharger le projet, vous devrez installer quelques prérequis pour pouvoir l'exécuter correctement.

### 1 - Dépendances

Commencez par ouvrir le dossier de l'application dans votre éditeur de code. Pour ma part, j'utilise [Visual Studio Code](https://code.visualstudio.com/Download).  
Ouvrez le dossier "AppReact".

Ensuite, ouvrez un nouveau terminal et exécutez la commande suivante :

```bash
npm install
```
Cette commande installera toutes les dépendances dont le projet a besoin pour fonctionner correctement. Faites la même chose avec le dossier de l'API.

### 2. Base de Données

Pour pouvoir accéder à un compte personnel et donc à la gestion des noms de domaine, il vous faudra mettre en place la base de données. Voici les étapes à suivre :

1. **Installez un logiciel de gestion de bases de données**  
   Pour ma part, j'utilise [DBeaver](https://dbeaver.io/download/), mais vous pouvez utiliser un autre logiciel de votre choix.

2. **Créez une nouvelle connexion en PostgreSQL**  
   Une fois DBeaver ouvert, créez une nouvelle connexion avec PostgreSQL. Vous pouvez modifier les informations de connexion si nécessaire, mais gardez à l'esprit que ces informations devront également être modifiées dans l'API.
   <br>Le mot de passe par défaut dans l'API est `root`.

4. **Accédez à l'architecture de la base de données**  
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

4. **Restaurez la base de données**  
Faites un clic droit sur le dossier `public`, puis `Outils` et sélectionnez `Restore`.
<br>Cherchez ensuite l'emplacement du fichier de sauvegarde fourni avec le projet, nommé `bdd-sauvegarde.sql`, et démarrez la restauration.

### Configuration de l'API

Si vous avez modifié les informations de connexion de postgres, vous devrez également les mettre à jour dans l'API. Pour ce faire, ouvrez votre éditeur de code et modifiez les fichiers suivants :
- `.env`
- `index.js`

## Lancement du projet

Pour lancer le projet, ouvrez le fichier exécutable `Lancer Node et React.bat`, qui permet d'exécuter l'ensemble du projet.  
Si l'exécutable ne fonctionne pas, vous devrez lancer les deux programmes manuellement. Pour cela, ouvrez un terminal et entrez les commandes suivantes :

### Lancer l'API

```bash
# Emplacement de votre projet
cd C:\...\Domain_Gestion_App\API\api
```

```bash
node app.js
```

Cela lancera l'API, qui restera en attente sur le port 3000.

### Lancer l'App React

```bash
# Emplacement de votre projet
cd C:\...\Domain_Gestion_App\AppReact\DomainEase
```

```bash
npm run dev
```

L'application sera alors accessible dans votre navigateur via le lien fourni : http://localhost:5173/

## Utilisation de l'application

L'application étant maintenant lancée, vous pouvez rechercher des noms de domaine. Pour pouvoir les réserver, vous devrez vous connecter.

Pour cela, cliquez sur **My Account**, qui vous redirigera vers la page de connexion.  
Connectez-vous avec un compte existant, par exemple :

- **Identifiant** : `admin`
- **Mot de passe** : `admin`

Ou créez un nouveau compte via le bouton **Sign Up**.


