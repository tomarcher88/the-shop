export default function SelectorItem(props) {
  return (
    <section className="relative max-w-xs md:m-10">
      <img src={props.img} alt="" className="h-full object-cover" />
      <div className="absolute bottom-4 right-1/2 translate-x-1/2 bg-slate-100 px-4 py-2 rounded">
        <h1 className="font-eb-garamond font-bold text-xl opacity-100">
          {props.label}
        </h1>
      </div>
    </section>
  );
}
