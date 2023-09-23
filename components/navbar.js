import { Navbar, Nav } from 'react-bootstrap'
import { useState } from 'react'
import Link from 'next/link'
import {Lobster} from "next/font/google"

const lobster = Lobster({ subsets: ['latin'], weight: ['400'] })


export default function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="md" className="px-3" expanded={expanded}>
      <Navbar.Brand  className={lobster.className}>
        <Link href="/" passHref onClick={() => setExpanded(false)} >
            Fiziap
        </Link>
      </Navbar.Brand>
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
          <a href="https://www.google.com" className='nav-link navbar-nav' onClick={() => setExpanded(false)}>
            App
          </a>         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}