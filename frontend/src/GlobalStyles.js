import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0; 
    color: #514f4b;
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
    background: rgba(242, 239, 233, 1);
}

main {
    overflow: scroll;
    padding-top: 16px;
}
input {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 200;
    border-radius: 4px;
    border: 1px solid #a09e9a;
    ::placeholder {
        font-style: italic;
        color: #a09e9a;
      }
}
button {
    font-family: 'Josefin Sans', sans-serif;
}

`
