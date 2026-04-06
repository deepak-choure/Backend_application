# BACKEND Application

This project is to understand how the backend applications are written and developed.

## Procedures

- create public/temp for static file like images. this folder is used in production to access the files and serve them.
- since this folder have nothing it does not get pushed to github so we make .gitkeep file so this folder `public/temp` is available at github and production.
- add .gitignore and .env files to root of project folder.
- crate file and folder like `src` and files like `index.js , constants.js, app.js`
- inside `src` folder create `db models middleware routes controllers utils` folders
- add prittier package and file (.prettierrc and .prettierignore) associated to it. It helps manage consistency among team working on same project and do formatting in CI/CD pipline
