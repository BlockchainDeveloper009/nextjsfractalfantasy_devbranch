import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'


// FIXED COMPONENTS
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
