
# Basic Nodejs crud operation



# Create Task with following fields using postman

route : localhost:80/add-task  - with the following payload:

{
	"taskName":"My Second Task",
  "assignedProjectName": "Any Project" // default is none,
  "taskTime":""  // date String
	"priority":"High",
	"taskCompleted":false
}


# GET all tasks 

route: localhost:80/get-tasks


# Update Task with following payload using postman

route : localhost:80/update-task 

{
	"id":"5e418b9aa8886611ac134219",
	"priority":"Medium",
	"taskCompleted":true,
	"assignedProjectName":"Any Project",
  "taskTime":" "  // date string
}

# Delete task with following payload 

route : localhost:80/delete-task

{
  "id": " "  // mongo Id of the document
}

to run the application please write npm run start in console
