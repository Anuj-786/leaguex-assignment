import React, {Component} from 'react';
import { connect } from 'react-redux';
import {login} from '../actions';

class Login extends Component {
    
    state = {
        email_id: "",
        password: "",
        submitted: false
    };
    
    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }
    handleLogin = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email_id, password } = this.state;
        const { dispatch } = this.props;
        if (email_id && password) {
            dispatch(login(email_id, password));
        }
    }
    
    render() {
        
        return (
            <div>
                <h1>Login To LeagueX</h1>
                <form>
                    <input type="text" name="email_id" onChange={this.handleInputChange} value={this.state.email_id} />
                    <input type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />
                </form>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {LoginDetails: state.loginDetails}

}


export default connect(mapStateToProps)(Login)