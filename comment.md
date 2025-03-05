-create the repository
-Initialize the repository
-node_modules , package.json , package.lock-json
-create a server
-listen to port 7777
-write request handler for /test, /hello
-Install nodemon and update script inside package.json


- initialize a git 
- .gitignore
- Create a new repo on github
- push all code to remote origin
- Order of the routes matter a lot

- install postman app and make a workspace collection > test API call

- Readinng the dynamic route
- Multiple route handling
- next()
- next function and errors alng with res.send()
- app.use("/route",rh,[rh2,rh3],rh4,rh5)
- error Handling using app.use("/",(err,req,res,next)=>{})


- create a free cluster on monogodb website (Mongo Atlas)
- install mongodb library 
- Connect your application to the database "Connection-URL"/devTinder
- call the connectDB function and connect to the database before stating application in 7777

- create a userSchema and user model
- Create post /signup to add data to the database
- push some document using Api calls from postman
- 
- JS Object vs JSON
- Add the express.json() middleware to your project
- Make your signup API dynamic to recieve data from the end user

- API - GET  user by email
- API - feed API - GET/feed - get all the users from the database
- User.findOne with duplicate emailId , which object returend

- Explore schematype options from the    documantations 
- add required , unique lowercase , min minlength , trim
- Add default
- Create a custom validate function for gender
- Improve the database scheme - Put all appropiate validation on each field in scheme 
- Add timestamps to the userscheme
- add API level validation on Patch request & signUp post api
- DATA Sanitizing - add API level validation for each field

