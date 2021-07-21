import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DatePickerButton from "../component/DatePicker";
import NumberFormat from "react-number-format";
import Select from "react-select";
import {
    Row,
    Col,
    Button,
    ButtonToggle,
    Form,
    FormGroup,
    Label,
    Input,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardTitle,
    CardText,
} from "reactstrap";
import classnames from "classnames";

import { Item, Menu, Separator, Submenu, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { getData } from "../api/data";
import TestRenderer from "../component/TestRenderer";

import Header from "../component/Header";
import Receive from "../component/Receive";
import Map from "../component/Map";
import Call from "../component/Call";

const defaultColDef = {
    width: 100,
    resizable: true,
};

const member = [
    { value: "회원사", label: "회원사" },
    { value: "고객명", label: "고객명" },
];
const tooltip = [
    { value: "기사ID", label: "기사ID" },
    { value: "기사명", label: "기사명" },
    { value: "기사전화", label: "기사전화" },
    { value: "미사용", label: "미사용" },
];
const use = [
    { value: "사용", label: "사용" },
    { value: "미사용", label: "미사용" },
];
const display = [
    { value: "표시", label: "표시" },
    { value: "미표시", label: "미표시" },
];
const trainRun = [
    { value: "자동배차", label: "자동배차" },
    { value: "선택배차(기사상태)", label: "선택배차(기사상태)" },
    { value: "선택배차(기사확인)", label: "선택배차(기사확인)" },
    { value: "선택배차(경쟁)", label: "선택배차(경쟁)" },
];
const appliy = [
    { value: "시간제한", label: "시간제한" },
    { value: "시간제한", label: "시간제한" },
];
const garage = [
    { value: "서울특별시", label: "서울특별시" },
    { value: "기흥", label: "기흥" },
];
const displayLocation = [
    { value: "승차위치", label: "승차위치" },
    { value: "비고", label: "비고" },
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
        <div className="wrap">
            <Header />
            <div id="main">
                <Receive />
                <div className="contents">
                    <Map />
                    <div className="wrap-data ">
                        <div className="lst-data">
                            <div className="info-program">
                                <h2>프로그램 정보</h2>
                                <h3>HandicappedTaxi</h3>
                                <p className="txt">
                                    버전 2.0.6.201 <br />
                                    Copyright (C) 2011 I-One Max Co. Ltd <br />
                                    I-One Max Co. Ltd.
                                </p>
                                <Input type="textarea" name="text" id="exampleText" defaultValue="- HandicappedTaxi 콜 택시 관제 시스템" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Current;
