import React from 'react'
import AccountOverview from '../components/AccountOverview'
import DashboardAsideBar from '../components/DashboardAsideBar'
import DashboardNavBar from '../components/DashboardNavBar'


import "../styles/Dashboard.css"
const Dashboard = () => {
  return (
    <div className="container">
      <DashboardNavBar />
      <main className="main flex w-12/12">
        <DashboardAsideBar />
        <AccountOverview />
      </main>
    </div>
  )
}

export default Dashboard
