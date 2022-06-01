import Footer from './components/Footer/Footer';
import Main from './views/Main/Main';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import './App.css';
import { useAuth } from './hooks/useAuth';
import { TourProvider } from '@reactour/tour'
import steps from './fixtures/TourSteps';


export default function App() {
  const { loading } = useAuth();

  return loading ? (
  <Loading />
    ) : (
    <>
      <TourProvider steps={steps}>
          <Header />
          <Main />
          <Footer />
      </TourProvider>
    </>
  );
}
