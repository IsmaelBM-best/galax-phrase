import React from 'react'
import '../Card/Card.css'
import Button from '../Button/Button'

const Card = ({phrase,changePhrase}) => {
         

    return (
    <section className='contenedor__texto'>
          <img src={phrase.image} alt="" />
          <h1>Frase galactica.🪐</h1>
         <div className='contenedor__info animate'>
            <p className='contenedor__texto-description'>
                {phrase.phrase}
            </p>
            <p className='contenedor__texto-autor'>
               Author: {phrase.author}
            </p>
         </div>
         <Button change={changePhrase}/>
    </section>
    
   )
    }

export default Card;
