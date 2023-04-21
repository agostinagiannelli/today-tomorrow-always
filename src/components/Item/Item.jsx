import { Link } from 'react-router-dom'

export const Item = ({ item }) => {
    return (
        <div className="card text-center mb-3" style={{ width: '18rem' }}>
            <img src={item.img} className="card-img-top" alt={`${item.name}`} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: {item.price}€</p>
                <Link className='nav-link' to={`/product/${item.id}`}><button className="btn btn-info">More details</button></Link>
            </div>
        </div>
    )
}