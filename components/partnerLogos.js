import Image from "next/image";

function PartnerLogos({imageSrcs}) {   
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            {imageSrcs.map(imageSrc => {
                return <Image
                    alt={imageSrc}
                    src={imageSrc}      
                    height={40}
                    width={100}        
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                    style={{
                        margin: ".5rem",  
                        objectFit: "contain",           
                    }}           
                />
            })}
            
        </div>   
    )
}

export default PartnerLogos;