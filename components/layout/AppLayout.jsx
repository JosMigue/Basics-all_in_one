import Navbar from './Navbar'
//import Footer from './footer'

export default function Applayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="relative">{children}</main>
    </>
  )
}