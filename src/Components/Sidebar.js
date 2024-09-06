import React from 'react'
import logo from '../Assets/images/logo.png';
import { Link } from 'react-router-dom';
import dashboard from '../Assets/images/dashboard.svg';
import packPic from '../Assets/images/package.svg';
import subscriptionpic from '../Assets/images/subscription.svg';
import ph_users from '../Assets/images/ph_users.svg';
import setting from '../Assets/images/setting.svg';




const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='logo-div'>
        <img src={logo}/>
      </div>

      <ul>

        <li>
          <div className='list-items-div'>
            <img src={dashboard}/>
          <Link to="/">Dashboard</Link>
          </div>

        </li>
        <li>
          <div className='list-items-div'>
            <img src={packPic}/>
          <Link to="/">Package</Link>
          </div>

        </li>
        <li>
          <div className='list-items-div'>
            <img src={subscriptionpic}/>
          <Link to="/subscription">Subscriptions</Link>
          </div>

        </li>
        <li>
          <div className='list-items-div'>
            <img src={ph_users}/>
          <Link to="/">Users</Link>
          </div>

        </li>

        <li>
          <div className='list-items-div'>
            <img src={setting}/>
          <Link to="/">Settings</Link>
          </div>

        </li>


        <li>
          <div className='list-items-div'>
            <img src={setting}/>
          <Link to="/data-list">Data List</Link>
          </div>

        </li>
      </ul>
    </div>
  )
}

export default Sidebar