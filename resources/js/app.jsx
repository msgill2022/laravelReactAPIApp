import _ from "lodash";
window._ = _;

import axios from "axios";
window.axios = axios;

import { getMetaData } from "./utils/index";
const csrf_token = getMetaData("name", "csrf-token");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.headers.post["X-CSRF-TOKEN"] = csrf_token;

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import "./index";
