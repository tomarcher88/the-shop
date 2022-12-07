import { Link } from "react-router-dom";

export default function ShopNav() {
  return (
    <header className="bg-red-900 font-eb-garamond">
      <h1 className="text-center text-4xl py-2">Shop Nav</h1>
      <ul className="flex gap-3 text-2xl justify-center py-2">
        <li>
          <Link to="/shop/mens">Men's</Link>
        </li>
        |
        <li>
          <Link to="/shop/womens">Women's</Link>
        </li>
        |
        <li>
          <Link to="/shop/misc">Misc.</Link>
        </li>
      </ul>
    </header>
  );
}
