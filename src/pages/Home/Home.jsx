import React from "react"
import { Link } from "react-router-dom"
import "./Home.scss"
import Banner from "../../components/Banner/Banner.jsx"
import Card from "../../components/card/Card.jsx"
import { accomodations } from "../../data/kasa.js"

function Home() {
  return (
    <React.Fragment>
      <Banner origin={"home"} />
      <section className="container-main">
        <div className="container-cards">
          {accomodations.map(({ id, title, cover }) => (
            <Link key={id} to={`/accomodation/${id}`}>
              <Card key={id} id={id} title={title} cover={cover} />
            </Link>
          ))}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
