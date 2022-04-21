import StarRating from '../shared/starRating'
import "./Review.css"

const Review = (props) => {
    return (
        <div className="reviews">
            <p>{props.reviews.comment}</p>
            <StarRating rating={props.reviews.rating} />
        </div>
    )
}

export default Review