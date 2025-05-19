import './App.css'
import Cards from './components/Cards'
import axios from 'axios';
import { useEffect, useState } from 'react'


function App() {
  //Estado = variable interna y funcion actualizadora = modifica el estado
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(()=>{
    axios.get('https://dummyjson.com/products?limit=100').then((res)=>{
      setProductos(res.data.products) //promesa = obtiene los productos, finalizada la promesa = almacena productos en el estado setProductos
    })
  },[]);

  // filtrado

  const filtradoProductos = productos.filter((p)=> p.title.toLowerCase().includes(busqueda.toLowerCase()));
  
  // Estadisticas 

  const totalProductos = filtradoProductos.length;
  const maxProductos = Math.max(...filtradoProductos.map((p)=>p.price));
  const minProductos = Math.min(...filtradoProductos.map((p)=>p.price));


  return (
    <>
      <div className="m-8">
      <h1>Proyecto Integrador - ISPC</h1>
      
      <Cards />
      <div className="m-4">
        <input type="text" placeholder='Buscar producto' 
        value={busqueda} 
        onChange={(e)=>{setBusqueda(e.target.value)}} />
      </div>  



      <ul> 
        <div class="grid lg:grid-cols-5 md:grid-cols-2 gap-4">   
            
        {filtradoProductos.map((p)=>(
          <li key={p.key} className="bg-sky-200 border p-1 rounded-lg shadow-md">
            <h2 className="text-gray-900 title-font text-lg font-medium">{p.title}</h2> 
             <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Precio: ${p.price}</h3></li>)
        )}
              
            
          </div>
        
      </ul>

      <div>
        <h1> Estadísticas </h1>
        <p>Total de Productos: {totalProductos} </p>
        
        <p>Precio Maximo: {maxProductos} </p>
                
        <p>Precio Minimo: {minProductos} </p>
      </div>
      
      
      
      
        </div>
    </>
  )
}

export default App
