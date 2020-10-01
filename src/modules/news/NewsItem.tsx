import React from 'react';
import styles from './news.module.less';
import { Typography } from 'antd';

interface NewsItemProps {
    listIndex: number,
    listStyles: any,
    newsItem: any
}


const GUTTER_SIZE = 5;

export const NewsItem =  (props: NewsItemProps) => {

    const dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const displayDate = new Date(props.newsItem.isoDate).toLocaleDateString(undefined, dateFormatOptions);

    const itemStyles = {
        ...props.listStyles,
        top: props.listStyles.top + GUTTER_SIZE,
        height: props.listStyles.height - GUTTER_SIZE,
        minWidth: props.listStyles.width
    }

    return (
        <div style={itemStyles} className={styles.item_container}>
            <div className={styles.background} style={{ backgroundImage: `url(${props.newsItem.enclosure.url})` }}></div>
            <div className={styles.news_item}>
                <Typography.Title className={styles.title}>{props.newsItem.title}</Typography.Title>
                <Typography.Title level={3} className={styles.subtitle}>{displayDate}</Typography.Title>
                <div className={styles.content}>
                    <Typography.Paragraph className={styles.content}>{props.newsItem.contentSnippet}</Typography.Paragraph>
                    <a href={props.newsItem.link} >Read more...</a>
                </div>
            </div>
        </div>
    )
}