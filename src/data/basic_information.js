
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Layout
} from 'antd';


class RegistrationForm extends React.Component {
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

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Layout style={{ padding: '0px 0px', background: '#fff' }}>
        <Form {...formItemLayout}>
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
          <Form.Item label="Owner">
            {getFieldDecorator('owner', {
              rules: [
                {
                  required: true,
                  message: 'Please the owner of this model',
                }
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
              </Button>
          </Form.Item>
        </Form>
      </Layout>      
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;
