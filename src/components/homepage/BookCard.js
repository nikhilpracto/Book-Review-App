import BookCover from "../shared/bookCover"
import StarRating from "../shared/starRating"
import { Link } from 'react-router-dom'
import "./BookCard.css"

const BookCard = (props) => {
    let sum = 0;
    props.book.reviews.map((review) => { return sum = sum + review.rating })
    const averageRating = sum / props.book.reviews.length;
    const URL = "/book?id=" + props.book.id;

    return (
        <div className="bookCard">
            <Link to={URL} style={{ textDecoration: "none", color: "black" }}>
                <BookCover link={props.book.cover_image} />
                <div><strong>Title:</strong> {props.book.title}</div>
                <div><strong>Author:</strong> {props.book.author}</div>
                <StarRating rating={averageRating} />
            </Link>
        </div>
    )
}

export default BookCard;