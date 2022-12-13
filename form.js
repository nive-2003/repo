import React from "react";
class RegisterForm extends React.Component{
    constructor(){
        super();
        this.state={
            fields:{},
            errors:{}
        }
        this.handleChange=this.handleChange.bind(this);
        this.form=this.form;
    };
    handleChange
    render(){
        return(
            <div id="sign">
                <div id="register">
                    <h1>SIGNUP</h1>
                    <form method="post" name="form" onSubmit={this.form}>
                       <label>Username</label>
                       <input type="text" name="username" placeholder="Enter name" value={this.state.fields.username}/>
                       <label>Email</label>
                       <input type="email" name="emailid" placeholder="Enter email" value={this.state.fields.emailid}/>
                    </form>
                </div>
            </div>
        )
    }
}
export default RegisterForm