# Broadcaster-React-redux

## Démarrer le projet

* 1. `yarn` Ajouter les dépendances du projet.
* 2. `yarn start:node` Lance le serveur du projet.
* 3. `yarn start:brunch` Compilation des fichiers du projet
* 4.  Le projet se lance sur l'url: http://localhost:3000/ 

## Scripts

* `yarn start:node` : pour lancer le projet (compilation, watch, etc.)
  
* `yarn start:brunch` : pour coder l'application et compiler auto

* `yarn build` : pour compiler le projet une seule fois
  
* `yarn save-deps` : pour corriger / modifier les les dépendances


```json
"scripts": {
  "start:node": "node server/index.js",
  "start:brunch": "brunch watch",
  "build": "brunch build --production",
  "save-deps": "rm -rf node_modules && npm update --save && npm update --save-dev"
}
```

### L'arborescence

* `app` : le dossier de travail de Brunch
* `app/assets` : le dossier avec les assets, c'est-à-dire les fichiers qui ne doivent pas être compilés
* `app/src` : le dossier de nos fichiers js
* `app/src/components` : nos composants de présentations (et les fichiers css/stylus liés à ces composants)
* `app/src/containers` : nos containers redux (avec connect de react-redux)
* `app/src/store` : notre store redux, avec reducers, actions creators, middleware, etc.
* `app/styles` : le dossier pour nos fichiers css globaux

### Les fichiers de config

* `.babelrc` : config de babel, pour dire ce qu'on va compiler (quel preset, quel plugin…)
* `.eslintrc` : pour se faire crier dessus par la config d'ESLint
* `.eslintignore` : pour pas se faire crier dessus dans certains dossiers
* `.gitignore` : on ignore les fichiers que je ne veux pas commiter
* `.stylintrc` : pour se faire crier dessus aussi en Stylus
* `brunch-config.js` : config de brunch, qui nous permet d'indiquer à quel endroit on veut compiler + la config de modules…



