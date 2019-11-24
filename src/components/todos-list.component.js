import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import icon9 from "../assets/svg9.svg"
import icon14 from '../assets/svg14.svg'
import icon15 from '../assets/svg15.svg'
import icon16 from '../assets/svg16.svg'
import icon17 from '../assets/svg17.svg'
import icon18 from '../assets/svg18.svg'
export default class TodosList extends Component {
    render() {
        return (
            
            <div className="box">
            <div className="container">
                 <div className="row">
                     
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                       
                            <div className="box-part text-center">
                                
                            <a href="/create" > 
                                <div><img className="imgCard" src ={icon16}/></div>
                            </a> 
                                
                                <div className="title">
                                    <h4>Inscrire un étudiant</h4>
                                </div>
                                
                                <div className="text">
                                    <span className="span1">Ajoute d'un étuidiant </span>
                                </div>
                                
                        
                                
                             </div>
                        </div>	 
                        
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                       
                            <div className="box-part text-center">
                                
                            <a href="/affiche" > 
                                <div><img className="imgCard" src ={icon18}/></div>
                            </a> 
                            
                            
                                <div className="title">
                                    <h4>Affichage des étudiants</h4>
                                </div>
                                
                                <div className="text">
                                    <span className="span1">Affichage étudiants par groupe</span>
                                </div>
                                
                                
                                
                             </div>
                        </div>	 
                        
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                       
                            <div className="box-part text-center">
                                
                            <a href="/" > 
                                <div><img className="imgCard" src ={icon15}/></div>
                            </a> 
                                
                                <div className="title">
                                    <h4>A ajouté</h4>
                                </div>
                                
                                <div className="text">
                                    <span className="span1">Lorem ipsum dolor sit am.</span>
                                </div>
                                
                     
                                
                             </div>
                        </div>	 
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                       
                            <div className="box-part text-center">
                                
                            <a href="/" > 
                                <div><img className="imgCard" src ={icon14}/></div>
                            </a> 
                                
                                <div className="title">
                                    <h4>A ajouté</h4>
                                </div>
                                
                                <div className="text">
                                    <span className="span1">Lorem ipsum dolor sit am.</span>
                                </div>
                                
                                
                             </div>
                        </div>	 
                        
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                       
                            <div className="box-part text-center">
                                
                            <a href="/" > 
                                <div><img className="imgCard" src ={icon17}/></div>
                            </a> 
                            
                                <div className="title">
                                    <h4>A ajouté</h4>
                                </div>
                                
                                <div className="text">
                                    <span className="span1">Lorem ipsum dolor sit am.</span>
                                </div>
                             
                                
                             </div>
                        </div>	 
                        
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                       
                            <div className="box-part text-center">
                                
                            <a href="/" > 
                                <div><img className="imgCard" src ={icon9}/></div>
                            </a> 
                                
                                <div className="title">
                                    <h4>A ajouté</h4>
                                </div>
                                
                                <div className="text">
                                    <span className="span1">Lorem ipsum dolor sit am.</span>
                                </div>
                          
                                
                             </div>
                        </div>
                
                </div>		
            </div>
        </div>
        )
    }
}