import ProductItem from "./ProductItem";
import Spinner from "./Spinner";

export default function ProductGallery({ loading, inventory }) {
  const productItems = inventory.map((item) => {
    const { id, title, price, description, category, image, rating } = item;
    return (
      <ProductItem
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        rating={rating}
      />
    );
  });

  return (
    <article className="font-eb-garamond">
      {loading ? (
        <Spinner />
      ) : (
        <div className="mx-auto my-10 flex flex-col items-center md:grid md:grid-cols-2 md:w-4/5 gap-10">
          {productItems}
        </div>
      )}
    </article>
  );
}
