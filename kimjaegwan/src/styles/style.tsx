import { createGlobalStyle } from 'styled-components';

const style = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;

}
html,body {
    background-color: blue;
}
`;

// ? body css가 전역스타일링 적용되지 않습니다. 그래서 일반 style.css로 전역스타일링을 설정했습니다.

export default style;
