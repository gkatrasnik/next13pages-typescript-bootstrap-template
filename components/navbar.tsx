import { Navbar, Nav, Offcanvas } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import LocaleSwitcher from './localeSwitcher';
import {useTranslations} from 'next-intl';
import {useRouter} from 'next/router';
import Image from 'next/image';

const MyNavbar = () => {
  const router = useRouter()
  const t = useTranslations('Navbar');
  const [expanded, setExpanded] = useState<boolean>(false);

  const collapseNavbar = (): void => {
    setExpanded(false);
  }

  const getSelectedCls = (path: string): string => {
    return router.pathname === path ? " active" : ""; 
  }

  return (
    <Navbar sticky="top" bg="white" expand="lg" className="px-2" expanded={expanded}>
      <div className='d-flex'>
        <Navbar.Brand>
          <Link href="/" passHref onClick={() => setExpanded(false)} >
            <Image
              alt="logo"
              src="/logo/logo-big.png"  
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
              height={50}
              width={50}   
              style={{
                marginLeft: "1rem",  
                objectFit:"cover"                
              }}        
                          
            />
          </Link>
        </Navbar.Brand>
        <LocaleSwitcher/>
      </div>
      <Navbar.Toggle 
        aria-controls={`offcanvasNavbar-expand-${expanded}`} 
        onClick={() => setExpanded(expanded => !expanded)}
        className="navbar-toggle-custom"
      />
      <Navbar.Offcanvas 
        id={`offcanvasNavbar-expand-${expanded}`} 
        aria-labelledby={`offcanvasNavbarLabel-expand-${expanded}`}
        onHide={() => setExpanded(false)}
      >
        <Offcanvas.Header closeButton>
          <Link href="/" passHref onClick={() => setExpanded(false)} >
            <Image
              alt="logo"
              src="/logo/logo-big.png"  
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
              height={50}
              width={50}   
              style={{                 
                objectFit:"cover"                
              }}        
                          
            />
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="ms-auto">
            <Link  className='nav-link navbar-nav custom-nav-link' href="/" passHref onClick={collapseNavbar}>            
              <div className={'text-uppercase custom-nav-link-text' + getSelectedCls("/")}>{t('home')}</div>
            </Link>
            <Link  className='nav-link navbar-nav custom-nav-link' href="/rent-a-bike" passHref onClick={collapseNavbar}>
              <div className={'text-uppercase custom-nav-link-text' + getSelectedCls("/rent-a-bike")}>{t('rentABike')}</div>
            </Link>
            <Link  className='nav-link navbar-nav custom-nav-link' href="/rent-a-sup" passHref onClick={collapseNavbar}>
              <div className={'text-uppercase custom-nav-link-text' + getSelectedCls("/rent-a-sup")}>{t('rentASup')}</div>
            </Link>
            <Link  className='nav-link navbar-nav custom-nav-link' href="/cycling-trips" passHref onClick={collapseNavbar}>
              <div className={'text-uppercase custom-nav-link-text' + getSelectedCls("/cycling-trips")}>{t('cyclingTrips')}</div>
            </Link>
            <Link  className='nav-link navbar-nav custom-nav-link' href="/bike-service" passHref onClick={collapseNavbar}>
              <div className={'text-uppercase custom-nav-link-text' + getSelectedCls("/bike-service")}>{t('bikeService')}</div>
            </Link>
            <Link  className='nav-link navbar-nav custom-nav-link' href="/ebike-upgrade" passHref onClick={collapseNavbar}>
              <div className={'text-uppercase custom-nav-link-text' + getSelectedCls("/ebike-upgrade")}>{t('eBikeUpgrade')}</div>
            </Link>
            <Link  className='nav-link navbar-nav custom-nav-link' href="/about-us" passHref onClick={collapseNavbar}>
              <div className={'text-uppercase custom-nav-link-text' + getSelectedCls("/about-us")}>{t('aboutUs')}</div>
            </Link>
            <Link  className='nav-link navbar-nav custom-nav-link' href="/contact" passHref onClick={collapseNavbar}>
              <div className={'text-uppercase custom-nav-link-text' + getSelectedCls("/contact")}>{t('contact')}</div>
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  )
}

export default MyNavbar;