import BookCover from "../shared/bookCover"
import StarRating from "../shared/starRating"
import { Link } from 'react-router-dom'

const BookCard = (props) => {
    const averageRating = 5;
    const URL = "/book?id=" + 1;
    return (
        <div className="bookCard">
            <BookCover link={"https://prodimage.images-bn.com/pimages/9780393320978_p0_v2_s192x300.jpg"} />
            <h2>Title: Hello World</h2>
            <h2>Author: Nikhil</h2>
            <StarRating rating={averageRating} />
        </div>
    )
}

export default BookCard;