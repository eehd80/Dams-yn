import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import Select from "react-select";
import { Row, Col, ButtonToggle, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const callData = [
    {
        구분: "지역",
        상태: "배차",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "역삼동 용인시청 보건소",
        하차위치: "인계동 수원시청",
    },
    {
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "교통약자",
        승차위치: "금곡로212번길 25",
        하차위치: "인계동 수원시청",
    },
    {
        구분: "지역",
        상태: "대기",
        배차차량: "6655",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "인계동 수원시청 25",
        하차위치: "이태원역",
    },
    {
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "남양리 화성시청",
    },
    {
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
];

const renew = [
    { value: "수동", label: "수동" },
    { value: "자동", label: "자동" },
];
const array = [
    { value: "시간순", label: "시간순" },
    { value: "구분", label: "구분" },
];
const state = [
    { value: "상태조건", label: "상태조건" },
    { value: "상태조건", label: "상태조건" },
];
const condition = [
    { value: "ID", label: "ID" },
    { value: "상태", label: "상태" },
];

const Call = () => (
    <div id="Call" className="call-wrap">
        <div className="tbl- tbl-type1 tbl-map ag-theme-balham">
            <Form className="tbl-filter">
                <Row>
                    <Col xs={{ size: "2", offset: 1 }}>
                        <FormGroup>
                            <Label for="renew">갱신</Label>
                            <Select options={renew} defaultValue={renew[0]} id="renew" name="renew" />
                        </FormGroup>
                    </Col>
                    <Col xs="2">
                        <FormGroup>
                            <Label for="array">정렬</Label>
                            <Select options={array} defaultValue={array[0]} id="array" name="array" />
                        </FormGroup>
                    </Col>
                    <Col xs={{ size: "1", offset: 1 }}>
                        <FormGroup>
                            <Label for="state" className="blind">
                                상태
                            </Label>
                            <Select
                                options={state}
                                // defaultValue={condition[0]}
                                id="state"
                                name="state"
                                placeholder="상태조건"
                            />
                        </FormGroup>
                    </Col>
                    <Col xs="1">
                        <FormGroup className="d-flex">
                            <Label for="array" className="blind">
                                정렬
                            </Label>
                            <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                        </FormGroup>
                    </Col>
                    <Col xs="2">
                        <Input type="text" name="search" id="search" placeholder="검색" />
                    </Col>
                    <Col xs="1">
                        <ButtonToggle color="primary" className="btn-">
                            검색
                        </ButtonToggle>
                    </Col>
                </Row>
            </Form>
            <AgGridReact rowData={callData}>
                <AgGridColumn field="구분"></AgGridColumn>
                <AgGridColumn field="상태"></AgGridColumn>
                <AgGridColumn field="배차차량"></AgGridColumn>
                <AgGridColumn field="배차기사명"></AgGridColumn>
                <AgGridColumn field="고객명"></AgGridColumn>
                <AgGridColumn field="승차위치"></AgGridColumn>
                <AgGridColumn field="하차위치"></AgGridColumn>
            </AgGridReact>
        </div>
    </div>
);

export default Call;
