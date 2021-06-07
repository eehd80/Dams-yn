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
    { value: "6급", label: "6급" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
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
                        <NumberFormat format="###-####-####" id="tel" name="tel" className="form-control" />
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
                        <NumberFormat format="###-####-####" id="replyTel" name="replyTel" className="form-control" />
                    </Col>
                    <Col xs="2" className="tit">
                        <Label for="companion">동행인</Label>
                    </Col>
                    <Col>
                        <Input type="number" name="companion" id="companion" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="2" className="tit">
                        <Label for="name">고객명</Label>
                    </Col>
                    <Col>
                        <Input type="text" name="name" id="name" />
                    </Col>
                    <Col xs="2" className="tit">
                        <Label for="receiveNum">고객접수번호</Label>
                    </Col>
                    <Col>
                        <NumberFormat format="###-####-####" id="receiveNum" name="receiveNum" className="form-control" />
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
                    <Col className="d-flex justify-content-between">
                        <FormGroup>
                            <Label check>
                                <Input type="checkbox" id="receivePapers1" /> 심사신청서
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label check>
                                <Input type="checkbox" id="receivePapers2" /> 이용동의서
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label check>
                                <Input type="checkbox" id="receivePapers3" /> 복지카드 및 신분증사본
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="2" className="tit">
                        <Label for="vehicleIn">승차위치</Label>
                    </Col>
                    <Col>
                        <Input type="text" id="vehicleIn" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="2" className="tit">
                        <Label for="vehicleOut">하차위치</Label>
                    </Col>
                    <Col>
                        <Input type="text" id="vehicleOut" />
                    </Col>
                </Row>
            </Form>
        </div>
        <a href="javascript:void(0);" role="button" class="btn_fold" aria-expanded="true">
            <span className="blind">목록영역 접기</span>
        </a>
    </div>
);

export default Receive;
