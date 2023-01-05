import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Modal from './components/Modal';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Routes location={!background || location}>
      <Route path="/" element={<Home />}>
        {background && <Route path="/modal" element={<Modal />} />}
      </Route>
    </Routes>
  );
}

export default App;
