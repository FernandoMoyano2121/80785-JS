//import Swal from 'sweetalert2'



function manejarEliminacion(nombre){
  return Swal.fire({
    title: 'Estas seguro de eliminar?!',
    text: 'No podras volver atrás',
    icon: 'warning',
    showCancelButton:true,
    confirmButtonText: 'Sí, borrar',
    cancelButtonText: "Cancelar"
  }).then((result)=>{
    if(result.isConfirmed){
      console.log("Producto eliminado")
    }else if (result.isDenied){
      console.log("No se ha eliminado nada, continua en la app")
    }
  })
}

manejarEliminacion()