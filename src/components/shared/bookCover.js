const BookCover = (props) => {
    return (
        <div className="book--image">
            <img src={props.link} />
        </div>
    )
}

export default BookCover;