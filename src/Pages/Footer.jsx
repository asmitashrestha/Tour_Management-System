import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { BiLogoGmail,BiLocationPlus } from 'react-icons/bi'
import { AiOutlineMail ,AiOutlinePhone} from 'react-icons/ai'
const Footer = () => {
    return (
        <>
        <div className="footer mt-20">
            <div className="foots ml-16">
                <div className="footer-left">
                    <h1><span className='text-zinc-800 text-2xl font-serif'>Travel</span> <span className='text-blue-700 text-2xl font-serif'>Nepal</span></h1>
                    <p className='text-justify text-md text-zinc-900'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Expedita, nam.</p>
                </div>
                <div className="footer-left">
                    <h1>Discover</h1>
                    <div className="naves">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/tour'>Tour</Link>
                    </div>
                    <div className="icons flex">
                        <p className='mr-4 '><BsFacebook /></p>
                        <p className='mr-4'><BsInstagram /></p>
                        <p className='mr-4'><BiLogoGmail /></p>
                    </div>

                </div>
            </div>
            <div className="foots">
                <div className="footer-right">
                    <h2>Quicks Links</h2>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    
                </div>
                <div className="footer-right">
                    <h2>Contact</h2>
                    <p><BiLocationPlus/> Address: Jawalakhel,Lalitpur</p>
                    <p><AiOutlineMail/> Email: travelnepal1@gmail.com</p>
                    <p><AiOutlinePhone/> Phone:+9779837654567 </p>
                </div>
            </div>
        </div>
        <p>Copyright 2023 design and developed byz</p>
        </>
        

    )
}

export default Footer
