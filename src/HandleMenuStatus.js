import React from 'react';
import { Layout, Typography } from 'antd';
import HyperParameters from './info/HyperParameters'
import ModelStructure from './info/ModelStructure'
import TrainingStatus from './info/TrainingStatus'
import EpochsVsLoss from './visualizations/EpochsVsLoss'
import ConfusionMatrix from './visualizations/ConfusionMatrix'
import BasicInformation from './info/BasicInformation';
import RocCurve from './visualizations/RocCurve'
const { Title } = Typography;
const { Header, Content} = Layout;

class HandleMenuStatus extends React.Component {
    constructor(props) {
        super(props);
        this.MenuItemMappingObject = {
            'basicInformation': {
                'displayName': 'Basic Information',
                'return': <BasicInformation/>},
            'hyperParameters': {
                'displayName': 'HyperParameters',
                'return': <HyperParameters/>},
            'modelStructure': {
                'displayName': 'Model Structure',
                'return': <ModelStructure/>    
            },
            'trainingStatus': {
                'displayName': 'Training Status',
                'return': <TrainingStatus/>    
            },
            'loss': {
                'displayName': 'Loss',
                'return': <EpochsVsLoss/>
            },
            'confusionMatrix': {
                'displayName': 'Confusion Matrix',
                'return': <ConfusionMatrix/>
            },
            'rocCurve': {
                'displayName': 'Roc Curve',
                'return': <RocCurve/>
            },
        }
    }

    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: '24px 16px 64px',textAlign:'center' }}>
                    <Title level={3}>{this.MenuItemMappingObject[this.props.subMenuIndex]["displayName"]}</Title>
                </Header>
                <Content>
                    {this.MenuItemMappingObject[this.props.subMenuIndex]["return"]}
                </Content>
            </Layout>
        )
    }
}
  
export default HandleMenuStatus;  