# Axios Login 


## 목차

-   [1. 소개](#1-소개)
-   [2. 기술 스택](#2-기술-스택)
-   [3. API 명세서](#3-API-명세서)



## 1. 소개
### React Redux와 TypeScript로 기본 ToDo 만들기.
React Redux를 사용하여 기본 ToDo를 만들었습니다.


## 2. 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">


### 3. API 명세서

| 기능           | URL  | Method   | request                                                                       | response                                                      | error                                                                                                                                                                                                                                                                                 |
| -------------- | ---- | -------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 유저 회원가입  | post | register | body / id:string / password:string                                            | 201 / 없음                                                    | 401 이미 존재하는 유저 id 입니다.  /  401 id 또는 password가 존재하지 않습니다. /  401 id 또는 password가 string이 아닙니다.                                                                                                                                                          |
| 유저 로그인    | post | login    | body / id:string / password:string                                            | 201 / token: string / { "token": ~~~~ }                       | 401 존재하지 않는 유저입니다. 401 비밀번호가 일치하지 않습니다. / 401 id 또는 password가 존재하지 않습니다. / 401 id 또는 password가 string이 아닙니다.                                                                                                                               |
| 유저 인증 확인 | get  | user     | header /  authorization: string ex) authorization : Bearer asdffsfsdfafljeope | 200  / message: string {message: “인증에 성공한 요청입니다.”} | 401 / 토큰이 만료되었습니다. 토큰은 60분간 유지됩니다. / 401 / 위조되었거나 잘못된 형식의 token입니다 /  401 /  header에 authorization 정보가 존재하지 않습니다 . /  401 / tokenType이 올바르지 않습니다.(보낸 type은 "${tokenType}" 입니다.) / 401 / token value가 존재하지 않습니다. |               |      |          |                                                                               |                                                               |                                                                                                                                                                                                                                                                                       |
