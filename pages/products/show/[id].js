import { useRouter } from 'next/router'
import {productServices} from '../../../services/product-services';
import Overview from '../../../components/product/Overview'
import axios from 'axios'
import Spinner from '../../../components/ui/Loader'

import {useEffect, useState} from 'react'

export default () => {
    const router = useRouter()
    const [product, setProduct] = useState({});
    const [error, setError] = useState('');
    const { id } = router.query;
    const [loader, setLoader] = useState(true);
    
    useEffect(() =>{
        if(!router.isReady) return;
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => { 
            setProduct(res.data);
            setLoader(false);
        })
        .catch((err) => {
            setError(err);
        })
        //setProduct(productServices.getById(id));
    },[router.isReady]);
    return (
       <>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            {
              loader ? <Spinner/> : <Overview product={product}/>
            }
          </div>
        </section>
      </>
    )
}