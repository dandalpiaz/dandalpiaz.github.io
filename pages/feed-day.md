
![feed icon](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Rss-feed.svg/60px-Rss-feed.svg.png)

# Feed Day

Sort of like reading a weekly (not daily) newspaper. The idea is to save time during the week, but instead of restricting feeds entirely, one day per week is designated for news/media feed viewing. Reference style searching is still okay on off days.

_So... is today `Feed Day`...?_

## Feeds

- news.ycombinator.com (look through past days)
- reddit.com/subreddits
- reddit.com/top (sort by top of week)
- twitter.com
- youtube.com/feed/subscriptions

## Work Feeds

[[[These will need to be an exception]]]

- [[[tbd]]]

## Avoiding Feeds

### Android

- [[[Remove apps]]]
- [[[Homepage instead of new tab on Chrome]]]

### Desktop

#### User Stylesheet

Via the Stylus extension for Chrome.

```
html {
    padding: 30px !important;
    background-color: black !important;
    color:  #eee;
    text-align: center;
    font-size: 20px !important;
    box-sizing: border-box;
    font-family: monospace !important;
    overflow: auto !important;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

html::before {
    content: "Is today Feed Day??? \A If not, nothing to see here...";
    white-space: pre-wrap;
}

html:after{
   content:url(https://pbs.twimg.com/media/Dy2YcrqWsAcb-7m?format=jpg&name=large);
   display:block;
   position:relative;
   top: 30px;
}

body {
    display: none !important;
}
```

#### Other Ideas

- Broswer Extensions & Apps
- Hosts File
- Router Rules
- User Script Redirect (tampermonkey)

[`live`](https://dandalpiaz.github.io/?page=feed-day) [`edit`](https://github.com/dandalpiaz/dandalpiaz.github.io/edit/master/pages/feed-day.md)
