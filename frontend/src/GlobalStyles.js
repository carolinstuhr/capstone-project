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
    margin: 0
}

main {
    overflow: scroll;
}
`
