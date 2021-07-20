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
                    <fieldset>
                        <legend className="blind">로그인</legend>
                        <div className="form-control-wrap">
                            <Label for="id" className="blind">
                                아이디
                            </Label>
                            <Input type="text" name="id" id="id" placeholder="아이디" maxLength="40" />
                            <span className="form-control-clear">
                                <span className="blind">지우기</span>
                            </span>
                        </div>
                        <div className="form-control-wrap mt-2">
                            <Label for="pw" className="blind">
                                비밀번호
                            </Label>
                            <Input type="password" name="pw" id="pw" placeholder="비밀번호" maxLength="40" />
                            <span className="form-control-clear">
                                <span className="blind">지우기</span>
                            </span>
                        </div>
                        <div className="error">다시 로그인해 주세요.</div>
                        <input type="submit" title="로그인" alt="로그인" value="로그인" className="btn-global" />

                        <div className="check-area">
                            <FormGroup check inline className="ico-save">
                                <Input type="checkbox" id="saveID" name="saveID" />
                                <Label for="saveID"> 아이디 저장 </Label>
                            </FormGroup>
                            <div className="setting">
                                <Button>
                                    <i className="las la-user-cog"></i> 환경설정
                                </Button>
                            </div>
                        </div>
                    </fieldset>

                    {/* 환경설정 클릭시 아래 설정 보이게... */}
                    <fieldset className="setting-area" style={{ display: "block" }}>
                        <legend className="blind">로그인</legend>

                        <div className="form-control-wrap">
                            <Label for="ip" className="tit-">
                                CID아이피
                            </Label>
                            <Input type="text" name="ip" id="ip" placeholder="127.0.0.1" maxLength="40" />
                            <span className="form-control-clear">
                                <span className="blind">지우기</span>
                            </span>
                        </div>
                        <div className="form-control-wrap mt-2">
                            <Label for="port" className="tit-">
                                CID포트
                            </Label>
                            <Input type="text" name="port" id="port" placeholder="9636" maxLength="40" />
                            <span className="form-control-clear">
                                <span className="blind">지우기</span>
                            </span>
                        </div>
                        <div className="form-control-wrap mt-2">
                            <Label for="extensionNumber" className="tit-">
                                내선번호
                            </Label>
                            <Input type="text" name="extensionNumber" id="extensionNumber" placeholder="" maxLength="40" />
                            <span className="form-control-clear">
                                <span className="blind">지우기</span>
                            </span>
                        </div>
                        <div className="map-select">
                            <div className="tit-">지도 선택</div>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" /> 네이버지도
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" /> 다음지도
                                </Label>
                            </FormGroup>
                        </div>
                        <div className="btn-area">
                            <ButtonToggle className="c-yellow">저장</ButtonToggle>
                            <ButtonToggle>취소</ButtonToggle>
                        </div>
                    </fieldset>
                </Form>
            </div>
        </div>
    );
};

export default Current;
