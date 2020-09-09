import {useTranslation} from "react-i18next";
import {Col, Divider, Image, Layout, Row} from "antd";
import HeaderNavigation from "../components/HeaderNavigation";
import logo from "../images/doublecookies av.png";
import {Link} from "react-router-dom";
import {GithubOutlined, TwitterOutlined} from "@ant-design/icons";
import FandomIcon from "../components/FandomIcon";
import chocolateCookie from "../images/ChocoCookie240.png";
import React from "react";

const {Content, Footer} = Layout;

function MainPage() {
    const {t} = useTranslation(['about', 'programming', 'fandom']);
    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={['1']}/>
            <Content>
                <div className="content-title">
                    <Row type="flex" gutter={48} align="middle">
                        <Col span={6} offset={2}>
                            <Image preview={false} src={logo} alt={"Cookies"} className={"myImg u--fadeInDown"} />
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
                        <Col span={24}>{t("programming:intro")}<br/><Link to="/programming">Link to programming</Link></Col>
                    </Row>
                    {/*<Row gutter={[8, 8]}>*/}
                    {/*    <Col span={24}><div className="headings text-miniMedium">{t("programmingProject:title")}</div></Col>*/}
                    {/*</Row>*/}
                    {/*<Row gutter={[8, 8]}>*/}
                    {/*    <Col span={24}>{t("programmingProject:intro")}</Col>*/}
                    {/*    <Col span={24}><a href="https://github.com/DoubleCookies/GDStatistics" target="_blank" rel="noopener noreferrer">GDStatistics</a>{t("programmingProject:GDStatistics")}</Col>*/}
                    {/*</Row>*/}
                    <Divider className="gradient-border" />
                    <Row gutter={[8, 8]}>
                        <Col span={24}><div className="headings text-medium">FANDOM</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("fandom:intro")}</Col>
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
                    <Image preview={false} src={chocolateCookie} alt={"ChocolateCookie"} className={"footerImg"} />
                </div>
            </Footer>
        </Layout>
    );
}

export default MainPage;