import './App.css'
import Footer from './components/Footer';
import Header from './components/Header'
import SubHeader from './components/SubHeader';
import TripList from './components/TripList';

export default function App() {

  return (
    <>
      <Header />
      <SubHeader />
      <TripList />
      <Footer />
    </>
  );
}