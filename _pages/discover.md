---
layout: post
title: Discover
desc: "A list of all of duclvz's posts"
permalink: /discover
featured: true
---

{% for post in site.posts  %}
[{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %Y" }}
{% endfor %}