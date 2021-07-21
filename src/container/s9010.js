import React, { useState } from "react";
import { Button, ButtonToggle, Form, FormGroup, Label, Input } from "reactstrap";

import { useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { getData } from "../api/data";

const MENU_ID = "dams-context";

const Current = (props) => {
    return (
        <div className="wrap-login">
            <header>
                <h1 className="logo">용인시 교통약자 이동지원센터</h1>
            </header>
            <div className="login-area">
                <h2 className="blind">로그인</h2>
                <Form name="login" autoComplete="off" method="POST" className="login-box">
                    <fieldset className="setting-area pw-find">
                        <legend className="blind">비밀번호 변경</legend>

                        <div className="form-control-wrap">
                            <Label for="ip" className="tit-">
                                현재 비밀번호
                            </Label>
                            <Input type="text" name="ip" id="ip" placeholder="127.0.0.1" maxLength="40" />
                            <span className="form-control-clear">
                                <span className="blind">지우기</span>
                            </span>
                        </div>
                        <div className="form-control-wrap mt-2">
                            <Label for="port" className="tit-">
                                새 비밀번호
                            </Label>
                            <Input type="text" name="port" id="port" placeholder="9636" maxLength="40" />
                            <span className="form-control-clear">
                                <span className="blind">지우기</span>
                            </span>
                        </div>
                        <div className="form-control-wrap mt-2">
                            <Label for="extensionNumber" className="tit-">
                                새 비밀번호 확인
                            </Label>
                            <Input type="text" name="extensionNumber" id="extensionNumber" placeholder="" maxLength="40" />
                            <span className="form-control-clear">
                                <span className="blind">지우기</span>
                            </span>
                        </div>
                        <ul className="txt-area">
                            <li>8~16자의 영문 대/소문자, 숫자, 특수기호를 조합하여 사용할 수 있습니다.</li>
                            <li>8~16자의 영문 대/소문자, 숫자, 특수기호를 조합하여 사용할 수 있습니다.</li>
                        </ul>
                        <div className="btn-area mt-5">
                            <ButtonToggle className="c-blue">비밀번호 변경</ButtonToggle>
                            <ButtonToggle>취소</ButtonToggle>
                        </div>
                    </fieldset>
                </Form>
            </div>
        </div>
    );
};

export default Current;
