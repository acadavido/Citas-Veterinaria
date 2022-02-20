
import Paciente from "./Paciente"



const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {



  return (
    <div className="md:w-1/2 mt-2 md:h-screen overflow-y-scroll">
      
      {pacientes && pacientes.length ? (
  
        <>
          <h2 className='font-black text-3xl'>Listado Pacientes</h2>
          <p className=" mt-5 mb-10 text-center text-xl">
            Administra tus {" "}
            <span className="text-indigo-600 mb-10">Pacientes y Citas</span>
          </p>
          
          {pacientes.map( (paciente) => (
            
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
            
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl'>No hay pacientes</h2>
          <p className=" mt-5 mb-10 text-center text-xl">
            Comienza agregando pacientes {" "}
            <span className="text-indigo-600 mb-10">y aparecerán en este lugar</span>
          </p>      
        </>
      )}
        
      
      
      
    </div>
  )
}

export default ListadoPacientes
