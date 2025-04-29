import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import TrainSearchResults from "./pages/TrainSearchResult";
import TrainDetails from "./pages/TrainDetails";
import BookingPage from "./pages/BookingPage";
import ProtectedRoute from './Components/ProtectedRoute';
import ContactPage from "./pages/ContactPage";
import LoginModal from "./pages/LoginModal";
import TrainCarousel from "./Components/TrainCarousel";
import styles from "./Styles/App.module.css";
import { AuthProvider } from "./Context/AuthContext";

// Component to conditionally render content based on route
const RouteContentManager = () => {
  const location = useLocation();
  
  return (
    <div className={styles.mainContent}>
      {location.pathname === "/" && (
        <>
          <Home />
          <TrainCarousel />
        </>
      )}
      <Routes>
        <Route path="/" element={null} />
        <Route path="/train-search" element={<TrainSearchResults/>} />
        <Route path="/train-details/:train_number" element={<TrainDetails/>} />
        <Route 
          path="/booking" 
          element={
            <ProtectedRoute>
              <BookingPage/>
            </ProtectedRoute>
          } 
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route 
          path="/login" 
          element={
            <LoginModal 
              isOpen={true} 
              onClose={() => window.history.back()} 
              onLogin={() => {}} 
              switchToRegister={() => {}} 
            />
          } 
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>

    <Router>
      <div className={styles.app}>
        <Navbar />
        <RouteContentManager />
        <Footer />
      </div>
    </Router>

    </AuthProvider>
    
  );
}

export default App;