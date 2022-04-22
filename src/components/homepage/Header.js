import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <h1>Book Review Application</h1>
            </Link>
        </div>
    )
}