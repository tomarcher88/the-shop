import { useState, useContext } from 'react';
import { getInventory } from '../utils/functions';
import NavBar from '../components/NavBar'
import Hero from '../components/Hero';
import ShopNav from '../components/ShopNav';

export default function Shop() {

  const [inventory, setInventory] = useState([]);

  getInventory()

  return (
    <>
      <NavBar />
      <Hero
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, eum!"
        bgImage="/images/benjamin-wong.webp"
      />
      <ShopNav />
    </>
  );
}
