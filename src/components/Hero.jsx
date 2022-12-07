import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <article className="h-[512px] flex">
      <div className="flex flex-col md:w-3/4 md:flex-row w-fit mx-auto justify-center md:items-center">
        <img
          src="/images/sarah-dorweiler.webp"
          className="max-h-80 m-2 object-cover shadow"
          alt=""
        />
        <div className="flex flex-col m-2 md:m-10">
          <p className="h-fit font-eb-garamond text-4xl mb-4 text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <Link
            className="mx-auto md:m-0 font-eb-garamond italic font-semibold w-56 text-center text-xl bg-zinc-900 text-zinc-100 py-3 px-6 shadow hover:shadow-none"
            to="/shop"
          >
            Shop
          </Link>
        </div>
      </div>
      <img
        alt=""
        src="/images/benjamin-wong.webp"
        className="absolute top-0 left-0 -z-10 h-[612px] w-full object-cover grayscale opacity-40"
      />
      {/* 
      Background Image
      Photo by{" "}
      <a href="https://unsplash.com/ja/@ben_wong_31?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Benjamin Wong
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/s/photos/clean-leaf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </a> */}
      {/* 
      Hero image
      Photo by{" "}
      <a href="https://unsplash.com/@sarahdorweiler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Sarah Dorweiler
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/s/photos/clean-leaf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </a> */}
    </article>
  );
}
