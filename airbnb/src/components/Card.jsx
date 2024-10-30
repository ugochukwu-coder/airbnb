import PropTypes from "prop-types"

export default function Card({coverImg, rating, reviewCount, location, title,  price, openSpots}) {

    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

  return (
      <div className="card">
          {badgeText && <div className="card--badge">{badgeText}</div>}
          <img src={`../images/${coverImg}`} className="card--image" />
          <div className="card--stats">
              <img src="../images/star.png" className="card--star" />
              <span>{rating}</span>
              <span className="gray">({reviewCount}) • </span>
              <span className="gray">{location}</span>
          </div>
          <p>{title}</p>
          <p><span className="bold">From ${price}</span> / person</p>
      </div>
  )
}

Card.propTypes = {
    coverImg: PropTypes.string,
    rating: PropTypes.string,
    reviewCount: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    openSpots: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    
}