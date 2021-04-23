import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route, Switch } from  'react-router-dom';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component.jsx';
import  SignInAndSignUpPage  from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {connect } from 'react-redux';

import {setCurrentUser} from  './redux/user/user.action';

class  App extends React.Component{
  

  constructor(){
    super();
  }
   

  componentDidMount() {

    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          });

          console.log(this.state);
        });
      }

     setCurrentUser( userAuth );
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  
  
  render(){
    return (
    <div >
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );}
}


const mapDispatchtoProps= dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchtoProps)(App);
