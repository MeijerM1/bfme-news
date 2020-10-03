import React, { useState, useEffect } from 'react';
import styles from './news.module.less';
import { DesignedNewsItem } from './DesignedNewsItem/DesignedNewsItem';
import { AutoSizer, List } from 'react-virtualized';
import { Spin } from 'antd';
import { NewsItem } from '../../domain/Newsitem';
const Parser = require('rss-parser');

let RSS_FEED_URL: string;

// For simplicity leave this here.
// Should be extracted to a config file of some sorts.
if (process.env.NODE_ENV === 'production') {
    RSS_FEED_URL = 'https://cors-anywhere.herokuapp.com/https://rss.moddb.com/mods/the-battle-for-middle-earth-reforged/articles/feed/rss.xml';
} else {
    RSS_FEED_URL = 'https://cors-anywhere.herokuapp.com/https://rss.moddb.com/mods/the-battle-for-middle-earth-reforged/articles/feed/rss.xml';
}

export const News = () => {
    const rssParser = new Parser();
    const [data, setData] = useState<NewsItem[]>([]);

    useEffect(() => {
        rssParser.parseURL(RSS_FEED_URL).then((feed: any) => {
            setData(feed.items);
        });
    }, []);

    const listItem = ({ key, index, style }: { key: any, index: number, style: any }) => {
        const newsItem = data[index];

        return (
            <DesignedNewsItem key={key} listStyles={style} listIndex={index} newsItem={newsItem} />
        )
    }

    if (data.length === 0) {
        return (
            <div className={styles.loading_container}>
                <Spin size="large"/>
            </div>
        )
    }

    return (
        <div className={styles.news_container}>
            <AutoSizer disableHeight >
                {({ width }) => {
                    let rowHeigth = 400;

                    if(window.innerWidth < 720) {
                        rowHeigth = 550;
                    }

                    return (
                        <List
                            height={1000}
                            width={width}
                            rowHeight={rowHeigth}
                            rowRenderer={listItem}
                            rowCount={data.length}>
                        </List>
                    )
                } }
            </AutoSizer>
        </div>
    )
}