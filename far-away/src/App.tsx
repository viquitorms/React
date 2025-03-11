import './App.css'
import Footer from './components/Footer';
import Header from './components/Header'
import SubHeader from './components/SubHeader';
import TripList from './components/TripList';
import { TripProvider } from './data/TripContext';

export default function App() {

  return (
    <>
      <TripProvider>
        <Header />
        <SubHeader />
        <TripList />
        <Footer />
      </TripProvider>
    </>
  );
}