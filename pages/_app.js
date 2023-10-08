import {NextIntlClientProvider} from 'next-intl';
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import {Open_Sans} from "next/font/google"
import Loading from '../components/loading';

const openSans = Open_Sans({ subsets: ['latin'], weight: '400' })

function MyApp({ Component, pageProps }) {
  return (
    
    <main className={openSans.className}>
      <Loading/>
      <NextIntlClientProvider messages={pageProps.messages}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextIntlClientProvider>
    </main>
  )
}

export default MyApp
