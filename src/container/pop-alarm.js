import React, { Component } from "react";
import { Row, Col, Button, ButtonToggle, Form, FormGroup, Label, Input } from "reactstrap";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

const rowData = [
    { 아이디: "eehd80", 이름: "정미애", 차량번호: "40아 2222" },
    { 아이디: "eehd80", 이름: "정미애", 차량번호: "40아 2222" },
    { 아이디: "eehd80", 이름: "정미애", 차량번호: "40아 2222" },
    { 아이디: "eehd80", 이름: "정미애", 차량번호: "40아 2222" },
    { 아이디: "eehd80", 이름: "정미애", 차량번호: "40아 2222" },
];
const defaultColDef = {
    width: 100,
    resizable: true,
};

class Main extends Component {
    render() {
        return (
            <div className="layer- layer-s" style={{ width: "400px" }}>
                <div className="head-layer">
                    <h3>알림 등록되었습니다.</h3>
                </div>
                <div className="cont-layer">
                    <p>회원가입 신규 등록 되었습니다.</p>
                </div>
                <div className="layer-btn">
                    <Row className="btn-area">
                        <Col xs="6">
                            <Button className="btn-w c-blue">확인</Button>
                        </Col>
                        <Col xs="6">
                            <Button className="btn-w">취소</Button>
                        </Col>
                    </Row>
                </div>
                <Button className="btn-close">
                    <i className="las la-times"></i>
                    <span className="blind">닫기</span>
                </Button>
            </div>
        );
    }
}

export default Main;
