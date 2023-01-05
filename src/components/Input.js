import React,{useState} from 'react'

export const Input = () => {
    
    const [contrasena,setContrasena]=useState('');

    const [boton,setBoton]=useState(false);

    const validarContrasena =(e)=>{
        e.preventDefault()
        
        console.log({contrasena})        

        if(contrasena ==='252525'){
            console.log('contraseña valida') 
            console.log({contrasena})       
            setBoton(true);
        }
    }

  return (
    <div className='container'>
    <form>
    <div className='row text-center'>
    <h1 className='text-white mt-5'>FORMULARIO DE ACCESO</h1>
    </div>
    <div className='row form mt-3 formulario'>
    <div className='form-group'>
        <label className='text-white'>Nombre</label>
        <input type="text" className="form-control mt-3"></input>
    </div>
    <div className='form-group'>
        <label className='text-white mt-3'>Contraseña</label>
        <input type="text" className='form-control' onChange={(e)=>setContrasena(e.target.value)}></input>
    </div>
    <div className="boton">
        <button type="submit" className= {contrasena !== ('252525')?'null':'show'}>Enviar</button>
    </div>
    </div>
    </form>
    </div>
  )
}