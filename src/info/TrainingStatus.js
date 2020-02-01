import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Progress, Layout, Row, Button, Col } from 'antd';


class TrainingStatus extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartTrainingOnClick = this.handleStartTrainingOnClick.bind(this);
    this.handleStopTrainingOnClick = this.handleStopTrainingOnClick.bind(this);
    this.handleRestartTrainingOnClick = this.handleRestartTrainingOnClick.bind(this);
    this.state = { IsTrained: 0, trainingProgress:0 };
  }

  componentDidMount() {
    this.trainingProgressID = setInterval(
      () => this.tick(),
      50
    );
  }

  componentWillUnmount() {
    clearInterval(this.trainingProgressID);
  }

  tick() {
    if (this.state.IsTrained === 1) {
      this.setState({
        trainingProgress: this.state.trainingProgress + 1 
      });
    }
  }

  handleStartTrainingOnClick(){
    this.setState({IsTrained:1})
  }

  handleStopTrainingOnClick(){
    this.setState({IsTrained:0})
  }

  handleRestartTrainingOnClick(){
    this.setState({
      trainingProgress:0  
    });
  }

  render() {
    return (
      <Layout style={{ padding: '0px 36px', background: '#fff' }}>
        <Row style={{ marginBottom: 30 }}>
          <Progress
            type="line"
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            strokeWidth={10}
            percent={this.state.trainingProgress}
          />
        </Row>
        <Row style={{ marginBottom: 30 }}>
          <Col span={6}> 
            <Button type="primary" htmlType="submit" onClick={this.handleStartTrainingOnClick}>
              Start Training
            </Button>
          </Col>
          <Col span={6}>
            <Button type="primary" htmlType="submit" onClick={this.handleStopTrainingOnClick}>
              Stop Training
            </Button>
          </Col>
          <Col span={6}>
            <Button type="primary" htmlType="submit" onClick={this.handleRestartTrainingOnClick}>
              Restart Training
            </Button>
          </Col>
        </Row>
      </Layout>
    )
  }
}
export default TrainingStatus;