import React,{Component} from 'react';
//import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
export default class CreerEtudiant extends Component
{
    constructor(props) {
        super(props);
        this.onChangeMatricule=this.onChangeMatricule.bind(this);
        this.onChangenom=this.onChangenom.bind(this);
        this.onChangeprenom=this.onChangeprenom.bind(this);
        this.onChangedateNaissance=this.onChangedateNaissance.bind(this);
        this.onChangelieuNaissance=this.onChangelieuNaissance.bind(this);
        this.onChangepromo=this.onChangepromo.bind(this);
        this.onChangegroupe=this.onChangegroupe.bind(this);
        this.onChangetel=this.onChangetel.bind(this);
        this.onChangemail=this.onChangemail.bind(this);
        this.onChangeadresse=this.onChangeadresse.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            matricule: 0,
            nom:'',
            prenom:'',
            dateNaissance: new Date(),
            lieuNaissance:'',            
            groupe:'',
            tel:'',
            mail:'',
            promo:'',
            adresse:'',
            errorMessage:'',
        }        
    }
    onChangeMatricule(e){
        this.setState({
            matricule:e.target.value
        })
    }
    onChangenom(e){
        this.setState({
            nom:e.target.value
        });
    }
    onChangeprenom(e){
        this.setState({
            prenom:e.target.value
        });
    }
    onChangedateNaissance(Date){
        this.setState({
            dateNaissance:Date
        });
    }
    
    onChangelieuNaissance(e){
        this.setState({
            lieuNaissance:e.target.value
        });
    }
    onChangepromo(e){
        this.setState({
            promo:e.target.value
        });
    }
    onChangegroupe(e){
        this.setState({
            groupe:e.target.value
        });
    }
    onChangetel(e){
        this.setState({
            tel:e.target.value
        });
    }
    onChangemail(e){
        this.setState({
            mail:e.target.value
        });
    }
    onChangeadresse(e){
        this.setState({
            adresse:e.target.value
        });
    }
    onSubmit(e)
    {
        let erreurMessage='';
        e.preventDefault();
        const user ={
            matricule:this.state.matricule,
            nom:this.state.nom,
            prenom:this.state.prenom,
            dateNaissance: this.state.dateNaissance,
            lieuNaissance: this.state.lieuNaissance,
            groupe:this.state.groupe,
            tel:this.state.tel,
            mail:this.state.mail,
            adresse:this.state.adresse,
        }
        if (this.refs.userInput) 
        {
            user.groupe=this.state.promo +this.refs.userInput.value;            
        }
        if (this.state.promo!=="")
        {
                console.log("---"+this.state.promo+"---");
                console.log(user);
                /*axios.post('http//localhost:5000/students/add',etudiant)
                .then(res => console.log(res.data));
                */
            window.location="/creer";
        }
        else 
        {
            erreurMessage="----->selectionné le promo"
            this.setState({
                errorMessage:erreurMessage
            })
        }
    }
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
                            <option>1CP</option>  
                            <option>2CP</option>  
                            <option>1CS</option>  
                            <option>2CS</option>
                            <option>3CS</option>  
                        </select>
                        <label className="Blabel">Groupe:   </label><br />
                       <select ref="userInput" 
                             required className="form-control" 
                            value={this.state.groupe}
                            onChange={this.onChangegroupe}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>              
                   </div> <br />
                   <div>
                       <input  type="submit" value="Create user" className="btn btn-primary"  />
                       <label>{this.state.errorMessage}</label>
                   </div>
               </form>
            </div>
        );
    }
}