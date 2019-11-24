
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import CreateTodo from "./components/createEtudiant";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Home from  "./components/create-todo.component";
import Affiche from "./components/afficheEtudiant";
import Modifier from "./components/edit-todo.component";
import Ajoute from "./components/ajouté"

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import icon1 from './assets/svg1.svg'
import icon2 from './assets/svg2.svg'
import icon3 from './assets/svg3.svg'
import icon4 from './assets/svg4.svg'
import icon5 from './assets/svg5.svg'
import icon6 from './assets/svg6.svg'
import icon8 from './assets/svg8.svg'
import icon23 from './assets/svg23.svg'
import icon24 from './assets/svg24.svg'
import icon26 from './assets/svg26.svg'


class App extends Component {
 
  render() {
    


    return (
      <Router>
      <div className="App">
          <nav className="navbar navbar-default no-margin navi">
                    <div className="navbar-header fixed-brand">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"  id="menu-toggle">
                          <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                        </button>
                        <a className="navbar-brand" href="/"><FontAwesomeIcon icon={faHome} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HOME</a>
                    </div>
    
                    
                    
          <div className="container h-100" id ="container1">
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                <input className="search_input" type="text" name="" placeholder="Search..."/>
                <a href="/" className="search_icon"><FontAwesomeIcon icon={faSearch} /></a>
              </div>
            </div>
          </div>
        <a href="/" className="search_icon1"> <img className="imgNav" src ={icon23}/></a>
        <a href="/" className="search_icon1"> <img className="imgNav" src ={icon23}/></a>
        <a href="/" className="search_icon1"> <img className="imgNav" src ={icon24}/></a>
        <a href="/" className="search_icon1"> <img className="imgNav" src ={icon26}/></a> 
      
        

        </nav>
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
    
                    <li className="">
                    <a href="/"><span className="fa-stack fa-lg pull-left"><img className="imgNav" src ={icon1}/></span> <br></br></a>
                          
                    </li>
                    <li>
                        <a href="/"><span className="fa-stack fa-lg pull-left"><img className="imgNav" src ={icon2}/></span> <br></br></a>
        
                    </li>
                    <li>
                        <a href="/"><span className="fa-stack fa-lg pull-left"><img className="imgNav" src ={icon3}/></span><br></br></a>
                    </li>
                    <li>
                    <a href="/"><span className="fa-stack fa-lg pull-left"><img className="imgNav" src ={icon4}/></span><br></br></a>
                    </li>
                    <li>
                    <a href="/"><span className="fa-stack fa-lg pull-left"><img className="imgNav" src ={icon5}/></span><br></br></a>
                    </li>
                    <li>
                    <a href="/"><span className="fa-stack fa-lg pull-left"><img className="imgNav" src ={icon6}/></span><br></br></a>
                    </li>
                    <li>
                    <a href="/"><span className="fa-stack fa-lg pull-left"><img className="imgNav" src ={icon8}/></span><br></br></a>
                    </li>
                </ul>
            </div>
            
            <script src="script.js"></script> 
          </div>
    
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/create1" component={Home} />
          <Route path="/affiche" component={Affiche} />
          <Route path="/modifier/:id" component={Modifier} />
          <Route path="/done" component={Ajoute} />
          </div>
      </Router>
    );
  }
  componentDidMount(){
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
     $("#menu-toggle-2").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
    });
    
     function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      //$('#menu ul:first').show();
      $('#menu li a').click(
        function() {
          var checkElement = $(this).next();
          if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            return false;
            }
          if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
            }
          }
        );
      }
    $(document).ready(function() {initMenu();});
    } 
    
}

export default App;
