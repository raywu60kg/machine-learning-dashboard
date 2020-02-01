
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  Layout
} from 'antd';


class InformationForm extends React.Component {
  // state = {
  //   confirmDirty: false,
  //   autoCompleteResult: [],
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFieldsAndScroll((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // };

  // handleConfirmBlur = e => {
  //   const { value } = e.target;
  //   this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  // };

  // compareToFirstPassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   if (value && value !== form.getFieldValue('password')) {
  //     callback('Two passwords that you enter is inconsistent!');
  //   } else {
  //     callback();
  //   }
  // };

  // validateToNextPassword = (rule, value, callback) => {
  //   const { form } = this.props;
  //   if (value && this.state.confirmDirty) {
  //     form.validateFields(['confirm'], { force: true });
  //   }
  //   callback();
  // };

  // handleWebsiteChange = value => {
  //   let autoCompleteResult;
  //   if (!value) {
  //     autoCompleteResult = [];
  //   } else {
  //     autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
  //   }
  //   this.setState({ autoCompleteResult });
  // };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Layout style={{ padding: '0px 36px', background: '#fff' }}>
        <Form >
          <Row>
            <Col span={20}>
              <Form.Item label="Model name">
                {getFieldDecorator('modelName', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input model name',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={20}>
              <Form.Item label="Owner">
                {getFieldDecorator('owner', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input the owner of this model',
                    }
                  ],
                })(<Input />)}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={2}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
              </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Layout>
    );
  }
}

const BasicInformation = Form.create({ name: 'InformationForm' })(InformationForm);

export default BasicInformation;
