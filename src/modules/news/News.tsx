// import React, { useState, useEffect } from 'react';
// import { List, Typography } from 'antd';
// import styles from './news.module.less';
// const Parser = require('rss-parser');

// const RSS_FEED_URL = 'https://cors-anywhere.herokuapp.com/https://rss.moddb.com/mods/the-battle-for-middle-earth-reforged/articles/feed/rss.xml';

// const mock = [
//     {
//         title: 'The first of gameplay revealed',
//         link:
//             'https://www.moddb.com/mods/the-battle-for-middle-earth-reforged/news/the-first-of-gameplay-revealed',
//         pubDate: 'Tue, 18 Aug 2020 01:35:00 +0000',
//         enclosure:
//         {
//             url:
//                 'https://media.moddb.com/cache/images/articles/1/285/284979/thumb_620x2000/Ring.png',
//             length: '0',
//             type: 'image/png'
//         },
//         content:
//             '<img src="https://media.moddb.com/cache/images/articles/1/285/284979/thumb_620x2000/Ring.png" alt="The first of gameplay revealed" /><br />The time has come to show you some of the gameplay, for the first time ever. Enjoy watching in 4K!',
//         contentSnippet:
//             'The time has come to show you some of the gameplay, for the first time ever. Enjoy watching in 4K!',
//         guid: 'articles284979',
//         isoDate: '2020-08-18T01:35:00.000Z'
//     },
//     {
//         title: 'Major changes!',
//         link:
//             'https://www.moddb.com/mods/the-battle-for-middle-earth-reforged/news/major-changes8',
//         pubDate: 'Wed, 01 Apr 2020 18:38:00 +0000',
//         enclosure:
//         {
//             url:
//                 'https://media.moddb.com/cache/images/articles/1/279/278958/thumb_620x2000/HighresScreens4hot00041.png',
//             length: '0',
//             type: 'image/png'
//         },
//         content:
//             '<img src="https://media.moddb.com/cache/images/articles/1/279/278958/thumb_620x2000/HighresScreens4hot00041.png" alt="Major changes!" /><br />Having realized something important, we decided to implement new things into the game!',
//         contentSnippet:
//             'Having realized something important, we decided to implement new things into the game!',
//         guid: 'articles278958',
//         isoDate: '2020-04-01T18:38:00.000Z'
//     },
//     {
//         title: 'Isengard Weaponry',
//         link:
//             'https://www.moddb.com/mods/the-battle-for-middle-earth-reforged/news/isengard-weaponry',
//         pubDate: 'Mon, 09 Mar 2020 21:55:00 +0000',
//         enclosure:
//         {
//             url:
//                 'https://media.moddb.com/cache/images/articles/1/278/277992/thumb_620x2000/R4UGQzJC6qw.jpg',
//             length: '0',
//             type: 'image/jpeg'
//         },
//         content:
//             '<img src="https://media.moddb.com/cache/images/articles/1/278/277992/thumb_620x2000/R4UGQzJC6qw.jpg" alt="Isengard Weaponry" /><br />Take a look at the entirety of Isengard weaponry fully prepared!',
//         contentSnippet:
//             'Take a look at the entirety of Isengard weaponry fully prepared!',
//         guid: 'articles277992',
//         isoDate: '2020-03-09T21:55:00.000Z'
//     },
//     {
//         title: 'Isengard Buildings',
//         link:
//             'https://www.moddb.com/mods/the-battle-for-middle-earth-reforged/news/isengard-buildings',
//         pubDate: 'Wed, 05 Feb 2020 17:35:00 +0000',
//         enclosure:
//         {
//             url:
//                 'https://media.moddb.com/cache/images/articles/1/277/276890/thumb_620x2000/LPMLubJxIPE.1.png',
//             length: '0',
//             type: 'image/png'
//         },
//         content:
//             '<img src="https://media.moddb.com/cache/images/articles/1/277/276890/thumb_620x2000/LPMLubJxIPE.1.png" alt="Isengard Buildings" /><br />The time has come for the community to witness the work over Isengard buildings!',
//         contentSnippet:
//             'The time has come for the community to witness the work over Isengard buildings!',
//         guid: 'articles276890',
//         isoDate: '2020-02-05T17:35:00.000Z'
//     },
//     {
//         title: 'Wanted: Localisation | Voice-over',
//         link:
//             'https://www.moddb.com/mods/the-battle-for-middle-earth-reforged/news/wanted-localisation-voice-over',
//         pubDate: 'Sat, 29 Jun 2019 01:35:00 +0000',
//         enclosure:
//         {
//             url:
//                 'https://media.moddb.com/cache/images/articles/1/270/269496/thumb_620x2000/Wxa5mASZsx4.jpg',
//             length: '0',
//             type: 'image/jpeg'
//         },
//         content:
//             '<img src="https://media.moddb.com/cache/images/articles/1/270/269496/thumb_620x2000/Wxa5mASZsx4.jpg" alt="Wanted: Localisation | Voice&#45;over" /><br />Check out our new video about Ugluk and about a call for those who want to help us to localise the game and give new units a voice!',
//         contentSnippet:
//             'Check out our new video about Ugluk and about a call for those who want to help us to localise the game and give new units a voice!',
//         guid: 'articles269496',
//         isoDate: '2019-06-29T01:35:00.000Z'
//     },
//     {
//         title: 'Wormtongue Contest',
//         link:
//             'https://www.moddb.com/mods/the-battle-for-middle-earth-reforged/news/wormtongue-contest',
//         pubDate: 'Wed, 08 May 2019 19:12:00 +0000',
//         enclosure:
//         {
//             url:
//                 'https://media.moddb.com/cache/images/articles/1/268/267665/thumb_620x2000/Wxa5mASZsx4.jpg',
//             length: '0',
//             type: 'image/jpeg'
//         },
//         content:
//             '<img src="https://media.moddb.com/cache/images/articles/1/268/267665/thumb_620x2000/Wxa5mASZsx4.jpg" alt="Wormtongue Contest" /><br />One of the upcoming videos is going to be dedicated to Grima Wormtongue, one of the Isengard heroes. We want to know how well our fans and players know him not only as a character from both movies and books, but also as a gameplay hero unit. ',
//         contentSnippet:
//             'One of the upcoming videos is going to be dedicated to Grima Wormtongue, one of the Isengard heroes. We want to know how well our fans and players know him not only as a character from both movies and books, but also as a gameplay hero unit.',
//         guid: 'articles267665',
//         isoDate: '2019-05-08T19:12:00.000Z'
//     },
//     {
//         title: 'Isengard Units Creation',
//         link: 'https://www.moddb.com/mods/the-battle-for-middle-earth-reforged/news/isengard-units-creation',
//         pubDate: 'Sun, 14 Apr 2019 21:44:00 +0000',
//         enclosure:
//         {
//             url: 'https://media.moddb.com/cache/images/articles/1/267/266718/thumb_620x2000/Wxa5mASZsx4.jpg',
//             length: '0',
//             type: 'image/jpeg'
//         },
//         content:
//             '<img src="https://media.moddb.com/cache/images/articles/1/267/266718/thumb_620x2000/Wxa5mASZsx4.jpg" alt="Isengard Units Creation" /><br />Ever wanted to know what we actually do to make the units in BFME: Reforged? Then it&#39;s high time to read the article!',
//         contentSnippet:
//             'Ever wanted to know what we actually do to make the units in BFME: Reforged? Then it\'s high time to read the article!',
//         guid: 'articles266718',
//         isoDate: '2019-04-14T21:44:00.000Z'
//     },
//     {
//         title: 'Main Menu Background',
//         link:
//             'https://www.moddb.com/mods/the-battle-for-middle-earth-reforged/news/main-menu-background1',
//         pubDate: 'Sat, 26 Jan 2019 01:02:00 +0000',
//         enclosure:
//         {
//             url:
//                 'https://media.moddb.com/cache/images/articles/1/264/263641/thumb_620x2000/KPOp4EimxbQ.jpg',
//             length: '0',
//             type: 'image/jpeg'
//         },
//         content:
//             '<img src="https://media.moddb.com/cache/images/articles/1/264/263641/thumb_620x2000/KPOp4EimxbQ.jpg" alt="Main Menu Background" /><br />See the already made parts of what is going to be the main menu background!',
//         contentSnippet:
//             'See the already made parts of what is going to be the main menu background!',
//         guid: 'articles263641',
//         isoDate: '2019-01-26T01:02:00.000Z'
//     },
//     {
//         title: 'BFME: Reforged Update №3: Spellbook and New Forum',
//         link:
//             'https://www.moddb.com/mods/the-battle-for-middle-earth-reforged/news/bfme-reforged-update-3-spellbook-and-new-forum',
//         pubDate: 'Wed, 05 Dec 2018 08:39:00 +0000',
//         enclosure:
//         {
//             url:
//                 'https://media.moddb.com/cache/images/articles/1/262/261394/thumb_620x2000/Desktop_Screenshot_2018.11.09_-.png',
//             length: '0',
//             type: 'image/png'
//         },
//         content:
//             '<img src="https://media.moddb.com/cache/images/articles/1/262/261394/thumb_620x2000/Desktop_Screenshot_2018.11.09_-.png" alt="BFME: Reforged Update №3: Spellbook and New Forum" /><br />Behold the majestic spellbook of Isengard and our new forum, fully supported by the developers team! ',
//         contentSnippet:
//             'Behold the majestic spellbook of Isengard and our new forum, fully supported by the developers team!',
//         guid: 'articles261394',
//         isoDate: '2018-12-05T08:39:00.000Z'
//     },
//     {
//         title: 'BFME: Reforged Update №2: Q&A and User Interface',
//         link:
//             'https://www.moddb.com/mods/the-battle-for-middle-earth-reforged/news/bfme-reforged-update-2-qa-and-user-interface',
//         pubDate: 'Mon, 15 Oct 2018 08:05:00 +0000',
//         enclosure:
//         {
//             url:
//                 'https://media.moddb.com/cache/images/articles/1/260/259259/thumb_620x2000/BFME_REFORGED.png',
//             length: '0',
//             type: 'image/png'
//         },
//         content:
//             '<img src="https://media.moddb.com/cache/images/articles/1/260/259259/thumb_620x2000/BFME_REFORGED.png" alt="BFME: Reforged Update №2: Q&amp;A and User Interface" /><br />Take a look at our new HQ user interface we are preparing!',
//         contentSnippet: 'Take a look at our new HQ user interface we are preparing!',
//         guid: 'articles259259',
//         isoDate: '2018-10-15T08:05:00.000Z'
//     }
// ]

// export const News = () => {
//     const rssParser = new Parser();
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         // rssParser.parseURL(RSS_FEED_URL).then((feed: any) => {
//         //     console.log(feed.items);
//         //     setData(feed.items);
//         // });
//     }, []);

//     const listItem = (item: any) => {
//         console.log(item);

//         return (
//             <List.Item>
//                 <div className={styles.news_item} style={{ backgroundImage: `url(${item.enclosure.url})` }} >
//                     <Typography.Title>{item.title}</Typography.Title>
//                 </div>
//             </List.Item>
//         )
//     }

//     return (
//         <div>
//             <List
//                 dataSource={mock}
//                 renderItem={listItem}
//             />
//         </div>
//     )
// }