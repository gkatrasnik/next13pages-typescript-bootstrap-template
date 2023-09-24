import { Navbar, Nav } from 'react-bootstrap'
import { useState } from 'react'
import Link from 'next/link'
import LocaleSwitcher from './localeSwitcher';
import {useTranslations} from 'next-intl';

export default function MyNavbar() {
  const t = useTranslations('Navbar');
  const [expanded, setExpanded] = useState(false);
  const collapseNavbar = () => {
    setExpanded(false);
  }

  return (
    <Navbar bg="light" expand="lg" className="px-2" expanded={expanded}>
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
            {t('home')}
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/rent-a-bike" passHref onClick={collapseNavbar}>
            {t('rentABike')}
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/rent-a-sup" passHref onClick={collapseNavbar}>
            {t('rentASup')}
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/cycling-trips" passHref onClick={collapseNavbar}>
            {t('cyclingTrips')}
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/bike-servis" passHref onClick={collapseNavbar}>
            {t('bikeServis')}
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/ebike-upgrade" passHref onClick={collapseNavbar}>
            {t('eBikeUpgrade')}
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/about-us" passHref onClick={collapseNavbar}>
            {t('aboutUs')}
          </Link>
          <Link  className='nav-link navbar-nav custom-nav-link' href="/contact" passHref onClick={collapseNavbar}>
            {t('contact')}
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}