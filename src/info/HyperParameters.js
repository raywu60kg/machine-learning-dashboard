
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Slider, InputNumber, Row, Col, Layout, Button } from 'antd';
const { Content } = Layout;

class HyperParametersFloat extends React.Component {
    state = {
        inputValue: 0,
    };
    InputNumberOnChange = (value) => {
        console.log('changed', value);
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
                <Row style={{marginBottom:'12px'}}>
                    <Col span={16}>
                        <Content>
                            Learning rate
                    </Content>
                    </Col>
                    <HyperParametersFloat />
                </Row>
                <Row style={{marginBottom:'12px'}}>
                    <Col span={16}>
                        <Content>
                            Dropout rate
                    </Content>
                    </Col>
                    <HyperParametersFloat />
                </Row>
                <Row style={{marginBottom:'12px'}}>
                    <Col span={16}>
                        <Content>
                            Batch Size
                    </Content>
                    </Col>
                </Row>
                <Row style={{marginBottom:'12px'}}>
                    <Col span={16}>
                        <InputNumber min={1} max={1024} defaultValue={32} onChange={this.InputNumberOnChange} />
                    </Col>
                </Row>
                <Row style={{marginBottom:'12px'}}>
                    <Col span={16}>
                        <Content>
                            Training Epochs
                    </Content>
                    </Col>
                </Row>
                <Row style={{marginBottom:'12px'}}>
                    <Col span={16}>
                        <InputNumber min={1} max={100} defaultValue={3} onChange={this.InputNumberOnChange} />
                    </Col>
                </Row>

                <Row style={{marginBottom:'12px'}}>
                    <Col span={16}>
                        <Button type="primary" htmlType="submit">
                            Submit
                    </Button>
                    </Col>
                </Row>
            </Layout>
        );
    }
}
export default HyperParameters;