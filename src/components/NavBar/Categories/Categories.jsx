import { Link } from "react-router-dom";
import { memo } from "react";

export const Categories = memo(() => {
    return (
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <a className='dropdown-item'>Shop all</a>
                </Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Shop by brand</a>
                <div className="dropdown-menu">
                    <Link className="nav-link" to={"/category/3"}>
                        <a className='dropdown-item'>Today</a>
                    </Link>
                    <Link className="nav-link" to={"/category/4"}>
                        <a className='dropdown-item'>Tomorrow</a>
                    </Link>
                    <Link className="nav-link" to={"/category/1"}>
                        <a className='dropdown-item'>Always</a>
                    </Link>
                    <Link className="nav-link" to={"/category/2"}>
                        <a className='dropdown-item'>The Moment</a>
                    </Link>
                    <Link className="nav-link" to={"/category/5"}>
                        <a className='dropdown-item'>Wonder</a>
                    </Link>
                </div>
            </li>
        </ul>
    );
})