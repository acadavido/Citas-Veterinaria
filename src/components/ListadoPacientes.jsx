import Pacientes from "./Pacientes"



const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:3/5 mt-2 md:h-screen overflow-y-scroll">
      <h2 className='font-black text-3xl'>Listado Pacientes</h2>
      <p className=" mt-5 mb-10 text-center text-xl">
        Administra tus {" "}
        <span className="text-indigo-600 mb-10">Pacientes y Citas</span>
      </p>
      <div>
        <Pacientes />
        <Pacientes />
        <Pacientes />
        <Pacientes />
      </div>
      
      
    </div>
  )
}

export default ListadoPacientes
