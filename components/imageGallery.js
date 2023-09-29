import {Stack, Button} from 'react-bootstrap';

function ImageGallery({children}) {
  return (
    <Stack 
        direction="horizontal"
        gap={3}
        className="image-gallery"        
    >
        <Button className='image-galery-nav-button left' variant="secondary">{"<"}</Button>
        {children}
        <Button className='image-galery-nav-button right' variant="secondary">{">"}</Button>
    </Stack>
  );
}

export default ImageGallery;