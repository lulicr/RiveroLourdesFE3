import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [grupo, setGrupo] =useState('')
  const [fandom, setFandom] = useState('')
  const [miembro, setMiembro] = useState('')

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  

  const handleSubmit = (event) => {
    event.preventDefault()
    if(nombre.length >= 3  && !nombre.startsWith(" ") 
      && apellido.length >= 6 && grupo.length > 0 
      && fandom.length > 0 && miembro.length > 0){
    setShow(true)
    setError(false)
    } else {setError(true)}
  }

  return (
    <>
      <div className="App">

        <h1 className='credencial'>¡Crea tu credencial!</h1>

        <form onSubmit={handleSubmit} >
          <label >Nombre</label>
          <input type="text" disabled={show} onChange={(event)  => setNombre(event.target.value)}/>
          <label >Apellido</label>
          <input type="text" disabled={show} onChange={(event)  => setApellido(event.target.value)}/>
          <label >Grupo Favorito</label>
          <input type="text" disabled={show} onChange={(event)  => setGrupo(event.target.value)}/>
          <label >Nombre del Fandom</label>
          <input type="text" disabled={show} onChange={(event)  => setFandom(event.target.value)}/>
          <label >Miembro favorito</label>
          <input type="text" disabled={show} onChange={(event)  => setMiembro(event.target.value)}/>
          <button type="submit">Enviar</button>
        </form>

        {show ?  
        <>
            <Card apellido={apellido} nombre={nombre} grupo={grupo} fandom={fandom} miembro={miembro} />
        </>
        :
        null
        }

        
          {error && 'Por favor chequea que la información sea correcta'}

      </div>
    </>
  )
}

export default App
