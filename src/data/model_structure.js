import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import { Tree, Button, Row, Layout, Col } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const { TreeNode, DirectoryTree } = Tree;

class ModelStructure extends React.Component {
  onSelect = (keys, event) => {
    console.log('Trigger Select', keys, event);
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };

  render() {
    return (
      <Layout>
        <Row>
          <Col>
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
        </Row>

        <Row>
          <Col>
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