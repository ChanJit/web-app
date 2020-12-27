import React, { useContext } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import './EmployeeInformation.less';
import { PageContext } from '../../../PageProvider/PageProvider';

const EmployeeInformation = () => {
  const employeeData = useContext(PageContext);
  return (
    <div>
      <BsPeopleFill />
      <p>{employeeData?.page?.employeeData?.length}</p>
      <p>{employeeData?.page?.highestEarning}</p>
      <p>{employeeData?.page?.newJoinerDate}</p>
    </div>
  );
};

export default EmployeeInformation;
