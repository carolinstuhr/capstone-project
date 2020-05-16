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

main {
    overflow: scroll;
}
`
