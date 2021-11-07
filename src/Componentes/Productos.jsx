import React, { useState } from 'react';
import AgregarProductos from './AgregarProductos';
import Coleccion from './Coleccion';
import '../css/style.css';

const Productos = () => {
    //const [productos, setProductos] = useState(['Gaseosa', 'Leche', 'Café']);
    const [productos, setProductos] = useState([]);

    // const handleAgregar = () =>{
    //     //setProductos([...productos, 'Galletitas']); // agrega al final del array
    //     setProductos(['Galletitas', ...productos]); // para que este primero en el array
                
    // }

    return (
        <div>
            <ol> 
                {/* {
                    productos.map((producto) => {
                        return <li key={producto}>{producto}</li>
                    })
                 } */}
                
                
                
            </ol>


            <AgregarProductos setProductos={setProductos} />
            <Coleccion productos={productos} />

        </div>
    )
}

export default Productos;