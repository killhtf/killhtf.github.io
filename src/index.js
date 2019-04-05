import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./killhtf av.png";
import { Layout, Menu, Icon, Row, Col } from 'antd';

const { Header, Content} = Layout;

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
                            <a href="https://github.com/killhtf" target="_blank" rel="noopener noreferrer"><Icon type="github" />Github</a>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <div className="page-head">
                        <Row type="flex" gutter={48} align="middle">
                            <Col xs={{ span: 6 }} sm={{ span: 6 }}>
                                <div className="wrapper"><img src={logo} alt={"Cookies"} className={"myImg"} /></div>
                            </Col>
                            <Col xs={{ span: 16, offset: 2 }} sm={{ span: 17, offset: 1 }}>
                                <div>
                                    <span className="headings text-big">Killhtf</span>
                                    <span className="headings text-med"><br/>- Statistics fan<br/>- Cookies eater</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="page-head">
                        <div>Work in progress...</div>
                    </div>
                </Content>
            </Layout>
    );
    }
}

// ========================================

ReactDOM.render(
<MainPage />,
    document.getElementById('root')
);