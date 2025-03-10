import React, { useEffect, useState } from 'react'

//import './App.css'

const App = () => {

  const [items, setItmes] = useState([])

  //fetch the data
  useEffect(() =>{
    
    //create a function
    const fetchData = async () =>{
      const res = await fetch('http://localhost:3000')  
      //converting to json
      const data = await res.json()
      setItmes(data.items)
    }

    //calling fetchData function

    fetchData();

    
  }, [])
  return (
    <>
    {items.map(i => (
      <p>{i.name}, {i.description}</p>
    ))}
    </>
  )
}

export default App
