import React from 'react';
import {Divider, Layout} from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';
import CookiesBlock from '../components/CookiesBlock/CookiesBlock';

const {Header, Content, Footer} = Layout;

function ProgrammingPage() {
    return (
        <Layout className="layout">
            <Header>
                <HeaderNavigation selectedKeys={['2']}/>
            </Header>
            <Content>
                <CookiesBlock/>
                <div className="content-main">
                    Work in progress!!
                </div>
                {/*<Row gutter={[8, 8]}>*/}
                {/*    <Col span={24}><div className="headings text-miniMedium">{t("programmingProject:title")}</div></Col>*/}
                {/*</Row>*/}
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