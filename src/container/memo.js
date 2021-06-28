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

                            {/* 리스트 */}
                            <div className="lst-data">
                                <div className="btn-util">
                                    <Button color="primary">
                                        <i className="las la-plus"></i> 신규
                                    </Button>
                                    <Button color="secondary">
                                        <i className="las la-search"></i> 검색
                                    </Button>
                                    <Button color="danger">
                                        <i className="las la-backspace"></i> 삭제
                                    </Button>
                                </div>
                                <div className="tbl- ag-theme-balham">
                                    <AgGridReact rowData={memoList} defaultColDef={defaultColDef}>
                                        <AgGridColumn field="순서" minWidth={60} maxWidth={70}></AgGridColumn>
                                        <AgGridColumn field="선택" minWidth={60} maxWidth={70} checkboxSelection={true}></AgGridColumn>
                                        <AgGridColumn field="상태" minWidth={100}></AgGridColumn>
                                        <AgGridColumn field="제목" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="내용" minWidth={300}></AgGridColumn>
                                        <AgGridColumn field="알람일자" minWidth={200}></AgGridColumn>
                                        <AgGridColumn field="등록일" minWidth={200}></AgGridColumn>
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
