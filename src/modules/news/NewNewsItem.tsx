import React from 'react';
import styles from './news.module.less';
import { Typography } from 'antd';

interface NewsItemProps {
    listIndex: number,
    listStyles: any,
    newsItem: any
}


const GUTTER_SIZE = 16;

export const NewNewsItem =  (props: NewsItemProps) => {

    const dateFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const displayDate = new Date(props.newsItem.isoDate).toLocaleDateString(undefined, dateFormatOptions);

    console.log(props.listStyles)

    const itemStyles = {
        ...props.listStyles,
        left: props.listStyles.left + GUTTER_SIZE,
        top: props.listStyles.top + GUTTER_SIZE,
        height: props.listStyles.height - GUTTER_SIZE
    }

    return (
        <div style={itemStyles} className={styles.new_item_container}>
            <img src={props.newsItem.enclosure.url} alt={props.newsItem.title}></img>
            <div className={styles.new_news_item}>
                <Typography.Title level={3} className={styles.new_title}>{props.newsItem.title.toUpperCase()}</Typography.Title>
                <div >
                    <Typography.Paragraph>{props.newsItem.contentSnippet}</Typography.Paragraph>
                </div>
                <span className={styles.date}>{displayDate.toUpperCase()}</span>
            </div>
        </div>
    )
}