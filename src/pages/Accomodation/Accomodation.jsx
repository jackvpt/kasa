import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Accomodation.scss"
import { accomodations } from "../../data/kasa.js"
import AccomodationTag from "../../components/AccomodationTag/AccomodationTag.jsx"
import star_inactive from "../../images/rating_start_inactive.png"
import star_active from "../../images/rating_star_active.png"
import Collapse from "../../components/Collapse/Collapse.jsx"
import arrow_back from "../../images/arrow_back.png"
import arrow_forward from "../../images/arrow_forward.png"

export default function Accomodation() {
  const parameters = useParams()
  const accomodation = accomodations.find(
    (element) => element.id === parameters.id
  )

  const [pictureDisplayed, setPictureDisplayed] = useState(0)

  const nmberOfPictures = accomodation.pictures.length

  // useEffect(() => {
  //   if (pictureDisplayed>=nmberOfPictures){
  //     setPictureDisplayed(0)
  //   }
  //   if (pictureDisplayed<0){
  //     setPictureDisplayed(nmberOfPictures)
  //   }
  // }, [pictureDisplayed])

  function pictureBack() {
    pictureDisplayed - 1 < 0
      ? setPictureDisplayed(nmberOfPictures - 1)
      : setPictureDisplayed(pictureDisplayed - 1)
  }
  function pictureForward() {
    pictureDisplayed + 1 >= nmberOfPictures
      ? setPictureDisplayed(0)
      : setPictureDisplayed(pictureDisplayed + 1)
  }

  return (
    <React.Fragment>
      <section className="container__accomodation">
        <div className="container__carrousel">
          <img
            className="accomodation__picture"
            src={accomodation.pictures[pictureDisplayed]}
            alt={accomodation.title}
            width="1240"
            height="415"
          ></img>
          <img
            className="picture__arrow_back"
            src={arrow_back}
            alt="précédent"
            onClick={pictureBack}
          ></img>
          <img
            className="picture__arrow_forward"
            src={arrow_forward}
            alt="suivante"
            onClick={pictureForward}
          ></img>
          <p className="picture__number">
            {pictureDisplayed + 1}/{nmberOfPictures}
          </p>
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
              <div key={index}>
                <AccomodationTag tag={tag} />
              </div>
            ))}
          </div>
          <div className="container__rating">
            {[1, 2, 3, 4, 5].map((idx) => (
              <img
                key={idx}
                src={idx < accomodation.rating ? star_active : star_inactive}
                alt="rating"
                wdith="24"
                height="24"
              ></img>
            ))}
          </div>
        </div>
        <div className="container__details">
          <div className="details__description">
            <Collapse item="Description" text={accomodation.description} />
          </div>
          <div className="details__description">
            <Collapse item="Equipements" text={accomodation.equipments} />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
