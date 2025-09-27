import { Outlet } from 'react-router'
import Header from './components/Header/Header'
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
