import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input } from "reactstrap";

const webCall = [
    {
        "오후 02:00": "예약가능",
    },
];
const defaultColDef = {
    width: 100,
    resizable: true,
};

const state = [
    { value: "대기", label: "대기" },
    { value: "접수", label: "접수" },
    { value: "배차", label: "배차" },
];

class Main extends Component {
    render() {
        return (
            <div className="pop- wrap-data">
                <div className="head-pop">
                    <h1>차량별 예약시간표</h1>
                </div>
                <div className="cont-pop">
                    <div className="lst-data form-wrap">
                        <Form className="tbl-filter">
                            <FormGroup>
                                <Label for="timeSearch">예약</Label>
                                <DatePickerButton />
                                <div className="form-control-wrap">
                                    <Input type="number" name="intervalPop" id="intervalPop" placeholder="20" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                                <span className="wav-">분전</span>
                                <div className="form-control-wrap">
                                    <Input type="number" name="intervalPop2" id="intervalPop2" placeholder="30" />
                                    <span className="form-control-clear">
                                        <span className="blind">지우기</span>
                                    </span>
                                </div>
                                <span className="wav-">분후</span>
                            </FormGroup>

                            <div className="btn-group2">
                                <ButtonToggle>
                                    <i className="las la-search"></i> 검색
                                </ButtonToggle>
                                <ButtonToggle className="c-blue">
                                    <i className="las la-search"></i> 적용
                                </ButtonToggle>
                            </div>
                        </Form>

                        <div className="tbl- tbl-type1 tbl-call ag-theme-balham" style={{ height: "400px" }}>
                            <AgGridReact
                                rowData={webCall}
                                defaultColDef={defaultColDef}
                                enableRangeSelection={true}
                                allowContextMenuWithControlKey={true}
                            >
                                <AgGridColumn field="오후 02:00">
                                    <AgGridColumn headerName="00" field="00분" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="10" field="10분" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="20" field="20분" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="30" field="30분" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="40" field="40분" width={60} filter="agTextColumnFilter" />
                                </AgGridColumn>
                                <AgGridColumn field="오후 03:00">
                                    <AgGridColumn headerName="00" field="00" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="10" field="10" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="20" field="20" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="30" field="30" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="40" field="40" width={60} filter="agTextColumnFilter" />
                                </AgGridColumn>
                                <AgGridColumn field="오후 04:00">
                                    <AgGridColumn headerName="00" field="00" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="10" field="10" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="20" field="20" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="30" field="30" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="40" field="40" width={60} filter="agTextColumnFilter" />
                                </AgGridColumn>
                                <AgGridColumn field="오후 05:00">
                                    <AgGridColumn headerName="00" field="00" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="10" field="10" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="20" field="20" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="30" field="30" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="40" field="40" width={60} filter="agTextColumnFilter" />
                                </AgGridColumn>
                                <AgGridColumn field="오후 06:00">
                                    <AgGridColumn headerName="00" field="00" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="10" field="10" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="20" field="20" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="30" field="30" width={60} filter="agTextColumnFilter" />
                                    <AgGridColumn headerName="40" field="40" width={60} filter="agTextColumnFilter" />
                                </AgGridColumn>
                            </AgGridReact>
                        </div>
                    </div>
                </div>

                <div className="layer-" style={{ top: "200px", left: "50px", width: "500px", transform: "translate(0,0)" }}>
                    <div className="head-layer">
                        <h3>예약콜 정보</h3>
                    </div>
                    <div className="cont-layer form-wrap result-txt">
                        <Row>
                            <Col xs="2" className="tit">
                                <Label for="resPop">고객명</Label>
                            </Col>
                            <Col>
                                <div className="txt">정미애</div>
                            </Col>
                            <Col xs="2" className="tit">
                                <Label for="resPop">회신번호</Label>
                            </Col>
                            <Col>
                                <div className="txt">010-3333-3333</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label for="intervalPop">차량번호</Label>
                            </Col>
                            <Col>
                                <div className="txt">42노 3456</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label for="intervalPop">이용예정시간</Label>
                            </Col>
                            <Col>
                                <div className="txt">2021-02-22 16:55:55</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label for="intervalPop">배차예정시간</Label>
                            </Col>
                            <Col>
                                <div className="txt">2021-02-22 16:55:55</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label for="intervalPop">배차제한시간</Label>
                            </Col>
                            <Col>
                                <div className="txt">2021-02-22 16:55:55</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label for="intervalPop">승차위치</Label>
                            </Col>
                            <Col>
                                <div className="txt">중동 용인세브란스병원</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="tit">
                                <Label for="intervalPop">하차위치</Label>
                            </Col>
                            <Col>
                                <div className="txt">보라동 민속마을 쌍용아파트 102동</div>
                            </Col>
                        </Row>
                    </div>
                    <Button className="btn-close">
                        <i className="las la-times"></i>
                        <span className="blind">닫기</span>
                    </Button>
                </div>
            </div>
        );
    }
}

export default Main;
