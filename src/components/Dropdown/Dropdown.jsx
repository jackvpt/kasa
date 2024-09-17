import { useState } from "react"
import "./Dropdown.scss"
import dropdownArrow from "../../images/dropdown-closed.png"

function Dropdown({ item, text }) {
  const [textActive, setTextActive] = useState(false)

  return (
    <article className="dropdown-article">
      <div className="dropdown-item" onClick={() => setTextActive(!textActive)}>
        <div> {item}</div>
        <img
        className={textActive ? "dropdown-arrow-down" : "dropdown-arrow-up"}
          src={dropdownArrow}
          alt="dropdown closed"
          width="24"
          height="24"
        ></img>
      </div>

      {textActive && <div className="dropdown-text">{text}</div>}
    </article>
  )
}

export default Dropdown
