import PropTypes from "prop-types";

const Gasto = ({gasto, eliminarPresupuesto}) => ( 
    <li className="gastos">
        <p>
            {gasto.nombre}

            <span className="gasto"> € {gasto.cantidad}</span>
        </p>
        <div className="boton-eliminar">
            <button
                className="button eliminar u-full-width"
                onClick={ () => eliminarPresupuesto(gasto.id) }
                >Eliminar Presupuesto &times;
            </button> 
        </div>
        

    </li>
);

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
 
export default Gasto;