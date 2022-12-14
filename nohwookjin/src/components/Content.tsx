import styled from "styled-components";
import Image from "next/image";
import profile4 from "../../public/images/profile4.jpeg";
import profile5 from "../../public/images/profile5.jpeg";
import profile6 from "../../public/images/profile6.jpeg";
import profile7 from "../../public/images/profile7.jpeg";

const Content = () => {
  return (
    <StyledSection>
      <StyledH1 id="1">π π κ³ μμ΄</StyledH1>
      <StyledContent>
        <StyledImage src={profile4} alt="profile" width={375} height={450} />
        <StyledText>
          <span>μ΄ μΉκ΅¬ μ΄λ¦μ λ¨Όμ§μμ.</span>
          <span>νλ₯΄μμμ΄κ΅¬, λ°λ €μ¨μ§ 3λ μ λ λλ€μ.</span>
          <span>μ μλ°μ΄λκ³  ν­μ λμλκΈ°λ μΉκ΅¬μμ</span>
        </StyledText>
      </StyledContent>
      <StyledContent>
        <StyledText>
          <span>μ΄ μΉκ΅¬ μ΄λ¦μ λ¨Όμ§μμ.</span>
          <span>νλ₯΄μμμ΄κ΅¬, λ°λ €μ¨μ§ 2λ μ λ λλ€μ.</span>
          <span>λ¨Όμ§μ λ€λ₯΄κ² λ§€μ° νλμ μ΄λλλ€.</span>
        </StyledText>
        <StyledImage src={profile5} alt="profile" width={350} height={450} />
      </StyledContent>
      <StyledH1 id="2">π κ°μμ§</StyledH1>
      <StyledContent>
        <StyledImage src={profile6} alt="profile" width={375} height={450} />
        <StyledText>
          <span>μ΄ μΉκ΅¬ μ΄λ¦μ μ½©μ΄μμ.</span>
          <span>ν¬λ©λΌλμμΈλ° μΉμμλ μμμ΄μ. </span>
          <span>λ°λ €μ¨μ§ 8λ μ λ λλ€μ.</span>
        </StyledText>
      </StyledContent>
      <StyledH1 id="3">π π π λ§μΉλ©°...</StyledH1>
      <StyledContent>
        <StyledImage src={profile7} alt="profile" width={500} height={450} />
        <StyledText>
          <span>μλ²½μ μ΄ μΉκ΅¬λ€ μ΄λ¬κ³  μλ΅λλ€.</span>
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
