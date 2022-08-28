// El componente App es el padre de:
// - Cabecera
// - Listado
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
import { useState } from 'react';

// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  const [stockCarrito, setStockCarrito] = useState(0);

  function agregar(){
    setStockCarrito(stockCarrito + 1);
  }

  return (
    <div className="App">
      <Cabecera stockCarrito={stockCarrito}/>
      <Listado agregar={agregar}/>
    </div>
  );
}

export default App;
