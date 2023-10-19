import Stack from 'react-bootstrap/Stack';
import { Facebook, Instagram } from 'react-bootstrap-icons';

interface SocialMediaLinksProps {
    iconSize: number
}

function SocialMediaLinks({iconSize}: SocialMediaLinksProps) {
  return (
    <Stack direction="horizontal" gap={2} className='justify-content-center'>
        <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL} aria-label="facebook">
            <Facebook size={iconSize} className='social-media-icon' />
        </a>
        <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}>
            <Instagram size={iconSize} className='social-media-icon' aria-label="instagram"/>
        </a>
    </Stack>
  );
}

export default SocialMediaLinks;