import imgSource1 from "../../assets/images/img_source_1.jpg"
import imgSource2 from "../../assets/images/img_source_2.jpg"
import "./Banner.scss"

function Banner({ origin }) {
  let [imgsource, subtitle, style] = ""
  switch (origin) {
    case "home":
      imgsource = imgSource1
      subtitle = "Chez vous, partout et ailleurs"
      style = "banner__home"
      break
    case "about":
      imgsource = imgSource2
      style = "banner__about"
      break
    default:
      imgsource = imgSource1
  }
  return (
    <section className="container__banner">
      <div className={style}>
        <img src={imgsource} alt="paysage"></img>
        <h2>{subtitle}</h2>
      </div>
    </section>
  )
}

export default Banner
