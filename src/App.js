import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import DetailsPage from './pages/DetailsPage';
import Main from './components/Main';


const App = () => {

    const [countries, setCountries] = useState([])

    return (
        <>
            <Header/>
            <Main>
                <Switch>
                    <Route path='/' exact>
                        <HomePage countries={countries} setCountries={setCountries}/>
                    </Route>
                    <Route path='/country/:name' component={DetailsPage} exact/>
                    <Route path='/page-not-found' component={NotFoundPage} exact/>
                    <Redirect to='page-not-found'/>
                </Switch>
            </Main>
        </>
    );
}

export default App;
