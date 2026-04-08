# BACKEND Application

This project is to understand how the backend applications are written and developed.

## Procedures

- create public/temp for static file like images. this folder is used in production to access the files and serve them.
- since this folder have nothing it does not get pushed to github so we make .gitkeep file so this folder `public/temp` is available at github and production.
- add .gitignore and .env files to root of project folder.
- crate file and folder like `src` and files like `index.js , constants.js, app.js`
- inside `src` folder create `db models middleware routes controllers utils` folders
- add prittier package and file (.prettierrc and .prettierignore) associated to it. It helps manage consistency among team working on same project and do formatting in CI/CD pipline
- add database connection in db folder and export it to get executed from main(index.js)
- for database url use .env file and dotenv package
- now add express app in `app.js` file and add global middleware `cors,urlencoded,express.static,json,cookieparser` and export the express app.
- create an asyncHandler wrapper for all controllers to manage the error without getting crash. take controller as arg and return a async function which run the controller inside it.
- create a ApiError class extending Error class for error handling in utils and made a ApiResponse class for giving the response in particular format.
- create Schema and add method to schema for token and hashing password. use package like `bcrypt, jsonwebtoken` for token and hashing and `mongoose, mongoose-aggregate-paginate-v2` for aggregation pipline code.
- use cloudinary package to upload file from server to cloudinary. package like `multer` is used for getting file from client and add to server, then from server it is passed to cloud.
