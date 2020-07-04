import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import ManageLinks from './pages/manage/Links'

const App = () => {
    return (
    <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li> <Link to='/sign-in'>Sign in</Link></li>
                    <li> <Link to='/sign-up'>Sign up</Link></li>
                    <li> <Link to='/manage/links/create'>Create Link</Link></li>
                    <li> <Link to='/manage/links/edit'>Edit Link</Link></li>
                    <li> <Link to='/manage/links'>links</Link></li>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path='/sign-in'><SignIn/></Route>
                <Route path='/sign-up'><SignUp/></Route>
                <Route path='/manage/links/create'><h1>Create Link</h1></Route>
                <Route path='/manage/links/edit'><h1>Edit Link</h1></Route>
                <Route path='/manage/links'><ManageLinks/></Route>
                <Route path='/'><h1>Home Works!</h1></Route>
            </Switch> 
        </div>
    </BrowserRouter>

    )        
};

export default App;