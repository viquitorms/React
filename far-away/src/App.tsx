import { Box } from '@mui/material';
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
        <Box p={2}>
          <SubHeader />
          <TripList />
        </Box>
        <Footer />
      </TripProvider>
    </>
  );
}