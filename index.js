"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const restService = express();
restService.use(bodyParser.json());

const baseUrl = "https://dashboard.meraki.com";
var options = {
  headers: {
    "X-Cisco-Meraki-API-Key": "27fece4cac8304e262ee1ee81d27844096e7b2e4"
  },
};

restService.listen((process.env.PORT || 8000), function () {
  console.log("Server listening");
});