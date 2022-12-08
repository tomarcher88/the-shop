import { Link, useParams } from "react-router-dom";

export default function ProductItem(props) {
  const { id, title, price, description, category, image, rating } = props;
  const { itemId } = useParams();
  return (
    <section className="font-eb-garamond p-4 outline outline-1 outline-slate-900 w-full max-w-lg justify-self-center">
      <Link to={`/shop/${id}`} state={{ data: props }}>
        <img className="h-64 aspect-video object-contain" src={image} alt="" />
      </Link>
      <div className="p-2">
        <h3 className="text-xl font-semibold underline italic">
          <Link to={`/shop/${id}`} state={{ data: props }}>
            {title}
          </Link>
        </h3>
        <p className="text-lg">£{price.toFixed(2)}</p>
      </div>
    </section>
  );
}
