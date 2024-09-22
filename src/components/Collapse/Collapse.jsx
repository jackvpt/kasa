import { useState, useRef } from "react"
import "./Collapse.scss"
import collapseArrow from "../../assets/images/dropdown-closed.png"

export default function Collapse({ item, text }) {
  const [textActive, setTextActive] = useState(false)
  let textList = []

  typeof text === "string" ? (textList[0] = text) : (textList = text)

  const contentRef = useRef()

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

      <div
        className="collapse__text"
        ref={contentRef}
        style={
          textActive
            ? { height: contentRef.current.scrollHeight + 20 + "px" }
            : { height: "0px" }
        }
      >
        <ul>
          {textList.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
