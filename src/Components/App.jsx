import { FeedbackProvider } from '../context/FeedbackContext';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import FeedbackForm from './FeedbackForm';
import FeedBackStats from './FeedBackStats';
import FeedBackList from './FeedBackList';
import AboutIconLink from './AboutIconLink';
import AboutPage from '../pages/AboutPage';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedBackStats />
                  <FeedBackList />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
