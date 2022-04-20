import BookCover from "../shared/bookCover"
import StarRating from "../shared/starRating"
import { Link } from 'react-router-dom'

const BookCard = (props) => {
    let sum = 0;
    props.book.reviews.map((review) => { return sum = sum + review.rating })
    const averageRating = sum / props.book.reviews.length;
    const URL = "/book?id=" + props.book.id;

    return (
        <div className="bookCard">
            <Link to={URL} style={{ textDecoration: "none", color: "black" }}>
                <BookCover link={props.book.cover_image} />
                <h2>Title: {props.book.title}</h2>
                <h2>Author: {props.book.author}</h2>
                <StarRating rating={averageRating} />
            </Link>
        </div>
    )
}

export default BookCard;