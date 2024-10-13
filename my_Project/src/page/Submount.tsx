import React, { useState } from 'react';
import './Submount.css';
import Modal from '../component/Modal'; // นำเข้า Modal ให้ถูกต้อง
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'รายการ 1', ชุดข้อมูล1: 4, ชุดข้อมูล2: 7 },
  { name: 'รายการ 2', ชุดข้อมูล1: 8, ชุดข้อมูล2: 10 },
  { name: 'รายการ 3', ชุดข้อมูล1: 6, ชุดข้อมูล2: 15 },
];

const Submount: React.FC = () => {
  // State สำหรับควบคุมการแสดง Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ฟังก์ชันสำหรับการเปิด/ปิด Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [showModal, setShowModal] = useState(false);

  // ฟังก์ชันเปิด Modal
  const handleModalOpen = () => {
    setShowModal(true);
  };

  // ฟังก์ชันปิด Modal
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="submount-container">
      <div className="submount-header">
        {/* ปุ่มเมนู 3 ขีด */}
        <div className="submount-menu-icon" onClick={toggleSidebar}>
          &#9776; {/* Icon เมนู 3 ขีด */}
        </div>
        <h2 className="submount-header-title">
          GOLD-TIN PASS STATION VISUAL INSPECTION MATERIAL INCOMING
        </h2>
        <div className="submount-date">MM/DD/YY</div>
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

      <div className="submount-content">
        <div className="submount-form-section">
          <div className="submount-input-group">
            <label>Employee ID</label>
            <input type="text" />
          </div>
          <div className="submount-lot-section">
            <div className="submount-input-group small">
              <label>Lot</label>
              <input type="text" />
            </div>
          </div>
          {/* Model Dropdown */}
          <div className="submount-input-group">
            <label>Model</label>
            <select className="submount-dropdown">
              <option value="">เลือก Model</option>
              <option value="model1">Model 1</option>
              <option value="model2">Model 2</option>
              <option value="model3">Model 3</option>
            </select>
          </div>
          {/* Process Dropdown */}
          <div className="submount-input-group">
            <label>Process</label>
            <select className="submount-dropdown">
              <option value="">เลือก Process</option>
              <option value="process1">Process 1</option>
              <option value="process2">Process 2</option>
              <option value="process3">Process 3</option>
            </select>
          </div>
          <div className="submount-input-incoming">
            <label>Incoming</label>
            <input  type="text"/>
            {/* เพิ่ม onClick เพื่อเปิด Modal */}
            <button className="submount-ng-button" onClick={handleModalOpen}>
              NG
            </button>
          </div>
          <div className="submount-button-group">
            <button className="submount--submit-button">Submit</button>
            <button className="submount-cancel-button">Cancel</button>
          </div>
          <div className="submount-summary">
            <p>วัน/เดือน/ปี เวลา เลขพนักงาน จำนวนงาน จำนวน NG</p>
            <p>วัน/เดือน/ปี เวลา เลขพนักงาน จำนวนงาน จำนวน NG</p>
            <p>วัน/เดือน/ปี เวลา เลขพนักงาน จำนวนงาน จำนวน NG</p>
          </div>
        </div>
        <div className="submount-chart-section">
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
          <div className="submount-chart">
            <h2>Yield</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                className="submount-bar-chart-container"
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

      {/* เรียกใช้ Modal และส่ง props show และ handleClose */}
      <Modal show={showModal} handleClose={handleModalClose} />
    </div>
  );
};

export default Submount;
