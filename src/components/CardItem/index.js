// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={className}>
      <div>
        <h1 className="title">{title}</h1>
        <p className="about">{description}</p>
        <div className="img-container">
          <img src={imgUrl} className="img" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
