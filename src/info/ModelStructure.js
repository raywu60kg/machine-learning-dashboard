import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import { Button, Row, Layout, Col, Select, InputNumber } from 'antd';
const { Content } = Layout;
const { Option } = Select;

class ModelStructure extends React.Component {
  handleInputShapeChange = () => {

  }
  handleApplicationChange = () => {

  }
  handleApplicationChange = () => {

  }
  handleFirstFullyConnectedChange = () => {

  }
  handleSecondFullyConnectedChange = () => {

  }
  handleThirdFullyConnectedChange = () => {

  }
  handleCategoryNumberChange = () => {

  }
  handleCategoryNumberChange = () => {

  }

  // onSelect = (keys, event) => {
  //   console.log('Trigger Select', keys, event);
  // };

  // onExpand = () => {
  //   console.log('Trigger Expand');
  // };

  render() {
    return (
      <Layout style={{ padding: '0px 36px', background: '#fff' }}>
        {/* <Row>
          <Col span={20}>
            <DirectoryTree multiple={'True'} onSelect={this.onSelect} onExpand={this.onExpand}>
              <TreeNode title="Input Shape" key="0-0">
                <TreeNode title="128*128" key="0-0-0" isLeaf />
                <TreeNode title="256*256" key="0-0-1" isLeaf />
                <TreeNode title="512*512" key="0-0-2" isLeaf />
              </TreeNode>

              <TreeNode title="Application" key="0-1">
                <TreeNode title="VGG-16" key="0-1-0" isLeaf />
                <TreeNode title="VGG-19" key="0-1-1" isLeaf />
                <TreeNode title="Inception V3" key="0-1-2" isLeaf />
                <TreeNode title="XCeption" key="0-1-3" isLeaf />
                <TreeNode title="ResNet-50" key="0-1-4" isLeaf />
              </TreeNode>

              <TreeNode title="Fully-connected 1" key="0-2">
                <TreeNode title="1024" key="0-2-0" isLeaf />
                <TreeNode title="512" key="0-2-1" isLeaf />
                <TreeNode title="256" key="0-2-2" isLeaf />
                <TreeNode title="128" key="0-2-3" isLeaf />
              </TreeNode>

              <TreeNode title="Fully-connected 2" key="0-3">
                <TreeNode title="1024" key="0-3-0" isLeaf />
                <TreeNode title="512" key="0-3-1" isLeaf />
                <TreeNode title="256" key="0-3-2" isLeaf />
                <TreeNode title="128" key="0-3-3" isLeaf />
              </TreeNode>

              <TreeNode title="Fully-connected 3" key="0-4">
                <TreeNode title="1024" key="0-4-0" isLeaf />
                <TreeNode title="512" key="0-4-1" isLeaf />
                <TreeNode title="256" key="0-4-2" isLeaf />
                <TreeNode title="128" key="0-4-3" isLeaf />
              </TreeNode>

              <TreeNode title="Number of categories" key="0-5">
                <TreeNode title="2" key="0-5-0" isLeaf />
                <TreeNode title="3" key="0-5-1" isLeaf />
                <TreeNode title="4" key="0-5-2" isLeaf />
                <TreeNode title="5" key="0-5-3" isLeaf />
              </TreeNode>
            </DirectoryTree>
          </Col>
        </Row> */}
        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Content>
              Input Shape
            </Content>
          </Col>
        </Row>
        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Select
              labelInValue
              defaultValue={{ key: '128*128' }}
              style={{ width: 120 }}
              onChange={this.handleInputShapeChange}
            >
              <Option value="shape128">128*128</Option>
              <Option value="shape256">256*256</Option>
              <Option value="shape512">512*512</Option>
            </Select>
          </Col>
        </Row>

        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Content>
              Application
            </Content>
          </Col>
        </Row>
        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Select
              labelInValue
              defaultValue={{ key: 'VGG16' }}
              style={{ width: 120 }}
              onChange={this.handleApplicationChange}
            >
              <Option value="VGG16">VGG 16</Option>
              <Option value="VGG19">VGG 19</Option>
              <Option value="inceptionV3">Inception V3</Option>
              <Option value="xCeption">XCeption</Option>
              <Option value="resNet50">ResNet-50</Option>
            </Select>
          </Col>
        </Row>

        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Content>
              Fully-connected 1
            </Content>
          </Col>
        </Row>

        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Select
              labelInValue
              defaultValue={{ key: 'firstFullyConnected1024' }}
              style={{ width: 120 }}
              onChange={this.handleFirstFullyConnectedChange}
            >
              <Option value="firstFullyConnected1024">1024</Option>
              <Option value="firstFullyConnected512">512</Option>
              <Option value="firstFullyConnected256">256</Option>
              <Option value="firstFullyConnected128">128</Option>
            </Select>
          </Col>
        </Row>

        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Content>
              Fully-connected 2
            </Content>
          </Col>
        </Row>


        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Select
              labelInValue
              defaultValue={{ key: 'secondFullyConnected1024' }}
              style={{ width: 120 }}
              onChange={this.handleSecondFullyConnectedChange}
            >
              <Option value="secondFullyConnected1024">1024</Option>
              <Option value="secondFullyConnected512">512</Option>
              <Option value="secondFullyConnected256">256</Option>
              <Option value="secondFullyConnected128">128</Option>
            </Select>
          </Col>
        </Row>

        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Content>
              Fully-connected 3
            </Content>
          </Col>
        </Row>
        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Select
              labelInValue
              defaultValue={{ key: 'thirdFullyConnected1024' }}
              style={{ width: 120 }}
              onChange={this.handleThirdFullyConnectedChange}
            >
              <Option value="thirdFullyConnected1024">1024</Option>
              <Option value="thirdFullyConnected512">512</Option>
              <Option value="thirdFullyConnected256">256</Option>
              <Option value="thirdFullyConnected128">128</Option>
            </Select>
          </Col>
        </Row>

        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Content>
              Number of categories
            </Content>
          </Col>
        </Row>


        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <InputNumber min={2} max={100} defaultValue={2} onChange={this.handleCategoryNumberChange} />
          </Col>
        </Row>
        <Row style={{ padding: '12px 0px' }}>
          <Col span={20}>
            <Button type="primary" htmlType="submit">
              Submit
         </Button>
          </Col>
        </Row>
      </Layout>

    );
  }
}
export default ModelStructure;