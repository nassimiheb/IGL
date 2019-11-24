import React,{Component} from 'react';
//import { Link } from 'react-router-dom/cjs/react-router-dom';
/*import axios from 'axios';*/
/*const Etudiant= props=>{
  <tr>
<td>{props.etudiant.Matricule}</td>
<td>{props.etudiant.Nom}</td>
<td>{props.etudiant.Prenom}</td>
<td>{props.etudiant.Date_de_naissance.substring(0,10)}</td>
<td>{props.etudiant.Lieu_de_naissance}</td>
    <td>
      <link to ={"/modifier/"+props.etudiant._id}>modifier</link>|<button onClick={props.deleteEtudiant(props.etudiant._id)}>supprimer</button>
    </td>
  </tr>
}*/
export default class AFFICHEPAGE extends Component
{
  /**    constructor(props){
       super(props);
       this.deleteEtudiant = this.deleteEtudiant.bind=(this);
       this.state={etudiants: []};
     }
     componentDidMount()
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
     }
     etudiantList(){
       return this.state.etudiants.map(currentetudiant =>{
         return <Etudiant etudiant={currentetudiant} deleteEtudiant={this.deleteEtudiant} key={currentetudiant._id} />;
       })
     }*/
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
            </tr>
          </thead>
          <tbody>
            {}
          </tbody>
        </table>
      
        </div>
        </div>
        
      )
    }
}
