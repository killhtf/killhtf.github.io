import React from 'react';
import {Layout} from 'antd';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';
import FooterNavigation from '../components/FooterNavigation/FooterNavigation';

const Content = Layout;

function ProgrammingPage() {
    return (
        <Layout className="layout">
            <HeaderNavigation selectedKeys={['2']}/>
            <Content>
                Work in progress!!
                {/*<Row gutter={[8, 8]}>*/}
                {/*    <Col span={24}><div className="headings text-miniMedium">{t("programmingProject:title")}</div></Col>*/}
                {/*</Row>*/}
                {/*<Row gutter={[8, 8]}>*/}
                {/*    <Col span={24}>{t("programmingProject:intro")}</Col>*/}
                {/*    <Col span={24}><a href="https://github.com/DoubleCookies/GDStatistics" target="_blank" rel="noopener noreferrer">GDStatistics</a>{t("programmingProject:GDStatistics")}</Col>*/}
                {/*</Row>*/}
            </Content>
            <FooterNavigation/>
        </Layout>
    );
}

export default ProgrammingPage;