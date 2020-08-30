import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./doublecookies av.png";
import chocoCookie from './ChocoCookie240.png'
import { GithubOutlined } from '@ant-design/icons';
import { Layout, Menu, Row, Col, Image } from 'antd';

const { Header, Content, Footer} = Layout;

class MainPage extends React.Component {
    render() {
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
                    <div className="page-head">
                        <Row type="flex" gutter={48} align="middle">
                            <Col xs={{ span: 6 }} sm={{ span: 6 }}>
                                <Image src={logo} alt={"Cookies"} className={"myImg"} />
                            </Col>
                            <Col xs={{ span: 16, offset: 2 }} sm={{ span: 17, offset: 1 }}>
                                <div>
                                    <span className="headings text-big">DoubleCookies</span>
                                    <span className="headings text-med"><br/>- Statistics fan<br/>- Cookies eater</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="page-head">
                        <div>Work in progress...</div>
                    </div>
                </Content>
                <Footer>
                    <Image src={chocoCookie} alt={"ChocoCookie"} className={"footerImg"} />
                </Footer>
            </Layout>
        );
    }
}

// ========================================

ReactDOM.render(
<MainPage />,
    document.getElementById('root')
);