import Head from 'next/head'
import Image from 'next/image'
import Feature from '../components/ui/Feature'

export default function Home() {
  let features = [
    {title: 'Task list', description: 'Basic CRUD task list', url:'/tasks', img:'https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80'},
    {title: 'Eccomerce', description: 'Ecommerce products', url:'/products', img:'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'},
    {title: 'Another feature', description: 'cool feature', url:'#', img:'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
  ];
  return (
    <section className="bg-white">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">Features: ALL BASICS APPS IN ONE</h1>
        <p className="mt-4 text-center text-gray-500 ">
          Made with Next.js
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {
            features.map(feature => <Feature title={feature.title} description={feature.description} url={feature.url} img={feature.img}/>)
          }
        </div>
    </div>
</section>
  )
}
