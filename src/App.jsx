import React from 'react';
import NavBar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListcontainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';


const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Mis Productos" />
      <ItemCount stock={20}/>
    </>
  )
}

export default App
