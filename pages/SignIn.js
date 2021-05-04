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
                <h1>Log in to an Existing Account:</h1>
                    <div className="form-group">
                        <label for="Username">
                            Username:   
                        </label>
                        <input name="username" type="text" value="" placeholder="Your Desired Username" />
                    </div>
                    <div className="form-group">
                        <label for="Password">
                            Password:  
                        </label>
                        <input name="Password" type="Password" value="" placeholder="***********" />
                    </div>
                    <input type="submit" value="Submit" />
            </PersistentNav>
                </div>
            </form>
        )
    }
}

export default Login