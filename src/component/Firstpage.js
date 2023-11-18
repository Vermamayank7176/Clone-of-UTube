import './Firstpage.css';
import YouHeader from "./Yheader";
import SideBar from './SideBar';
import Mainbody from './Mainbody';
import mb1 from './logo/mb1.png';
import sb1 from './logo/sb1.png';
import sb2 from './logo/sb2.png';
import mb2 from './logo/mb2.png';

const Firstpage=()=>{
return(
    <div className="youtube">
        <YouHeader/>
        <div className='sidebar'>
        <img src={sb1} alt='Sidebar' id='sb1'className='sb1'></img>
        <img src={sb2} id='sb2'className='sb2'></img>
        </div>
        <a href='https://www.youtube.com/watch?v=BTxOtMPuH9w' className='link'>
        <img src={mb1} alt='Mainbody' id='mb1' ></img>
        <img src={mb2} alt='Mainbody' id='mb2' ></img>
        </a>
        </div>
)
};
export default Firstpage;