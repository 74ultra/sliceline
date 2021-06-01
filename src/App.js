import React, { useState } from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { Order } from './Order/Order';

function App() {

  const [openFood, setOpenFood] = useState();


  return (
    <>
      <GlobalStyle />
      <FoodDialog setOpenFood={setOpenFood} openFood={openFood} />
      <Navbar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>

  );
}

export default App;
