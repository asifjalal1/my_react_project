import styled from "../assets/css/SimpleDashboard.module.css"
import Dry from '@mui/icons-material/Dry';
import Home from '@mui/icons-material/Home';
import Backup from '@mui/icons-material/Backup';
import Dining from '@mui/icons-material/Dining';

function SimpleDashboard() {
    return (
        <>
           <div className={styled.header}>
                <div className={styled['side-nav']}>
                    <a href="#" className={styled.logo}>
                        <img src="./images/logo03.jpeg" alt="" className={styled['logo-img']}/>
                    </a>
                    <ul className={styled['nav-links']}>
                        <li><a href=""> <Home /> <p>Dashboard</p></a></li>
                        <li><a href=""> <Dry /> <p>Members</p></a></li>
                        <li><a href=""> <Dining /> <p>Products</p></a></li>
                        <li><a href=""> <Backup /> <p>Users</p></a></li>
                        <div className={styled.active}></div>
                    </ul>
                </div>
           </div>
        </>
    )
}

export default SimpleDashboard