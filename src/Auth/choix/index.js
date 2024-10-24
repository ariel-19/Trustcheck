import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';  // Tes styles généraux, si nécessaire

export default function Choix() {
  return (
    <div className="fondCo">
      <form className="choix">
        <span className="texte">S'inscrire en tant que:</span>
        <div className="d-grid gap-2 col-6 mx-auto mt-5">
          <button className="btn btn-success" type="button">
            <Link to="/inscriptionChauffeur" className="text-light text-decoration-none">
              Chauffeur
            </Link>
          </button>
          <button className="btn btn-success" type="button">
            <Link to="/inscriptionClient" className="text-light text-decoration-none">
              Client
            </Link>
          </button>
        </div>
        
        {/* Ajout du bouton de retour à l'accueil */}
        <div className="mt-4">
          <button className="btn btn-primary">
            <Link to="/" className="text-light text-decoration-none">Retour à l'accueil</Link>
          </button>
        </div>
      </form>
    </div>
  );
}