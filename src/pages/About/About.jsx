import React from "react"
import "./About.scss"
import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"

function LayoutAbout() {
  const dropDowns = [
    {
      item: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      item: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      item: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      item: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]
  return (
    <React.Fragment>
      <Banner origin={"about"}/>
      <section className="section__collapse">
        {dropDowns.map(({ item, text }, index) => (
          <Collapse key={index} item={item} text={text} />
        ))}
      </section>
    </React.Fragment>
  )
}

export default LayoutAbout
