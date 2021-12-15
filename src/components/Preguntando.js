import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";
import Error from "./Error";


function Pregunta ({guardarPresupuesto, guardarRestante, actualizarPregunta}) {

    // Definir el State del Presupuesto
    const [cantidad, guardarCantidad] = useState(0);

    // Definir el State de los errores en cuanto a cantidad

    const [error, guardarError] = useState(false)



    // Funcion que lee el presupuesto

    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value, 10))

    }
    
    // Submit para definir el presupuesto

    const agregarPresupuesto = (e) => {

        e.preventDefault()

        // Validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true)
            return;
        }

        // Si se pasa la validación y no hay error
        guardarError(false)
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false)

    }

    return (
        <Fragment>
            <h2> Coloca tu presupuesto </h2>

            {error ? <Error mensaje="Ingresa un Presupuesto Válido" /> : null}

            <form
                onSubmit={agregarPresupuesto}
                >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="¿Cuánto tienes?"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir Presupuesto"
                />

            </form>

        </Fragment>
    )
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired ,
    guardarRestante: PropTypes.func.isRequired ,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;