import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Plans from './pages/Plans'

const App = () => {
  return (
    <Layout>
      <Home />
      <Plans />
    </Layout>
  )
}

export default App