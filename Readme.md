Python or NodeJS Backend Challenge

Task:
_________________
•	Build a RESTful api that services requests for sprocket factory data and sprockets.

•	The app should be built using either Python or NodeJS.

•	For data retention, a database or cache can be used.

•	Ideally, use docker/docker-compose for standing up the datastore.

•	The code should be on a github repository that should be shared with your engineering contact.

Requirements:
_________________
•	RESTful Endpoints

o   (extra) An endpoint that create new factory data (completed)

o	An endpoint that returns all sprocket factory data (completed)

o	An endpoint that returns factory data for a given factory id (completed)

o	An endpoint that returns sprockets for a given id (completed)

o	An endpoint that will create new sprocket (completed)

o	An endpoint that will update sprocket for a given id (completed)

o   (extra) An endpoint that returns all sprockets (completed)

o   (extra) An endpoint that delete sprockets with a given id (completed)
   -  Seed data/examples of the factory and sprocket are in the attached JSON files
   -  Include a README with instructions on how to stand up the database and application


Run Instruction:
_________________
1- Input local variable in .env file as follows. The .env file is in server folder
    MONGODB_URL = mongodb+srv://username:mongodbpassword@cluster0.6qsq2.mongodb.net/?retryWrites=true&w=majority
    DB_NAME= factory
    PORT=8000

2- Move to the server directory : cd server 

3- Run server : nmp start 

The code is to fulfill the requirements of the assignment described above. 
The backend was designed using Node.js(v14.17.1), Express(4.18.1). Based on the functional requirements, mongoDB and mongoose were used to setup the database for this project. The designed api was tested with postman. 


Potential improvements:
_______________________

1- Depending on the real-world application the data model could be much more complicated. Therefore, defining an  apollo server could be beneficial. In addition, API query languages such as graphQL could be used to manage the api depending on the data models. RESTful api seemed to be fine for the scope of this project.

2- The api calls for this project was minimal, however serverless functions could be considered for enterprise level api design.

3- It is preferred to use TypeScript for back-end development to avoid runtime issues and type checking for an enterprise level application.

4- Perform unit test case for api calls



