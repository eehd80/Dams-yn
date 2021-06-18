import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import NumberFormat from "react-number-format";
import Select from "react-select";
import DatePickerButton from "./DatePicker";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const purpose = [
    { value: "관내병원", label: "관내병원" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];
const disabilityType = [
    { value: "뇌병변", label: "뇌병변" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];
const disabilityGrade = [
    { value: "1급", label: "1급" },
    { value: "2급", label: "2급" },
    { value: "3급", label: "3급" },
    { value: "4급", label: "4급" },
    { value: "5급", label: "5급" },
    { value: "6급", label: "6급" },
];
const wheelchair = [
    { value: "미사용", label: "미사용" },
    { value: "사용", label: "사용" },
];
const communication = [
    { value: "가능", label: "가능" },
    { value: "불가능", label: "불가능" },
];

const rowData = [
    { 상태: "접수", 접수시간: "21-06-02", 이용예정시간: "10:00", 배차예정시간: "12:00", 승차위치: "강남역", 하차위치: "삼성역" },
    { 상태: "접수", 접수시간: "21-06-02", 이용예정시간: "10:00", 배차예정시간: "12:00", 승차위치: "강남역", 하차위치: "삼성역" },
    { 상태: "접수", 접수시간: "21-06-02", 이용예정시간: "10:00", 배차예정시간: "12:00", 승차위치: "강남역", 하차위치: "삼성역" },
    { 상태: "접수", 접수시간: "21-06-02", 이용예정시간: "10:00", 배차예정시간: "12:00", 승차위치: "강남역", 하차위치: "삼성역" },
    { 상태: "접수", 접수시간: "21-06-02", 이용예정시간: "10:00", 배차예정시간: "12:00", 승차위치: "강남역", 하차위치: "삼성역" },
    { 상태: "접수", 접수시간: "21-06-02", 이용예정시간: "10:00", 배차예정시간: "12:00", 승차위치: "강남역", 하차위치: "삼성역" },
    { 상태: "접수", 접수시간: "21-06-02", 이용예정시간: "10:00", 배차예정시간: "12:00", 승차위치: "강남역", 하차위치: "삼성역" },
    { 상태: "접수", 접수시간: "21-06-02", 이용예정시간: "10:00", 배차예정시간: "12:00", 승차위치: "강남역", 하차위치: "삼성역" },
];

export default function Receive() {
    const [isSelected, setIsSelected] = useState(false);
    const onClickFold = function () {
        console.log("test");
        setIsSelected(!isSelected);
    };
    return (
        <div id="receve" className={isSelected ? "is-folded" : ""}>
            {/* is-folded 추가 : 접수창 접기 */}

            <button role="button" className="btn-fold" aria-expanded="true" onClick={onClickFold}>
                <span className="blind">목록영역 접기</span>
            </button>

            <div className="form-wrap">
                <Form className="form-receipt">
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="tel">고객전화번호</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <NumberFormat format="###-####-####" id="tel" name="tel" className="form-control" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="purpose">이용목적</Label>
                        </Col>
                        <Col>
                            <Select options={purpose} defaultValue={purpose[0]} id="purpose" name="purpose" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="replyTel">회신번호</Label>
                            <button className="btn-">
                                <i class="las la-search"></i>
                                <span className="blind">검색</span>
                            </button>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <NumberFormat format="###-####-####" id="replyTel" name="replyTel" className="form-control" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="companion">동행인</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="number" name="companion" id="companion" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="name">고객명</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="name" id="name" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="receiveNum">고객접수번호</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <NumberFormat format="###-####-####" id="receiveNum" name="receiveNum" className="form-control" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="disabilityType">장애종류</Label>
                        </Col>
                        <Col>
                            <Select options={disabilityType} defaultValue={disabilityType[0]} id="disabilityType" name="disabilityType" />
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="disabilityGrade">장애등급</Label>
                        </Col>
                        <Col>
                            <Select
                                options={disabilityGrade}
                                defaultValue={disabilityGrade[0]}
                                id="disabilityGrade"
                                name="disabilityGrade"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="wheelchair">휠체어</Label>
                        </Col>
                        <Col>
                            <Select options={wheelchair} defaultValue={wheelchair[0]} id="wheelchair" name="wheelchair" />
                        </Col>
                        <Col xs="2" className="tit">
                            <Label for="communication">소통여부</Label>
                        </Col>
                        <Col>
                            <Select options={communication} defaultValue={communication[0]} id="communication" name="communication" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            접수서류
                        </Col>
                        <Col>
                            <FormGroup check inline>
                                <Input type="checkbox" id="paper1" name="paper1" /> <Label for="paper1"> 심사신청서 </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input type="checkbox" id="paper2" name="paper2" /> <Label for="paper2">이용동의서</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input type="checkbox" id="paper3" name="paper3" /> <Label for="paper3">복지카드 및 신분증사본</Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="vehicleIn">승차위치</Label>
                        </Col>
                        <Col xs="6">
                            <div className="form-control-wrap">
                                <Input type="text" id="vehicleIn" name="vehicleIn" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" id="vehicleIn2" name="vehicleIn2" placeholder="배차가능기사" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="vehicleOut">하차위치</Label>
                        </Col>
                        <Col xs="6">
                            <div className="form-control-wrap">
                                <Input type="text" id="vehicleOut" name="vehicleOut" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <div className="form-control-wrap">
                                <Input type="text" id="vehicleOut2" name="vehicleOut2" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">분</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <FormGroup check>
                                <Input type="checkbox" id="booking" /> <Label for="booking">예약</Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <DatePickerButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="interval">배차제한시간</Label>
                        </Col>
                        <Col xs="3" className="d-flex">
                            <div className="form-control-wrap">
                                <Input type="number" name="interval" id="interval" placeholder="0" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">분전</span>
                        </Col>
                        <Col xs="3" className="d-flex">
                            <div className="form-control-wrap">
                                <Input type="number" name="interval2" id="interval2" placeholder="30" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">분후</span>
                        </Col>
                        <Col>
                            <Button color="primary" className="btn-w">
                                예약스케줄
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <FormGroup check>
                                <Input type="checkbox" id="shuttle" />
                                <Label check for="shuttle">
                                    왕복예약
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <DatePickerButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="intervalAdd">배차제한시간</Label>
                        </Col>
                        <Col xs="3" className="d-flex">
                            <div className="form-control-wrap">
                                <Input type="number" name="intervalAdd" id="intervalAdd" placeholder="0" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">분전</span>
                        </Col>
                        <Col xs="3" className="d-flex">
                            <div className="form-control-wrap">
                                <Input type="number" name="intervalAdd2" id="intervalAdd2" placeholder="30" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">분후</span>
                        </Col>
                        <Col>
                            <Button color="primary" className="btn-w">
                                예약스케줄
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="callBooking">콜이용실적</Label>
                        </Col>
                        <Col className="d-flex">
                            <span className="unit- unit-r">합계</span>
                            <div className="form-control-wrap">
                                <Input type="number" name="callBooking" id="callBooking" placeholder="0" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <span className="unit- unit-r">승차</span>
                            <div className="form-control-wrap">
                                <Input type="number" name="callBooking2" id="callBooking2" placeholder="0" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <span className="unit- unit-r">취소</span>
                            <div className="form-control-wrap">
                                <Input type="number" name="callBooking3" id="callBooking3" placeholder="0" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <span className="unit- unit-r">경고</span>
                            <div className="form-control-wrap">
                                <Input type="number" name="callBooking4" id="callBooking4" placeholder="0" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="blind">기타 문의사항</span>
                            <Input type="textarea" name="text" id="etcQA" placeholder="기타문의사항" style={{ height: "100px" }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label for="guide">안내</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" id="guide" name="guide" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="form-btn">
                        <Col>
                            <Button color="primary" className="btn-h">
                                <i className="las la-plus"></i> 접수등록
                            </Button>
                        </Col>
                        <Col>
                            <Button color="secondary" className="btn-h">
                                <i className="las la-pause"></i> 접수대기
                            </Button>
                        </Col>
                        <Col>
                            <Button color="warning" className="btn-h">
                                <i className="las la-reply"></i> 미배차(취소)
                            </Button>
                        </Col>
                        <Col>
                            <Button color="danger" className="btn-h">
                                <i className="las la-times"></i> 취소
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <div className="tbl- tbl-type1 tbl-receipt ag-theme-balham">
                    <AgGridReact rowData={rowData}>
                        <AgGridColumn field="상태"></AgGridColumn>
                        <AgGridColumn field="접수시간"></AgGridColumn>
                        <AgGridColumn field="이용예정시간"></AgGridColumn>
                        <AgGridColumn field="배차예정시간"></AgGridColumn>
                        <AgGridColumn field="승차위치"></AgGridColumn>
                        <AgGridColumn field="하차위치"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        </div>
    );
}
