import { useState, useContext } from 'react';
import { getInventory } from '../utils/functions';

export default function Shop() {

  const [inventory, setInventory] = useState([]);

  getInventory()

  

  return (
    <main>
      <h1>Shop</h1>
    </main>
  );
}
