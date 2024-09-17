import "./Card.css"

function Card({id, title, cover}) {
  return (
    <article key={id} className="card">
        	<img className='img-cover' src={cover} alt={`${title} cover`} />
      <h3>{title}</h3>
    </article>
  )
}

export default Card
