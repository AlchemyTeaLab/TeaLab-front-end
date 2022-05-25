import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route>
          <Landing />
        </Route>
      </Switch>
    </main>
  )
}
