const harmonyModel = require('./harmony.model');


async function getAllTasks( request, response ) {
    const allTasks =await harmonyModel.find();
    response.send(allTasks);
}

async function createTask( request, response ) {
    const createNewTask = new harmonyModel(request.body);
    const result = await createNewTask.save();
    response.send(result);
}

async function deleteTask( request, response ) {
    const deleted =await harmonyModel.deleteOne({ _id:request.body.id });
    console.log(deleted)
    response.send('deleted');
}

async function updateTask(request, response ) {
    const updatedDocument =await harmonyModel.findByIdAndUpdate({ _id: request.body.id }, { 
        priority: request.body.priority,
        assignedProjectName: request.body.assignedProjectName,
        taskCompleted: request.body.taskCompleted,
        taskTime: request.body.taskTime,
    });
    response.send(updatedDocument);
}

module.exports.createTask = createTask;
module.exports.deleteTask = deleteTask;
module.exports.updateTask = updateTask;
module.exports.getAllTasks = getAllTasks;