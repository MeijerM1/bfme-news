import React, { useState, useEffect } from 'react';
import { List, Typography } from 'antd';
import styles from './news.module.less';
const Parser = require('rss-parser');

const RSS_FEED_URL = 'https://cors-anywhere.herokuapp.com/https://rss.moddb.com/mods/the-battle-for-middle-earth-reforged/articles/feed/rss.xml';

export const News = () => {
    const rssParser = new Parser();
    const [data, setData] = useState([]);

    useEffect(() => {
        rssParser.parseURL(RSS_FEED_URL).then((feed: any) => {
            console.log(feed.items);
            setData(feed.items);
        });
    }, []);

    const listItem = (item: any) => {
        console.log(item);

        const dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const displayDate = new Date(item.isoDate).toLocaleDateString(undefined, dateFormatOptions);

        const element = (
            <div className={styles.item_container}>
                <div className={styles.background} style={{ backgroundImage: `url(${item.enclosure.url})` }}></div>
                <div className={styles.news_item}>
                    <Typography.Title className={styles.title}>{item.title}</Typography.Title>
                    <Typography.Title level={3} className={styles.subtitle}>{displayDate}</Typography.Title>
                    <div className={styles.content}>
                        <Typography.Paragraph className={styles.content}>{item.contentSnippet}</Typography.Paragraph>
                        <a href={item.link} >Read more...</a>
                    </div>
                </div>
            </div>
        )


        const plainElement = document.querySelector(`#${item.guid}`)


        return element;
    }

    return (
        <div className={styles.news_container}>
            <List
                dataSource={data}
                renderItem={listItem}
            />
        </div>
    )
}