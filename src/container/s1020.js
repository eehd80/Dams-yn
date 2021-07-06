import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input } from "reactstrap";

import { Item, Menu, Separator, Submenu, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { getData } from "../api/data";
import TestRenderer from "../component/TestRenderer";

const defaultColDef = {
    width: 100,
    resizable: true,
};

const renew = [
    { value: "수동", label: "수동" },
    { value: "자동 3초", label: "자동 3초" },
    { value: "자동 5초", label: "자동 5초" },
    { value: "자동 10초", label: "자동 10초" },
    { value: "자동 30초", label: "자동 30초" },
    { value: "자동 1분", label: "자동 1분" },
];
const array = [
    { value: "시간순", label: "시간순" },
    { value: "상태순", label: "상태순" },
];
const state = [
    { value: "대기", label: "대기" },
    { value: "접수", label: "접수" },
    { value: "배차", label: "배차" },
];
const condition = [
    { value: "ID", label: "ID" },
    { value: "고객명", label: "고객명" },
    { value: "고객전화", label: "고객전화" },
    { value: "회신번호", label: "회신번호" },
    { value: "승차위치", label: "승차위치" },
    { value: "하차위치", label: "하차위치" },
    { value: "차량번호", label: "차량번호" },
];
const canclePop = [
    { value: "(1) 고객취소)", label: "(1) 고객취소" },
    { value: "(2) 고객취소)", label: "(2) 고객취소" },
    { value: "(3) 고객취소)", label: "(3) 고객취소" },
];
const telPop = [
    { value: "010-222-2222", label: "010-2222-2222" },
    { value: "010-222-2222", label: "010-2222-2222" },
    { value: "010-222-2222", label: "010-2222-2222" },
];

const MENU_ID = "dams-context";

const Current = (props) => {
    const [activeTab, setActiveTab] = useState("1");
    const { show } = useContextMenu({
        id: MENU_ID,
    });
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState([]);

    function testContext(e) {}

    function handleItemClick({ event, props, triggerEvent, data }) {
        console.log(props);
    }

    const onGridReady = (params) => {
        getData().then(function (r) {
            setRowData(r);
        });
    };

    const tttt = function (e) {
        e.preventDefault();
    };
    return (
        <div id="call" className="wrap-data">
            <div className="tit-sub-wrap">
                <h2 className="tit-sub">콜현황</h2>
            </div>

            <div className="lst-data">
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label htmlFor="renew">갱신</Label>
                        <Select options={renew} defaultValue={renew[0]} id="renew" name="renew" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="array">정렬</Label>
                        <Select options={array} defaultValue={array[0]} id="array" name="array" />
                    </FormGroup>
                    <FormGroup className="inp-et2">
                        <Label htmlFor="state" className="blind">
                            상태
                        </Label>
                        <Select
                            isMulti
                            options={state}
                            id="state"
                            name="state"
                            placeholder="상태조건"
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="array" className="blind">
                            정렬
                        </Label>
                        <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                    </FormGroup>
                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />

                    <div className="btn-group2">
                        <ButtonToggle className="c-blue">
                            <i className="las la-search"></i> 검색
                        </ButtonToggle>
                    </div>
                </Form>
                <div className="tbl- ag-theme-balham">
                    <AgGridReact
                        frameworkComponents={{
                            testRenderer: TestRenderer,
                        }}
                        rowData={rowData}
                        defaultColDef={defaultColDef}
                        allowContextMenuWithControlKey={true}
                        enableRangeSelection={true}
                        onCellContextMenu={testContext}
                        onGridReady={onGridReady}
                    >
                        <AgGridColumn field="표식" minWidth={60} maxWidth={70}></AgGridColumn>
                        <AgGridColumn field="구분" minWidth={60} maxWidth={70}></AgGridColumn>
                        <AgGridColumn field="상태"></AgGridColumn>
                        <AgGridColumn field="배차차량"></AgGridColumn>
                        <AgGridColumn field="배차기사명"></AgGridColumn>
                        <AgGridColumn field="고객명" cellRenderer="testRenderer"></AgGridColumn>
                        <AgGridColumn field="승차위치" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="하차위치" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="배차예정시간" minWidth={180}></AgGridColumn>
                        <AgGridColumn field="이용예정시간"></AgGridColumn>
                        <AgGridColumn field="고객회신번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="고객전화번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="접수시간"></AgGridColumn>
                        <AgGridColumn field="접수자"></AgGridColumn>
                        <AgGridColumn field="접수자ID"></AgGridColumn>
                        <AgGridColumn field="배차시간"></AgGridColumn>
                        <AgGridColumn field="배차자"></AgGridColumn>
                        <AgGridColumn field="승차시간"></AgGridColumn>
                        <AgGridColumn field="하차시간"></AgGridColumn>
                        <AgGridColumn field="요금"></AgGridColumn>
                        <AgGridColumn field="기사전화번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="차량번호"></AgGridColumn>
                    </AgGridReact>
                    <Menu id={MENU_ID}>
                        <Item onClick={handleItemClick} onContextMenu={tttt}>
                            수정
                        </Item>
                        <Item onClick={handleItemClick}>접수</Item>
                        <Item onClick={handleItemClick}>예약콜로 수정</Item>
                        <Submenu label="추가등록">
                            <Item onClick={handleItemClick}>대기</Item>
                            <Item onClick={handleItemClick}>접수</Item>
                        </Submenu>
                        <Item onClick={handleItemClick}>지정배차</Item>
                        <Item onClick={handleItemClick}>강제배차</Item>
                        <Item onClick={handleItemClick}>중복배차</Item>
                        <Item onClick={handleItemClick} className="line-">
                            승차
                        </Item>
                        <Item onClick={handleItemClick}>하차</Item>
                        <Item onClick={handleItemClick}>실패</Item>
                        <Item onClick={handleItemClick}>취소</Item>
                        <Item onClick={handleItemClick}>완료</Item>
                        <Item onClick={handleItemClick} className="line-">
                            고객SMS
                        </Item>
                        <Item onClick={handleItemClick}>기사SMS</Item>
                        <Item onClick={handleItemClick}>표식설정</Item>
                        <Item onClick={handleItemClick}>표식해제</Item>
                        <Item onClick={handleItemClick}>콜이력</Item>
                        <Item onClick={handleItemClick}>배차재현</Item>
                        <Item onClick={handleItemClick}>접수위치</Item>
                        <Item onClick={handleItemClick}>승차위치</Item>
                    </Menu>
                </div>
            </div>

            {/* Layer - 예약콜로 수정 */}
            <div className="layer-" style={{ top: "200px", left: "50px", width: "500px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>예약콜로 수정</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Row>
                        <Col xs="3" className="tit">
                            <Label htmlFor="resPop">예약일</Label>
                        </Col>
                        <Col>
                            <DatePickerButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3" className="tit">
                            <Label htmlFor="intervalPop">배차제한시간</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="number" name="intervalPop" id="intervalPop" placeholder="0" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="wav-">분전</span>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="number" name="intervalPop2" id="intervalPop2" placeholder="30" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="wav-">분후</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3" className="tit">
                            <Label htmlFor="regisPop">등록구분</Label>
                        </Col>
                        <Col>
                            <Select
                                isMulti
                                options={state}
                                id="regisPop"
                                name="regisPop"
                                placeholder="상태조건"
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
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

            {/* Layer - 차량검색 */}
            <div className="layer-" style={{ top: "200px", left: "570px", width: "500px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>차량검색</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Row>
                        <Col xs="3">
                            <Label htmlFor="array" className="blind">
                                정렬
                            </Label>
                            <Select options={condition} defaultValue={condition[0]} id="condition" name="condition" />
                        </Col>
                        <Col>
                            <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                        </Col>
                        <Col xs="3">
                            <ButtonToggle className="btn-w">
                                <i className="las la-search"></i> 검색
                            </ButtonToggle>
                        </Col>
                    </Row>
                    <div className="tbl- ag-theme-balham">
                        <AgGridReact
                            frameworkComponents={{
                                testRenderer: TestRenderer,
                            }}
                            rowData={rowData}
                            defaultColDef={defaultColDef}
                            allowContextMenuWithControlKey={true}
                            enableRangeSelection={true}
                            onCellContextMenu={testContext}
                            onGridReady={onGridReady}
                            style={{ height: "300px" }}
                        >
                            <AgGridColumn field="번호" minWidth={60} maxWidth={70}></AgGridColumn>
                            <AgGridColumn field="아이디" minWidth={60} maxWidth={70}></AgGridColumn>
                            <AgGridColumn field="이름" minWidth={100}></AgGridColumn>
                            <AgGridColumn field="차량번호"></AgGridColumn>
                            <AgGridColumn field="전화번호" minWidth={150}></AgGridColumn>
                            <AgGridColumn field="당일수행콜"></AgGridColumn>
                            <AgGridColumn field="거리"></AgGridColumn>
                        </AgGridReact>
                    </div>
                    <Row className="btn-area">
                        <Col></Col>
                        <Col>
                            <Button className="btn-w c-blue">적용</Button>
                        </Col>
                        <Col>
                            <Button className="btn-w">미적용</Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </div>
                <Button className="btn-close">
                    <i className="las la-times"></i>
                    <span className="blind">닫기</span>
                </Button>
            </div>

            {/* Layer - 실패/취소 사유선택 */}
            <div className="layer-" style={{ top: "500px", left: "50px", width: "500px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>실패/취소 사유선택</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Row>
                        <Col xs="2" className="tit">
                            <Label htmlFor="cancleCodePop">코드</Label>
                        </Col>
                        <Col>
                            <Input type="text" name="cancleCodePop" id="cancleCodePop" placeholder="(1) 고객취소" />
                        </Col>
                        <Col>
                            <Select
                                isMulti
                                options={canclePop}
                                id="canclePop"
                                name="canclePop"
                                placeholder="취소코드 선택"
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label htmlFor="cancleContPop">취소 내용</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" id="cancleContPop" name="cancleContPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="blind">취소 내용</span>
                            <Input type="textarea" name="text" id="etcQA" placeholder="상세내용" style={{ height: "100px" }} />
                        </Col>
                    </Row>
                    <Row className="btn-area">
                        <Col></Col>
                        <Col>
                            <Button className="btn-w c-blue">적용</Button>
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

            {/* Layer - SMS 전송 */}
            <div className="layer-" style={{ top: "140px", left: "1090px", width: "600px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>SMS 전송</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <Row>
                        <Col xs="2" className="tit">
                            <Label htmlFor="namePop">고객명</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="namePop" id="namePop" value="허준일" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label htmlFor="resPop">회신번호</Label>
                        </Col>
                        <Col>
                            <Select options={telPop} defaultValue={telPop[0]} id="disabilityType" name="disabilityType" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4">
                            <FormGroup className="inp-txt">
                                <Input
                                    type="textarea"
                                    name="text"
                                    id="etcQA"
                                    className="inp-blue"
                                    style={{ height: "150px" }}
                                    placeholder="SMS 내용 입력"
                                />
                                <div className="txt-byte">0 Byte</div>
                            </FormGroup>
                        </Col>
                        <Col xs="8">
                            <ul className="lst-sms">
                                <li>고객님 오늘 하루도 좋은하루 되십시오.</li>
                                <li>저희 회사를 이용해 주셔서 감사합니다. 다음에도 꼭 이용해주세요.</li>
                                <li>고객님 오늘 하루도 좋은하루 되십시오.</li>
                                <li>저희 회사를 이용해 주셔서 감사합니다. 다음에도 꼭 이용해주세요.</li>
                                <li>고객님 오늘 하루도 좋은하루 되십시오.</li>
                                <li>저희 회사를 이용해 주셔서 감사합니다. 다음에도 꼭 이용해주세요.</li>
                                <li>고객님 오늘 하루도 좋은하루 되십시오.</li>
                                <li>저희 회사를 이용해 주셔서 감사합니다. 다음에도 꼭 이용해주세요.</li>
                                <li>고객님 오늘 하루도 좋은하루 되십시오.</li>
                                <li>저희 회사를 이용해 주셔서 감사합니다. 다음에도 꼭 이용해주세요.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label htmlFor="resPop">예약전송</Label>
                        </Col>
                        <Col>
                            <DatePickerButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" className="tit">
                            <Label htmlFor="receiveNum">회신번호</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <NumberFormat format="###-####-####" id="receiveNum" name="receiveNum" className="form-control" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="2" className="tit">
                            <Label htmlFor="receiveNum">대상번호</Label>
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
                    <Row className="btn-area">
                        <Col></Col>
                        <Col>
                            <Button className="btn-w c-blue">확인</Button>
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

            {/* Layer - 콜이력 */}
            <div className="layer-" style={{ top: "600px", left: "570px", width: "500px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>콜이력</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <div className="tbl- ag-theme-balham">
                        <AgGridReact
                            frameworkComponents={{
                                testRenderer: TestRenderer,
                            }}
                            rowData={rowData}
                            defaultColDef={defaultColDef}
                            allowContextMenuWithControlKey={true}
                            enableRangeSelection={true}
                            onCellContextMenu={testContext}
                            onGridReady={onGridReady}
                            style={{ height: "300px" }}
                        >
                            <AgGridColumn field="번호" width={60} maxWidth={70}></AgGridColumn>
                            <AgGridColumn field="전상태" minWidth={60} maxWidth={70}></AgGridColumn>
                            <AgGridColumn field="후상태" minWidth={60} maxWidth={70}></AgGridColumn>
                            <AgGridColumn field="처리자(ID)" minWidth={170}></AgGridColumn>
                            <AgGridColumn field="배차기사" minWidth={100}></AgGridColumn>
                            <AgGridColumn field="처리시간" minWidth={200}></AgGridColumn>
                            <AgGridColumn field="변경내용" minWidth={400}></AgGridColumn>
                            <AgGridColumn field="배차차주"></AgGridColumn>
                        </AgGridReact>
                    </div>
                </div>
                <Button className="btn-close">
                    <i className="las la-times"></i>
                    <span className="blind">닫기</span>
                </Button>
            </div>

            {/* Layer - 배차재현 */}
            <div className="layer-" style={{ top: "600px", left: "1090px", width: "500px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>배차재현</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <div className="tbl- ag-theme-balham">
                        <AgGridReact
                            frameworkComponents={{
                                testRenderer: TestRenderer,
                            }}
                            rowData={rowData}
                            defaultColDef={defaultColDef}
                            allowContextMenuWithControlKey={true}
                            enableRangeSelection={true}
                            onCellContextMenu={testContext}
                            onGridReady={onGridReady}
                            style={{ height: "300px" }}
                        >
                            <AgGridColumn field="선택" width={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                            <AgGridColumn field="재배차" minWidth={60} maxWidth={70}></AgGridColumn>
                            <AgGridColumn field="차수" minWidth={60} maxWidth={70}></AgGridColumn>
                            <AgGridColumn field="아이디" minWidth={100}></AgGridColumn>
                            <AgGridColumn field="이름" minWidth={100}></AgGridColumn>
                            <AgGridColumn field="차량번호"></AgGridColumn>
                            <AgGridColumn field="응답여부"></AgGridColumn>
                            <AgGridColumn field="거리"></AgGridColumn>
                        </AgGridReact>
                    </div>
                </div>
                <Button className="btn-close">
                    <i className="las la-times"></i>
                    <span className="blind">닫기</span>
                </Button>
            </div>
        </div>
    );
};

export default Current;
