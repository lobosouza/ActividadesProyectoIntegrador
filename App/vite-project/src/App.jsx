import './App.css'
import Cards from './components/Cards'
import axios from 'axios';
import { useEffect, useState } from 'react'


function App() {
  //Estado y funcion actualizadora
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products?limit=10').then((res)=>{
      setProductos(res.data) //almacena productos en el estado setProductos
    })
  },[]);
  
  return (
    <>
      <div>
      <h1>Proyecto Integrador - ISPC</h1>
      <Cards />
      
      <ul>
        {productos.map((p)=>(
          <li key={p.key}>{p.title} Precio: ${p.price}</li>)
        )}
      
      </ul>
      </div>
      
      
      
    </>
  )
}

export default App
