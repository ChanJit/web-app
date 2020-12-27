import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';
import { getEmployeeData } from './mainPageHelper';
import {
  TStatus,
  TSortOrder,
  TSortField,
} from '../type/TMainPage';

jest.mock('./mainPageHelper', () => ({
  getEmployeeData: jest.fn(),
}));

describe('Main Page component test',() => {
  it('Loading status', () => {
    (getEmployeeData as jest.Mock).mockReturnValue({
      status: TStatus.LOADING,
      highestEarning: 'RM 0.00',
      newJoinerDate: 'dd/mm/yyy',
      employeeData: [],
      sort: {
        order: TSortOrder.DESC,
        field: TSortField.JOINED_DATE,
      }});
    render(<MainPage />);
    const linkElement = screen.getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
  });
});

