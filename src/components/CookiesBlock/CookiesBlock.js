import {Col, Image, Row} from 'antd';
import logo from '../../images/doublecookies av.png';
import React from 'react';
import './CookiesBlock.css'

function CookiesBlock() {
    return(
        <div className="content-title">
            <Row type="flex" justify="center">
                <Col>
                    <Image preview={false} src={logo} alt={"Cookies"} className={"myImg u--fadeInDown"} />
                </Col>
            </Row>
            <Row type="flex" align="middle" justify="center">
                <span className="headings text-big">DoubleCookies</span>
            </Row>
        </div>
    );
}
export default CookiesBlock;