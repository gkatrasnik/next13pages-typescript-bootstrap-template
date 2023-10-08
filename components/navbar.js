import { Navbar, Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import LocaleSwitcher from './localeSwitcher';
import {useTranslations} from 'next-intl';
import {useRouter} from 'next/router';
import Image from 'next/image';

export default function MyNavbar() {
  const router = useRouter()
  const t = useTranslations('Navbar');
  const [expanded, setExpanded] = useState(false);

  const collapseNavbar = () => {
    setExpanded(false);
  }

  const getSelectedCls = (path) => {
    return router.pathname === path ? " active" : ""; 
  }

  useEffect(()=>{

  }, [router.pathname]);

  return (
    <Navbar bg="white" expand="lg" className="px-2" expanded={expanded}>
              <div className='d-flex'>
        <Navbar.Brand>
          <Link href="/" passHref onClick={() => setExpanded(false)} >
            <Image
              alt="logo"
              src="/logo-big.png"  
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
              height={50}
              width={50}   
              style={{
                marginInline: "1rem",  
                objectFit:"cover"                
              }}        
                          
            />
          </Link>
        </Navbar.Brand>
        <LocaleSwitcher/>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded => !expanded)}/>
      <Navbar.Collapse id="basic-navbar-nav">
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
      </Navbar.Collapse>
    </Navbar>
  )
}