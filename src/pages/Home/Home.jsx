import React from "react"
import { Link } from "react-router-dom"
import "./Home.scss"
import Banner from "../../components/Banner/Banner.jsx"
import Card from "../../components/Card/Card.jsx"
import { useFetch } from "../../utils/useFetch.jsx"

function Home() {
  const fetchResult = useFetch("kasa_accomodations.json")

  const accomodations = fetchResult.fetchedData

  return (
    accomodations && (
      <React.Fragment>
        <Banner origin={"home"} />
        <section className="container__main">
          <div className="container__cards">
            {accomodations.map(({ id, title, cover }) => (
              <Link key={id} to={`/accomodation/${id}`}>
                <Card key={id} id={id} title={title} cover={cover} />
              </Link>
            ))}
          </div>
        </section>
      </React.Fragment>
    )
  )
}

export default Home
