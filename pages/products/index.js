import axios from 'axios';
import {useEffect, useState} from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Item from '../../components/product/Item'
import Spinner from '../../components/ui/Loader'
export default function(){
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  function getProducts(){
    axios.get('https://fakestoreapi.com/products')
    .then((res) => {
      setProducts(prev => prev = res.data);
      setLoader(false);
    })
  }
  useEffect(() => getProducts() ,[])
  function sortByKey(array, key) {
    return array.sort(function(a, b) {
      let x = a[key]; let y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
  function sortByProducts(key) {
    let newProducts = sortByKey(products, key)
    setProducts(prev => prev = [...newProducts]);
  }

  
  const [list] = useAutoAnimate(/* optional config */)  
  return (
    <>
      <div className="bg-gray-100 min-h-screen overflow-y-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-8 sm:py-24 lg:max-w-none lg:py-32">
            {
            loader ?  <Spinner/> : (
              <>
                <h2 className="text-2xl font-bold text-gray-900">Products</h2>
                <button type="button"className="py-1 px-2 bg-white rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white" onClick={() => sortByProducts('price')}>Sort by price</button>
                <button type="button"className="py-1 px-2 bg-white rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white" onClick={() => sortByProducts('title')}>Sort by name</button>
                <div ref={list} className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {
                    products.map(product => <Item key={product.id} product={product}/>)
                  }
                </div>
              </>
            )
            }
          </div>
        </div>
      </div>
    </>
  )
}