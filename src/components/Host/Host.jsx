import React from "react"
import "./Host.scss"

export default function Host({ name, picture }) {
  return (
    <React.Fragment>
      <div className="container__host">
        <p className="container__host__name">
          {/* ISSUE expected if name is not composed by first name and last name */}
          {name.split(" ")[0]} {/* First name */}
          <br />
          {name.split(" ")[1]} {/* Last name */}
        </p>
        <div className="container__host__picture">
          <img src={picture} alt={name} width="64" height="64"></img>
        </div>
      </div>
    </React.Fragment>
  )
}
