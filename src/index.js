import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import logo from "./killhtf av.png";
import { Layout, Menu, Icon } from 'antd';

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
                        <img src={logo}  alt={"Cookies"} width="300" />
                        <div style={{paddingLeft: 10, paddingTop: 10, display: "inline-block", verticalAlign: "top"}}>
                        <span className="headings" style={{fontSize: 80}}>Killhtf</span>
                            <span className="headings" style={{fontSize: 30}}><br/>- Statistics fan<br/>- Cookies eater</span>
                        </div>
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