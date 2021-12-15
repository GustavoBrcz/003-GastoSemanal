import React, {Fragment, useState, useEffect} from "react";
import Preguntando from "./components/Preguntando";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";





function App() {
  


  // Definir el state del presupuesto - Uno para el presupuesto y otro para el restante
  const [presupuesto, guardarPresupuesto] = useState(0);

  let [restante, guardarRestante] = useState(0);

  // Definir el State que mostrará un componente y ocultará el otro
  const [mostrarpregunta, actualizarPregunta] = useState(true);

  // Definir el State de los gastos y mostrarlos en pantalla
  const [gastos, guardarGastos] = useState([])

  // UseEffect es el Hook que se encargará de actualizar el restante del presupuesto
  const [gasto, guardarGasto] = useState({})

  // Crear un State que va a apagar el restante, mientras no se haya colocado un monto
  const [creargasto, guardarCrearGasto] = useState(false);

  // Creando un state para ocultar el Eliminar Presupuesto

  // const [eliminarPresupuesto, guardarEliminarPresupuesto] = useState(favlse)

  useEffect(() =>{
    if(creargasto=== true) {

      // Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ])


      
      // Resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante);
      
    
      // Resetear el formulario
      guardarCrearGasto(false)
    }
    
  }, [gasto, creargasto, gastos, restante])

  const eliminarPresupuesto = (id) => {
    const nuevoPresupuesto = gastos.filter(gasto => gasto.id !==id)
    guardarGastos(nuevoPresupuesto);

    const presupuestoAumento = restante + gasto.cantidad
    guardarRestante(presupuestoAumento)
    
    
  }


 
  return (

    <Fragment>
      <div className="container">

        <header>

          <h1>Gasto Semanal</h1>

        </header>

        <div className="contenido-principal contenido">
          {mostrarpregunta === true 
            ?
              <Preguntando
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              
              />
            :
            
              <div className="row">
                <div className="one-half column">
                  <h2 className="gastos_subtitulo">Agrega tus gastos aquí</h2>
                  <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>

                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                    eliminarPresupuesto={eliminarPresupuesto}
                    
                  />
                  
                           
                  <ControlPresupuesto
              
                    presupuesto={presupuesto}
                    restante={restante}
                    
                    
                  />
                </div>
              </div>
          
          }
         

          


        </div>

      </div>
  

    </Fragment>
   

  )

}

export default App;
