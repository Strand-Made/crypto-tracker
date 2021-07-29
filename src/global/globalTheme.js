import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root {
    --text-color: #1b1b1b;
    --table-text-color: #6d747f;
    --table-text-color-2: #c5c7cb;
    --text-color-2: #848484;
    --text-color-white: #D1D0D1;
    --primary-color: #061121;
    --secondary-color: #129dff;
    --background-color: #f8f9fb;
    --success-color:#2bbfa8;
    --error-color: #e86072;
}
html {
    height: 100%;
    overflow-x: hidden;
}
body {
    font-size: 1rem;
    background: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--background-color)"};
      color: ${(props) => (props.dark ? "var(--text-color-white)" : null)}
}

body, button, input, textarea, select {
    font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;

}

`;
