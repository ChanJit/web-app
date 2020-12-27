import React, { useState, useEffect } from 'react';
import './MainPage.less';
import { TEmployeePageData } from './TMainPage';
import getEmployeeData from './mainPageHelper';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import EmployeeInformation from './components/EmployeeInformation/EmployeeInformation';

const MainPage = () => {
  const [employeeData, setEmployeeData] = useState<Array<TEmployeePageData>>();
  const getData = async () => {
    try {
      setEmployeeData(await getEmployeeData());
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (false) {
    return (
      <div className="backdrop">
        <div className="app">
          <EmployeeInformation />
          <p>data recieved</p>
          <Button>testing</Button>
        </div>
      </div>
    );
  }
  return (
    <div className="backdrop">
      <div className="app">
        <p>loading</p>
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
      </div>
    </div>
  );
};

export default MainPage;
