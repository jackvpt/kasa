import React from "react"
import { Link } from 'react-router-dom'
import "./Error.scss"

function Error() {
  return (
    <section className="container__error">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="container__error-link" to="/">
				Retourner sur la page d'accueil
			</Link>
    </section>
  )
}

export default Error
