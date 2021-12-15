import React, {Fragment} from 'react';
import Gasto from './Gasto'
import PropTypes from "prop-types";

const Listado = ({gastos, eliminarPresupuesto}) => {


    return ( 
        <Fragment>
            <div className="gastos-realizados">
                <h2 className="gastos_subtitulo">
                    Listado
                </h2>

                {gastos.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        eliminarPresupuesto={eliminarPresupuesto}
                    />
                    
                ))}
               
                
            
            </div>

        </Fragment>
    );
}
 
Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
export default Listado;