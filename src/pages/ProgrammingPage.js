import React from 'react';
import {Col, Divider, Layout, Row} from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
import {useTranslation} from "react-i18next";

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
                <div className="content-main" style={{marginTop: 20}}>
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
                        <Col span={24}><div className="headings text-miniMedium">Javascript</div></Col>
                    </Row>
                    <Divider className="gradient-border-small" />
                    <Row>
                        <Col span={24}>
                            <div>{t("jsExp")}</div>
                            <ul>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Ant Design</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}><div className="headings text-miniMedium">Open source</div></Col>
                    </Row>
                    <Divider className="gradient-border-small" />
                    <Row>
                        <Col span={24}>{t("programmingProject:intro")}</Col>
                        <Col span={24}><a href="https://github.com/DoubleCookies/GDStatistics" target="_blank" rel="noopener noreferrer">GDStatistics</a>{t("programmingProject:GDStatistics")}</Col>
                    </Row>
                    {/*Временно нерабочий код. Вся библиотека пока так себя ведёт.*/}
                    {/*<GitHubCalendar username="DoubleCookies">*/}
                    {/*    <ReactTooltip delayShow={50} html />*/}
                    {/*</GitHubCalendar>*/}
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