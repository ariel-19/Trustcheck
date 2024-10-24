import React from 'react'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './style.css'
export default function Connexion() {
    return(
        
        <div className="fondCo">
            <div className="form">
            <form className="all-form">
                <div class="form-group">
                    <label htmlFor="" class="text-light">Email</label>
                    <input type="email" class="form-control" />
                </div>
                <div class="form-group mt-3">
                    <label for ="exampleInputPasswordl" class="text-light">Mot de passe</label>
                    <input type="password" class="form-control" />
                </div>
                <div>
                <button type="submit" class="bg-slate-900 btn btn-primary mt-5 mr-5"> 
                    Se connecter
                </button>
                <button type="submit" class="btn btn-secondery border mt-5 ms-5"> 
                <Link to= "/choix" class='text-light text-decoration-none'>S'inscrire </Link>
                </button>
                
                
                </div>
                
            </form>
            </div>
            
        </div>
    );
}