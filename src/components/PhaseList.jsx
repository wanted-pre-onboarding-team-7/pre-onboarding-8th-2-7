import IssueItem from './IssueItem';
import styled from 'styled-components';

const PhaseList = ({ title, issue, phase }) => {
  return (
    <SectionPhase>
      <H2Phase>{title}</H2Phase>
      <ul>
        {issue?.map((issue) => {
          return <IssueItem key={issue.id} data={issue} phase={phase} />;
        })}
      </ul>
    </SectionPhase>
  );
};

const SectionPhase = styled.section`
  margin: 10px;
  /* border: 1px solid black; */
`;

const H2Phase = styled.h2`
  margin-bottom: 6px;
  font-weight: 500;
`;

export default PhaseList;
