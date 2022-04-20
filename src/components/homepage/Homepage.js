import BookCard from "./BookCard";
import { Header } from "./Header"
import { connect } from 'react-redux'
import { useEffect } from "react";

const mapStateToProps = (state) => {
    return {
        BookList: state.home.BookList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => dispatch({ type: "getBook" })
    }
}

const Homepage = ({ getBooks, BookList }) => {
    useEffect(() => {
        getBooks()
    }, [])

    let database;

    const data = localStorage.getItem("BookDatabase");
    if (data == null) {
        database = BookList
        localStorage.setItem("BookDatabase", JSON.stringify(database))
    } else {
        database = JSON.parse(data)
    }

    return (
        <div>
            <Header />
            <div className="book--dashboard">
                {
                    database.map((book) => {
                        return <BookCard key={book.id} book={book} />
                    })
                }
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);