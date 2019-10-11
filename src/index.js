import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Icon, Typography } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;
ReactDOM.render(
    <Layout>
        <Header className="header-1">
            <Typography>
                <Title><font color="white">MACHINE LEARNING DASHBOARD</font></Title>
            </Typography>

        </Header>
        <Header className="header">
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                {/* <Icon type="dashboard" theme="filled" /> */}
                <Menu.Item key="1">model 1</Menu.Item>
                <Menu.Item key="2">model 2</Menu.Item>
                <Menu.Item key="3">model 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Machine learning dashboard</Breadcrumb.Item>
            </Breadcrumb> */}
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="folder" theme="twoTone" />
                                    Model Information
                                </span>
                            }
                        >
                            <Menu.Item key="1">Basic Information</Menu.Item>
                            <Menu.Item key="2">Model Structure</Menu.Item>
                            <Menu.Item key="3">Hyper Parameters</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="fund" theme="twoTone" />
                                        Visualization
                                </span>
                            }
                        >
                            <Menu.Item key="5">Loss</Menu.Item>
                            <Menu.Item key="6">Confusion Matrix</Menu.Item>
                            <Menu.Item key="7">Predictions</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
            </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>machine learning dashboard</Footer>
    </Layout>,
    document.getElementById('root'),
);
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
