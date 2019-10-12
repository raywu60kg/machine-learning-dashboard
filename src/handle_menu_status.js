import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Typography } from 'antd';
import WrappedRegistrationForm from './data/basic_information'
import HyperParametersInteger from './data/hyper_parameters'
import ModelStructure from './data/model_structure'
import TrainingStatus from './data/training_status'

const { Content} = Layout;

function HandleMenuStatus(props) {
    if (props.subMenuIndex == 'basicInformation') {
        return <WrappedRegistrationForm/>
    }else if (props.subMenuIndex == 'hyperParameters') {
        return <HyperParametersInteger/>
    }else if (props.subMenuIndex == 'modelStructure') {
        return <ModelStructure/>
    }else if (props.subMenuIndex == 'trainingStatus') {
        return <TrainingStatus/>
    }
    return <Content>Hello, {props.modelKey}, {props.subMenuIndex}</Content>;
}
  

export default HandleMenuStatus;
  