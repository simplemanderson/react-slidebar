import React from "react";
import {render} from "react-dom";
import Slidebar from "../../lib";
import "./styles.css";

function Demo() {
    return (
        <div style={{height: '100%'}}>
            <Slidebar sidebarContent={<div>test</div>}>
                <h1>Slidebar Demo</h1>
                <div>Main content</div>
            </Slidebar>
        </div>
    );
}

render(<Demo/>, document.getElementById("app"));
