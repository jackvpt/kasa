import React from "react"
import { Link } from "react-router-dom"
import "./Home.scss"
import Banner from "../../components/Banner/Banner.jsx"
import Card from "../../components/Card/Card.jsx"
import { useFetch } from "../../utils/useFetch.jsx"

export default function Home() {
  
  // Fetch call returns 'fetchData', 'isLoading' and 'error'
  const fetchResult = useFetch("/kasa_accomodations.json")

  // Get data from fetch
  const accomodations = fetchResult.fetchedData

  return (
    accomodations && ( // Check if accomodations is not empty
      <React.Fragment>
        <Banner origin={"home"} />
        <section className="container__main">
          <div className="container__cards">
            {accomodations.map(({ id, title, cover }) => ( // Iterate through accomodations
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
