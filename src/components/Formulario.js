import React, {useState, Fragment} from 'react';
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";



const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    // Estos son los States que van a aparecer en la columna 2 del componente

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0); // Ambos están vacíos porque es su estado inicial

    const [error, guardarError] = useState(false)

    
   
    // Para cuando el usuario agregue el gasto
    const agregarGasto = e => {
        
        e.preventDefault()

        // Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true)
            return;
        }
        
        guardarError(false) // Para en caso que pase la validación, no se active nada


        // Construir el gasto

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }


        // Pasar el gasto al componente Inicial

       
        guardarGasto(gasto)
        guardarCrearGasto(true)

        // Resetear el Form
        
        guardarNombre('');
        guardarCantidad('')
        
    }

    


    return (  

        
        <Fragment>
            
            <form
                onSubmit={agregarGasto}>
                {error ? <Error mensaje="Todos los campos son obligatorios o el Presupuesto es Inválido" /> : null}
    
                <p className="gastos_presupuesto">Nombre del Gasto</p>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej.Transporte / Gasolina"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
                <p className="gastos_presupuesto">Cantidad del Gasto</p>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. €100"
                    value={cantidad}
                    
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}

                />


                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Agregar Gasto"
                    
                />

            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired ,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario ;