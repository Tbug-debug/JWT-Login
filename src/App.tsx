import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

interface OnToSubmit {
  ToDoTitle: string;
  ToDoText: string;
  id: string;
  passwd: string;
}

interface ResponseData {
  token: string;
}

function App() {
  const { register, handleSubmit, reset } = useForm<OnToSubmit>();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [now] = useState<Date>(new Date());
  const [after10m] = useState<Date>(new Date());

  // react-hook-form 라이브러리로 회원가입과 회원가입 input은 주석처리 해놓음.

  /*  const onResigseter: SubmitHandler<OnToSubmit> = (data) => { // 회원가입 POST
    const datas = {
      id: data.id,
      password: data.passwd,
    };
    axios
      .post<ResponseData>("API주소/register", datas)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
  }; */

  const loginSub: SubmitHandler<OnToSubmit> = (data) => {
    // 로그인 POST
    const datas = {
      id: data.ToDoTitle,
      password: data.ToDoText,
    };

    axios
      .post<ResponseData>("API 주소/login", datas)
      .then((response) => {
        const { token } = response.data;
        after10m.setMinutes(now.getMinutes() + 1);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setCookie("accessJWTToken", token, { path: "/", expires: after10m });
      })
      .catch((error) => console.log(error));
    reset();
  };

  const authCheck = () => {
    // 회원인증 및 쿠키 확인 GET
    const token = cookies.accessJWTToken;

    axios
      .get("API 주소/user", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
          "X-Custom-Header": "value",
        },
      })
      .catch(() => {
        alert("토큰이 만료되어 로그아웃 되었습니다.");
      });
  };

  useEffect(() => {
    // 쿠키 만료 확인 useEffect()
    authCheck();
  }, []);

  // 로그아웃은 button 만든 후에 onClick 달고 함수 안에서 removeCookie('쿠키이름') 실행시켜주면 됨.

  return (
    <div className="App">
      <form onSubmit={handleSubmit(loginSub)}>
        <input
          {...register("ToDoTitle", { required: true })}
          placeholder="제목"
        />
        <input
          {...register("ToDoText", { required: true })}
          placeholder="내용"
        />
        <button>로그인</button>
      </form>
      {/*   <div>
        <form onSubmit={handleSubmit(onResigseter)}>
          <input {...register("id", { required: true })} placeholder="아이디" />
          <input
            {...register("passwd", { required: true })}
            placeholder="비밀번호"
          />
          <button>회원가입</button>
        </form>
      </div> */}
    </div>
  );
}

export default App;
