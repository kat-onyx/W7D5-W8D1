import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    window.login = login;
    window.signup = signup;
    window.logout = logout;
    
    ReactDOM.render(
        <h1> Test </h1>,
        root
    )
})