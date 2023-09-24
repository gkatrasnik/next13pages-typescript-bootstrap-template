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
            <Link  className={'nav-link navbar-nav custom-nav-link' + getSelectedCls("/")} href="/" passHref onClick={collapseNavbar}>
            {t('home')}
          </Link>
          <Link  className= {'nav-link navbar-nav custom-nav-link' + getSelectedCls("/rent-a-bike")} href="/rent-a-bike" passHref onClick={collapseNavbar}>
            {t('rentABike')}
          </Link>
          <Link  className= {'nav-link navbar-nav custom-nav-link' + getSelectedCls("/rent-a-sup")} href="/rent-a-sup" passHref onClick={collapseNavbar}>
            {t('rentASup')}
          </Link>
          <Link  className= {'nav-link navbar-nav custom-nav-link' + getSelectedCls("/cycling-trips")} href="/cycling-trips" passHref onClick={collapseNavbar}>
            {t('cyclingTrips')}
          </Link>
          <Link  className= {'nav-link navbar-nav custom-nav-link' + getSelectedCls("/bike-servis")} href="/bike-servis" passHref onClick={collapseNavbar}>
            {t('bikeServis')}
          </Link>
          <Link  className= {'nav-link navbar-nav custom-nav-link' + getSelectedCls("/ebike-upgrade")} href="/ebike-upgrade" passHref onClick={collapseNavbar}>
            {t('eBikeUpgrade')}
          </Link>
          <Link  className= {'nav-link navbar-nav custom-nav-link' + getSelectedCls("/about-us")} href="/about-us" passHref onClick={collapseNavbar}>
            {t('aboutUs')}
          </Link>
          <Link  className= {'nav-link navbar-nav custom-nav-link' + getSelectedCls("/contact")} href="/contact" passHref onClick={collapseNavbar}>
            {t('contact')}
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}