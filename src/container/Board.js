import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import { Row, Col, Button, FormGroup, Label, Input, ButtonGroup } from "reactstrap";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";

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
                        <div id="Memo" className="main">
                            <div className="tit-sub-wrap">
                                <h2 className="tit-sub">콜현황</h2>
                                <ButtonGroup>
                                    <Button>메모</Button>
                                    <Button>웹 예약콜</Button>
                                    <Button>예약콜</Button>
                                    <Button>공지사항</Button>
                                </ButtonGroup>
                            </div>

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
                                    <AgGridReact rowData={bbsList} defaultColDef={defaultColDef}>
                                        <AgGridColumn field="순서"></AgGridColumn>
                                        <AgGridColumn field="제목"></AgGridColumn>
                                        <AgGridColumn field="등록일"></AgGridColumn>
                                        <AgGridColumn field="등록업체"></AgGridColumn>
                                    </AgGridReact>
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
