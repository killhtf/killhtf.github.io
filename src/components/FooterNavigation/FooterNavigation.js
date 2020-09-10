import React from 'react';
import {GithubOutlined, TwitterOutlined} from '@ant-design/icons';
import FandomIcon from '../FandomIcon/FandomIcon';
import {Image} from 'antd';
import chocolateCookie from '../../images/ChocoCookie240.png';
import './FooterNavigation.css';

function FooterNavigation() {
    return(
        <div style={{position: 'relative'}}>
            <div className="footerIcons">
                <a href="https://github.com/DoubleCookies" target="_blank" rel="noopener noreferrer"><GithubOutlined style={{fontSize: 32}} /></a>
                <a href="https://twitter.com/BigDoubleCookie" target="_blank" rel="noopener noreferrer"><TwitterOutlined style={{fontSize: 32}} /></a>
                <a href="https://community.fandom.com/wiki/User:DoubleCookies" target="_blank" rel="noopener noreferrer"><FandomIcon className="fandomIcon" style={{width: 32, height: 32}} /></a>
            </div>
            <Image preview={false} src={chocolateCookie} alt={"ChocolateCookie"} className={"footerImg"} />
        </div>
    );
}

export default FooterNavigation;