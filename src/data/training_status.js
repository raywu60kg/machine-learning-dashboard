import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Progress, Layout, Row, Button, Col } from 'antd';


// const TrainingStatus = () => (
//   <div>
//     <Progress
//       strokeColor={{
//         '0%': '#108ee9',
//         '100%': '#87d068',
//       }}
//       percent={99.9}
//     />
//     <Progress
//       strokeColor={{
//         from: '#108ee9',
//         to: '#87d068',
//       }}
//       percent={99.9}
//       status="active"
//     />
//     <Progress
//       type="circle"
//       strokeColor={{
//         '0%': '#108ee9',
//         '100%': '#87d068',
//       }}
//       percent={90}
//     />
//     <Progress
//       type="circle"
//       strokeColor={{
//         '0%': '#108ee9',
//         '100%': '#87d068',
//       }}
//       percent={100}
//     />
//   </div>
// );
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
    if (this.state.IsTrained == 1) {
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
      <Layout style={{ padding: '24px 50px', background: '#fff' }}>
        <Row style={{ marginBottom: 30 }}>
          <Progress
            type="line"
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            strokeWidth={100}
            percent={this.state.trainingProgress}
          />
        </Row>
        <Row>
          <Col span={4}> 
            <Button type="primary" htmlType="submit" onClick={this.handleStartTrainingOnClick}>
              Start Training
            </Button>
          </Col>
          <Col span={4}>
            <Button type="primary" htmlType="submit" onClick={this.handleStopTrainingOnClick}>
              Stop Training
            </Button>
          </Col>
          <Col span={4}>
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