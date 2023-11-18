
import './Homepage.css';
import Mic from"./Mic.jpg";
import Searchlogo from"./Searchlogo.jpg";
import logo from './Logo.png';
import signin from "./Signin.jpg";
const YouHeader = () =>{
    return(<div>
         <div className="header">
             <div className="t1">
                <div>
                    <img src={logo} alt="logo" className="logo"></img>
                </div>
                <div className="h1">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
            <div className="t2">
                <div ><input type="text" className="h2" placeholder="Search" ></input>
                </div>
                <div className="h3">
                <div>
                    <img src={Searchlogo} alt="Searchlogo" className="Searchlogo"></img>
                </div>
                </div>
                <div className="h4">
                <div>
                    <img src={Mic} alt="Mic" className="Mic"></img>
                </div>
                </div>
            </div>
            <div className="t3">
                <div className="h6">
                <div className="line4"></div>
                    <div className="line5"></div>
                    <div className="line6"></div>
                </div>
                <div >
                    <input type="text" className="signin" placeholder="sign in" ></input>
                </div>
                <div>
                    <img src={signin} alt="Signin" className="signinlogo"></img>
                </div>
                
            </div>
            </div>
            <div className='catageries'>
                <button>All</button>
                <button>Music</button>
                <button>Lectures</button>
                <button>Gym</button>
                <button>Gaming</button>
                <button>Trailer</button>
                <button>Enjoy</button>
                <button>Comedy</button>
                <button>Drama</button>
                <button>Hits</button>
                <button>Movies</button>
                <button> ...</button>
            </div>
            </div>
            
    )
  };
  
  export default YouHeader;

  