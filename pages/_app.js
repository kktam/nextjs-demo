import '../styles/globals.css'
import { GetMSalClient } from './../config'

GetMSalClient();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
