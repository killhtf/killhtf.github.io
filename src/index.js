import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./images/doublecookies av.png";
import chocolateCookie from './images/ChocoCookie240.png'
import {GithubOutlined, TwitterOutlined} from '@ant-design/icons';
import {Col, Image, Layout, Row, Divider} from 'antd';
import {useTranslation} from 'react-i18next';
import './i18n';
import FandomIcon from "./FandomIcon";

const {Content, Footer} = Layout;

function MainPage() {
    const {t} = useTranslation(['about', 'programming', 'programmingProject']);
    return (
        <Layout className="layout">
            {/*<Header>*/}
            {/*    <div className="logo" />*/}
            {/*    <Menu*/}
            {/*        theme="light"*/}
            {/*        mode="horizontal"*/}
            {/*        defaultSelectedKeys={['1']}*/}
            {/*        style={{ lineHeight: '32px', height: '32px' }}*/}
            {/*    >*/}
            {/*        <Menu.Item key="1">Home</Menu.Item>*/}
            {/*        <Menu.Item key="3">*/}
            {/*            <a href="https://github.com/DoubleCookies" target="_blank" rel="noopener noreferrer"><GithubOutlined />Github</a>*/}
            {/*        </Menu.Item>*/}
            {/*    </Menu>*/}
            {/*</Header>*/}
            <Content>
                <div className="content-title">
                    <Row type="flex" gutter={48} align="middle">
                        <Col span={6} offset={2}>
                            <Image src={logo} alt={"Cookies"} className={"myImg"} />
                        </Col>
                        <Col span={15} offset={1}>
                            <div>
                                <span className="headings text-big">DoubleCookies</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="content-main">
                    <Row gutter={[8, 8]} style={{marginTop: 10}}>
                        <Col span={24}><div className="headings text-medium">{t("about:title")}</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("about:intro")}</Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row gutter={[8, 8]}>
                        <Col span={24}><div className="headings text-medium">{t("programming:title")}</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("programming:intro")}</Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}><div className="headings text-miniMedium">{t("programmingProject:title")}</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("programmingProject:intro")}</Col>
                        <Col span={24}><a href="https://github.com/DoubleCookies/GDStatistics" target="_blank" rel="noopener noreferrer">GDStatistics</a>{t("programmingProject:GDStatistics")}</Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{paddingTop: 36, overflowY: 'hidden'}}>
                <div className="test">
                    <div className="footerIcons">
                        <a href="https://github.com/DoubleCookies" target="_blank" rel="noopener noreferrer"><GithubOutlined style={{fontSize: 32}} /></a>
                        <a href="https://twitter.com/BigDoubleCookie" target="_blank" rel="noopener noreferrer"><TwitterOutlined style={{fontSize: 32}} /></a>
                        <a href="https://community.fandom.com/wiki/User:DoubleCookies" target="_blank" rel="noopener noreferrer"><FandomIcon className="fandomIcon" style={{width: 32, height: 32}} /></a>
                    </div>
                    <Image src={chocolateCookie} alt={"ChocolateCookie"} className={"footerImg"} />
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