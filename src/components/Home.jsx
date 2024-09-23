import React from 'react'

const Home = () => {


const obje = [
  {
    name: "John",
    age: 30,
    city: "New York",
  
},
{


  name: "Jane",
    age: 25,
    city: "Los Angeles",

},
{
  name: "Mike",
    age: 35,
    city: "Chicago",
 },

]


let x = obje.map((item, index)=>{
  return (
    <div key={index}>
      <h3>{item.name}</h3>
      <p>{item.age}</p>
      <p>{item.city}</p>
    </div>
  )

})
  return (
    <div>
      <h1>{x}</h1>

        
        
    </div>

  )
}

export default Home