import React from 'react';
import {Col, Divider, Layout, Row} from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
import {useTranslation} from "react-i18next";
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";

const {Header, Content, Footer} = Layout;

function ProgrammingPage() {
    const {t} = useTranslation(['programmingSection']);
    return (
        <Layout className="layout">
            <Header>
                <HeaderNavigation selectedKeys={['2']}/>
            </Header>
            <Content>
                <CookiesBlock name={"programmingTitle"} />
                <div className="content-main">
                    <Row>
                        <Col span={24}><div className="headings text-medium">{t("exp")}</div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}>{t("start")}</Col>
                    </Row>
                    <Row>
                        <Col span={24}><div className="headings text-miniMedium">Java</div></Col>
                    </Row>
                    <Divider className="gradient-border-small" />
                    <Row>
                        <Col span={24}>
                            <div>{t("javaExp")}</div>
                            <ul>
                                <li>Spring Boot</li>
                                <li>Maven</li>
                                <li>JUnit</li>
                                <li>Mockito</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}><div className="headings text-miniMedium">Web</div></Col>
                    </Row>
                    <Divider className="gradient-border-small" />
                    <Row>
                        <Col span={24}>
                            <div>{t("jsExp")}</div>
                            <ul>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Ant Design</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}><div className="headings text-miniMedium">{t("otherExp")}</div></Col>
                    </Row>
                    <Divider className="gradient-border-small" />
                    <Row>
                        <Col span={24}>
                            <ul>
                                <li>C#</li>
                            </ul>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}><div className="headings text-miniMedium">Open source</div></Col>
                    </Row>
                    <Divider className="gradient-border-small" />
                    <Row>
                        <Col span={24}>{t("programmingProject:intro")}</Col>
                        <Col span={24}>
                            <a href="https://github.com/DoubleCookies/GDStatistics" target="_blank" rel="noopener noreferrer">GDStatistics</a>{t("programmingProject:GDStatistics")}
                        </Col>
                        <Col span={24}>
                            <a href="https://github.com/DoubleCookies/stats4wiki" target="_blank" rel="noopener noreferrer">stats4wiki</a>{t("programmingProject:stats4wiki")}
                        </Col>
                        <Col span={24}>
                            <a href="https://github.com/DoubleCookies/StringSwap" target="_blank" rel="noopener noreferrer">StringSwap</a>{t("programmingProject:StringSwap")}
                        </Col>
                        <Col span={24}>
                            <a href="https://github.com/DoubleCookies/MazeGeneratorAndSolver" target="_blank" rel="noopener noreferrer">MazeGeneratorAndSolver</a>{t("programmingProject:MazeGeneratorAndSolver")}
                        </Col>
                        <Col span={24}>
                            <a href="https://github.com/DoubleCookies/AssociativeRules" target="_blank" rel="noopener noreferrer">AssociativeRules</a>{t("programmingProject:AssociativeRules")}
                        </Col>
                    </Row>
                    <GitHubCalendar username="DoubleCookies">
                        <ReactTooltip delayShow={50} html />
                    </GitHubCalendar>
                </div>
                <Divider className="gradient-border-end" />
            </Content>
            <Footer style={{paddingTop: 10, overflowY: 'hidden'}}>
                <FooterNavigation />
            </Footer>
        </Layout>
    );
}

export default ProgrammingPage;