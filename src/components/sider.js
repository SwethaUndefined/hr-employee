import React from 'react';
import { Row, Col } from 'antd';
import teleCaller from "../assests/teleCaller.svg";
import alignIcon from "../assests/alignIcon.svg";
import caseIcon from "../assests/case.svg";
import dashboard from "../assests/dashboard.svg";
import fileEdit from "../assests/fileEdit.svg";
import listIcon from "../assests/listIcon.svg";
import settings from "../assests/settings.svg";
import profileVerify from "../assests/profileVerify.svg";
import handsIcon from "../assests/handsIcon.svg";
import profileSearch from "../assests/profileSearch.svg";
import './sider.css';

const Sider = () => {
  return (
    <Row className='sider'>
      <Col span={24}>
        <div className="icon-list">
        <img src={dashboard} alt="Dashboard"  className='icon'/>
        <img src={fileEdit} alt="File Edit"  className='icon'/>
        <img src={profileVerify} alt="Profile Verify"  className='icon'/>
        <img src={profileSearch} alt="Profile Search" className='icon'/>
        <img src={caseIcon} alt="Case Icon"  className='icon'/>
        <img src={alignIcon} alt="Align Icon"  className='icon'/>
        <img src={handsIcon} alt="Hands Icon"  className='icon'/>
        <img src={teleCaller} alt="TeleCaller" className='icon'/>
        <img src={settings} alt="Settings"  className='icon'/>
        </div>
      </Col>
    </Row>
  );
}

export default Sider;
