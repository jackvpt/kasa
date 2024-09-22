import React from "react"
import "./About.scss"
import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import { useFetch } from "../../utils/useFetch"

function LayoutAbout() {
  const fetchResult = useFetch("kasa_about.json")

  const abouts = fetchResult.fetchedData

  return (
    abouts && (
      <React.Fragment>
        <Banner origin={"about"} />
        <section className="section__collapse">
          {abouts.map(({ item, text }, index) => (
            <Collapse key={index} item={item} text={text} />
          ))}
        </section>
      </React.Fragment>
    )
  )
}

export default LayoutAbout
