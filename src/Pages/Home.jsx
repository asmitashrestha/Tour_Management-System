import Navbar from '../component/Navbar'
import Homepage from '../component/Homepage'
import Availablepackage from '../component/Availablepackage'
import Aboutexperience from './Aboutexperience'
import Customergallery from './Customergallery'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Availablepackage/>
      <Aboutexperience/>
      <Customergallery/>
    </div>
  )
}

export default Home

