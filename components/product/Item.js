import Rating from './Rating'
import Link from 'next/link'
export default function({product}){
    return(
      <>
        <div className="group">
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src={product.image} alt={product.description} className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="px-5 pb-5">
              <Link href={`/products/show/${product.id}`}>
                <a>
                  <h5 className="text-md font-semibold tracking-tight text-gray-900">{product.title}</h5>
                </a>
              </Link>
              <Rating rating={product.rating.rate}/>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}