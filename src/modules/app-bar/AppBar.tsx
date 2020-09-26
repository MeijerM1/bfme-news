// import React from 'react';
// import { Button, Space } from 'antd';
// import styles from './app-bar.module.less';
// const { app, BrowserWindow } = window.require('electron').remote;

// /**
//  * Provides the handle bar which can move the application
//  * Also contains the minimize and exit buttons
//  */
// export const AppBar = () => {

//     const closeApp = () => {
//         app.quit();
//     }

//     const hideApp = () => {
//         BrowserWindow.getFocusedWindow().minimize()
//     }


//     return (
//         <div className={styles.container}>
//             <Space>
//                 <Button size="small" ghost className={styles.appBtn} onClick={hideApp}>_</Button>
//                 <Button size="small" ghost className={styles.appBtn} onClick={closeApp} >X</Button>
//             </Space>
//         </div>
//     )
// }