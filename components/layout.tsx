import React, { ReactNode } from 'react';
import MyNavbar from './navbar'
import MyFooter from './footer'
import FloatingWhatsappBtn from './floatinWhatsappBtn';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MyNavbar />
        <div className='content'>{children}</div>
        <FloatingWhatsappBtn size="lg" />
      <MyFooter />
    </>
  )
}

export default Layout;