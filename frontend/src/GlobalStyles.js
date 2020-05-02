import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0; 
    color: #514f4b;
}

#root {
    display: grid;
    grid-template-rows: 48px auto;
    height: 100vh;
}

main {
    overflow: scroll;
}
`
