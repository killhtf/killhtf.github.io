import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import {useTranslation} from 'react-i18next';

function HeaderNavigation(props) {
    const {t} = useTranslation(['about']);
    return(
        <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={props.selectedKeys}
            style={{ lineHeight: '32px', height: '32px' }}
        >
            <Menu.Item key="1"><Link to="/">{t('mainTitle')}</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/programming">{t('programmingTitle')}</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/fandom">{t('fandomTitle')}</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/hobbies">{t('hobbiesTitle')}</Link></Menu.Item>
        </Menu>
    );
}

export default HeaderNavigation;