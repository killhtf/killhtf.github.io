import {useTranslation} from 'react-i18next';
import {Col, Divider, Layout, Row} from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';

const {Header, Content, Footer} = Layout;

function MainPage() {
    const {t} = useTranslation(['about', 'programming', 'fandom', 'photography', 'thisPage', 'hobbies']);
    return (
        <Layout className="layout">
            <Header>
                <HeaderNavigation selectedKeys={['1']}/>
            </Header>
            <Content>
                <CookiesBlock name={"cookies"} />
                <div className="content-main">
                    <Row style={{marginTop: 10}}>
                        <Col span={24}><div className="headings text-medium">{t("about:mainTitle")}</div></Col>
                    </Row>
                    <Row>
                        <Col span={24}>{t("about:intro")}</Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}><div className="headings text-medium">{t("about:programmingTitle")}</div></Col>
                    </Row>
                    <Row>
                        <Col span={24}><div>{t("programming:intro")}</div><br/><div>{t("programming:openSource")}</div><br/><div>{t("programming:preLink")}<Link to="/programming">{t("programming:link")}</Link></div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}><div className="headings text-medium">FANDOM</div></Col>
                    </Row>
                    <Row>
                        <Col span={24}><div>{t("fandom:intro")}</div><br/><div>{t("fandom:vanguard")}</div><br/><div>{t("fandom:preLink")}<Link to="/fandom">{t("fandom:link")}</Link></div></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row>
                        <Col span={24}><div className="headings text-medium">{t("about:hobbiesTitle")}</div></Col>
                    </Row>
                    <Row>
                        <Col span={24}><Link to="/hobbies">{t("hobbies:link")}</Link></Col>
                    </Row>
                </div>
                <Divider className="gradient-border-end" />
            </Content>
            <Footer style={{paddingTop: 10, overflowY: 'hidden'}}>
                <FooterNavigation/>
            </Footer>
        </Layout>
    );
}

export default MainPage;