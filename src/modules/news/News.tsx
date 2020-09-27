import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import styles from './news.module.less';
import { FixedSizeList as VList } from 'react-window'

const Parser = require('rss-parser');

const RSS_FEED_URL = 'https://cors-anywhere.herokuapp.com/https://rss.moddb.com/mods/the-battle-for-middle-earth-reforged/articles/feed/rss.xml';
const GUTTER_SIZE = 5;

export const News = () => {
    const rssParser = new Parser();
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        rssParser.parseURL(RSS_FEED_URL).then((feed: any) => {
            console.log(feed.items);
            setData(feed.items);
        });
    }, []);

    const listItem = ({ index, style }: { index: number, style: any }) => {
        const item = data[index];

        const dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const displayDate = new Date(item.isoDate).toLocaleDateString(undefined, dateFormatOptions);

        const itemStyles = {
            ...style,
            left: style.left + GUTTER_SIZE,
            top: style.top + GUTTER_SIZE,
            width: style.width - GUTTER_SIZE,
            height: style.height - GUTTER_SIZE
        }

        return (
            <div style={itemStyles} className={styles.item_container}>
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
    }

    if (data.length === 0) {
        return <h2>no data</h2>
    }

    return (
        <div className={styles.news_container}>
            <VList
                height={1000}
                width={900}
                itemSize={400}
                itemCount={10}>
                {listItem}
            </VList>
        </div>
    )
}