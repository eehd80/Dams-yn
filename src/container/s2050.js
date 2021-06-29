import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";

const webCall = [
    {
        번호: "1",
        승인상태: "승인대기",
        고객명: "최유금",
        핸드폰번호: "010-2222-2222",
        WebID: "makebelie",
        이용대상자유형1: "지폐성장애",
        장애등급1: "1급",
        이용대상자유형2: "노약자",
        장애등급2: "등급외",
        휠체어: "휠체어수동",
        추가전화번호1: "070-2222-3333",
        추가전화번호2: "010-2222-3333",
        추가전화번호3: "010-2222-3333",
    },
    {
        번호: "1",
        승인상태: "승인대기",
        고객명: "최유금",
        핸드폰번호: "010-2222-2222",
        WebID: "makebelie",
        이용대상자유형1: "지폐성장애",
        장애등급1: "1급",
        이용대상자유형2: "노약자",
        장애등급2: "등급외",
        휠체어: "휠체어수동",
        추가전화번호1: "070-2222-3333",
        추가전화번호2: "010-2222-3333",
        추가전화번호3: "010-2222-3333",
    },
];

const defaultColDef = {
    width: 100,
    resizable: true,
};

const condition = [
    { value: "고객명", label: "고객명" },
    { value: "고객전화번호", label: "고객전화번호" },
    { value: "webID", label: "webID" },
];
const approval = [
    { value: "승인대기", label: "승인대기" },
    { value: "승인", label: "승인" },
    { value: "거부", label: "거부" },
];
const usePop = [
    { value: "승인대기", label: "승인대기" },
    { value: "승인", label: "승인" },
    { value: "거부", label: "거부" },
];
const useTarget = [
    { value: "노약자", label: "노약자" },
    { value: "지체", label: "지체" },
    { value: "장기요양", label: "장기요양" },
    { value: "뇌병변", label: "뇌병변" },
    { value: "지체성장애", label: "지체성장애" },
    { value: "장기요양", label: "장기요양" },
];
const useTarget2 = [
    { value: "1급", label: "1급" },
    { value: "1급", label: "1급" },
];
const wheelchair = [
    { value: "미사용", label: "미사용" },
    { value: "자동", label: "자동" },
    { value: "수동", label: "수동" },
    { value: "보행보조기구", label: "보행보조기구" },
];
const sex = [
    { value: "남성", label: "남성" },
    { value: "여성", label: "여성" },
];

