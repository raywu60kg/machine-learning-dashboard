import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';

import HandleMenuStatus from './HandleMenuStatus'
import { Layout, Menu, Breadcrumb, Icon, Typography, Row, Col, Button } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.state = { subMenuIndex: 'basicInformation' };
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handleSubMenuItemSelected = (event) => {
    console.log(`sub model key`, event.key)
    this.setState({ subMenuIndex: event.key });
  }

  render() {
    return (
      <Layout >
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          theme='light'
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{ padding: '36px 0px'}}
        >
          {/* <Content style={{padding:'24px 16px'}}>
            MACHINE LEARNING DASHBOARD
          </Content> */}

          <Menu
            mode="inline"
            theme="light"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['modelInformation']}
          // style={{ height: '100%' }}
          >
            <SubMenu
              key="modelInformation"
              title={
                <span>
                  <Icon type="folder" theme="twoTone" />
                  Model Information
                    </span>
              }
              onClick={this.handleSubMenuItemSelected}
            >
              <Menu.Item key="basicInformation" >Basic Information</Menu.Item>
              <Menu.Item key="modelStructure" >Model Structure</Menu.Item>
              <Menu.Item key="hyperParameters" >Hyper Parameters</Menu.Item>
              <Menu.Item key="trainingStatus" >Training Status</Menu.Item>
            </SubMenu>
            <SubMenu
              key="visualization"
              title={
                <span>
                  <Icon type="fund" theme="twoTone" />
                  Visualization
                    </span>
              }
              onClick={this.handleSubMenuItemSelected}
            >
              <Menu.Item key="loss"  >Loss</Menu.Item>
              <Menu.Item key="confusionMatrix"  >Confusion Matrix</Menu.Item>
              <Menu.Item key="rocCurve"  >Roc Curve</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>

          <HandleMenuStatus  subMenuIndex={this.state.subMenuIndex} />

          <Footer style={{ textAlign: 'center' }}>Machine Learning Dashboard</Footer>


        </Layout >
      </Layout >
    )
  }
}

export default App;
