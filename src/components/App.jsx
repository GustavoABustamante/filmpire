import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { CssBaseline } from '@mui/material'
import useStyles from "./styles"

// import components
import { Actores, InformacionPelicula, Peliculas, NavBar, Perfil } from "./index"

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <NavBar/>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Switch>
          <Route exact path="/pelicula/:id">
            <InformacionPelicula/>
          </Route>
          <Route exact path="/actores/:id">
            <Actores/>
          </Route>
          <Route exact path="/">
            <Peliculas/>
          </Route>
          <Route exact path="/perfil/:id">
            <Perfil/>
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App