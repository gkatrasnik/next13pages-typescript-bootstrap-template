import Image from 'next/image'
import { GetStaticProps } from 'next'

const Custom500 = ()  => {
  return (
    <div className="error-page">
        <Image 
          src="/logo-small.png"
          alt="AB Bike"
          width={160} 
          height={150}                   
          placeholder="blur"
          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
          priority    
          className='mb-3'  
          style={{                 
            objectFit:"cover"                
          }}                             
        />
        <h1>500 - Server-side error occurred</h1>
    </div>        
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