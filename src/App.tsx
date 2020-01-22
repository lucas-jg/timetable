import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Main, Home } from './pages'
import Layout from './layout/Layout'

const App: React.FC = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Main} />
                    <Route path='/home' component={Home} />
                    <Redirect path='*' to='/' />
                </Switch>
            </BrowserRouter>
        </Layout>
    )
}

export default App
