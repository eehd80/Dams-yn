import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";

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

const defaultColDef = {
    width: 100,
    resizable: true,
};

class Main extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <div id="main">
                    <Receive />
                    <div className="contents">
                        <Map />
                        <div id="Memo" className="wrap-data">
                            <div className="tit-sub-wrap">
                                <h2 className="tit-sub">메모</h2>
                            </div>

                            {/* 등록 */}
                            <div className="regi-memo form-wrap">
                                <Row>
                                    <Col xs="1">제목</Col>
                                    <Col xs="4">
                                        <div className="form-control-wrap">
                                            <NumberFormat
                                                format="###-####-####"
                                                id="receiveNum"
                                                name="receiveNum"
                                                className="form-control"
                                            />
                                            <span className="form-control-clear">
                                                <span className="blind">지우기</span>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={{ size: 2, offset: 1 }}>
                                        <FormGroup check>
                                            <Input type="checkbox" id="alarm" /> <Label for="alarm">알람일자</Label>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <DatePickerButton />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="1">내용</Col>
                                    <Col>
                                        <Input type="textarea" name="text" id="memoCont" />
                                    </Col>
                                </Row>

                                <div className="btn-util mt-2">
                                    <Button color="secondary">
                                        <i className="las la-check"></i> 확인
                                    </Button>
                                    <Button color="primary">
                                        <i className="las la-save"></i> 저장
                                    </Button>
                                    <Button color="danger">
                                        <i className="las la-times"></i> 취소
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
