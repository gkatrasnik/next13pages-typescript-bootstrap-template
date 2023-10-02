import Stack from 'react-bootstrap/Stack';
import { Facebook, Instagram } from 'react-bootstrap-icons';

function SocialMediaLinks({iconSize}) {
  return (
    <Stack direction="horizontal" gap={2}>
        <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL}>
            <Facebook size={iconSize} className='social-media-icon' />
        </a>
        <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}>
            <Instagram size={iconSize} className='social-media-icon' />
        </a>
    </Stack>
  );
}

export default SocialMediaLinks;