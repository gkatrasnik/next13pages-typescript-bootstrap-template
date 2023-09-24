import { Navbar, Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import LocaleSwitcher from './localeSwitcher';
import {useTranslations} from 'next-intl';
import {useRouter} from 'next/router';

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
              Ab Bike
          </Link>
        </Navbar.Brand>
        <LocaleSwitcher/>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded => !expanded)}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link  className='nav-link navbar-nav custom-nav-link' href="/" passHref onClick={collapseNavbar}>            
            <div className={'custom-nav-link-text' + getSelectedCls("/")}>{t('home')}</div>
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/rent-a-bike" passHref onClick={collapseNavbar}>
            <div className={'custom-nav-link-text' + getSelectedCls("/rent-a-bike")}>{t('rentABike')}</div>
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/rent-a-sup" passHref onClick={collapseNavbar}>
            <div className={'custom-nav-link-text' + getSelectedCls("/rent-a-sup")}>{t('rentASup')}</div>
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/cycling-trips" passHref onClick={collapseNavbar}>
            <div className={'custom-nav-link-text' + getSelectedCls("/cycling-trips")}>{t('cyclingTrips')}</div>
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/bike-servis" passHref onClick={collapseNavbar}>
            <div className={'custom-nav-link-text' + getSelectedCls("/bike-servis")}>{t('bikeServis')}</div>
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/ebike-upgrade" passHref onClick={collapseNavbar}>
            <div className={'custom-nav-link-text' + getSelectedCls("/ebike-upgrade")}>{t('eBikeUpgrade')}</div>
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/about-us" passHref onClick={collapseNavbar}>
            <div className= {'custom-nav-link-text' + getSelectedCls("/about-us")}>{t('aboutUs')}</div>
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/contact" passHref onClick={collapseNavbar}>
            <div className={'custom-nav-link-text' + getSelectedCls("/contact")}>{t('contact')}</div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}