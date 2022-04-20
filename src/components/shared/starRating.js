import StarRatings from "react-star-ratings/build/star-ratings";

const StarRating = (props) => {
    return (
        <div className="ratings">
            <StarRatings rating={props.rating} starRatedColor="gold" starDimension="20px" />
        </div>
    )
}

export default StarRating;