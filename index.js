const thingsToDo = {
  taskList: [],

  newTask: (title, description) => {
    thingsToDo.taskList.push({
      title: title,
      description: description,
      complete: false,
    })
  },

  logState: (title) => {
    for (let task of thingsToDo.taskList) {
      if (title === task.title) {
        console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
      }
    }
  },

  markCompleted: (title) => {
    for (let task of thingsToDo.taskList) {
      if (title === task.title) {
        task.complete = true;
      }
    }
  },

  allTasks: () => {
    return thingsToDo.taskList;
  }
};


// DRIVER CODE CHANGES BELOW

thingsToDo.newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
thingsToDo.newTask("Do Laundry", "😨");


thingsToDo.logState('Clean Cat Litter');
thingsToDo.markCompleted('Clean Cat Litter');
thingsToDo.logState('Clean Cat Litter');

console.log(thingsToDo.allTasks());
