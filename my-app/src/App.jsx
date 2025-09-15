import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Story from './pages/Story'
import Plans from './pages/Plans'
import UnderPlans from './pages/UnderPlans'
const App = () => {
  return (
    <Layout>
      <Home />
      <Story />
      <Plans />
      <UnderPlans />
    </Layout>
  )
}

export default App