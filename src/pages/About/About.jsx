import React from "react"
import "./About.scss"
import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import { useFetch } from "../../utils/useFetch"

export default function LayoutAbout() {
  // Fetch call returns 'fetchData', 'isLoading' and 'error'
  const fetchResult = useFetch("/kasa_about.json")

  // Get data from fetch
  const abouts = fetchResult.data

  return (
    abouts && (
      <React.Fragment>
        <Banner origin={"about"} />
        <section className="section__collapse">
          {abouts.map(
            (
              { item, text },
              index // Iterate through about items
            ) => (
              <Collapse key={index} item={item} text={text} />
            )
          )}
        </section>
      </React.Fragment>
    )
  )
}
