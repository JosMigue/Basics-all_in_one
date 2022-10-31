import '../styles/globals.css'
import Applayout from '../components/layout/AppLayout'

function MyApp({ Component, pageProps }) {
  return (
    <Applayout>
      <Component {...pageProps} />
    </Applayout>
  )
}

export default MyApp
