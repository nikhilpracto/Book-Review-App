import { useState } from "react"
import { connect } from "react-redux"
import { useSearchParams } from "react-router-dom"
import BookCard from "../homepage/BookCard"
import { Header } from '../homepage/Header'
import { RatingStar } from "rating-star"
import Review from './Review'
import Warning from "./Warning"
import "./Book.css"

const mapStateToProps = (state) => {
    return {
        BookList: state.home.BookList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => dispatch({ type: "getBook" }),
        updateState: (data) => dispatch({ type: "updateState", payload: { data: data } })
    }
}

const Book = ({ getBooks, updateState = "1" }) => {
    const [rating, setRating] = useState(0);
    const [visible, setVisible] = useState(false);

    const onRatingChange = score => {
        setRating(score);
    }

    let BookDatabase = localStorage.getItem("BookDatabase");
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const books = JSON.parse(localStorage.getItem("BookDatabase"));

    BookDatabase = books.filter((data) => {
        return data.id == id;
    });
    const currentBook = BookDatabase[0];
    const reviewList = currentBook.reviews;

    const handleSubmit = (e, id) => {
        e.preventDefault();
        let currentComment = document.getElementById("comment").value.toLowerCase();
        const restrictedWords = ["poor", "waste", "digusting", "horrible", "filthy"];
        const replacedWords = ["p**r", "w***e", "d*******g", "h******e", "f****y"];
        if (currentComment === "") return;
        let exists = false;
        for (const word of restrictedWords)
            exists = exists || currentComment.includes(word);

        if (exists) {
            // console.log("ok");
            setVisible(true)
            restrictedWords.forEach((word, index) => {
                currentComment = currentComment.replace(word, replacedWords[index]);
            })
            console.log(currentComment);
            document.getElementById("comment").value = currentComment;
        } else {
            setVisible(false)
            document.getElementById("comment").value = "";
            setRating(0)
            const currDatabase = JSON.parse(localStorage.getItem("BookDatabase"))
            const result = currDatabase.map((book) => {
                if (book.id == id) {
                    return {
                        ...book,
                        reviews: [
                            ...book.reviews,
                            {
                                review_id: book.reviews.length + 1,
                                comment: currentComment,
                                rating: rating
                            }
                        ]
                    }
                } else {
                    return book;
                }
            })
            localStorage.setItem("BookDatabase", JSON.stringify(result));
            updateState({
                data: result
            })
        }
    };

    return (
        <div className="book--page">
            <Header />
            <div className="book--details">
                <div className="book--sidebar">
                    <BookCard key={currentBook.id} book={currentBook} />
                </div>
                <div className="book--reviews">
                    <div>
                        <form className="add--review" onSubmit={(e) => handleSubmit(e, currentBook.id)}>
                            <textarea rows={5} cols={50} id="comment" placeholder="Add a comment"></textarea>
                            <div>
                                <RatingStar
                                    clickable
                                    id="rating--widget"
                                    rating={rating}
                                    onRatingChange={onRatingChange}
                                />
                            </div>
                            <div>
                                <button type="submit">Post</button>
                            </div>
                        </form>
                    </div>

                    <div className="check--reviews">
                        {
                            reviewList.map((review) => {
                                return <Review key={review.review_id} reviews={review} />
                            })
                        }
                    </div>
                </div>
            </div>
            <Warning id={currentBook.id} handleSubmit={handleSubmit} onClose={() => setVisible(false)} visible={visible} />
            <div className="overlay hidden"></div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);