import { Outlet } from 'react-router'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
