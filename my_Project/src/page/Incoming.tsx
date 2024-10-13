import React, { useState } from 'react';
import './Incoming.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'รายการ 1', ชุดข้อมูล1: 4, ชุดข้อมูล2: 7 },
  { name: 'รายการ 2', ชุดข้อมูล1: 8, ชุดข้อมูล2: 10 },
  { name: 'รายการ 3', ชุดข้อมูล1: 6, ชุดข้อมูล2: 15 },
];
const Incoming: React.FC = () => {
  // State สำหรับควบคุมการแสดง Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ฟังก์ชันสำหรับการเปิด/ปิด Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="incoming-container">
     <div className="incoming-header">
        {/* ปุ่มเมนู 3 ขีด */}
        <div className=" incoming-menu-icon" onClick={toggleSidebar}>
            &#9776; {/* Icon เมนู 3 ขีด */}
        </div>
        <h2 className="incoming-header-title">GOLD-TIN PASS STATION VISUAL INSECTION MATERIAL INCOMING</h2>
        <div className="incoming-date">MM/DD/YY</div>
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

        
      <div className="incoming-content">
        <div className="incoming-form-section">
          <div className="incoming-input-group">
            <label>Employee ID</label>
            <input type="text"/>
          </div>
          <div className="incoming-lot-section">
            <div className="incoming-input-group small">
              <label>Lot</label>
              <input type="text"/>
            </div>
          </div>
          {/* Model Dropdown */}
          <div className="incoming-input-group">
            <label>Model</label>
            <select className="incoming-dropdown">
              <option value="">เลือก Model</option>
              <option value="model1">Model 1</option>
              <option value="model2">Model 2</option>
              <option value="model3">Model 3</option>
            </select>
          </div>
          {/* Process Dropdown */}
          <div className="incoming-input-group">
            <label>Process</label>
            <select className="incoming-dropdown">
              <option value="">เลือก Process</option>
              <option value="process1">Process 1</option>
              <option value="process2">Process 2</option>
              <option value="process3">Process 3</option>
            </select>
          </div>
          <div className="incoming-input-group">
            <label>Incoming</label>
            <input type="text" />
          </div>
          <div className="incoming-button-group">
            <button className="incoming-submit-button">Submit</button>
            <button className="incoming-cancel-button">Cancel</button>
          </div>
          <div className="incoming-summary">
            <p>วัน/เดือน/ปี เวลา เลขพนักงาน จำนวนงาน จำนวน NG</p>
            <p>วัน/เดือน/ปี เวลา เลขพนักงาน จำนวนงาน จำนวน NG</p>
            <p>วัน/เดือน/ปี เวลา เลขพนักงาน จำนวนงาน จำนวน NG</p>
          </div>
        </div>
        <div className="incoming-chart-section">
        <div className="quality-container">
          <div className="quality">
            <div className="quantity-all">
              <h2>Quantity All</h2>
              <span className="quantity-all-value">100</span>
            </div>
            <div className="quantity-ng">
              <h2>Quantity of NG</h2>
              <span className="quantity-ng-value">5</span>
            </div>
          </div>
        </div>
          <div className="incoming-chart">
            <h2>Yield</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                className="incoming-bar-chart-container"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="ชุดข้อมูล1" fill="#82ca9d" />
                <Bar dataKey="ชุดข้อมูล2" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Incoming;
