
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Slider, InputNumber, Row, Col, Layout, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class HyperParametersInteger extends React.Component {
    state = {
        inputValue: 1,
    };

    onChange = value => {
        this.setState({
            inputValue: value,
        });
    };

    render() {
        const { inputValue } = this.state;
        return (
            <Layout style={{ padding: '0px 36px', background: '#fff' }}>

                <Row>
                    <Col span={20}>
                        <Slider
                            min={1}
                            max={20}
                            onChange={this.onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                    </Col>
                    <Col span={20}>
                        <InputNumber
                            min={1}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={inputValue}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>
            </Layout>
        );
    }
}

class HyperParametersFloat extends React.Component {
    state = {
        inputValue: 0,
    };

    onChange = value => {
        if (isNaN(value)) {
            return;
        }
        this.setState({
            inputValue: value,
        });
    };

    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={0}
                        max={1}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                        step={0.01}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={0}
                        max={1}
                        style={{ marginLeft: 16 }}
                        step={0.01}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}

class HyperParameters extends React.Component {

    render() {
        return (
            <Layout style={{ padding: '24px 24px', background: '#fff' }}>
                <Row>
                    <Content>
                        Learning rate
                    </Content>
                    <HyperParametersFloat />
                </Row>
                <Row>
                    <Content>
                        Dropout rate
                    </Content>
                    <HyperParametersFloat />
                </Row>
                <Row>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Row>
            </Layout>
        );
    }
}
export default HyperParameters;