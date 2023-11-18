import { Link } from "react-router-dom";
import "./Homepage.css";
import Mic from"./Mic.jpg";
import Searchlogo from"./Searchlogo.jpg";
import logo from './Logo.png';
import signin from "./Signin.jpg";
import YouHeader from "./Yheader";
import SideBar from './SideBar';
import Mainbody from './Mainbody';


const Homepage=()=>{
   

    return ( 
        <div className="youtube">
            <YouHeader />
            <SideBar/>
            <Mainbody/>
        </div>
    
   
)


};

export default Homepage;