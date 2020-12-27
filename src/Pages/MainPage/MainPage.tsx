import React, { useState, useEffect } from 'react';
import './MainPage.less';
import { TEmployeePageData } from './TMainPage';
import getEmployeeData from './mainPageHelper';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import PageLayout from '../../common/PageLayout/PageLayout';
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
      <PageLayout>
        <div>
          <EmployeeInformation />
          <p>data recieved</p>
          <Button>testing</Button>
        </div>
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <div>
        <p>loading</p>
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
        </div>
      </PageLayout>
  );
};

export default MainPage;
