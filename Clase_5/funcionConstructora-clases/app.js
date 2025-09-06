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

//-------------------------------------------------------------
//                    FUNCION CONSTRUCTORA                      |
//---------------------------------------------------------------

/* 
function Task(descripcion, estado) {
  // 1. JavaScript crea automáticamente un objeto vacío: {}
  // 2. 'this' apunta a ese objeto vacío
  
  this.descripcion = descripcion;  // 3. Agregamos propiedades al objeto
  this.estado = estado;
  
  // 4. JavaScript retorna automáticamente 'this' (el objeto creado)
}

const tarea = new Task("Estudiar", "pendiente");
// tarea = { descripcion: "Estudiar", estado: "pendiente" }

*/

//--------------------------------------------------------------
//                   SINTAXIS DE CLASE                          |
//---------------------------------------------------------------

//--------------------------------------------------------------
//                         CLASE TASKLIST                       |
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

  //Metodos con funciones de orden superior
  editTask(id, updateTask) {
    const taskToEdit = this.tasks.find((task) => task.id === id);
    if (taskToEdit !== undefined) {
      taskToEdit.descripcion = updateTask.descripcion;
      taskToEdit.vencimiento = updateTask.vencimiento;
      taskToEdit.estado = updateTask.estado;
    } else {
      alert("no se encontro el id");
    }
    this.saveTaskInStorage();
  }

  deleteTask(id) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.saveTaskInStorage();
      console.log(`Tarea con ID ${id} eliminada exitosamente`);
    } else {
      alert("No se encontró la tarea con el ID especificado");
    }
  }

  mostrarTareas() {
    if (this.tasks.length === 0) {
      console.log("No hay tareas en la lista");
      return;
    }

    console.log("LISTA DE TAREAS");
    console.log("-------------------------");
    this.tasks.forEach((task) => {
      console.log(`ID: ${task.id}`);
      console.log(`Descripción: ${task.descripcion}`);
      console.log(`Vencimiento: ${task.vencimiento}`);
      console.log(`Estado: ${task.estado}`);
      console.log("------------------------");
    });
  }
}

//--------------------------------------------------------------
//                   SINTAXIS DE CLASE                          |
//---------------------------------------------------------------

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

//--------------------------------------------------------------
//                       IMPLEMENTACION                         |
//---------------------------------------------------------------

//Crear lista de tareas
const myTaskList = new TaskList();
myTaskList.getTasksLocalStorage();

// Solo crear tareas si no hay ninguna guardada
if (myTaskList.tasks.length === 0) {
  const task1 = new Task("comprar pan", "2025-09-10", "en progreso");
  const task2 = new Task("pagar cuentas", "2025-09-25", "pendiente");

  //Agregar tareas
  myTaskList.addTask(task1);
  myTaskList.addTask(task2);

  //Editar una tarea
  myTaskList.editTask(1, {
    descripcion: "Hacer numeros",
    vencimiento: "2025-09-27",
    estado: "completado",
  });
}

console.log(myTaskList);

// MOSTRAR TAREAS CON EL USO DEL METODO
myTaskList.mostrarTareas();

// Demostrar el uso de los nuevos métodos
console.log("ESTADO INICIAL");
myTaskList.mostrarTareas();

// Ejemplo de eliminación de tarea
console.log("\nELIMINANDO TAREA CON ID 2");
myTaskList.deleteTask(2);

// Mostrar estado después de eliminar
console.log("\nESTADO DESPUÉS DE ELIMINAR");
myTaskList.mostrarTareas();

// Agregar una nueva tarea para demostrar funcionalidad
console.log("\nAGREGANDO NUEVA TAREA");
const nuevaTarea = new Task("limpiar casa", "2025-09-20", "pendiente");
myTaskList.addTask(nuevaTarea);
myTaskList.saveTaskInStorage();

// Mostrar estado final
console.log("\n=== ESTADO FINAL ===");
myTaskList.mostrarTareas();
