import axios from 'axios';
import {useEffect, useState} from 'react'
import Item from '../../components/product/Item'
import { useAutoAnimate } from '@formkit/auto-animate/react'
export default function(){
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true)
  function getProducts(){
    axios.get('https://dummyjson.com/products')
    .then((res) => {
      setProducts(prev => prev = res.data.products);
    })
    setLoader(prev => prev = false);
  }
  useEffect(() => getProducts() ,[])
  function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
  function sortByProducts(key) {
      let newProducts = sortByKey(products, key)
      setProducts(prev => prev = [...newProducts]);
  }
  function Loader(){
    if(loader){
      return(
          <p className="font-bold text-lg">Loading...</p>
      )
    }else{
      return (
        <>
        </>
      )
    }
    
  }
  const [list] = useAutoAnimate(/* optional config */)
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Products</h2>
            <button type="button"className="py-1 px-2 bg-white rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white" onClick={() => sortByProducts('price')}>Sort by price</button>
            <button type="button"className="py-1 px-2 bg-white rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white" onClick={() => sortByProducts('title')}>Sort by name</button>
            <Loader/>
            <div ref={list} className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {
                  products.map(product => <Item key={product.id} product={product}/>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}