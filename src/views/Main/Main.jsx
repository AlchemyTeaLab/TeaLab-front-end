import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'
import About from '../About/About'
import Auth from '../Auth/Auth'
import Landing from '../Landing/Landing'
import IngredientDetail from '../IngredientDetail/IngredientDetail'
import IngredientList from '../IngredientList/IngredientList'
import Profile from '../Profile/Profile'

export default function Main() {
  return (
    <main>
      <Switch>
        <Route path='/login'>
          <Auth />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/ingredients'>
          <IngredientList />
        </Route>
        <Route path='/ingredient/:id'>
          <IngredientDetail />
        </Route>
        <PrivateRoute path='/profile'>
          <Profile />
        </PrivateRoute>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </main>
  )
}
