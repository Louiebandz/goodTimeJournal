import React , { Component } from 'react';
import PersistentNav from "../comps/partials/PersistentNav";


class Login extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <form className="login-form">
                
                <div>
                <PersistentNav>
                    <h1>Create an Account!</h1>
                    <div className="form-group">
                        <label for="realname">
                            Real Name:    
                        </label>
                        <input name="realname" type="text" value="" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <label for="Username">
                            Username: 
                        </label>
                        <input name="Username" type="text" value="" placeholder="Your Desired Username" />
                    </div>
                    <div className="form-group">
                        <label for="Password">
                            Password:
                        </label>
                        <input name="Password" type="Password" value="" placeholder="**********" />
                    </div>
                    <div className="form-group">
                        <label for="Email">
                            Email: 
                        </label>
                        <input name="Email" type="Email" value="" placeholder="Valid@Email.com" />
                    </div>
                    <input type="submit" value="Submit" />
            </PersistentNav>
                </div>
            </form>
        )
    }
}

export default Login