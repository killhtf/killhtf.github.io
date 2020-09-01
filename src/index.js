import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./doublecookies av.png";
import chocoCookie from './ChocoCookie240.png'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import { Layout, Menu, Row, Col, Image } from 'antd';
import { useTranslation } from 'react-i18next';
import './i18n';


const { Header, Content, Footer} = Layout;

const FandomSvg = () => (
    <svg fill="#00D6D6" fillRule="evenodd" viewBox="0 0 250 250" transform="translate(-.664 -.216)">
        <path d="M113.63802,182.637933 C113.63802,184.727438 113.126125,187.695722 110.724976,189.960981 L101.740094,197.625785 L20.0297306,121.426914 L20.0297306,91.5293058 L109.878745,175.324637 C111.285924,176.642783 113.647831,179.357198 113.647831,182.647695 L113.63802,182.637933 Z M238.088253,93.7164592 L238.088253,121.446438 L136.429897,218.774779 C134.737243,220.356565 133.054399,221.069353 130.938629,221.069353 C128.77371,221.069353 126.854442,220.288202 125.230752,218.755245 L115.930962,210.416731 L238.088253,93.7066972 L238.088253,93.7164592 Z M160.639055,143.122703 L132.464019,169.720052 L43.2054811,85.45605 C38.7079891,81.2184397 36.2477827,75.5650256 36.2477827,69.5113132 C36.2477827,63.4771053 38.7079891,57.8237106 43.1758553,53.5958525 L71.3706094,26.969208 L160.62905,111.252754 C169.948656,120.040415 169.948656,134.325261 160.62905,143.112932 L160.639055,143.122703 Z M144.007504,69.7163531 L173.383115,41.986365 C177.890417,37.7487547 183.883576,35.4151428 190.260608,35.4151428 C196.657165,35.4151428 202.640707,37.7585264 207.138005,42.0058889 L237.448432,70.6146567 L191.21524,114.260086 L174.337843,98.3446351 L144.027222,69.7163531 L144.007504,69.7163531 Z M256.884723,65.3029887 L190.496741,1.54354595 L189.119091,0.215628951 L187.741345,1.52402204 L129.757578,56.7887105 L77.9345271,7.60704945 L77.8665334,7.53905575 L77.8179665,7.50991559 L71.3229167,2.33495379 L69.9845092,1.26090585 L68.7248773,2.43259274 L1.25443542,65.1863212 L0.663861554,65.7330877 L0.663861554,129.004326 L1.23500865,129.541379 L127.742051,248.907237 L129.119797,250.21563 L130.497544,248.917009 L256.886471,129.551141 L257.446934,129.014088 L257.446934,65.8307364 L256.896185,65.3034938 L256.884723,65.3029887 Z"/>
    </svg>
);

const FandomIcon = props => <Icon component={FandomSvg} {...props} />;

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
            <Footer style={{paddingTop: 36, overflowY: 'hidden'}}>
                <div className="test">
                    <div className="footerIcons">
                        <a href="https://github.com/DoubleCookies" target="_blank" rel="noopener noreferrer"><GithubOutlined style={{fontSize: 32}} /></a>
                        <a href="https://twitter.com/BigDoubleCookie" target="_blank" rel="noopener noreferrer"><TwitterOutlined style={{fontSize: 32}} /></a>
                        <a href="https://community.fandom.com/wiki/User:DoubleCookies" target="_blank" rel="noopener noreferrer"><FandomIcon style={{width: 32, height: 32}} /></a>
                    </div>
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