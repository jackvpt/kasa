import { useState } from "react"
import "./Collapse.scss"
import collapseArrow from "../../images/dropdown-closed.png"

export default function Collapse({ item, text }) {
  const [textActive, setTextActive] = useState(false)
  let textList = []

  typeof text === "string" ? (textList[0] = text) : (textList = text)

  return (
    <article className="article__collapse">
      <div className="collapse__item">
        <h2>{item}</h2>
        <img
          className={textActive ? "collapse-arrow-down" : "collapse-arrow-up"}
          src={collapseArrow}
          alt="collapse arrow"
          width="24"
          height="24"
          onClick={() => setTextActive(!textActive)}
        ></img>
      </div>
      {textActive && (
        <div className="collapse__text">
          <ul>
            {textList.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}
