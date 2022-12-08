import { useState, useContext, useEffect } from "react";
import inventoryAPI from "../apis/inventoryAPI";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ShopNav from "../components/ShopNav";
import ProductGallery from "../components/ProductGallery";

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [inventory, setInventory] = useState(
    localStorage.getItem("inventory")
      ? JSON.parse(localStorage.getItem("inventory"))
      : []
  );

  const getInventory = async () => {
    if (inventory.length > 1) {
      setLoading(false);
      return;
    } else {
      setLoading(true);
      try {
        console.log("Fetching data...");
        const response = await inventoryAPI.get("/products");
        setInventory(response.data);
        localStorage.setItem("inventory", JSON.stringify(response.data));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getInventory();
  }, []);

  return (
    <>
      <NavBar />
      <Hero
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, eum!"
        bgImage="/images/benjamin-wong.webp"
      />
      <ShopNav />
      <ProductGallery loading={loading} inventory={inventory} />
    </>
  );
}
