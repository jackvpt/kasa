import "./Rating.scss"
import star_inactive from "../../assets/images/rating_start_inactive.png"
import star_active from "../../assets/images/rating_star_active.png"

export default function Rating({rate, maxRate}){
    return(
        <div className="container__rating">
        {[...Array(maxRate)].map((e,index) => (
          <img
            key={index}
            src={index < rate ? star_active : star_inactive}
            alt="rating"
            width="24"
            height="24"
          ></img>
        ))}
      </div>
    )
}