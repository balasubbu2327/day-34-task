import { MdDashboardCustomize, MdOutlineRememberMe, MdEmojiEvents } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { FiSettings } from "react-icons/fi";

import { Link } from "react-router-dom";
export function Sidebar() {
  return <div className='col-lg-2 side-bar'>
    <div className='head'>
      <h2>LIBRARY</h2>
    </div>
    <hr className="solid" />
    <div className='side-bar-list'>
      <ul>
        <li><Link to="/dashboard"><MdDashboardCustomize /><span>Dashboard</span></Link></li>
        <li><Link to="/books"><SiBookstack /><span>Books</span></Link></li>
        <li><Link to="/members"><MdOutlineRememberMe /><span>Members</span></Link></li>
        <li><a><MdEmojiEvents /><span>Events</span></a></li>
        <li><a><FiSettings /><span>Settings</span></a></li>
      </ul>
    </div>
  </div>;
}