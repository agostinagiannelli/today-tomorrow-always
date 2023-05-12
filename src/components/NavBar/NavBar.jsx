import { Categories } from "./Categories/Categories";
import { CartWidget } from "../CartWidget/CartWidget";
import { DarkModeButton } from "./DarkModeButton/DarkModeButton";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Meet Today Tomorrow Always 🌟</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <Categories />
                </div>
                <CartWidget cartQty={0} />
                <DarkModeButton />
            </div>
        </nav>
    );
}