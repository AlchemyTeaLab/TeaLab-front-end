import Footer from './components/Footer/Footer';
import Main from './views/Main/Main';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import './App.css';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { loading } = useAuth();

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
