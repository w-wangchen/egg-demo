<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css"/>

</head>
<body>
<ul class="news-view view">
    {% for item in list %}
    <li class="item">
        <a href="{{ item.url }}">{{ helper.relativeTime(item.title) }}</a>
    </li>
    {% endfor %}
</ul>

</body>
</html>
