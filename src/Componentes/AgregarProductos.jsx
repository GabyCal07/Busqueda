import React, { useState } from "react";
//import Productos from "./Productos";
//import Coleccion from "./Coleccion";

const AgregarProductos = ({setProductos}) => {

    const [input, setInput] = useState('Introduzca un nuevo Producto');

    const handleChange = (e) => {
        setInput(e.target.value);        
    }
    const handleSubmit= (e) => {
        e.preventDefault();
        if (input.trim().length >= 2) {
            //setProductos([input, ...Productos]);
            //setProductos(cat => [input,...cat]);
            setProductos(input);
            setInput('');
        }
        console.log('Producto Guardado');
    }

    // const handleAgregar = () =>{
    //     //setProductos([...productos, 'Galletitas']); // agrega al final del array
    //     setProductos([input, ...Productos]); // para que este primero en el array
                
    // }

    return (
        <div>
            <h1>Agregar Productos</h1>
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text" 
                    value={input} 
                    onChange = {handleChange}
                    
                />

            </form>
            
            <button onClick={ handleSubmit } type="button" className="btn btn-danger">Agregar Producto</button> 

        </div>
    )
}

export default AgregarProductos;