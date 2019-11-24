import React,{Component} from 'react';
//import { Link } from 'react-router-dom/cjs/react-router-dom';
/*import axios from 'axios';*/
/*const Etudiant= props=>{
  <tr>
<td>{props.etudiant.matricule}</td>
<td>{props.etudiant.nom}</td>
<td>{props.etudiant.prenom}</td>
<td>{props.etudiant.dateNaissance.substring(0,10)}</td>
<td>{props.etudiant.lieuNaissance}</td>
<td>{props.etudiant.mail}</td>
<td>{props.etudiant.tel}</td>
<td>{props.etudiant.adresse}</td>
    <td>
      <link to ={"/modifier/"+props.etudiant._id}>modifier</link>|<button onClick={props.deleteEtudiant(props.etudiant._id)}>supprimer</button>
    </td>
  </tr>
}*/
export default class AFFICHEPAGE extends Component
{
     constructor(props){
       super(props);
     //  this.deleteEtudiant = this.deleteEtudiant.bind=(this);
       this.state={etudiants: []};
     }
  /*   componentDidMount()
     {
       axios.get('http://localhost:5000/students/')
       .then(response=>{
         this.setState({etudiants: response.data})
       })
       .catch((error)=>{
         console.log(error);
       })
     }
     deleteEtudiant(id){
       axios.delete('http://localhost:5000/students/'+id)
       .then(res=> console.log(res.data));
       this.setState({
         etudiants:this.state.etudiants.filter(el =>el._id !==id)
       })
     }*/
     etudiantList(){
       /*return this.state.etudiants.map(currentetudiant =>{
         return <Etudiant etudiant={currentetudiant} deleteEtudiant={this.deleteEtudiant} key={currentetudiant._id} />;
        })*/
     }
    render() 
      {
      return (
      <div ><br/><br/><br/>
        <div className="container">
        <h1>Affiche la liste des etudiants </h1>
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
              <th>Groupe</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>      
      </div>
      </div>
      //{this.etudiantListe()} in tbody
      )
    }
}
