import React from 'react'
import "../styles/overView.css"
const AccountOverview = () => {
  return (
    <section id="overView" className=" grid w-12/12 md:w-3/5 grid-cols-2 md:gridcols-2 gap-4">
      <div className="flex flex-col shadow-lg">
        <div className="flex content-between ">
          <h1>ACCOUNT DETAILS</h1>
          <span className="fas fa-pen "></span>
        </div>
        <div>
          <h3>
            Your default shipping address:
          </h3>
          <span>
            chrisnonso8@gmail.com
          </span>
          <h4>CHANGE PASSWORD</h4>
        </div>
      </div>
      <div className="flex flex-col shadow-lg ">
        <div className="flex content-between ">
          <h1>ADDRESS</h1>
          <span className="fas fa-pen "></span>
        </div>
        <div>
          <h3>
            Your default shipping address:
          </h3>
          <span>
            NDUBUISI OBINNA <br />

            1 Nwadison Street, Independence Layout, Enugu <br />

            Enugu Transekulu, Enugu <br />

            +234 9075419360 / +234 8033185086
          </span>
        </div>
      </div>
      <div className="flex flex-col shadow-lg ">
        <div className="flex content-between ">
          <h1>NEWSLETTER PREFERENCE</h1>
          <span className="fas fa-pen "></span>
        </div>
        <div>
          <h3>You are currently subscribed to following newsletters:</h3>
          <span>✔ daily newsletter</span>
        </div>
      </div>
      <div className="flex flex-col shadow-lg ">
        <div className="flex content-between ">
          <h1>ICONIC STORE CREDIT</h1>
          <span className="fas fa-pen "></span>
        </div>
        <div>
          <h2>₦ 0.00</h2>
        </div>
      </div>


    </section>
  )
}

export default AccountOverview
