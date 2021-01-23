import React, { Component } from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import {signInWithGoogle} from '../../firebase/firebase.utitlis'

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventdefault();

        this.setState({email:'',password:''})
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value})
    } 

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        label='email'
                        handleChange={this.handleChange}
                        required></FormInput>
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label='password'
                        handleChange={this.handleChange}
                        required></FormInput>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                            { ' ' }
                            Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;