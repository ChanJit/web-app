import React, { useContext } from 'react';
import { PageContext } from '../../../PageProvider/PageProvider';
import { BsCalendar, BsCreditCard, BsCardHeading } from 'react-icons/bs';
import './EmployeeCardList.less';

const EmployeeCardList = () => {
  const employeeData = useContext(PageContext);
  const employeeList = employeeData?.page?.employeeData;
  return (
    <div>
      {employeeList?.length > 0 &&
        employeeList.map((employee) => (
          <div className="employeeItem">
            <div className="employeeInfo">
              <BsCardHeading /> {employee?.fullName}
            </div>
            <div className="employeeInfo">
              <BsCalendar /> {employee?.dateDisplayFormat}
            </div>
            <div className="employeeInfo">
              <BsCreditCard /> {employee?.displaySalary}
            </div>
          </div>
        ))}
    </div>
  );
};

export default EmployeeCardList;
