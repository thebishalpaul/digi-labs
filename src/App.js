import './App.css';
import AboutUs from './components/AboutUs';
import BrandLogos from './components/BrandLogos';
import CustomerSupport from './components/CustomerSupport';
import 'bootstrap/dist/css/bootstrap.min.css';
import Features from './components/Features';
import Footer from './components/Footer';
import NavbarComponent from './components/NavbarComponent';
import Review from './components/Review';
import SecondCard from './components/SecondCard';
import SpendingDetails from './components/SpendingDetails';
import Stats from './components/Stats';
import UnlockCard from './components/UnlockCard';
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      {/* <Navbar /> */}
      <UnlockCard />
      <BrandLogos />
      <SecondCard />
      <Features />
      <SecondCard />
      <SpendingDetails />
      <div className='stats-app'>
        <Stats
          heading="2 Million"
          subHeading="Customers"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam."
        />
        <Stats
          heading="1K"
          subHeading="Downloads"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam."
        />
        <Stats
          heading="$73 Million"
          subHeading="Transactions"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam."
        />
      </div>
      <Review />
      <CustomerSupport />
      <AboutUs />
      <Footer />
    </div >
  );
}

export default App;
