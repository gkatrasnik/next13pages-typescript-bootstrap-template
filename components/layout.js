import MyNavbar from './navbar'
import MyFooter from './footer'
import FloatingWhatsappBtn from '../components/floatinWhatsappBtn';

export default function Layout({ children }) {
  return (
    <>
      <MyNavbar />
        <div className='content'>{children}</div>
        <FloatingWhatsappBtn/>
      <MyFooter />
    </>
  )
}