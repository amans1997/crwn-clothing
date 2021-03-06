import React from 'react';

import './sign-in.styles.scss';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
class SignIn extends React.Component{

    constructor(){
        super();

        this.state={
            email:'',
            password:''
        }

    }
handleSubmit=async event=>{
    event.preventDefault();

    const {email, password}=this.state;
    try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'',password:''});
    }catch(error){
        console.log(error)
    }

}

handleChange=event=>{
    const{value,name}=event.target;

    this.setState({[name]:value})
}

    render()
    {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    handleChange={this.handleChange}
                    label="Email"
                    value={this.state.email} required/>
                    
                    <FormInput
                    name="password" 
                    type="password"
                    label="Password"
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    required/>
                    <CustomButton type="submit" >Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogle >Sign in  with Google</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignIn;