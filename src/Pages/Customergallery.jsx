import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'


const Customergallery = () => {
  return (
    <div className='gallery'>
      <div className="img-collection mb-4">
        <img src={img1} alt="" />
      </div>
      <div className="img-collection mb-4">
        <img src={img2} alt="" />
      </div>
      <div className="img-collection mb-4">
        <img src={img3} alt="" />
      </div>
      <div className="img-collection mb-4 ">
        <img src={img1}   alt="" />
      </div>
      <div className="img-collection mb-4">
        <img src={img1} alt="" />
      </div>
      <div className="img-collection mb-4">
        <img src={img2} alt="" />
      </div>
      <div className="img-collection mb-4">
        <img src={img3} alt="" />
      </div>
      <div className="img-collection mb-4">
        <img src={img1}   alt="" />
      </div>
    </div>
  )
}

export default Customergallery
