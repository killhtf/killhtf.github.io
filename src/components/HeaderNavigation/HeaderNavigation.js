import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';

function HeaderNavigation(props) {
    return(
        <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={props.selectedKeys}
            style={{ lineHeight: '32px', height: '32px' }}
        >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/programming">Programming</Link></Menu.Item>
        </Menu>
    );
}

export default HeaderNavigation;