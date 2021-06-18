import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root {
    var(--text-color: #1b1b1b );
    var(--text-color-2: #848484 );
    var(--primary-color: #061121);
    var(--secondary-color: #129dff);
    var(--background-color: #f8f9fb);
    var(--success-color:#2bbfa8);
    var(--error-color: #e86072);
}
body {
    font-size: 1rem;
}

body, button, input, textarea, select {
    font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;

}

`;
