import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

import {spacing, colors} from '../styles/vars';

const GlobalStyle = createGlobalStyle`
    ${reset}

    ::selection {
        background-color: #47A3F3;
        color: #fefefe;
    }
    
    html {
        box-sizing: border-box;
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        min-width: 320px;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        -webkit-overflow-scrolling: touch;

        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }
    }

    body {
        background-color: #fff;
        color: ${colors.text};
        font-size: 15px;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        line-height: 1.65;
        text-rendering: optimizeLegibility;
    }

    table {  
        color: #333;
        width: 100%; 
        border-collapse: 
        collapse; border-spacing: 0; 
    }
    
    td, th {  
        height: 30px; 
    }
    
    thead {
        background: #f5f5f5;
        border-radius: 5px;
        text-transform: uppercase;
        font-size: 0.9rem;
    }

    th {  
        font-weight: 500;
        text-align: left;
        padding: 5px;
    }
    
    td {
        color: ${colors.text};
        padding: 5px;
        text-align: left;
    }

    tr {
        border-bottom: 1px solid #ccc;
    }

    a {
        color: ${colors.text};
        cursor: pointer;
    }

    p {
        margin: 1.5em 0;
        color: ${colors.text};
    }

    strong {
        font-weight: 700;
    }

    button,
    input,
    textarea,
    select {
        outline: none;

        :focus {
            box-shadow: 0 0 0 2pt #ecefff;
        }
    }

    code {
        color: ${colors.text};
        background-color: #f3f3f3;
        border-radius: 3px;
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 14px;
        padding: .2em .4em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    pre {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 14px;
        line-height: 1.4em;
        margin: 0 0 ${spacing.normal};
        overflow-x: auto;
        padding: ${spacing.normal};
        white-space: pre;
        background: #011627;
        border-radius: 4px;

        code {
            padding: 0;
        }
    }

    hr {
        border: 0;
        margin: ${spacing.large};
        text-align: center;

        &::before {
            content: '...';
            display: inline-block;
            letter-spacing: 1em;
            line-height: 1;
        }
    }
    
    #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    
    @media (min-width: 768px) {
        body {
            font-size: 18px;
        }

        code, pre {
            font-size: 16px;
        }
    }
`;

export default GlobalStyle;
