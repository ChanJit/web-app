import React, { useContext } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import './EmployeeInformation.less';
import { PageContext } from '../../../PageProvider/PageProvider';

const EmployeeInformation = () => {
  const employeeData = useContext(PageContext);
  return (
    <div className="employeeHighlightRoot">
      <div className="companyInformation">
        <BsPeopleFill />
        <p>{employeeData?.page?.employeeData?.length}</p> 
      </div>
      <div className="companyHighlight">
        <p>Highest earning employee: {employeeData?.page?.highestEarning}</p>
        <p>Employee most recently joined: {employeeData?.page?.newJoinerDate}</p>
      </div>
    </div>
  );
};

export default EmployeeInformation;
