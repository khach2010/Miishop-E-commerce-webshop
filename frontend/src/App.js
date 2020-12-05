import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-3">
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart/:id?" component={CartScreen} />
        </main>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
