import React from 'react';
import NavBar from '.Navbar/componentes/NavBar/Navbar';
import ItemListContainer from '.ItemListContainer/componentes/ItemListContainer/ItemListContainer';
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
