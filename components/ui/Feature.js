import Link from 'next/link'

export default function({title, description, url, img}){
  return (
    <>
      <div>
        <img className="object-cover w-full rounded-lg h-96 "
            src={img}
            alt=""></img>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">{title}</h2>
        <Link href={url}>
          <p  className="mt-2 text-lg tracking-wider text-blue-500 uppercase cursor-pointer">Go to page</p>
        </Link>
      </div>  
    </>
  )
}