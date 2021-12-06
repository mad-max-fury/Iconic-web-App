
import { useEffect } from 'react'
const DashboardAsideBar = () => {



  return (
    <>
      <aside className="bg-blue-500 relative h-screen  w-72 md:w-1/5 hidden sm:block shadow-xl">
        <div className="p-6">
          <a href="" className="text-white text-3xl font-semibold hover:text-primary">
            <i className="fas fa-user-cog mr-3"></i> Ndubuisi
          </a>
        </div>
        <nav className="text-white text-base font-semibold pt-4 ">
          <a href="" className="flex items-center text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
            <i className="fas fa-tachometer-alt mr-3"></i>Account Overview
          </a>
          <a href="" className="flex items-center text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
            <i className="fas fa-basket mr-3"></i>Orders
          </a>
          <a href="" className="flex items-center text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
            <i className="fas fa-email-outline mr-3"></i>Inbox
          </a>
          <a href="" className="flex items-center text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
            <i className="fas fa-box mr-3"></i>Coupons
          </a>
          <a href="" className="flex items-center text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
            <i className="fas fa-heart mr-3"></i>Saved items
          </a>
          <a href="" className="flex items-center text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
            <i className="fas fa-reload mr-3">↺</i>Recently Viewed
          </a>
          <a href="" className="flex items-center text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
            <i className="fas fa-cogs mr-3"></i>Support
          </a>
        </nav>
      </aside>

      <div id="mobileSideNav" className="w-full  hidden border-solid border   h-auto overflow-y-hidden">
        <header className="w-full  py-5 px-6  " >
          <nav className="text-white text-base font-semibold pt-4 ">
            <a href="" className="block text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
              <i className="fas fa-tachometer-alt mr-3"></i>Account Overview
            </a>
            <a href="" className="block text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
              <i className="fas fa-basket mr-3"></i>Orders
            </a>
            <a href="" className="block text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
              <i className="fas fa-email-outline mr-3"></i>Inbox
            </a>
            <a href="" className="block text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
              <i className="fas fa-box mr-3"></i>Coupons
            </a>
            <a href="" className="block text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
              <i className="fas fa-heart mr-3"></i>Saved items
            </a>
            <a href="" className="block text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
              <i className="fas fa-reload mr-3">↺</i>Recently Viewed
            </a>
            <a href="" className="block text-textcolor-light opacity-75 hover:text-primary border-textcolor-light text-white py-4 pl-6 nav-item">
              <i className="fas fa-cogs mr-3"></i>Support
            </a>
          </nav>
        </header>

      </div>
    </>
  )
}

export default DashboardAsideBar
