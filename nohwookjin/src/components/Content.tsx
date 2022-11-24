import styled from "styled-components";
import Image from "next/image";
import profile4 from "../../public/images/profile4.jpeg";
import profile5 from "../../public/images/profile5.jpeg";
import profile6 from "../../public/images/profile6.jpeg";
import profile7 from "../../public/images/profile7.jpeg";

const Content = () => {
  return (
    <StyledSection>
      <StyledH1 id="1">🐈 🐈 고양이</StyledH1>
      <StyledContent>
        <StyledImage src={profile4} alt="profile" width={375} height={450} />
        <StyledText>
          <span>이 친구 이름은 먼지에요.</span>
          <span>페르시안이구, 데려온지 3년 정도 됐네요.</span>
          <span>잘 안뛰어놀고 항상 누워댕기는 친구에요</span>
        </StyledText>
      </StyledContent>
      <StyledContent>
        <StyledText>
          <span>이 친구 이름은 먼지에요.</span>
          <span>페르시안이구, 데려온지 2년 정도 됐네요.</span>
          <span>먼지와 다르게 매우 활동적이랍니다.</span>
        </StyledText>
        <StyledImage src={profile5} alt="profile" width={350} height={450} />
      </StyledContent>
      <StyledH1 id="2">🐕 강아지</StyledH1>
      <StyledContent>
        <StyledImage src={profile6} alt="profile" width={375} height={450} />
        <StyledText>
          <span>이 친구 이름은 콩이에요.</span>
          <span>포메라니안인데 치와와랑 섞였어요. </span>
          <span>데려온지 8년 정도 됐네요.</span>
        </StyledText>
      </StyledContent>
      <StyledH1 id="3">🐈 🐕 🐈 마치며...</StyledH1>
      <StyledContent>
        <StyledImage src={profile7} alt="profile" width={500} height={450} />
        <StyledText>
          <span>새벽엔 이 친구들 이러고 있답니다.</span>
        </StyledText>
      </StyledContent>
    </StyledSection>
  );
};

export default Content;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledH1 = styled.h1`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
  margin-bottom: 3rem;
  width: 100%;
`;
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 10px;
`;
const StyledContent = styled.div`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
`;
const StyledImage = styled(Image)`
  border: 8px solid white;
`;
