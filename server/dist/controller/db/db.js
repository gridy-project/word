"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeSQL = executeSQL;

var _promise = _interopRequireDefault(require("mysql2/promise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let conn;

async function connect() {
  conn = await _promise.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
  });
  conn.connect();
}

async function disconnect() {
  conn.end();
}

async function executeSQL(callback) {
  connect();
  callback(conn);
  disconnect();
}