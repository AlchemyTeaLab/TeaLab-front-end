import Footer from './components/Footer/Footer';
import Main from './views/Main/Main';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import './App.css';
import { useAuth } from './hooks/useAuth';
import { TourProvider } from '@reactour/tour'
import getSteps from './fixtures/TourSteps';
import { useHistory } from 'react-router-dom';


export default function App() {
  const { loading } = useAuth();
  const history = useHistory();

  return loading ? (
  <Loading />
    ) : (
      <>
        <TourProvider steps={() => getSteps(history.replace)}>
          <Header />
          <Main />
          <Footer />
        </TourProvider>
    </>
  );
}
