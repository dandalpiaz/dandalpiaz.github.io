
![feed icon](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Rss-feed.svg/60px-Rss-feed.svg.png)

# Feed Day

_`Last Updated: 2/15/2022`_ [`edit`](https://github.com/dandalpiaz/dandalpiaz.github.io/edit/master/pages/feed-day.md) [`home`](https://dandalpiaz.github.io/)

Sort of like reading a weekly (not daily) newspaper. The idea is to save time during the week, but instead of restricting feeds entirely, one day per week is designated for news/media feed viewing. Reference style searching is still okay on off days.

_So... is today Feed Day...?_

## Feeds

- [news.ycombinator.com](https://news.ycombinator.com/front) (past 7 days)
- [reddit.com/r/all/top](https://www.reddit.com/r/all/top/) (top of week)
- [reddit.com/subreddits](https://www.reddit.com/subreddits/) (top of week)
- [reddit.com/top](https://www.reddit.com/top/) (top of week)
- [twitter.com](https://twitter.com/home)
- [youtube.com/feed/subscriptions](https://www.youtube.com/feed/subscriptions)

## Work Feeds

These will be an exception

- [reddit.com/r/linux](https://www.reddit.com/r/linux/)
- [reddit.com/r/programming](https://www.reddit.com/r/programming/)
- [reddit.com/r/webdev](https://www.reddit.com/r/webdev/)
- [reddit.com/r/wordpress](https://www.reddit.com/r/Wordpress/)

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
