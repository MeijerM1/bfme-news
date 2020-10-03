import React from 'react';
import styles from './designedNewsItem.module.less';
import { Typography } from 'antd';

interface DesignedNewsItemProps {
    listIndex: number,
    listStyles: any,
    newsItem: any
}


const GUTTER_SIZE = 16;

export const DesignedNewsItem =  (props: DesignedNewsItemProps) => {

    const dateFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const displayDate = new Date(props.newsItem.isoDate).toLocaleDateString(undefined, dateFormatOptions);

    const itemStyles = {
        ...props.listStyles,
        left: props.listStyles.left + GUTTER_SIZE,
        top: props.listStyles.top + GUTTER_SIZE,
        height: props.listStyles.height - GUTTER_SIZE
    }

    return (
        <div style={itemStyles} className={styles.item_container}>
            <img src={props.newsItem.enclosure.url} alt={props.newsItem.title}></img>
            <div className={styles.news_item_content}>
                <Typography.Title level={3} className={styles.header}>{props.newsItem.title.toUpperCase()}</Typography.Title>
                <div >
                    <Typography.Paragraph>{props.newsItem.contentSnippet}</Typography.Paragraph>
                </div>
                <span className={styles.date}>{displayDate.toUpperCase()}</span>
            </div>
        </div>
    )
}