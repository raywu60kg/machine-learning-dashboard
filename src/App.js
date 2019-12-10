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


    this.handleSubMenuItemSelected = this.handleSubMenuItemSelected.bind(this);
    this.handleModelItemSelected = this.handleModelItemSelected.bind(this);
    this.state = { modelKey: "model1", subMenuIndex: 'basicInformation' };
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleModelItemSelected({ key }) {
    this.setState({ modelKey: key })
  }

  handleSubMenuItemSelected({ key }) {
    this.setState({ subMenuIndex: key });
  }

  render() {
    return (
      <Layout>
        <Header className="header-1">
          <Row>
            <Col span={24}>
              <Typography>
                <Title><font color="white">MACHINE LEARNING DASHBOARD</font></Title>
              </Typography>
            </Col>
          </Row>


        </Header>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['model1']}
            style={{ lineHeight: '64px' }}
            onClick={this.handleModelItemSelected}
          >
            <Menu.Item key="model1"  >model 1</Menu.Item>
            <Menu.Item key="model2"  >model 2</Menu.Item>
            <Menu.Item key="model3"  >model 3</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ padding: '24px 0', background: '#fff', minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.toggleCollapsed}>

            <Menu
              mode="inline"
              theme="dark"
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


          <HandleMenuStatus modelKey={this.state.modelKey} subMenuIndex={this.state.subMenuIndex} />

          <Footer style={{ textAlign: 'center' }}>Machine Learning Dashboard</Footer>
        </Layout>

      </Layout>
    )
  }
}

export default App;
