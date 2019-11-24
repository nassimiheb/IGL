import React,{Component} from 'react';
//import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
export default class CreerEtudiant extends Component
{
  
    render()
    {
        return (
            <div className="container" id ="form">
               <h1>Create a new user</h1>
               <form onSubmit={this.onSubmit}>
                   <div>
                       <label className="Blabel">Matricule:        </label><br />
                       <input               
                            type="text" required className="form-control" 
                            value={this.state.matricule}
                            onChange={this.onChangeMatricule}
                            />                       
                   </div> <br />
                   <div>
                       <label className="Blabel">Nom:              </label><br />
                       <input               
                            type="text" required className="form-control" 
                            value={this.state.nom}
                            onChange={this.onChangenom}
                            />                       
                   </div> <br />
                   <div>
                       <label className="Blabel">Prenom:           </label><br />
                       <input 
                            type="text" required className="form-control" 
                            value={this.state.prenom}
                            onChange={this.onChangeprenom}
                            />                       
                   </div> <br />
                   <div>
                       <label className="Blabel">Date_Naissance:   </label><br />
                       <DatePicker 
                            selected={this.state.dateNaissance}
                            onChange={this.onChangedateNaissance}
                            />                       
                   </div> <br />
                   <div>
                       <label className="Blabel">Lieu_Naissance:   </label><br />
                       <input 
                            type="text" required className="form-control" 
                            value={this.state.lieuNaissance}
                            onChange={this.onChangelieuNaissance}
                            />                                
                   </div> <br />
                   <div>
                       <label className="Blabel">Mail:   </label><br />
                       <input type='email'                           
                            required 
                            name="email"
                            className="form-control" 
                            value={this.state.email}
                            onChange={this.onChangemail}
                            />                                
                   </div> <br />
                   <div>
                       <label className="Blabel">Téléphone:   </label><br />
                       <input 
                            type="text" required className="form-control" 
                            value={this.state.tel}
                            onChange={this.onChangetel}
                            />                                
                   </div> <br />
                   
                   <div>
                       <label className="Blabel">Promo:   </label><br />
                       <select ref="userInput1" 
                             required className="form-control" 
                            value={this.state.promo}
                            onChange={this.onChangepromo}>
                              <option>PROMO</option> 
                             <option>1CS</option>  
                             <option>2CS</option>
                        </select>
                        <label className="Blabel">Groupe:   </label><br />
                       <select ref="userInput" 
                             required className="form-control" 
                            value={this.state.groupe}
                            onChange={this.onChangegroupe}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                            
                                                            
                   </div> <br />
                   <div>
                       <input  type="submit" value="Create user" className="btn btn-primary"  />
                     
                   </div>
               </form>
            </div>
        );
    }
}