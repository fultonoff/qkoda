
import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  )
}
