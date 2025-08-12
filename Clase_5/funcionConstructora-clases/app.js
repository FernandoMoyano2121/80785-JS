/*
ENTIDAD/OBJETO TAREA
const task = {
  id: 1,
  descripcion: "Compran pan",
  vencimiento: "2025-09-10",
  estado: "completada",
};

*/

//-------------------------------------------------------------
//                    FUNCION CONSTRUCTORA                      |
//---------------------------------------------------------------

/*

function task(id, descripcion, vencimiento, estado) {
  this.id = id;
  this.descripcion = descripcion;
  this.vencimiento = vencimiento;
  this.estado = estado;

  /*
   return {
      id:id
      descripcion:descripcion
  }
} 
*/

//--------------------------------------------------------------
//                   SINTAXIS DE CLASE                          |
//---------------------------------------------------------------

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  saveTaskInStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  getTasksLocalStorage() {
    const tasksInStorage = localStorage.getItem("tasks");

    if (tasksInStorage) {
      this.tasks = JSON.parse(tasksInStorage);
    }
  }

  /*
  deleteTask() {}
  EditTask() {}
  mostrarTareas() {}
  */
}

class Task {
  static lastId = 0;

  constructor(descripcion, vencimiento, estado) {
    Task.lastId += 1;
    this.id = Task.lastId;
    this.descripcion = descripcion;
    this.vencimiento = vencimiento;
    this.estado = estado;
  }
}

//Crear lista de tareas
const myTaskList = new TaskList();
myTaskList.getTasksLocalStorage();

// Solo crear tareas si no hay ninguna guardada
if (myTaskList.tasks.length === 0) {
  const task1 = new Task("comprar pan", "2025-09-10", "en progreso");
  const task2 = new Task("pagar cuentas", "2025-09-25", "pendiente");

  myTaskList.addTask(task1);
  myTaskList.addTask(task2);

  myTaskList.saveTaskInStorage();
}

console.log(myTaskList);
