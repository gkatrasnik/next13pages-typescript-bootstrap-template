import Image from 'next/image'

export default function Custom500() {
  return (
    <div className="error-page">
        <Image 
                  src="/logo-small.png"
                  alt="AB Bike"
                  width={160} 
                  height={150}                   
                  objectFit="cover"                                                                  
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                  priority    
                  className='mb-3'                        
        />
        <h1>500 - Server-side error occurred</h1>
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