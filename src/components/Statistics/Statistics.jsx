import {
  StatisticsWrapper,
  Title,
  StatList,
  StatItem,
  Percentage,
  getRandomHexColor,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      <Title>{title}</Title>

      <StatList>
        {stats.map(item => {
          return (
            <StatItem
              key={item.id}
              number={item.percentage}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span>{item.label}</span>
              <Percentage>{item.percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsWrapper>
  );
};
