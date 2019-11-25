import React, {Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../home.css';
import '../App.css';
import $ from "jquery";
import icon22 from '../assets/svg22.svg'
import icon19 from '../assets/svg19.svg'
import icon20 from '../assets/svg20.svg'

export default class CreateTodo extends Component {

    /*constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }*/

    render() {
        return (
           /* <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.todo_priority==='Medium'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.todo_priority==='High'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>*/
            <div className="container login-container">
                <div className="row" id ="Log">
                    <div className="col-lg login-form-1" >
                    <div className="form-group">
                    <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Your Password *" value="" />
                        </div>
                        
                        <div className="form-group">

                         
                            <input type="submit" className="btnReturn" value="Login" />
                        </div>
                    </div>
                </div>
                </div>
                
            <div className="row" id ="choix">
                <div className="col-sm-4 login-form-1" id ="C1">

                <a href="/" > 
                                <div><img className="imgLCard" src ={icon22}/></div>
                            </a> 
                   
                    <input type="button" className="btnSubmit input1" value="Login " />
                    
                    
                </div>
                <div className="col-sm-4 login-form-2"id ="C2">
                    
                <a href="/" > 
                                <div><img className="imgLCard" src ={icon19}/></div>
                            </a> 
                   
                    <input type="button" className="btnSubmit input1" value="Login Form 2" />     
                        
                 
                </div>
                <div className="col-sm-4 login-form-2"id ="C3">
                    
                <a href="/" > 
                                <div><img className="imgLCard" src ={icon20}/></div>
                            </a> 
                         <input type="button" className="btnSubmit input1" value="Login Form 3" />
                        
            
                
                    </div> 
            </div>
        </div>
        )
      
    }  componentDidMount(){
        $(function(){
            $('.btnSubmit').click(
                function(){
                    
                    $('#Log').css("top","230px");
                    $('#Log').css("left","408px");
                    $('#Log').css("width","600px");
                    $('#Log').css("transition","width 0.4s linear");
                    $('#C1').css("position","absolute");
                    $('#C1').css("top","-9999px");
                    $('#C1').css("left","-9999px");
                    $('#C2').css("position","absolute");
                    $('#C2').css("top","-9999px");
                    $('#C2').css("left","-9999px");
                    $('#C3').css("position","absolute");
                    $('#C3').css("top","-9999px");
                    $('#C3').css("left","-9999px");
                    $('#C1').css("opacity","0");
                    $('#C2').css("opacity","0");
                    $('#C3').css("opacity","0");
                }
            );
            $('.btnReturn').click(
                function(){
                    
                    $('#Log').css("top","-9999px");
                    $('#Log').css("left","-9999px");
                    $('#Log').css("width","0px");
                    $('#Log').css("transition","top 0.4s linear");
                    $('#C1').css("position","relative");
                    $('#C1').css("top","auto");
                    $('#C1').css("left","auto");
                    $('#C2').css("position","relative");
                    $('#C2').css("top","auto");
                    $('#C2').css("left","auto");
                    $('#C3').css("position","relative");
                    $('#C3').css("top","auto");
                    $('#C3').css("left","auto");
                    $('#C1').css("opacity","1");
                    $('#C2').css("opacity","1");
                    $('#C3').css("opacity","1");
                }
            )
           
        });
    }
}