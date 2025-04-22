import '../assets/css/dashboard_profile_logo.css';
import { Link } from "react-router-dom";

function DashboardProfileLogo() {
    return (
        <>
            <nav className='primary-nav' aria-label='primary navigation'>
                <ul className='order-list'>
                    <li>
                        <Link to="/dashborad">Dashboard</Link>
                    </li>
                    <li>
                        <button popoverTarget='profile-menu' className='user-button'>
                            <img src="./images/logo1.jpeg" alt="Logo" className='dashboard-logo' />
                        </button>
                    </li>
                </ul>
            </nav>
            <div popover="true" id='profile-menu' className='profile-menu'>
                <h5>
                    Asif Jalal
                </h5>
                <span>muhammadasifjalal@gmail.com</span>
                <h5>Manage Account</h5>
                <h5>Sign Out</h5>
            </div>
        </>
    )
}

export default DashboardProfileLogo