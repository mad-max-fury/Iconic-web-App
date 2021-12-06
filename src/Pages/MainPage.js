import React from 'react'
import Explore from '../components/Explore'
import Hero from '../components/Hero'
import MedicalWears from '../components/MedicalWears'
import Topsell from '../components/Topsell'

function MainPage() {
  return (
    <main style={{ height: "fit-content", width: "100%" }}>
      <Hero />
      <Topsell />
      <Explore />
      <MedicalWears />
    </main>
  )
}

export default MainPage
