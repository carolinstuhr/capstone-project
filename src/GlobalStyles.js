import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0; 
    color: var(--primary);
    font-family: 'Josefin Sans', sans-serif;
}
h1 {
    margin: 0;
    text-align: center;
    margin-left: 0;
    font-size: 32px;
    padding-top: 4px;
    font-family: 'Nanum Myeongjo', serif;
    font-weight: 400;
}
header {
    background: var(--primary-background)
}

main {
    overflow: scroll;
    padding-top: 16px;
}
input {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 200;
    border-radius: 4px;
    border: 1px solid var(--tertiary);
    ::placeholder {
        font-style: italic;
        color: var(--tertiary);
      }
}
button {
    font-family: 'Josefin Sans', sans-serif;
}

:root {
    --primary: rgba(81, 79, 75, 1);
    --primary-opaque: rgba(81, 79, 75, 0.4);
    --primary-background: rgba(242, 239, 233, 1);
    --primary-backgroundopaque: rgba(242, 239, 233, 0.7);
    --secondary: rgba(105, 102, 96, 1);
    --secondary-background: rgba(200, 192, 176, 1);
    --input-background: rgba(242, 239, 233, 0.5);
    --tertiary: rgba(160, 158, 154, 1);
    }
`
