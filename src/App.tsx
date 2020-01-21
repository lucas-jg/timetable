import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Main, Home } from './pages'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/home' component={Home} />
                <Redirect path='*' to='/' />
            </Switch>
        </BrowserRouter>
    )
}

export default App
