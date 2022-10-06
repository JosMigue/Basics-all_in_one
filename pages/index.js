import Head from 'next/head'
import Image from 'next/image'
import Feature from '../components/ui/Feature'

export default function Home() {
  let features = [
    {title: 'Task list', description: 'Basic CRUD task list', url:'/tasks'},
    {title: 'Another feature', description: 'cool feature', url:'#'},
    {title: 'Another feature', description: 'cool feature', url:'#'}
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Made with Next.js</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL BASICS APPS IN ONE</h1>
        </div>
        <div className="flex flex-wrap -m-4">
            {
              features.map(feature => <Feature title={feature.title} description={feature.description} url={feature.url}/>)
            }
        </div>
      </div>
      <p className="text-center">This template was not made by me, you can check more like this in <a className="underline" href="https://tailblocks.cc/">tailblocks</a></p>
    </section>
  )
}
