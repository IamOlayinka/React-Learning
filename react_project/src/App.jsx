import CompanyContent from './components/CompanyContent.jsx';
import Header from './components/Header/Header.jsx';
import Title from './components/Title/Title.jsx';
import PropertyList from './components/PropertyList/PropertyList.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
    

    return (
        <>
            {/* <CompanyContent name="Amazon" description="This is a description of the Amazon company." />
            <CompanyContent name="Apple" description="This is a description of Apple company." />  
            <CompanyContent name="Google" description="This is a description of the Google company.">This is the children </CompanyContent> */}
            <Header />'
            <main>
                <Title />
                <PropertyList />
            </main>
            
            <Footer/>
        </>
    );
    
}

export default App;