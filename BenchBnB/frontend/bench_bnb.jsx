import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.store = store;

    ReactDOM.render(
        <h1> Test </h1>,
        root
    )
})