import { useParams, useLocation, Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function ItemPage(props) {
  const { itemId } = useParams();
  const location = useLocation();
  const { id, title, price, description, category, image, rating } =
    location.state.data;

  return (
    <main>
      <NavBar />
      <article className="mx-auto px-3 md:px-10 font-eb-garamond py-10">
        <h1 className="text-lg">
          <Link to="/shop" className="underline">
            Shop
          </Link>{" "}
          {">"}{" "}
          <Link className="underline" to={`/shop/${id}`}>
            {title}
          </Link>
        </h1>
        <div className="py-10 flex flex-col md:flex-row">
          <section className="order-2 md:order-1 flex flex-col text-center justify-center bg-stone-100 px-2 py-10 md:py-0">
            <h2 className="text-2xl md:text-3xl md:mt-0">{title}</h2>
            <p className="py-4 text-xl">£{price.toFixed(2)}</p>
            <p className="text-lg pb-4">{description}</p>
            <button className="mx-auto font-eb-garamond italic font-semibold w-40 text-center text-lg bg-zinc-900 text-zinc-100 py-2 px-4 shadow hover:shadow-none">
              Add to Basket
            </button>
          </section>
          <img
            className="order-1 md:order-2 w-[512px] aspect-square object-contain mb-8 md:mb-0 md:ml-5"
            src={image}
            alt={title}
          />
        </div>
      </article>
    </main>
  );
}