class Main extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <div id="main">
                    <Receive />
                    <div className="contents">
                        <Map />
                        <div className="wrap-data">
                            <div className="tit-sub-wrap">
                                <h2 className="tit-sub">홈페이지 가입 고객관리</h2>
                            </div>
                            <div className="lst-data">
                                {/* 검색 */}
                                <Form className="tbl-filter">
                                    <FormGroup>
                                        <Label for="approvalPop" className="blind">
                                            승인여부
                                        </Label>
                                        <Select options={approval} defaultValue={approval[0]} id="approval" name="approval" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="condition" className="blind">
                                            조회조건
                                        </Label>
                                        <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                                    </FormGroup>
                                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                                    <div className="btn-group2">
                                        <ButtonToggle className="c-blue">
                                            <i className="las la-plus"></i> 신규
                                        </ButtonToggle>
                                        <ButtonToggle className="">
                                            <i className="las la-search"></i> 검색
                                        </ButtonToggle>
                                        <ButtonToggle className="c-green">
                                            <i className="las la-file-excel"></i> 엑셀
                                        </ButtonToggle>
                                    </div>
                                </Form>
                                {/* 리스트 */}
                                <div className="tbl- ag-theme-balham">
                                    <AgGridReact
                                        rowData={webCall}
                                        defaultColDef={defaultColDef}
                                        enableRangeSelection={true}
                                        allowContextMenuWithControlKey={true}
                                    >
                                        <AgGridColumn field="번호" minWidth={60} maxWidth={70}></AgGridColumn>
                                        <AgGridColumn field="승인상태" minWidth={100}></AgGridColumn>
                                        <AgGridColumn field="고객명"></AgGridColumn>
                                        <AgGridColumn field="핸드폰번호" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="WebID" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="이용대상자유형1" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="장애등급1"></AgGridColumn>
                                        <AgGridColumn field="이용대상자유형2" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="장애등급2"></AgGridColumn>
                                        <AgGridColumn field="휠체어" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="추가전화번호1" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="추가전화번호2" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="추가전화번호3" minWidth={150}></AgGridColumn>
                                    </AgGridReact>
                                </div>

                                {/* layer-홈페이지 가입고객 정보 */}
                                <div className="layer-" style={{ top: "200px", left: "40px", width: "700px", transform: "translate(0,0)" }}>
                                    <div className="head-layer">
                                        <h3>홈페이지 가입고객 정보</h3>
                                    </div>
                                    <div className="cont-layer form-wrap">
                                        <Row>
                                            <Col xs="2" className="tit">
                                                <Label for="namePop">고객명</Label>
                                            </Col>
                                            <Col>
                                                <div className="form-control-wrap">
                                                    <Input type="text" name="namePop" id="namePop" />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                            </Col>
                                            <Col xs="2" className="tit">
                                                <Label for="idPop">WebID</Label>
                                            </Col>
                                            <Col>
                                                <div className="form-control-wrap">
                                                    <Input type="text" name="idPop" id="idPop" />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="2" className="tit">
                                                <Label for="phonePop">핸드폰번호</Label>
                                            </Col>
                                            <Col>
                                                <div className="form-control-wrap">
                                                    <NumberFormat
                                                        format="###-####-####"
                                                        id="phonePop"
                                                        name="phonePop"
                                                        className="form-control"
                                                    />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                            </Col>
                                            <Col xs="2" className="tit">
                                                <Label for="telPop">일반전화</Label>
                                            </Col>
                                            <Col>
                                                <div className="form-control-wrap">
                                                    <NumberFormat
                                                        format="###-####-####"
                                                        id="telPop"
                                                        name="telPop"
                                                        className="form-control"
                                                    />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="2" className="tit">
                                                <Label for="useTargetPop">이용대상자 유형1</Label> <span className="ico-c">필수</span>
                                            </Col>
                                            <Col>
                                                <Select
                                                    options={useTarget}
                                                    defaultValue={useTarget[0]}
                                                    id="useTargetPop"
                                                    name="useTargetPop"
                                                />
                                            </Col>
                                            <Col xs="2" className="tit">
                                                <Label for="useTargetPop2">이용대상자 유형2</Label>
                                            </Col>
                                            <Col>
                                                <Select
                                                    options={useTarget2}
                                                    defaultValue={useTarget2[0]}
                                                    id="useTargetPop2"
                                                    name="useTargetPop2"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="2" className="tit">
                                                <Label for="wheelchairPop">휠체어</Label> <span className="ico-c">필수</span>
                                            </Col>
                                            <Col>
                                                <Select
                                                    options={wheelchair}
                                                    defaultValue={wheelchair[0]}
                                                    id="wheelchairPop"
                                                    name="wheelchairPop"
                                                />
                                            </Col>
                                            <Col xs="2" className="tit">
                                                <Label for="useEndPop">생년월일</Label>
                                            </Col>
                                            <Col>
                                                <DatePickerButton />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="2" className="tit">
                                                <Label for="adressPop">주소</Label>
                                            </Col>
                                            <Col xs="5">
                                                <div className="form-control-wrap">
                                                    <Input type="text" name="adressPop" id="adressPop" />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                                <Button className="btn-pop">주소검색</Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={{ offset: "2", size: "10" }}>
                                                <div className="form-control-wrap">
                                                    <Input type="text" name="adressPop2" id="adressPop2" />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={{ offset: "2", size: "10" }}>
                                                <div className="form-control-wrap">
                                                    <Input type="text" name="adressPop3" id="adressPop3" placeholder="주소상세" />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="2" className="tit">
                                                <Label for="emailPop">이메일</Label>
                                            </Col>
                                            <Col xs="4">
                                                <div className="form-control-wrap">
                                                    <Input type="email" name="emailPop" id="emailPop" />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                            </Col>
                                            <Col className="justify-content-start align-items-center">
                                                <FormGroup check inline>
                                                    <Input type="checkbox" id="emailPop2" name="emailPop2" />
                                                    <Label for="emailPop2"> 메일링 서비스여부 </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Input type="checkbox" id="emailPop3" name="emailPop3" />
                                                    <Label for="emailPop3">SMS수신여부</Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="2" className="tit">
                                                <Label for="sexPop">성별</Label>
                                            </Col>
                                            <Col xs="4">
                                                <Select options={sex} defaultValue={sex[0]} id="sexPop" name="sexPop" />
                                            </Col>
                                            <Col xs="2" className="tit">
                                                <Label for="emailPop">의사소통여부</Label>
                                            </Col>
                                            <Col xs="4">
                                                <div className="form-control-wrap">
                                                    <Input type="email" name="emailPop" id="emailPop" />
                                                    <span className="form-control-clear">
                                                        <span className="blind">지우기</span>
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="btn-area">
                                            <Col></Col>
                                            <Col>
                                                <Button className="btn-w c-blue">저장</Button>
                                            </Col>
                                            <Col>
                                                <Button className="btn-w">취소</Button>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                    </div>
                                    <Button className="btn-close">
                                        <i className="las la-times"></i>
                                        <span className="blind">닫기</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Main;
