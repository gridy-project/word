//express 모듈 불러오기
import express from "express";
import routerIndex from "./router/index";

import "dotenv/config";

//express 사용
const app = express();

//Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routerIndex);

// http listen port 생성 서버 실행
app.listen(5500, () => console.log("Run Server..."));
