import React from "react";
import "react-contexify/dist/ReactContexify.css";
import { useContextMenu } from "react-contexify";

export default function TestRenderer(props) {
    const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
    const MENU_ID = "dams-context";
    const { show } = useContextMenu({
        id: MENU_ID,
    });

    const element = props.eGridCell.parentElement;
    if (element) {
        element.addEventListener("contextmenu", testCustomContext, false);
    }

    function testCustomContext(e) {
        show(e, { props: { data: props.data } });
    }

    return <div>{cellValue}</div>;
}
