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
        회원사명: "경기도광역콜",
        별칭: "광역",
        회원사전화: "010-1234-5678",
        대표자명: "오다다",
        사용여부: "사용",
        등록일: "2021-06-18 15:35:44",
    },
    {
        번호: "1",
        회원사명: "경기도광역콜",
        별칭: "광역",
        회원사전화: "010-1234-5678",
        대표자명: "오다다",
        사용여부: "사용",
        등록일: "2021-06-18 15:35:44",
    },
    {
        번호: "1",
        회원사명: "경기도광역콜",
        별칭: "광역",
        회원사전화: "010-1234-5678",
        대표자명: "오다다",
        사용여부: "사용",
        등록일: "2021-06-18 15:35:44",
    },
    {
        번호: "1",
        회원사명: "경기도광역콜",
        별칭: "광역",
        회원사전화: "010-1234-5678",
        대표자명: "오다다",
        사용여부: "사용",
        등록일: "2021-06-18 15:35:44",
    },
    {
        번호: "1",
        회원사명: "경기도광역콜",
        별칭: "광역",
        회원사전화: "010-1234-5678",
        대표자명: "오다다",
        사용여부: "사용",
        등록일: "2021-06-18 15:35:44",
    },
    {
        번호: "1",
        회원사명: "경기도광역콜",
        별칭: "광역",
        회원사전화: "010-1234-5678",
        대표자명: "오다다",
        사용여부: "사용",
        등록일: "2021-06-18 15:35:44",
    },
];

const defaultColDef = {
    width: 100,
    resizable: true,
};

const availability = [
    { value: "전체", label: "전체" },
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const condition = [
    { value: "사용자명", label: "사용자명" },
    { value: "사용자ID", label: "사용자ID" },
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
                                <h2 className="tit-sub">회원사관리</h2>
                            </div>
                            <div className="lst-data">
                                {/* 검색 */}
                                <Form className="tbl-filter">
                                    <FormGroup>
                                        <Label for="availability">사용여부</Label>
                                        <Select
                                            options={availability}
                                            defaultValue={availability[0]}
                                            id="availability"
                                            name="availability"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="condition">조회조건</Label>
                                        <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                                    </FormGroup>
                                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                                    <Col className="btn-group2">
                                        <ButtonToggle className="c-blue">
                                            <i className="las la-plus"></i> 신규
                                        </ButtonToggle>
                                        <ButtonToggle className="">
                                            <i className="las la-search"></i> 검색
                                        </ButtonToggle>
                                        <ButtonToggle className="c-green">
                                            <i className="las la-file-excel"></i> 엑셀
                                        </ButtonToggle>
                                    </Col>
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
                                        <AgGridColumn field="회원사명" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="별칭" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="회원사전화" minWidth={150}></AgGridColumn>
                                        <AgGridColumn field="대표자명"></AgGridColumn>
                                        <AgGridColumn field="사용여부"></AgGridColumn>
                                        <AgGridColumn field="등록일" minWidth={200}></AgGridColumn>
                                    </AgGridReact>
                                </div>
                            </div>

                            {/* layer-회원사등록 */}
                            <div className="layer-" style={{ top: "200px", left: "40px", width: "700px", transform: "translate(0,0)" }}>
                                <div className="head-layer">
                                    <h3>회원사 등록</h3>
                                </div>
                                <div className="cont-layer form-wrap">
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="idPop">회원사명</Label> <span className="ico-c">필수</span>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="text" name="idPop" id="idPop" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <Button className="btn-pop">중복검사</Button>
                                        </Col>
                                        <Col xs="2" className="tit">
                                            <Label for="nicknamePop">회원사별칭</Label> <span className="ico-c">필수</span>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="text" name="nicknamePop" id="nicknamePop" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                            <Button className="btn-pop">중복검사</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="telPop">회원사전화</Label> <span className="ico-c">필수</span>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <NumberFormat format="###-####-####" id="telPop" name="telPop" className="form-control" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col xs="2" className="tit">
                                            <Label for="regiDatePop">등록일</Label>
                                        </Col>
                                        <Col>
                                            <DatePickerButton />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="repiNamePop">대표자명</Label>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="text" name="repiNamePop" id="repiNamePop" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col xs="2" className="tit">
                                            <Label for="useStartPop">사용시작일</Label>
                                        </Col>
                                        <Col>
                                            <DatePickerButton />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="repreTelPop">대표자전화</Label>
                                        </Col>
                                        <Col>
                                            <div className="form-control-wrap">
                                                <Input type="text" name="repreTelPop" id="repreTelPop" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col xs="2" className="tit">
                                            <Label for="useEndPop">사용중지일</Label>
                                        </Col>
                                        <Col>
                                            <DatePickerButton />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="usePop">사용여부</Label>
                                        </Col>
                                        <Col>
                                            <Select options={availability} defaultValue={availability[0]} id="usePop" name="usePop" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="addressPop">주소</Label>
                                        </Col>
                                        <Col xs="5">
                                            <Input type="text" name="addressPop" id="addressPop" />
                                            <Button className="btn-pop">주소검색</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={{ offset: "2", size: "10" }}>
                                            <Input type="text" name="addressPop2" id="addressPop2" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={{ offset: "2", size: "10" }}>
                                            <div className="form-control-wrap">
                                                <Input type="text" name="addressPop3" id="addressPop3" placeholder="주소상세" />
                                                <span className="form-control-clear">
                                                    <span className="blind">지우기</span>
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="2" className="tit">
                                            <Label for="notePop">비고</Label>
                                        </Col>
                                        <Col>
                                            <Input type="textarea" name="notePop" id="notePop" style={{ height: "100px" }} />
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
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Main;
