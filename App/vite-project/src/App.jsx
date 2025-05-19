import './App.css'
import Cards from './components/Cards'
import axios from 'axios';
import { useEffect, useState } from 'react'


function App() {
  //Estado = variable interna y funcion actualizadora = modifica el estado
  const [Productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products?limit=10').then((res)=>{
      setProductos(res.data) //promesa = obtiene los productos, finalizada la promesa = almacena productos en el estado setProductos
    })
  },[]);




  return (
    <>
      
      <h1>Proyecto Integrador - ISPC</h1>
      
      <Cards />
      
      <input type="text" placeholder='Buscar producto' 
      value={busqueda} 
      onChange={(e)=>{setBusqueda(e.target.value)}} />



      <ul> 
        <div class="grid grid-cols-4 gap-4"> 
        {Productos.map((p)=>(
          <li key={p.key} className="flex py-4">
            {p.title} 
             Precio: ${p.price}</li>)
        )}
      
        </div>
      </ul>
      
      
      
      
      
    </>
  )
}

export default App
