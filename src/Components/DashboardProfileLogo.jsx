// import '../assets/css/dashboard_profile_logo.css';
import Styles from '../assets/css/DashboardProfileLogo.module.css';
import { Link } from "react-router-dom";

function DashboardProfileLogo() {
    return (
        <>
            <nav className={Styles.primary_nav} aria-label='primary navigation'>
                <ul className={Styles.order_list}>
                    <li>
                        <Link to="/dashborad">Dashboard</Link>
                    </li>
                    <li>
                        <button popoverTarget='profile-menu' className={Styles.user_button}>
                            <img src="./images/logo1.jpeg" alt="Logo" className={Styles.dashboard_logo} />
                        </button>
                    </li>
                </ul>
            </nav>
            <div popover="true" id='profile-menu' className={Styles.profile_menu}>
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