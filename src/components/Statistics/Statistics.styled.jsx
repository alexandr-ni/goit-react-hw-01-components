import styled from 'styled-components';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsWrapper = styled.section`
  width: 400px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
  overflow: hidden;
`;

export const Title = styled.h2`
  margin: 30px 0;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkblue};
`;

export const StatList = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  gap: 10px;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 50px;
  align-items: center;
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  font-weight: 500;
`;
