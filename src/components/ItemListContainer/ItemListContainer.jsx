import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
  const [products, setProductos] = useState([])
  const { category } = useParams()

  useEffect(() => {
    if (category) {
      fetch('../json/products.json')
        .then(response => response.json())
        .then(products => {
          const filteredProducts = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategory === parseInt(category))
          setProductos(filteredProducts)
        })
    } else {
      fetch('./json/products.json')
        .then(response => response.json())
        .then(products => {
          const filteredProducts = products.filter(prod => prod.stock > 0)
          setProductos(filteredProducts)
        })
    }
  }, [category])

  return (
    <div className="row">
      {<ItemList products={products} />}
    </div>
  )
}