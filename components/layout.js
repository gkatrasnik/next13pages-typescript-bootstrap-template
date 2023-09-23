// components/layout.js

import MyNavbar from './navbar'
import MyFooter from './footer'

export default function Layout({ children }) {
  return (
    <>
      <MyNavbar />
        <div className='content'>{children}</div>
      <MyFooter />
    </>
  )
}