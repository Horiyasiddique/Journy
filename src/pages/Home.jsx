import Hero from '../components/home/Hero'
import FeaturedSection from '../components/home/FeaturedSection'
import WhyTravelWithUs from '../components/home/WhyTravelWithUs'
import HomeCta from '@/components/home/HomeCta'

const Home = () => {
  return (
    <div className='mt-36 flex flex-col items-center justify-center'>
      <Hero />
      <FeaturedSection />
      <WhyTravelWithUs />
      <HomeCta />
    </div>
  )
}

export default Home
