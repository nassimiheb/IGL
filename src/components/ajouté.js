import React,{Component} from 'react';

import '../App.css'
import success from '../assets/success.png'
export default class AFFICHEPAGE extends Component
{
 
    render() 
      {
      return (
        < div className="container containerAdd">

        <img className="add " src ={success}/><br/><br/><br/><br/><br/>
        <h2>Etudiant ajouté avec succès</h2>
        </div>
        
      )
    }
}
