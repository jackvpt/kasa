import React from "react"
import "./Home.scss"
import Banner from "../../components/Banner/Banner.jsx"
import Card from "../../components/card/Card.jsx"
import { cards } from "../../data/kasa.js"
import imgSource1 from "../../images/img_source_1.jpg"

function Home() {
  return (
    <React.Fragment>
            <Banner origin={"home"}/>
      {/* <section className="home-top-container">
        <div className="home-top-image">
          <img
            src={imgSource1}
            alt="paysage"
          ></img>
          <h2>Chez vous, partout et ailleurs</h2>
        </div>
      </section> */}
      <section className="container-cards">
        {cards.map(({ id, title, cover }, index) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </section>
    </React.Fragment>
  )
}

export default Home
