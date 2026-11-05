# Gestion des projets urbains — CUY

**Projet de stage · Interface de présentation React/Vite**

## Présentation

Ce dépôt est associé à un projet réalisé dans le cadre d'un stage à la Communauté Urbaine de Yaoundé (CUY), sous l'encadrement de la cellule informatique.

La version publique actuellement disponible contient principalement une interface frontend React/Vite de présentation du projet. Elle ne doit pas être confondue avec une application de gestion complète et opérationnelle.

## Éléments vérifiables dans le dépôt

- Application frontend React avec Vite.
- Page d'accueil de présentation dans `src/pages/home.jsx`.
- Composants de navigation et de pied de page.
- Feuilles de style pour l'interface.

## État technique du dépôt

Le dossier `Backend/` contient des dépendances et une configuration de base de données, mais le code actuellement versionné ne permet pas de vérifier une API Express complète :

- `Backend/app.js` est vide dans la branche publique examinée.
- Les fichiers de routes d'authentification et d'utilisateurs sont vides.
- `Backend/config/db.js` utilise Mongoose/MongoDB, tandis que certaines dépendances et anciennes descriptions mentionnent MySQL.
- La présence de dépendances JWT ou Multer ne prouve pas que les fonctionnalités correspondantes sont implémentées.

En conséquence, ce README ne présente pas Express, JWT, Multer ou MySQL comme une pile backend opérationnelle.

## Contribution

Le projet a été réalisé individuellement dans le cadre du stage, sous encadrement informatique. Cette documentation décrit uniquement ce qui peut être confirmé dans le dépôt public actuel.

## Limites et suite recommandée

Le dépôt doit être considéré comme une version partielle. Avant de présenter l'application comme complète, il faudrait notamment :

1. rétablir et documenter le backend réellement utilisé ;
2. harmoniser le choix de base de données et la configuration ;
3. implémenter les routes et contrôleurs manquants ;
4. retirer de Git les dépendances déjà suivies dans `Backend/node_modules` (le fichier `.gitignore` ne retire pas les fichiers déjà suivis) ;
5. ajouter des tests et une procédure d'installation reproductible.

---

**English summary**

This internship repository currently exposes a React/Vite presentation frontend. The public backend folder is incomplete: the entry point and some route files are empty, and the database configuration does not match the earlier MySQL description. This README intentionally documents only what can be verified from the current public source tree.
