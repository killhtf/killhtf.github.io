import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./doublecookies av.png";
import chocoCookie from './ChocoCookie240.png'
import { GithubOutlined } from '@ant-design/icons';
import { Layout, Menu, Row, Col, Image } from 'antd';
import { useTranslation } from 'react-i18next';
import './i18n';

const { Header, Content, Footer} = Layout;

function MainPage() {
    const { t } = useTranslation(['namespace1', 'namespace2']);
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
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
                    <div className="headings text-medium">{t("namespace1:key")}</div>
                    <div>Всем привет! С вами DoubleCookies — любитель печенья, фанат статистики и всякого прочего.</div>
                </div>
            </Content>
            <Footer>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Image src={chocoCookie} alt={"ChocoCookie"} className={"footerImg"} />
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