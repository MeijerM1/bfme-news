import React, { useState, useEffect } from 'react';
import styles from './news.module.less';
import { NewNewsItem } from './NewNewsItem';
import { AutoSizer, List } from 'react-virtualized';

const Parser = require('rss-parser');

const RSS_FEED_URL = 'https://cors-anywhere.herokuapp.com/https://rss.moddb.com/mods/the-battle-for-middle-earth-reforged/articles/feed/rss.xml';

export const News = () => {
    const rssParser = new Parser();
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        rssParser.parseURL(RSS_FEED_URL).then((feed: any) => {
            console.log(feed.items);
            setData(feed.items);
        });
    }, []);

    const listItem = ({ key, index, style }: { key: any, index: number, style: any }) => {
        const newsItem = data[index];

        return (
            <NewNewsItem key={key} listStyles={style} listIndex={index} newsItem={newsItem} />
        )
    }

    if (data.length === 0) {
        return (
            <div className={styles.news_container}>
                <h2>no data</h2>
            </div>
        )
    }

    return (
        <div className={styles.news_container}>
            <AutoSizer disableHeight >
                {({ width }) => {
                    let rowHeigth = 450;

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