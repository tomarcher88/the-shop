import { useParams } from "react-router-dom"

export default function ItemPage(props) {
  const { itemId } = useParams();
  return (
    <article>
      <h1>{itemId}</h1>
    </article>
  )
}