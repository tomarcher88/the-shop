import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="font-eb-garamond my-5 md:my-10 grid grid-cols-2 grid-rows-2 md:flex md:justify-around md:flex-row text-center md:text-left gap-6 md:gap-0">
      <section className="text-lg order-2 md:order-1 lowercase">
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </section>
      <section className="text-center col-span-2 order-1 md:order-2">
        <h2 className="text-3xl mb-5">the store</h2>
        <ul>
          <li>
            <a href="tel:+44 00000 000 000">+44 (1) 234 567 890</a>
          </li>
          <li>
            <address>
              123 North Somewhere St.
              <br />
              City of Choice
              <br />
              CC12 3CHE
            </address>
          </li>
        </ul>
      </section>
      <section className="text-lg lowercase order-3">
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">TikTok</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}