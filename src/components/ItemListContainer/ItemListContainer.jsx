import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useDarkModeContext } from "../../context/DarkModeContext.js"
import { getProducts } from "../../firebase/firebase.js"
export const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect(() => {
    if (category) {
      getProducts()
        .then(products => {
          const filteredProducts = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategory === parseInt(category))
          setProducts(filteredProducts)

        })
    } else {
      getProducts()
        .then(products => {
          const filteredProducts = products.filter(prod => prod.stock > 0)
          setProducts(filteredProducts)

        })
    }
  }, [category])

  return (
    <div className="row">
      {<ItemList products={products} template={"Item"} />}
    </div>
  )
}