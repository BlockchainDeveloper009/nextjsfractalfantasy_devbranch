import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'


// FIXED COMPONENTS
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

