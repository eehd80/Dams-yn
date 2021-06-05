import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap";
import NumberFormat from "react-number-format";
import Select from "react-select";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

const Receive = () => (
    <div id="receve" className="">
        {/* is-folded */}
        <div className="form-wrap">
            <Form>
                <Row xs="4">
                    <Col>
                        <Label for="tel">고객전화번호</Label>
                    </Col>
                    <Col>
                        <NumberFormat format="###-####-####" className="form-control" />
                    </Col>
                    <Col>
                        <Label for="purpose">이용목적</Label>
                    </Col>
                    <Col>
                        <Select options={options} />
                    </Col>
                </Row>
            </Form>
        </div>
        <a href="javascript:void(0);" role="button" class="btn_fold" aria-expanded="true">
            <span className="blind">목록영역 접기</span>
        </a>
    </div>
);

export default Receive;
