import { Link } from "react-router-dom";

export const Categories = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <button className='btn btn-dark'>All</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/1"}>
                    <button className='btn btn-dark'>Always</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/2"}>
                    <button className='btn btn-dark'>The Moment</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/3"}>
                    <button className='btn btn-dark'>Today</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/4"}>
                    <button className='btn btn-dark'>Tomorrow</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/5"}>
                    <button className='btn btn-dark'>Wonder</button>
                </Link>
            </li>
        </ul>
    );
}