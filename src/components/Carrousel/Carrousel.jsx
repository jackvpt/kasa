import { useState } from "react"
import "./Carrousel.scss"
import arrow_back from "../../assets/images/arrow_back.png"
import arrow_forward from "../../assets/images/arrow_forward.png"

export default function Carrousel({props}) {
    const [pictureDisplayed, setPictureDisplayed] = useState(0)
    const numberOfPictures = props.pictures.length

    function pictureBack() {
        pictureDisplayed - 1 < 0
          ? setPictureDisplayed(numberOfPictures - 1)
          : setPictureDisplayed(pictureDisplayed - 1)
      }
      function pictureForward() {
        pictureDisplayed + 1 >= numberOfPictures
          ? setPictureDisplayed(0)
          : setPictureDisplayed(pictureDisplayed + 1)
      }


  return (
    <div className="container__carrousel">
      <img
        className="accomodation__picture"
        src={props.pictures[pictureDisplayed]}
        alt={props.title}
        width="1240"
        height="415"
      ></img>

      {numberOfPictures > 1 && (
        <div>
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
            {pictureDisplayed + 1}/{numberOfPictures}
          </p>
        </div>
      )}
    </div>
  )
}
