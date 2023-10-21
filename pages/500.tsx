import Image from 'next/image'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import Head from 'next/head'

const Custom500 = ()  => {
  const t = useTranslations('500');

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t('description')} />
        <meta name="robots" content="noindex"/>
      </Head> 
      <div className="error-page">
          <Image 
            src="/logo/logo-small.png"
            alt="AB Bike"
            width={160} 
            height={150}                   
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
            priority    
            className='mb-3'  
            style={{                 
              objectFit:"contain"                
            }}                             
          />
          <h1>{t("description")}</h1>
      </div>  
    </>      
  )
}

export const getStaticProps: GetStaticProps = async (context)  => {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}

export default Custom500;