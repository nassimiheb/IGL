import React,{Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
const Etudiant= props=>(
  <tr>
<td>{props.etudiant.matricule}</td>
<td>{props.etudiant.nom}</td>
<td>{props.etudiant.prenom}</td>
<td>{props.etudiant.groupe}</td>
<td>{props.etudiant.dateNaissance.substring(0,10)}</td>
<td>{props.etudiant.lieuNaissance}</td>
<td>{props.etudiant.email}</td>
<td>{props.etudiant.tel}</td>
<td>{props.etudiant.adresse}</td>
<td>
      <Link to ={"/modifier/"+props.etudiant._id}>modifier</Link>
    </td>    
  </tr>
)
//|<button onClick={props.deleteEtudiant(props.etudiant._id)}>supprimer</button>
export default class AFFICHEPAGE extends Component
{
     constructor(props){
       super(props);
      // this.deleteEtudiant = this.deleteEtudiant.bind(this);
       this.etudiantListe=this.etudiantListe.bind(this);
       this.onChangegroupe=this.onChangegroupe.bind(this);
       this.onSubmit=this.onSubmit.bind(this);
       this.state={etudiants: [],groupe:''};
     }
    componentDidMount()
     {

     }
     getgroupe(groupe){
       console.log('groupe')
       axios.get('http://localhost:5000/students/'+groupe)
       .then(response=>{
         this.setState({etudiants: response.data})
       })
       .catch((error)=>{
         console.log(error);
       })
     }
    /* deleteEtudiant(id){
       axios.delete('http://localhost:5000/students/'+id)
       .then(res=> console.log(res.data));
       this.setState({
         etudiants:this.state.etudiants.filter(el =>el._id !==id)
       })
     }*/
     etudiantListe(){
       return this.state.etudiants.map(currentetudiant =>{
         return <Etudiant etudiant={currentetudiant} deleteEtudiant={this.deleteEtudiant} key={currentetudiant._id} />;
        })
     }

     onChangegroupe(e){
      this.setState({
          groupe:e.target.value
      });
  }
  onSubmit()
    {
      console.log('onsubmit')
      this.getgroupe(this.state.groupe)
    }
    render() 
      {
      return (
      <div><br/><br/><br/>
        <div className="container">
        <h1>Affiche la liste des etudiants </h1>
        <div>
                       <label className="Blabel">GROUPE:   </label><br />
                       <input 
                            type="text" required className="form-control" placeholder="ex: 1CS9"
                            value={this.state.groupe}
                            onChange={this.onChangegroupe}
                            />                                
                   </div> <br />
                   <div>
                       <button  type="submit" onClick={this.onSubmit} className="btn  btn-primary">chercher groupe </button>
                   </div>
        <table className="table">
          <thead>
            <tr>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Groupe</th>
              <th>Date de naissance</th>
              <th>Lieu de naissance</th>
              <th>Mail</th>
              <th>Téléphone</th>
              <th>Adresse</th>
            </tr>
          </thead>
          <tbody>
          {this.etudiantListe()}
          </tbody>
        </table>      
      </div>
      </div>
      )
    }
}
