import React from "react"
import { useParams } from "react-router-dom"
import "./Accomodation.scss"
import { accomodations } from "../../data/kasa.js"
import AccomodationTag from "../../components/AccomodationTag/AccomodationTag.jsx"
import star_inactive from "../../images/rating_start_inactive.png"
import star_active from "../../images/rating_star_active.png"
import Collapse from "../../components/Collapse/Collapse.jsx"

function Accomodation() {
  const parameters = useParams()
  const accomodation = accomodations.find(
    (element) => element.id === parameters.id
  )

  return (
    <React.Fragment>
      <section className="container__accomodation">
        <div className="container__carrousel">
          <img
            src={accomodation.cover}
            alt={accomodation.description}
            width="1240"
            height="415"
          ></img>
        </div>
        <div className="container__description">
          <div className="container__description-location">
            <h2>{accomodation.title}</h2>
            <h3>{accomodation.location}</h3>
          </div>
          <div className="container__description-host">
            <p className="host__name">{accomodation.host.name}</p>
            <div className="host__picture">
              <img
                src={accomodation.host.picture}
                alt={accomodation.host.name}
                width="64"
                height="64"
              ></img>
            </div>
          </div>
        </div>
        <div className="container__tags-rating">
          <div className="container__tags">
            {accomodation.tags.map((tag, index) => (
              <p>
                <AccomodationTag tag={tag} />
              </p>
            ))}
          </div>
          <div className="container__rating">
            {[1, 2, 3, 4, 5].map((idx) => (
                <img src={idx < accomodation.rating ? star_active : star_inactive} alt="rating" wdith="24" height="24"></img>
            ))}
          </div>
        </div>
        <div className="container__details">
            <Collapse item="Description" text={accomodation.description} />
            <Collapse item="Equipements" text={accomodation.equipments} />

        </div>
      </section>
    </React.Fragment>
  )
}

export default Accomodation
