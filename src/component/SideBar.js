import './Sidebar.css';
import Home from './logo/Home.png'
import Short from './logo/Shorts.png'
import Subsciptions from './logo/Subscriptions.png'
import You from './logo/You.png'

const Sidebar =()=>{
    return(
        <div className="sidebar">
            <img src={Home} alt='H' className='homelogo'/>      
            <img src={Short} alt='S' className='shortslogo'/>     
            <img src={Subsciptions} alt='S' className='subsciptions'/>
            <img src={You} alt='S' className='you'/>
            </div>
    )
}
export default Sidebar;