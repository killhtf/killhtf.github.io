import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./images/doublecookies av.png";
import chocolateCookie from './images/ChocoCookie240.png'
import {GithubOutlined, TwitterOutlined} from '@ant-design/icons';
import {Col, Image, Layout, Menu, Row} from 'antd';
import {useTranslation} from 'react-i18next';
import './i18n';
import FandomIcon from "./FandomIcon";

const {Header, Content, Footer} = Layout;

function MainPage() {
    const { t } = useTranslation(['about', 'namespace2']);
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '32px', height: '32px' }}
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="3">
                        <a href="https://github.com/DoubleCookies" target="_blank" rel="noopener noreferrer"><GithubOutlined />Github</a>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content>
                <div className="content-title">
                    <Row type="flex" gutter={48} align="middle">
                        <Col xs={{ span: 6 }} sm={{ span: 6 }}>
                            <Image src={logo} alt={"Cookies"} className={"myImg"} />
                        </Col>
                        <Col xs={{ span: 16, offset: 2 }} sm={{ span: 17, offset: 1 }}>
                            <div>
                                <span className="headings text-big">DoubleCookies</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="content-main">
                    <div className="headings text-medium">{t("about:title")}</div>
                    <div>{t("about:intro")}</div>
                </div>
            </Content>
            <Footer style={{paddingTop: 36, overflowY: 'hidden'}}>
                <div className="test">
                    <div className="footerIcons">
                        <a href="https://github.com/DoubleCookies" target="_blank" rel="noopener noreferrer"><GithubOutlined style={{fontSize: 32}} /></a>
                        <a href="https://twitter.com/BigDoubleCookie" target="_blank" rel="noopener noreferrer"><TwitterOutlined style={{fontSize: 32}} /></a>
                        <a href="https://community.fandom.com/wiki/User:DoubleCookies" target="_blank" rel="noopener noreferrer"><FandomIcon className="fandomIcon" style={{width: 32, height: 32}} /></a>
                    </div>
                    <Image src={chocolateCookie} alt={"ChocoCookie"} className={"footerImg"} />
                </div>
            </Footer>
        </Layout>
    );
}

// ========================================

ReactDOM.render(
<MainPage />,
    document.getElementById('root')
);