import "./Warning.css"

const Warning = (props) => {
    const id = props.id;
    return (
        props.visible ?
            <div className="modal">
                <h1>You have entered restricted words. Are you sure you want to submit?</h1>
                <form className="buttons">
                    <button id="btn--modal-no" onClick={props.onClose}>NO</button>
                    <button id="btn--modal-yes" onClick={(event) => props.handleSubmit(event, id)}>YES</button>
                </form>
            </div> : null
    )
}

export default Warning;