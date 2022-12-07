export default function QuoteBox(props) {
  return (
    <article className="flex items-center h-80 bg-stone-100">
      <blockquote
        className={`mx-auto font-eb-garamond ${props.italic ? "italic" : null} ${props.underline ? 'underline' : null} text-3xl md:text-6xl text-center`}>
        {props.quote}
      </blockquote>
    </article>
  );
}
