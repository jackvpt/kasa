import "./Card.css"

export default function Card({ id, title, cover }) {
  return (
    <article key={id} className="container__card">
      <img className="card__img" src={cover} alt={`${title} cover`} width="340" height="340"/>
      <h3>{title}</h3>
    </article>
  )
}
