# Mode d'emploie 

## Pour travailler sur le site

- Ouvrir VSCodium
- Si l'environnement de travail n'est pas présent *ouvrir le dossier* dans le menu Fichier : lagaulesouveraine
```
Documents/github/lagaulesouveraine
```
- Pour récupérer les données les plus récentes qui peuvent être sur github (et ne pas avoir de conflit avec la version locale) en cliquant sur la petite roue en bas à gauche
- Pour pouvoir voir ce que l'on fait en local avant de le publier sur Github :
    - *Nouveau terminal* dans le menu - Terminal
    - Taper la commande :
    ```
     $ bundle exec jekyll serve --livereload
    ```
    (ou utiliser la flèche montée pour retrouver la commande)
    - ça lance le serveur jekyll qui devient accessible en tapant l'url suivant dans un navigateur :
    ```
    http://127.0.0.1:4000
    ````

