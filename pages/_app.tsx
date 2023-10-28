
import { AppProps } from 'next/app';
import {NextIntlClientProvider} from 'next-intl';
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import {Open_Sans} from "next/font/google"
import Loading from '../components/loading';
import { useRouter } from 'next/router';
import Head from 'next/head'

const openSans = Open_Sans({ subsets: ['latin'], weight: '400' })

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const site = process.env.NEXT_PUBLIC_BASE_URL;
  const {locales, locale, asPath} = useRouter();
  const canonicalURL = site + (locale === 'sl' ? '' : `/${locale}`) + asPath;

  return (      
    <>
      <Head>
        <link rel="canonical" href={canonicalURL} />    
        {locales?.map((locale) => {
                    return (
                        <link
                            key={locale}
                            rel="alternate"
                            hrefLang={locale}
                            href={`${process.env.NEXT_PUBLIC_BASE_URL}${locale === 'sl' ? '' : `/${locale}`}${asPath}`}
                        />
                    )
        })}        
      </Head>
      {/*workaround for font to be used also on "presentation" components like drawer*/}
      <style global jsx>
          {`body {
              font-family: ${openSans.style.fontFamily};
          }`}
      </style>
      <main className={openSans.className}>
        <Loading/>
        <NextIntlClientProvider messages={pageProps.messages}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextIntlClientProvider>
      </main>
    </>  

  )
}

export default MyApp
