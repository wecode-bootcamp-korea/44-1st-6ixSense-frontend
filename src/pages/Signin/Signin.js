import React, { useState } from 'react';
import './Signin.scss';
import { useNavigate, Link } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    idValue: '',
    pwValue: '',
  });

  const { idValue, pwValue } = userInfo;

  const getUserInto = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const valueReset = event => {
    const { name } = event.target;
    setUserInfo({ ...userInfo, [name]: '' });
  };

  const validate =
    idValue.match(/^[a-z0-9]{4,12}$/) &&
    pwValue.match(
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
    );

  return (
    <div className="signin">
      <div className="header">
        <div className="headerBox">
          <div className="inner">
            <h1 className="pageTitle">로그인</h1>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <button className="btnPageClose" type="button">
                X
              </button>
            </Link>
          </div>
        </div>
      </div>
      <section className="containar">
        <div className="loginSection">
          <div className="loginGuide">
            <span>아이디로 로그인해주세요.</span>
          </div>
          <form className="loginForm">
            <input
              className="loginInput"
              type="text"
              placeholder="아이디 입력"
              value={idValue}
              name="idValue"
              onChange={getUserInto}
            />
            {idValue ? (
              <button
                className="idDelBtn"
                type="button"
                name="idValue"
                onClick={valueReset}
              >
                x
              </button>
            ) : null}
            <div>
              <input
                className="passwordInput"
                type="password"
                placeholder="비밀번호 입력(영문,숫자,특수문자 입력)"
                value={pwValue}
                name="pwValue"
                onChange={getUserInto}
              />
              {pwValue ? (
                <button
                  className="pwDelBtn"
                  type="button"
                  name="pwValue"
                  onClick={valueReset}
                >
                  x
                </button>
              ) : null}
            </div>
          </form>
          <div>
            <input className="loginCheck" type="checkbox" />
            <span>아이디 저장</span>
          </div>
          <div>
            <button
              className={validate ? 'activeLoginBtn' : 'loginBtn'}
              disabled={!validate}
              onClick={() => navigate('/')}
            >
              로그인
            </button>
          </div>
          <ul className="bottomMenu">
            <li>
              <a className="idSearch">아이디 찾기</a>
            </li>
            <li>
              <a className="pwSearch">비밀번호 찾기</a>
            </li>
          </ul>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <button className="joinMembership" type="button">
              <span>아직 회원이 아니세요?</span> <em> 회원가입 {'>'}</em>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Signin;
