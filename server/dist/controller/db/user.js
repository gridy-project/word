"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = getUser;

var _db = require("src/controller/db/db.js");

async function getUser() {
  (0, _db.executeSQL)(async conn => {
    const result = await conn.query("SELECT * FROM user");
    console.log(result);
  });
}