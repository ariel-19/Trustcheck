import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Connexion from './Auth/connexion';
import InscriptionChauffeur from './Auth/inscriptionChauffeur';
import InscriptionClient from './Auth/inscriptionClient';
import Choix from './Auth/choix'; // Page avec les boutons Chauffeur et Client

function App() {
  return (
    <Router>
      <div className="App">
        {/* Partie supérieure (Barre jaune) */}
        <header className="top-bar">
          <div className="menu">
            <Link to="/">Accueil</Link> {/* Bouton de retour vers l'accueil */}
            <Link to="/choix">S'inscrire</Link> {/* Ce lien mène vers la page Choix */}
            <Link to="/connexion">Se connecter</Link>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Page d'accueil */}
          <Route path="/choix" element={<Choix />} /> {/* Page avec les options de choix */}
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscriptionChauffeur" element={<InscriptionChauffeur />} />
          <Route path="/inscriptionClient" element={<InscriptionClient />} />
        </Routes>

        {/* Partie inférieure (Pied de page amélioré) */}
        <footer className="footer">
          <div className="footer-info">
            <p>Email: <a href="mailto:djongosharon@gmail.com">djongosharon@gmail.com</a></p>
            <p>Téléphone: <a href="tel:+237657490862">+237 657 490 862</a></p>
            <p>Siège social : Yaoundé, Cameroun</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/fokou.ariel" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com/sharon_djongo" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/sharon_djongo" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
          <p className="footer-copy">&copy; 2024 TrustCheck. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <section className="middle-section">
      <div className="logo-container">
        <img src="/public/images/logo_transparent.png" alt="TrustCheck Logo" className="logo" />
      </div>
      <img src="/images/image2.png" alt="TrustCheck Background" className="background-image" />
    </section>
  );
}
export default App;