import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap";
import NumberFormat from "react-number-format";
import Select from "react-select";

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

const Receive = () => (
    <div id="receve" className="">
        {/* is-folded */}
        <div className="form-wrap">
            <Form>
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
                        <Select options={disabilityGrade} defaultValue={disabilityGrade[0]} id="disabilityGrade" name="disabilityGrade" />
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
                            <Label check>
                                <Input type="checkbox" /> 심사신청서
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label>
                                <Input type="checkbox" /> 이용동의서
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label>
                                <Input type="checkbox" /> 복지카드 및 신분증사본
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="2" className="tit">
                        <Label for="vehicleIn">승차위치</Label>
                    </Col>
                    <Col xs="6">
                        <div className="form-control-wrap">
                            <Input type="text" id="vehicleIn" />
                            <span className="form-control-clear">
                                <span className="blind">지우기</span>
                            </span>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-control-wrap">
                            <Input type="text" id="vehicleIn" />
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
                            <Input type="text" id="vehicleOut" />
                            <span className="form-control-clear">
                                <span className="blind">지우기</span>
                            </span>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-control-wrap">
                            <Input type="text" id="vehicleOut" />
                            <span className="form-control-clear">
                                <span className="blind">지우기</span>
                            </span>
                        </div>
                    </Col>
                    <Col xs="1" className="unit">
                        분
                    </Col>
                </Row>
                <Row>
                    <Col xs="2" className="tit">
                        <Label for="vehicleOut">예약</Label>
                    </Col>
                    <Col xs="6">{/* <Datetime dateFormat="YYYY-MM" timeFormat={false} /> */}</Col>
                </Row>
            </Form>
        </div>
        <a href="javascript:void(0);" role="button" class="btn_fold" aria-expanded="true">
            <span className="blind">목록영역 접기</span>
        </a>
    </div>
);

export default Receive;
