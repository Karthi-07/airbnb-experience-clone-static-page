import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import "./style/card-style.css"
import a from "./items/card-1.webp"
import b from "./items/card-2.webp"
import c from "./items/card-3.webp"
import d from "./items/card-4.jpeg"
import e from "./items/card-5.webp"
import f from "./items/card-6.webp"
import g from "./items/card-7.webp"
import h from "./items/card-8.webp"
import i from "./items/card-10.webp"
import j from "./items/card-11.webp"
import k from "./items/card-12.webp"
import l from "./items/card-13.webp"
import Card from './components/Card'

function App() {
  const temp = [
{"img":a,"rating":"5.0 (3) . 3.5 hours",  "place":"Expolre hidden gems and cafes in kovalam","price":"From ₹2,900 / person"},
{"img":b,"rating":"4.78 (9) . 3.5 hours", "place":"Walk through breathtaking Trivandrum", "price":"From ₹1,699 / person"},
{"img":c,"rating":"4.98 (23) . 3.5 hours","place":"Experience with Local man and take memories", "price":"From ₹900 / person"},
{"img":d,"rating":"New . 3.5 hours", "place" :"Kerala Mountain Biking off Road Cycle Adventure", "price":"From ₹1,900 / person"},
{"img":e,"rating":"5.0 (14) . 3 hours", "place" :"Sunrise on fishing village", "price":"From ₹800 / person"},
{"img":f,"rating":"5.0 (29) . 8 hours", "place" :"Sight seeing safari" , "price":"From ₹2689 /person"},
{"img":g,"rating":"New . 3 hours" , "place" :"Go deep with Local Method of Fishing and Boating" , "price":"From ₹2,500 / person"},
{"img":h,"rating":"New . 6 hours" , "place" : "Hike,Swim & Experience village life" , "price":"From ₹1,290 / person"},
{"img":i,"rating":"New . 4 hours" , "place" :"Varkala photo shot with a Photographer" , "price":"From ₹7,400 / person"},
{"img":j,"rating":"4.67 (3) . 2.5 hours" , "place" :"Munore Island Canal Crise Village visit" , "price":"From ₹1,600 / person"},
{"img":k,"rating":"New . 4.5 hours" , "place" :"Together in the world of coffee Beans,spices & fruits", "price":"From ₹1,500 / person"},
{"img":l,"rating":"5.0 (7) . 2 hours", "place" :"Taste of Kerala From our organic farm", "price":"From ₹500 / person"}]

// for(let i of temp){
//   console.log(i.img+" "+i.rating+" "+i.place+" "+i.price);
// }
  
return (
    <div>
        <Header/>
        <br></br>
       <div className='main'>
       <div className='grid'>
          {temp.map((u)=>
              <Card img={u.img}
                  rating={u.rating}
                  price={u.price}
                  place={u.place}>
              </Card>)}
        </div>
          <br></br>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
