import * as React from "react";
import { inject, observer } from "mobx-react";
import { AppStore } from "../store";
import { Icon } from 'antd';

import './app.less'

interface IProps {
  appStore: AppStore;
  children?: AudioContextLatencyCategory;
}

@inject("appStore")
@observer
class App extends React.Component<IProps, {}> {
  render() {
    return (
      <div className='div'>
        <Icon type="ant-design" className='icon'/>
        <p className='p'>{this.props.appStore.text}</p>
      </div>);
  }
}

export default App