import React from 'react';
import './Modal.css';

interface ModalProps {
  show: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, handleClose }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="ng-title">NG</h1>
          <span className="close" onClick={handleClose}>&times;</span>
        </div>
        {/* จัดวาง modal-body เป็น flex */}
        <div className="modal-body">
          <div className="input-section">
            <div className="modal-input-group">
              <label>SN</label>
              <input type="text" placeholder="กรอก SN" />
            </div>
            <div className="modal-input-group">
              <label>สาเหตุ</label>
              <select className="modal-dropdown">
                <option value="">เลือกสาเหตุ</option>
                <option value="cause1">สาเหตุ 1</option>
                <option value="cause2">สาเหตุ 2</option>
                <option value="cause3">สาเหตุ 3</option>
              </select>
            </div>
            <div className="modal-input-group">
              <button className="add-more">+ more</button>
            </div>
          </div>
          {/* จัดวาง list-group ทางด้านขวา */}
          <div className="list-group">
            <p>1. SN/สาเหตุ</p>
            <p>2. SN/สาเหตุ</p>
            <p>3. SN/สาเหตุ</p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
