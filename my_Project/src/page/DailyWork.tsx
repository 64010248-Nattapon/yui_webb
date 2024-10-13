import React, { useState } from 'react';
import './Home.css';
import profileIcon from '../images/profile-user.png';

const Home: React.FC = () => {
  // State สำหรับควบคุมการแสดง Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ฟังก์ชันสำหรับการเปิด/ปิด Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="background">
      {/* Header */}
      <div className="header">
        <h2 className="header-title">GOLD-TIN</h2>
      </div>

      <div className="container">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="profile-icon">
            <i className="fa fa-user-circle"></i>
          </div>
          <div className="menu-list">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>

        {/* ปุ่มเมนู 3 ขีด */}
        <div className="menu-icon" onClick={toggleSidebar}>
          &#9776; {/* Icon เมนู 3 ขีด */}
        </div>
        <div className="menu-icon-profile" onClick={toggleSidebar}>
          <img src={profileIcon} alt="Profile Icon" width={30} height={30} />
        </div>

        {/* เนื้อหา */}
        <div className="content">
          <div className="text-box">
            <ul className="menu-list">
              {/* หัวข้อหลัก */}
              <li className="highlight">
                GOLD-TIN PASS STATION
                {/* หัวข้อย่อยซ้อนภายในหัวข้อหลัก */}
                <ul className="sub-menu">
                  <li>PREPARE MATERIAL</li>
                  <li>VISUAL INSPECTION MATERIAL INCOMING</li>
                  <li>CHIP TO LD SUBMOUNT</li>
                  <li>GOLD-TIN</li>
                </ul>
              </li>

              {/* หัวข้อหลักอื่น ๆ */}
              <li className="highlight">
                WASTED TIME RECORD 
                <span className="login-warning"> (LOGIN ก่อนเข้าใช้)</span>
              </li>
              <li className="highlight">
                DAILY WORK RECORD (LEADER)
                <span className="login-warning"> (LOGIN ก่อนเข้าใช้ ได้เฉพาะ ID)</span>
              </li>
              <li className="highlight">YIELD DAILY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
