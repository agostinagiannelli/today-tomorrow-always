import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAncPW8vK49RD3bQKW2cO0aq7zPWbXfdQ8",
  authDomain: "today-tomorrow-always.firebaseapp.com",
  projectId: "today-tomorrow-always",
  storageBucket: "today-tomorrow-always.appspot.com",
  messagingSenderId: "541191543812",
  appId: "1:541191543812:web:84be164c2f801a20a76951"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore();

export const createProducts = async () => {
  const promise = await fetch('./json/products.json')
  const products = await promise.json()
  products.forEach(async (prod) => {
    await addDoc(collection(database, "products"), {
      name: prod.name,
      type: prod.type,
      idCategory: prod.idCategory,
      price: prod.price,
      stock: prod.stock,
      img: prod.img
    })
  })
}

export const getProducts = async () => {
  const prods = await getDocs(collection(database, "products"))
  const items = prods.docs.map(prod => {
    return { ...prod.data(), id: prod.id }
  })
  return items
}

export const getProduct = async (id) => {
  const prod = await getDoc(doc(database, "products", id))
  const item = { ...prod.data(), id: prod.id }
  return item
}

export const updateProduct = async (id, info) => {
  await updateDoc(doc(database, "products", id), info)
}

export const deleteProduct = async (id) => {
  await deleteDoc(doc(database, "products", id))
}

export const createOrder = async (customer, totalPrice, cart, date) => {
  const order = await addDoc(collection(database, "orders"), {
    customer: customer,
    items: cart,
    totalPrice: totalPrice,
    date: date
  })
  return order
}

export const getOrder = async (id) => {
  const order = await getDoc(doc(database, "orders", id))
  const item = { ...order.data(), id: order.id }
  return item
}

export const deleteOrder = async (id) => {
  await deleteDoc(doc(database, "orders", id))
}