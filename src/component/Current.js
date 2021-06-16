import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "./DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import {
    Row,
    Col,
    ButtonToggle,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Table,
} from "reactstrap";
import classnames from "classnames";

const callData = [
    {
        표식: "",
        구분: "지역",
        상태: "배차",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "역삼동 용인시청 보건소",
        하차위치: "인계동 수원시청",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "교통약자",
        승차위치: "금곡로212번길 25",
        하차위치: "인계동 수원시청",
    },
    {
        표식: "보류",
        구분: "지역",
        상태: "대기",
        배차차량: "6655",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "인계동 수원시청 25",
        하차위치: "이태원역",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "남양리 화성시청",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "오다다",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
    {
        표식: "",
        구분: "지역",
        상태: "대기",
        배차차량: "2222",
        배차기사명: "오다다",
        고객명: "dddd",
        승차위치: "삼각지역",
        하차위치: "이태원역",
    },
];

const memoList = [
    {
        순서: "5",
        선택: "",
        상태: "미확인",
        제목: "나는 제목이다.",
        내용: "나는 내용이다. 나는 내용이다.",
        알람일자: "2021-05-06 오후 5:49:31",
        등록일: "2021-05-06 오후 5:49:31",
    },
    {
        순서: "4",
        선택: "",
        상태: "미확인",
        제목: "나는 제목이다.",
        내용: "나는 내용이다. 나는 내용이다.",
        알람일자: "2021-05-06 오후 5:49:31",
        등록일: "2021-05-06 오후 5:49:31",
    },
    {
        순서: "3",
        선택: "",
        상태: "미확인",
        제목: "나는 제목이다.",
        내용: "나는 내용이다. 나는 내용이다.",
        알람일자: "2021-05-06 오후 5:49:31",
        등록일: "2021-05-06 오후 5:49:31",
    },
    {
        순서: "2",
        선택: "",
        상태: "미확인",
        제목: "나는 제목이다.",
        내용: "나는 내용이다. 나는 내용이다.",
        알람일자: "2021-05-06 오후 5:49:31",
        등록일: "2021-05-06 오후 5:49:31",
    },
    {
        순서: "1",
        선택: "",
        상태: "미확인",
        제목: "나는 제목이다.",
        내용: "나는 내용이다. 나는 내용이다.",
        알람일자: "2021-05-06 오후 5:49:31",
        등록일: "2021-05-06 오후 5:49:31",
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

const bbsList = [
    {
        순서: "5",
        제목: "나는 제목이다 나는 제목이다 나는 제목이다 나는 제목이다 나는 제목이다.",
        등록일: "2021-05-06 오후 5:49:31",
        등록업체: "아이원맥스",
    },
    {
        순서: "4",
        제목: "나는 제목이다.",
        등록일: "2021-05-06 오후 5:49:31",
        등록업체: "아이원맥스",
    },
    {
        순서: "3",
        제목: "나는 제목이다.",
        등록일: "2021-05-06 오후 5:49:31",
        등록업체: "아이원맥스",
    },
    {
        순서: "2",
        제목: "나는 제목이다.",
        등록일: "2021-05-06 오후 5:49:31",
        등록업체: "아이원맥스",
    },
    {
        순서: "1",
        제목: "나는 제목이다.",
        등록일: "2021-05-06 오후 5:49:31",
        등록업체: "아이원맥스",
    },
    {
        순서: "5",
        제목: "나는 제목이다.",
        등록일: "2021-05-06 오후 5:49:31",
        등록업체: "아이원맥스",
    },
    {
        순서: "4",
        제목: "나는 제목이다.",
        등록일: "2021-05-06 오후 5:49:31",
        등록업체: "아이원맥스",
    },
    {
        순서: "3",
        제목: "나는 제목이다.",
        등록일: "2021-05-06 오후 5:49:31",
        등록업체: "아이원맥스",
    },
    {
        순서: "2",
        제목: "나는 제목이다.",
        등록일: "2021-05-06 오후 5:49:31",
        등록업체: "아이원맥스",
    },
    {
        순서: "1",
        제목: "나는 제목이다.",
        등록일: "2021-05-06 오후 5:49:31",
        등록업체: "아이원맥스",
    },
];

// tab
const Current = (props) => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div id="current">
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === "1" })}
                        onClick={() => {
                            toggle("1");
                        }}
                    >
                        <i class="las la-clone"></i> 콜현황
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === "2" })}
                        onClick={() => {
                            toggle("2");
                        }}
                    >
                        <i class="las la-file-alt"></i> 메모
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === "3" })}
                        onClick={() => {
                            toggle("3");
                        }}
                    >
                        <i class="las la-mobile"></i> 웹 예약콜
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === "4" })}
                        onClick={() => {
                            toggle("4");
                        }}
                    >
                        <i class="las la-phone-volume"></i> 예약콜
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === "5" })}
                        onClick={() => {
                            toggle("5");
                        }}
                    >
                        <i class="las la-stream"></i> 공지사항
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                {/* 콜현황 s */}
                <TabPane tabId="1">
                    <div className="call-wrap">
                        <Form className="tbl-filter">
                            <Row>
                                <Col xs="2">
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
                                <Col xs={{ size: "2", offset: 2 }}>
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
                                    <ButtonToggle color="primary" className="btn-w">
                                        <i class="las la-search"></i> 검색
                                    </ButtonToggle>
                                </Col>
                            </Row>
                        </Form>
                        <div className="tbl- tbl-type1 tbl-call ag-theme-balham" style={{ height: "300px" }}>
                            <AgGridReact rowData={callData}>
                                <AgGridColumn field="표식"></AgGridColumn>
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
                </TabPane>
                {/* 콜현황 e */}
                {/* 메모 s */}
                <TabPane tabId="2">
                    <h2 className="blind">메모</h2>

                    {/* 메모 리스트 */}
                    <div className="lst-memo">
                        <h3 className="blind">메모 리스트</h3>
                        <div className="btn-util">
                            <Button color="primary">
                                <i class="las la-plus"></i> 신규
                            </Button>
                            <Button color="secondary">
                                <i class="las la-search"></i> 검색
                            </Button>
                            <Button color="danger">
                                <i class="las la-backspace"></i> 삭제
                            </Button>
                        </div>
                        <div className="tbl- tbl-type1 tbl-call ag-theme-balham" style={{ height: "300px" }}>
                            <AgGridReact rowData={memoList}>
                                <AgGridColumn field="순서"></AgGridColumn>
                                <AgGridColumn field="선택"></AgGridColumn>
                                <AgGridColumn field="상태"></AgGridColumn>
                                <AgGridColumn field="제목"></AgGridColumn>
                                <AgGridColumn field="내용"></AgGridColumn>
                                <AgGridColumn field="알람일자"></AgGridColumn>
                                <AgGridColumn field="등록일"></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </div>

                    {/* 메모등록 */}
                    <div className="regi-memo form-wrap">
                        <h3 className="blind">메모 등록</h3>
                        <div className="btn-util">
                            <Button color="secondary">
                                <i class="las la-check"></i> 확인
                            </Button>
                            <Button color="primary">
                                <i class="las la-save"></i> 저장
                            </Button>
                            <Button color="danger">
                                <i class="las la-times"></i> 취소
                            </Button>
                        </div>
                        <Row>
                            <Col xs="1" className="tit-">
                                제목
                            </Col>
                            <Col xs="2">
                                <div className="form-control-wrap">
                                    <NumberFormat format="###-####-####" id="receiveNum" name="receiveNum" className="form-control" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                            </Col>
                            <Col xs={{ size: 1, offset: 1 }} className="tit-">
                                <FormGroup check>
                                    <Input type="checkbox" id="shuttle" />
                                    <Label check for="shuttle">
                                        알람일자
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col xs="2">
                                <DatePickerButton />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="1" className="tit-">
                                내용
                            </Col>
                            <Col>
                                <Input type="textarea" name="text" id="memoCont" />
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                {/* 메모 e */}
                {/* 웹 예약콜 s */}
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12"></Col>
                    </Row>
                </TabPane>
                {/* 웹 예약콜 e */}
                {/* 예약콜 s */}
                <TabPane tabId="4">
                    <Row>
                        <Col sm="12"></Col>
                    </Row>
                </TabPane>
                {/* 예약콜 e */}
                {/* 공지사항 s */}
                <TabPane tabId="5">
                    <h2 className="blind">메모</h2>

                    {/* 공지사항 리스트 */}
                    <div className="lst-memo">
                        <h3 className="blind">메모 리스트</h3>
                        <div className="btn-util">
                            <Button color="primary">
                                <i class="las la-plus"></i> 신규
                            </Button>
                            <Button color="secondary">
                                <i class="las la-search"></i> 검색
                            </Button>
                            <Button color="danger">
                                <i class="las la-backspace"></i> 삭제
                            </Button>
                        </div>
                        <div className="tbl- tbl-type1 tbl-call ag-theme-balham" style={{ height: "300px" }}>
                            <AgGridReact rowData={bbsList}>
                                <AgGridColumn field="순서"></AgGridColumn>
                                <AgGridColumn field="제목"></AgGridColumn>
                                <AgGridColumn field="등록일"></AgGridColumn>
                                <AgGridColumn field="등록업체"></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </div>
                </TabPane>
                {/* 공지사항 e */}
            </TabContent>
        </div>
    );
};

export default Current;
