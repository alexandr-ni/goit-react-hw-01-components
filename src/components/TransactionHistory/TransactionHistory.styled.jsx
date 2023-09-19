import styled from 'styled-components';

export const Table = styled.table`
  width: 700px;
  margin-bottom: 20px;
  border-radius: 5px;
  border-spacing: 0;
  overflow: hidden;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 1px 2px 2px #c6c6c6;

  tr {
    :first-child {
      border: none;
    }
    :last-child {
      border: none;
    }
  }
`;

export const TableHead = styled.thead`
  color: ${props => props.theme.colors.white};
  background-color: #00bcd5;

  th {
    padding: 12px;
    border-left: 2px solid ${props => props.theme.colors.light_gray};
    border-right: 2px solid ${props => props.theme.colors.light_gray};
  }
`;

export const TableBody = styled.tbody`
  tr:nth-last-of-type(odd) {
    background-color: ${props => props.theme.colors.gray};
  }

  td {
    padding: 12px;
    border-left: 2px solid ${props => props.theme.colors.light_gray};
    border-right: 2px solid ${props => props.theme.colors.light_gray};
  }
`;
