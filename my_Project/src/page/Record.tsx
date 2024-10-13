import React, { useState } from 'react';
import './Record.css';
import profileIcon from '../images/profile-user.png';
import plusIcon from '../images/plus1.png';
import removeIcon from '../images/remove.png';

const Record: React.FC = () => {
  // State สำหรับควบคุมการแสดง Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ฟังก์ชันสำหรับการเปิด/ปิด Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="record-container">
     <div className="record-header">
        {/* ปุ่มเมนู 3 ขีด */}
        <div className="record-menu-icon" onClick={toggleSidebar}>
            &#9776; {/* Icon เมนู 3 ขีด */}
        </div>
        <h2 className="record-header-title">WASTED TIME RECORD</h2>
        <div className="record-id">
          <p>c0001</p>
          <div className="record-icon-profile" onClick={toggleSidebar}>
          <img src={profileIcon} alt="Profile Icon" width={30} height={30} />
        </div>
        </div>
      </div>
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="menu-list">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>

        
      <div className="record-content">
        <div className="record-form-section">
          <div className="record-wasted-section">
            <div className="record-input-group small">
              <label>Wasted time(min) เวลาการทำงานที่หายไป</label>
              <input type="text"/>
            </div>
          </div>
          {/* Model Dropdown */}
          <div className="record-input-group">
            <label>Root cause สาเหตุ</label>
            <select className="record-dropdown">
              <option value="">เลือก cause สาเหตุ</option>
              <option value="model1">cause สาเหตุ 1</option>
              <option value="model2">cause สาเหตุ 2</option>
              <option value="model3">cause สาเหตุ 3</option>
            </select>
            
          </div>
          <div className="record-plusIcon">
          <img src={plusIcon} alt="Plus Icon" width={30} height={30} />
          <img src={removeIcon} alt="Remove Icon" width={30} height={30} />
          </div>
        </div>
        <div className="record-button-group">
            <button className="record-submit-button">Submit</button>
          </div>
      </div>
  </div>
  );
};

export default Record;
