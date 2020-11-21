import React from 'react';
import {Col, Divider, Layout, Row} from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
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
                        <ul>
                            <li><b>Java</b>
                                <ul>
                                    <li>Spring Boot</li>
                                    <li>Maven</li>
                                    <li>JUnit</li>
                                    <li>Mockito</li>
                                </ul>
                            </li>
                            <li>JavaScript
                                <ul>
                                    <li>TypeScript</li>
                                    <li>React</li>
                                    <li>Ant Design</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </li>
                            <li>C#</li>
                        </ul>
                    </Row>

                    <Row gutter={[8, 8]}>
                        <Col span={24}><div className="headings text-miniMedium">Open source</div></Col>
                    </Row>
                    <GitHubCalendar username="DoubleCookies">
                        <ReactTooltip delayShow={50} html />
                    </GitHubCalendar>
                </div>

                {/*<Row gutter={[8, 8]}>*/}
                {/*    <Col span={24}>{t("programmingProject:intro")}</Col>*/}
                {/*    <Col span={24}><a href="https://github.com/DoubleCookies/GDStatistics" target="_blank" rel="noopener noreferrer">GDStatistics</a>{t("programmingProject:GDStatistics")}</Col>*/}
                {/*</Row>*/}
                <Divider className="gradient-border-end" />
            </Content>
            <Footer style={{paddingTop: 10, overflowY: 'hidden'}}>
                <FooterNavigation />
            </Footer>

        </Layout>
    );
}

export default ProgrammingPage;