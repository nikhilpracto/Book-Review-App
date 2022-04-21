const BookCover = (props) => {
    return (
        <div className="book--image">
            <img alt="" src={props.link} />
        </div>
    )
}

export default BookCover;