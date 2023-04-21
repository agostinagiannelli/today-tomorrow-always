export const CartWidget = ({ cartQty }) => {
    return (
        <>
            <button className="btn btn-dark">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i> ({cartQty})
            </button>
        </>
    );
}