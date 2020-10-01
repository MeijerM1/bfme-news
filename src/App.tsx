import { Layout } from 'antd';
import React from 'react';
import './App.less';
import { Header as CustomHeader } from './modules/header/Header';
import { News } from './modules/news/News';
const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <CustomHeader />
      </Header>
      <Content>
        <News />
      </Content>
    </Layout>
  );
}

export default App;
