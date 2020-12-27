import React, { useContext, useState } from 'react';
import './EmployeeSortDropDown.less';
import { PageContext } from '../../../PageProvider/PageProvider';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillFunnelFill } from 'react-icons/bs';
import { TSortField, TSortOrder } from '../../../type/TMainPage';
import { sortFunction, mappingField } from '../../mainPageHelper';

const EmployeeSortDropDown = () => {
  const [dropDownText, setDropDownText] = useState('Joined Date DESC');
  const mapSortFieldText = {
    [TSortField.FULL_NAME]: 'Full Name',
    [TSortField.JOINED_DATE]: 'Joined Date',
    [TSortField.SALARY]: 'Salary',
  };
  const mapSortOrderText = {
    [TSortOrder.ACS]: 'ACS',
    [TSortOrder.DESC]: 'DESC',
  };
  const { page, setPage } = useContext(PageContext);

  const sortTrigger = (sortField: TSortField, sortOrder: TSortOrder): void => {
    const result = sortFunction[sortOrder](
      page?.employeeData,
      mappingField[sortField],
    );
    setPage({
      ...page,
      employeeData: result,
      sort: {
        field: sortField,
        order: sortOrder,
      },
    });
    setDropDownText(
      `${mapSortFieldText[sortField]} ${mapSortOrderText[sortOrder]}`,
    );
  };

  return (
    <Dropdown className="filterButton">
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className="fullWidth"
      >
        <BsFillFunnelFill /> {dropDownText}
      </Dropdown.Toggle>

      <Dropdown.Menu className="fullWidth">
        <Dropdown.Item
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            sortTrigger(TSortField.FULL_NAME, TSortOrder.ACS);
          }}
        >
          Full Name ASC
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            sortTrigger(TSortField.FULL_NAME, TSortOrder.DESC);
          }}
        >
          Full Name DESC
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            sortTrigger(TSortField.SALARY, TSortOrder.ACS);
          }}
        >
          Salary ASC
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            sortTrigger(TSortField.SALARY, TSortOrder.DESC);
          }}
        >
          Salary DESC
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            sortTrigger(TSortField.JOINED_DATE, TSortOrder.ACS);
          }}
        >
          Joined Date ASC
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            sortTrigger(TSortField.JOINED_DATE, TSortOrder.DESC);
          }}
        >
          Joined Date DESC
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default EmployeeSortDropDown;
