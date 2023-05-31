import React from 'react'
import './Card.css' 


const Card = ({apellido, nombre, grupo, fandom, miembro}) => {
  return (
    <div className='cardStyle'>
      <h1> {grupo} Credencial</h1>
      <h2>Nombre:</h2>
      <h3>{nombre} {apellido}</h3>
      <h2>Grupo Favorito:</h2>
      <h3>{grupo}</h3>
      <h2>Fandom:</h2>
      <h3>{fandom}</h3>
      <h2>Miembro favorito:</h2>
      <h3>{miembro}</h3>
      </div>
    
  )
}

export default Card