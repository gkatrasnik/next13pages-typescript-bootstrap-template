import Image from 'next/image'

export default function Custom404() {
  return (
    <div className="error-page">
        <Image 
                  src="/logo-big.png"
                  alt="AB Bike"
                  height={150}
                  width={200}  
                  objectFit="contain"                                                                  
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                  priority    
                  className='mb-3'                        
              />
        <h1>404 - Page Not Found</h1>
    </div>
        
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}