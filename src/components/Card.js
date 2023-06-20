import React from 'react'
import '../style/card-style.css'
import star from "../items/star.jpg"
export default function Card(props)
{
  // console.log(props.img+" "+props.rating+" "+props.place+" "+props.price);
   return(
   <>
      <div className='card'>
         <img src={props.img} className='card-image'></img>
         <div className='elements'>
         <div className='div-1'>
             <img src={star} className='star'></img>
             <p>{props.rating}</p>
         </div> 
          <div className='place'>
             {props.place}
         </div> 
         <div> 
            {props.price}
         </div> 
         </div>
      </div>
   </>
   )
}