import React from 'react'

const DashboardNavBar = () => {
  const _ = function (selector) {
    return document.querySelector(selector)
  }
  const switchDisplay = (el) => {
    if (el.classList.contains('hidden')) {
      el.classList.remove('hidden')
    } else {

      el.classList.add('hidden')
    }
  }
  const handleProfileDisplay = (ev) => {
    const profile = _('#profile')
    switchDisplay(profile)
  }
  const handleAlertDisplay = (ev) => {
    const alert = _('#alerts')
    switchDisplay(alert)
  }
  const handleSideNavDisplay = (ev) => {
    const mobileSideNav = _('#mobileSideNav')
    switchDisplay(mobileSideNav)
  }
  return (
    <nav className=" bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <button onClick={handleSideNavDisplay} className="px-4 py-2 text-textcolor-light text-2xl rounded-lg hover:bg-primary hover:text-white" >
              <i className="fas fa-bars"></i>
            </button>

            <form method="GET" className="w-full invisible sm:visible ">
              <div className="relative text-gray ml-6 px-3 pt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 pt-1">
                  <button type="submit" className="pt-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">

                    </svg>
                  </button>
                </span>

              </div>

            </form>

          </div>
          <div className="ml-3 relative">
            <div >
              <button onClick={handleAlertDisplay} className="text-xl text-textcolor-light px-4 py-2 focus:outline-none">
                <i className="far fa-bell"></i>
              </button>
            </div>

            <div>
              <div id="alerts" className="hidden origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-background-light ring-1 ring-black ring-opacity-5 focus:outline-none">
                <p className="p-2 text-sm text-textcolor-light"> No new messages...</p>

              </div>
            </div>

          </div>
          <div class="ml-3 relative">
            <div>
              <button onClick={handleProfileDisplay} type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </button>
            </div>


            <div id="profile" class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-0 bg-background ring-1 ring-primary ring-opacity-1 focus:outline-none" role="menu" >

              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white" role="menuitem" tabindex="-1" id="user-menu-item-0">
                <i className="fas fa-user mr-2"></i>Your Profile</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary" role="menuitem" tabindex="-1" id="user-menu-item-1">
                <i className="fas fa-cog mr-2"></i>Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary" role="menuitem" tabindex="-1" id="user-menu-item-2">
                <i className="fas fa-sign-out-alt mr-2"></i>Sign out</a>
            </div>
          </div>

        </div>

      </div>
    </nav >
  )
}

export default DashboardNavBar
