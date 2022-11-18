import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #3880fb;
        --sub-color: #3874ff;
        --error-color: #c40707e0;
    }

    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote,
    a, address, cite, code strong,center,
    ol, ul, li,
    fieldset, form, label, legend, caption,
    article, aside, details, embed, 
    figure, figcaption, footer, header, 
    menu, nav, output, section,
    time, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body, button, input{
        font-family: 'Inter', sans-serif;
}
`;
