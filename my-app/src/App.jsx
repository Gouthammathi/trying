import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Story from './pages/Story'
import Plans from './pages/Plans'
import UnderPlans from './pages/UnderPlans'
import Section from './pages/Section'
const App = () => {
  return (
    <Layout>
      <Home />
      <Story />
      <Plans />
      <UnderPlans />
      <Section />
    </Layout>
  )
}

export default App