import { Clock } from "lucide-react";
import "./Footer.css";

const Footer = () => {

    // Opening time for the company is 9am
    const openHour = 9;

    // Closing time for the company is 5pm using the 24 hours clock
    const closingHour = 17;
    // Getting the current time and date
    const now = new Date();
    // Getting the current hour
    const currentTime = now.getHours;
    // Getting the current day of the week 0 to 6, 0 for sunday and 6 for Saturday
    const currentDay = now.getDay;
    // Checking if day is a weekday or a weekend
    const isWeekDays = currentDay >= 1 && currentDay <= 5;

    // Checking if rental is opened or closed
    const isOpened = isWeekDays && currentTime >= openHour && currentTime < closingHour;
     
    // Message to display when rental is opened
    const openElement = (
        <>
            <div className="message">
                <Clock className="icon"/>
                <span className="status open">
                    We are open now!
                </span>
            </div>
            <div style={{marginTop:"0.5rem"}}>
                Call us at: <strong>(555)-123-9876</strong>
            </div>
            
        </>
    );
 
    // Message to be displayed when rental is closed
    const closeElement = (
        <>
            <div className="message">
                <Clock className="icon" />
                <span className="status close">We are closed!</span>
            </div>
            <div style={{marginTop:"0.5rem"}}>
                Call us at: <strong>(555)-123-9876</strong>
            </div>
        </>
    );




    return (
        <footer className="footer">
            {/* display message based on isOpened conditon */}
            {isOpened ? openElement : closeElement }
        </footer>
    );

};


export default Footer;