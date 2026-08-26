import { House, Phone, Mail } from 'lucide-react';
import './Header.css';



const Header = () => {
    return (
        <header className='header'>
            <div className='item'>
               <House className='icon' />
               <span className='brand'>Cambridge Rentals</span>
            </div>
            <div className='item'>
                <Phone className='icon' />
                <span className='contact'>+1 (555) 123-4567</span>
            </div>
            <div className='item'>
                <Mail className='icon'/>
                <span className='mail'>learn@cambridgerentals.com</span>
            </div>
        </header> 
    );

};

export default Header;

