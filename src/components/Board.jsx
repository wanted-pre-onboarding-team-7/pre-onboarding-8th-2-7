import IssueItem from './IssueItem';
import styled from 'styled-components';

const Container = () => {
  return (
    <Article>
      <Nav>
        <button>새로 만들기</button>
      </Nav>
      <DivWrapper>
        <SectionPhase>
          <H2Phase>할 일</H2Phase>
          <IssueItem />
          <IssueItem />
        </SectionPhase>
        <SectionPhase>
          <H2Phase>진행 중</H2Phase>
          <IssueItem />
        </SectionPhase>
        <SectionPhase>
          <H2Phase>완료</H2Phase>
          <IssueItem />
        </SectionPhase>
      </DivWrapper>
    </Article>
  );
};

const Article = styled.article`
  width: 900px;
  margin: 0 auto;
  padding-top: 20px;
`;

const Nav = styled.div`
  height: 30px;
  text-align: right;
`;

const DivWrapper = styled.div`
  display: flex;
  /* border: 1px solid pink; */
`;

const SectionPhase = styled.section`
  margin: 10px;
  /* border: 1px solid black; */
`;

const H2Phase = styled.h2`
  margin-bottom: 6px;
  font-weight: 500;
`;

export default Container;
