import { Navbar, Nav } from 'react-bootstrap'
import { useState } from 'react'
import Link from 'next/link'
import LocaleSwitcher from './localeSwitcher';

export default function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="md" className="px-3" expanded={expanded}>
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
          <Link  className='nav-link navbar-nav' href="/" passHref onClick={() => setExpanded(false)}>
            Home
          </Link>
          <Link  className='nav-link navbar-nav' href="/about" passHref onClick={() => setExpanded(false)}>
            About
          </Link>
          <Link  className='nav-link navbar-nav' href="/pricing" passHref onClick={() => setExpanded(false)}>
            Pricing
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}