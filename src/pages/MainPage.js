import {useTranslation} from 'react-i18next';
import {Col, Divider, Layout, Row} from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';

const {Header, Content, Footer} = Layout;

function MainPage() {
    const {t} = useTranslation(['about', 'programming', 'fandom', 'photography', 'thisPage']);
    return (
        <Layout className="layout">
            <Header>
                <HeaderNavigation selectedKeys={['1']}/>
            </Header>
            <Content>
                <CookiesBlock name={"cookies"} />
                <div className="content-main">
                    <Row gutter={[8, 8]} style={{marginTop: 10}}>
                        <Col span={24}><div className="headings text-medium">{t("about:title")}</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("about:intro")}</Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row gutter={[8, 8]}>
                        <Col span={24}><div className="headings text-medium">{t("about:programmingTitle")}</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("programming:intro")}<br/>{t("programming:preLink")}<Link to="/programming">{t("programming:link")}</Link></Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row gutter={[8, 8]}>
                        <Col span={24}><div className="headings text-medium">FANDOM</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("fandom:intro")}</Col>
                    </Row>
                    <Divider className="gradient-border" />
                    <Row gutter={[8, 8]}>
                        <Col span={24}><div className="headings text-medium">{t("about:photoTitle")}</div></Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={24}>{t("photography:intro")}</Col>
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