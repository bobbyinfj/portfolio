import React, {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Home from './containers/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contact from './containers/Contact'
import Post from './containers/Post'
import {SearchProvider} from './components/Search/SearchContext.js'

function App() {
  const searchHook = useState('darkblue')
  return (
    <SearchProvider>
      <Router>
        <div className="App">
          <Header />
          <Hero />
          <Route path="/" exact component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/post" exact component={Home} />
          <Route path="/post/:slug" component={Post} />
        </div>
      </Router>
    </SearchProvider>
  )
}

export default App;
