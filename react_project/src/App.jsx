
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import properties from "./data/properties";
import PropertyList from './components/PropertyList/PropertyList';
// import Footer from './components/Footer/Footer';

const App = () => {
     

    return (
        <div className='app'>
            <Header />
            <main>
                <Title />
                <PropertyList properties={properties} />
            </main>
            <Footer/> 
            
        </div>
    );
    
}

export default App;