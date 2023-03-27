import cart from './assets/cart.png'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({ cartQty }) => {
    return (
        <Button variant="dark">
            <img src={cart} height="25" className="d-inline-block align-bottom" alt="Cart Widget" /> Cart <Badge pill bg="light" text="dark">{cartQty}</Badge>
        </Button>
    );
}

export default CartWidget;