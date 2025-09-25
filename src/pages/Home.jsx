import Hero from '../components/home/Hero'
import FeaturedSection from '../components/home/FeaturedSection'
import WhyTravelWithUs from '../components/home/WhyTravelWithUs'

const Home = () => {
  return (
    <div className='mt-36'>
      <Hero />
      <FeaturedSection />
      <WhyTravelWithUs />
    </div>
  )
}

export default Home
