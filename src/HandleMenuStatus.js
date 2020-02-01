import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Typography } from 'antd';
import HyperParameters from './info/HyperParameters'
import ModelStructure from './info/ModelStructure'
import TrainingStatus from './info/TrainingStatus'
import LineChart from './visualizations/line_chart'
import ConfusionMatrix from './visualizations/ConfusionMatrix'
import BasicInformation from './info/BasicInformation';


// const { Content} = Layout;

// function HandleMenuStatus(props) {
//     if (props.subMenuIndex === 'basicInformation') {
//         return <BasicInformation/>
//     }else if (props.subMenuIndex === 'hyperParameters') {
//         return <HyperParameters/>
//     }else if (props.subMenuIndex === 'modelStructure') {
//         return <ModelStructure/>
//     }else if (props.subMenuIndex === 'trainingStatus') {
//         return <TrainingStatus/>
//     }else if (props.subMenuIndex === 'loss') {
//         return <LineChart/>
//     }else if (props.subMenuIndex === 'confusionMatrix') {
//         return <ConfusionMatrix/>
//     }else if (props.subMenuIndex === 'rocCurve') {
//         return <LineChart/>
//     }
//     return <Content>Hello, {props.modelKey}, {props.subMenuIndex}</Content>;
// }
  

// export default HandleMenuStatus;



// import React from 'react';
// import { Layout, Typography } from 'antd';
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
                'return': <LineChart/>
            },
            'confusionMatrix': {
                'displayName': 'Confusion Matrix',
                'return': <ConfusionMatrix/>
            },
            'rocCurve': {
                'displayName': 'Roc Curve',
                'return': <LineChart/>
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
  