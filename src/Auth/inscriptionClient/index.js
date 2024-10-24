import React, {useState} from 'react'
import './style.css'
export default function InscriptionClient() {
    
    return(
        <div className='fondCli'>
            <div className='container'>
                <form className='mx-auto mt-30' >
                    <div>
                        <label htmlFor='' class="text-light">Nom</label>
                        <input type='text' className="form-control" />
                    </div>
                    <div class="mt-3">
                        <label htmlFor=''class="text-light">Prénom</label>
                        <input type='text' className="form-control" />
                    </div>
                    <div class="mt-3">
                        <label htmlFor=''class="text-light">Téléphone</label>
                        <input type='tel' className="form-control" />
                    </div> 
                    <div class="mt-3">
                        <label htmlFor=''class="text-light">Numéro CNI</label>
                        <input type='text' className="form-control" />
                    </div>
                    <div class="mt-3">
                        <label htmlFor=''class="text-light">Date de délivrance CNI</label>
                        <input type='text' className="form-control" />
                    </div>
                    <div class="mt-3">
                        <label htmlFor=''class="text-light">Email</label>
                        <input type='email' className="form-control"  />
                    </div>
                    <div class="mt-3">
                        <label htmlFor=''class="text-light">Mot de passe</label>
                        <input type='password' className="form-control" />
                    </div>
                    
                    
    
                    <div>
                        <button className='btn btn-success btn-block mt-4'>
                            S'inscrire
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}    