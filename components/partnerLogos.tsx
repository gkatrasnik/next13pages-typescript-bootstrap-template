import Image from "next/image";

interface PartnerLogosProps {
    imageSrcs: string[]
}

const PartnerLogos = ({imageSrcs}: PartnerLogosProps) => {   
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            {imageSrcs.map(imageSrc => {
                return <Image
                    key={imageSrc}
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