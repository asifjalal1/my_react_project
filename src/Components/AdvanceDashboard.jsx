import styled from "../assets/css/AdvanceDashboard.module.css";
import { IonIcon } from '@ionic/react';
import { logoTableau, cashOutline, gridOutline, mailOutline, settingsOutline, personOutline, chatboxEllipsesOutline, menuOutline, searchOutline } from 'ionicons/icons';

function AdvanceDashboard() {
    let listItems = [
        {icon: logoTableau , title: 'Product Name'},
        {icon: gridOutline, title: 'Dashboard'},
        {icon: cashOutline, title: 'Customers'},
        {icon: mailOutline, title: 'Messages'},
        {icon: chatboxEllipsesOutline, title: 'Help'},
        {icon: settingsOutline, title: 'Settings'},
        {icon: personOutline, title: 'Sign Out'}
    ]
    return (
        <>
            <div className={styled.container}>
                <div className={styled.navigation}>
                    <ul>
                        {listItems.map((item, index) => (
                            <li key={index}>
                                <a href="#">
                                    <span className={styled.icon}><IonIcon icon={item.icon} /></span>
                                    <span className={styled.title}>{item.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styled.main}>
                    <div className={styled.topbar}>
                        <div className={styled.toggle}>
                            <IonIcon icon={menuOutline} />
                        </div>
                        <div className="search">
                            <label>
                                <input type="text" name="" id="" placeholder="Search here" />
                                <IonIcon icon={searchOutline} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdvanceDashboard


// package to install
// npm install ionicons