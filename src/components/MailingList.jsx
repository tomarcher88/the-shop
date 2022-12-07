import { useState } from "react";

export default function MailingList() {
  const [value, setValue] = useState('');

// TODO
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the value
    console.log(value);
    // Rest form + give confirmation popup
    setValue('');
  }

  const handleValue = e => {
    setValue(e.target.value);
  }

  return (
    <article className="flex flex-col items-center justify-center bg-stone-100 h-80">
      <h1 className="text-5xl font-eb-garamond">
        Subscribe
      </h1>
      <p className="my-2 text-center w-4/5">
        Sign up with your email address to receive news, offers and updates.
      </p>
      <form
        action=""
        autoComplete="on"
        className="flex justify-center mt-4 w-11/12"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          value={value}
          onChange={(e) => handleValue(e)}
          type="email"
          name=""
          id=""
          placeholder="Enter your email address"
          className="outline outline-1 outline-slate-800 mx-4 py-2 px-4 w-3/5 md:w-fit font-eb-garamond md:text-xl"
        />
        <button
          className="py-2 px-6 bg-zinc-900 text-zinc-100 shadow hover:shadow-none font-eb-garamond font-semibold italic md:text-xl"
          type="submit"
          value="Sign Up"
        >
          Sign Up
        </button>
      </form>
    </article>
  );
}