import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input, Table } from "reactstrap";

import { Item, Menu, Separator, Submenu, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { getData } from "../api/data";
import TestRenderer from "../component/TestRenderer";

const defaultColDef = {
    width: 100,
    resizable: true,
};

const timeSearch = [
    { value: "이용예정시간", label: "이용예정시간" },
    { value: "접수시간", label: "접수시간" },
];
const callAll = [
    { value: "즉시콜", label: "즉시콜" },
    { value: "예약콜", label: "예약콜" },
];
const condition = [
    { value: "차량ID", label: "차량ID" },
    { value: "고객명", label: "고객명" },
    { value: "고객전화", label: "고객전화" },
    { value: "회신번호", label: "회신번호" },
    { value: "승차위치", label: "승차위치" },
    { value: "하차위치", label: "하차위치" },
    { value: "차량번호", label: "차량번호" },
];

const carNum = [
    { value: "72다 5333", label: "72다 5333" },
    { value: "72다 5334", label: "72다 5334" },
    { value: "72다 5335", label: "72다 5335" },
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
        <div className="wrap-data">
            <div className="tit-sub-wrap">
                <h2 className="tit-sub">운행일지</h2>
            </div>
            <div className="lst-data">
                <Form className="tbl-filter">
                    <FormGroup>
                        <Label htmlFor="timeSearch" className="blind">
                            검색기간
                        </Label>
                        <DatePickerButton /> <span className="wav- wav-right">~</span> <DatePickerButton />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="condition" className="blind">
                            조회조건
                        </Label>
                        <Select options={condition} id="condition" name="condition" placeholder="조회조건" />
                    </FormGroup>
                    <Input type="text" name="search" id="search" placeholder="검색" className="inp-search" />
                    <div className="btn-group2">
                        <ButtonToggle className="c-yellow">
                            <i className="las la-credit-card"></i> 결제
                        </ButtonToggle>
                        <ButtonToggle>
                            <i className="las la-signature"></i> 사인등록
                        </ButtonToggle>
                        <ButtonToggle className="c-blue">
                            <i className="las la-search"></i> 검색
                        </ButtonToggle>
                        <ButtonToggle className="c-green">
                            <i className="las la-file-excel"></i> 엑셀
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
                        <AgGridColumn field="번호" minWidth={60} maxWidth={70} cellRenderer="testRenderer"></AgGridColumn>
                        <AgGridColumn field="운행일자" minWidth={120}></AgGridColumn>
                        <AgGridColumn field="운전원" minWidth={100}></AgGridColumn>
                        <AgGridColumn field="차량번호" minWidth={130}></AgGridColumn>
                        <AgGridColumn field="근무시간" minWidth={200}></AgGridColumn>
                        <AgGridColumn field="결제">
                            <AgGridColumn field="담당" />
                            <AgGridColumn field="팀장" />
                        </AgGridColumn>
                        <AgGridColumn field="금일운행" minWidth={100}></AgGridColumn>
                        <AgGridColumn field="금일주유량" minWidth={100}></AgGridColumn>
                        <AgGridColumn field="고객전화번호" minWidth={150}></AgGridColumn>
                        <AgGridColumn field="기타기재사항" minWidth={200}></AgGridColumn>
                    </AgGridReact>
                    <Menu id={MENU_ID}>
                        <Item onClick={handleItemClick} onContextMenu={tttt}>
                            수정
                        </Item>
                        <Item onClick={handleItemClick}>배차</Item>
                        <Item onClick={handleItemClick}>접수</Item>
                        <Item onClick={handleItemClick}>대기</Item>
                        <Item onClick={handleItemClick}>지정배차</Item>
                        <Item onClick={handleItemClick}>취소</Item>
                        <Item onClick={handleItemClick}>완료</Item>
                        <Item onClick={handleItemClick}>콜이력</Item>
                    </Menu>
                </div>
            </div>

            {/* layer - 운행일지 등록 */}
            <div className="layer-" style={{ top: "200px", left: "60px", width: "900px", transform: "translate(0,0)" }}>
                <div className="head-layer">
                    <h3>운행일지 등록</h3>
                </div>
                <div className="cont-layer form-wrap">
                    <h4 className="tit-sub4">운행정보</h4>
                    <Row>
                        <Col xs="1" className="tit">
                            <label htmlFor="carNumPop">운행일</label>
                        </Col>
                        <Col>
                            <DatePickerButton />
                        </Col>
                        <Col xs="1" className="tit">
                            <label htmlFor="carNumPop">근무시간</label>
                        </Col>
                        <Col xs="6">
                            <DatePickerButton /> <div className="wav-">~</div>
                            <DatePickerButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="1" className="tit">
                            <label htmlFor="carNumPop">운전원</label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                        </Col>
                        <Col xs="1" className="tit">
                            <Label htmlFor="carNumPop">차량번호</Label>
                        </Col>
                        <Col xs="6">
                            <Select options={carNum} defaultValue={carNum[0]} id="carNumPop" name="carNumPop" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="1" className="tit">
                            <Label htmlFor="readerPop">전일운행누계</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">km</span>
                        </Col>
                        <Col xs="1" className="tit">
                            <Label htmlFor="readerPop">전일주유량누계</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">ℓ</span>
                        </Col>
                        <Col xs="1" className="tit">
                            <Label htmlFor="readerPop">금일승차</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">km</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="1" className="tit">
                            <Label htmlFor="readerPop">금일운행</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">km</span>
                        </Col>
                        <Col xs="1" className="tit">
                            <Label htmlFor="readerPop">금일주유량</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">ℓ</span>
                        </Col>
                        <Col xs="1" className="tit">
                            <Label htmlFor="readerPop">금일공차</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">km</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="1" className="tit">
                            <Label htmlFor="readerPop">운행누계</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">km</span>
                        </Col>
                        <Col xs="1" className="tit">
                            <Label htmlFor="readerPop">주유량누계</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">ℓ</span>
                        </Col>
                        <Col xs="1" className="tit">
                            <Label htmlFor="readerPop">금일요금</Label>
                        </Col>
                        <Col>
                            <div className="form-control-wrap">
                                <Input type="text" name="carNumPop" id="carNumPop" />
                                <span className="form-control-clear">
                                    <span className="blind">지우기</span>
                                </span>
                            </div>
                            <span className="unit- unit-l">원</span>
                        </Col>
                    </Row>
                    <div className="tbl- ag-theme-balham mt-2">
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
                            <AgGridColumn field="번호" minWidth={60} maxWidth={70} cellRenderer="testRenderer"></AgGridColumn>
                            <AgGridColumn field="성명"></AgGridColumn>
                            <AgGridColumn field="보호자"></AgGridColumn>
                            <AgGridColumn field="출발지" minWidth={200}></AgGridColumn>
                            <AgGridColumn field="출발시간"></AgGridColumn>
                            <AgGridColumn field="도착지" minWidth={200}></AgGridColumn>
                            <AgGridColumn field="도착시간"></AgGridColumn>
                            <AgGridColumn field="운행(km)"></AgGridColumn>
                            <AgGridColumn field="요금"></AgGridColumn>
                            <AgGridColumn field="비교"></AgGridColumn>
                        </AgGridReact>
                    </div>
                    <h4 className="tit-sub4 mt-4">차량일일점검표</h4>
                    <Table size="sm" className="tbl-type1 mb-4">
                        <colgroup>
                            <col />
                            <col style={{ width: "5%" }} />
                            <col style={{ width: "10%" }} />
                            <col />
                            <col style={{ width: "5%" }} />
                            <col style={{ width: "10%" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>점검내용</th>
                                <th>상태</th>
                                <th>비고</th>
                                <th>점검내용</th>
                                <th>상태</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colSpan="3" className="q-tit">
                                    1. 운행전 점검개소
                                </th>
                                <th scope="row" colSpan="3" className="q-tit">
                                    3. 운행 후 점검개소
                                </th>
                            </tr>
                            <tr>
                                <th scope="row" className="q-sub">
                                    1) 엔진오일은 정상인가?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                                <th scope="row" className="q-sub">
                                    1) 각 타이어의 압력 및 트랙의 마모상태는?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" className="q-sub">
                                    2) 라지에이터의 물은 채워져 있는가?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <th scope="row" className="q-sub">
                                    2) 각 부분의 누설개소는 없는가?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" className="q-sub">
                                    3) 조정계통(계기포함)은 정상인가?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                                <th scope="row" className="q-sub">
                                    3) 각종 케이블의 상태는?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" className="q-sub">
                                    4) 각 타이어의 압력 및 트랙의 마모상태는?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                                <th scope="row" className="q-sub">
                                    4) 자동차의 시건은 잘 되어 있는가?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" className="q-sub">
                                    5) 각 부분의 누설개소는 없는가?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                                <th scope="row" className="q-sub">
                                    5) 열쇠의 보관은?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" colSpan="3" className="q-tit">
                                    2. 운행중 점검개소
                                </th>
                                <th scope="row" colSpan="3" className="q-tit">
                                    4. 특장장치(리프트, 슬로프, 보조발판) 작동여부
                                </th>
                            </tr>
                            <tr>
                                <th scope="row" className="q-sub">
                                    1) 각 부분의 누설개소는 없는가?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                                <th scope="row" className="q-sub">
                                    1) 정방(휠체어, 고정벨트) 정상인가?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" className="q-sub">
                                    2) 엔진 및 차체의 잡음은 없는가?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                                <th scope="row" className="q-sub">
                                    2) 콜장비는 정상인가?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" className="q-sub">
                                    3) 조정계통(계기포함)은 정상인가?
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                                <th scope="row" className="q-sub">
                                    3) 보조발판 작동 상태 등
                                </th>
                                <td>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" /> 양호
                                        </Label>
                                    </FormGroup>
                                </td>
                                <td></td>
                            </tr>

                            <tr>
                                <th scope="row" className="q-tit">
                                    기타기재사항
                                </th>
                                <td colSpan="6" className="q-sub">
                                    후반, <br />
                                    차량 내 소득 및 청소 <br />
                                    탄력 (유양종주임) 차량인계
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <Row className="btn-area">
                        <Col></Col>
                        <Col>
                            <Button className="btn-w c-yellow">저장</Button>
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
    );
};

export default Current;
