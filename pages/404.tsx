import Image from 'next/image'
import { GetStaticProps } from 'next';

const Custom404 = () => {
  return (
    <div className="error-page">
        <Image 
          src="/logo-big.png"
          alt="AB Bike"
          height={150}
          width={200}  
          placeholder="blur"
          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
          priority    
          className='mb-3'      
          style={{                 
            objectFit:"cover"                
          }}                         
        />
        <h1>404 - Page Not Found</h1>
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

export default Custom404;