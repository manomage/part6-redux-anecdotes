# part6-redux-anecdotes
 A new version of the anecdote voting application from part 1 using Redux. 
 
 This initial list of anecdotes is stored in the file db.json. This file is used by the tool JSON Server that acts as a backend server where the data are stored.
 
 # Start the application
 To start an application, do the following :


 # Install dependencies
$ npm install

# Start the backend JSON server
$ npx json-server --port 3001 --watch db.json

# Start the application
$ npm start

You can then access the app on : http://localhost:3000/

You can also see the content of the JSON Server by heading to http://localhost:3001/anecdotes
