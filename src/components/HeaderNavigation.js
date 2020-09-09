import React from 'react';
import {Link} from 'react-router-dom';
import {GithubOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';

const {Header} = Layout;

function HeaderNavigation(props) {
    return(
        <Header>
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                selectedKeys={props.selectedKeys}
                style={{ lineHeight: '32px', height: '32px' }}
            >
                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/programming">Programming</Link></Menu.Item>
                <Menu.Item key="3">
                    <a href="https://github.com/DoubleCookies" target="_blank" rel="noopener noreferrer"><GithubOutlined />Github</a>
                </Menu.Item>
            </Menu>
        </Header>
    );
}
export default HeaderNavigation;