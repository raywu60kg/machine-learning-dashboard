import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';

import HandleMenuStatus from './handle_menu_status'
import { Layout, Menu, Breadcrumb, Icon, Typography } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubMenuItemSelected = this.handleSubMenuItemSelected.bind(this);
    this.handleModelItemSelected = this.handleModelItemSelected.bind(this);
    this.state = { modelKey: "model1", subMenuIndex: 'basicInformation' };
  }
  
  handleModelItemSelected({key}) {
    this.setState({modelKey: key})
    console.log("666666",key,this.state)
  }

  handleSubMenuItemSelected({key}) {
    this.setState({ subMenuIndex: key });
    console.log("77777",key, this.state)
  }

  render() {
    return (
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
            defaultSelectedKeys={['model1']}
            style={{ lineHeight: '64px' }}
            onClick={this.handleModelItemSelected}
          >
            <Menu.Item key="model1"  >model 1</Menu.Item>
            <Menu.Item key="model2"  >model 2</Menu.Item>
            <Menu.Item key="model3"  >model 3</Menu.Item>
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
                defaultOpenKeys={['modelInformation']}
                style={{ height: '100%' }}
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
                  <Menu.Item key="predictions"  >Predictions</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            {/* <Content style={{ padding: '0 24px', minHeight: 280 }}>showState {this.state.modelKey} {this.state.subMenuIndex}</Content> */}
            {/* <WrappedRegistrationForm style={{ textAlign: 'center' }}/> */}
            
            <HandleMenuStatus modelKey={this.state.modelKey} subMenuIndex={this.state.subMenuIndex} />
            
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Machine Learning Dashboard</Footer>
      </Layout>
    )
  }
}

export default App;
