---
layout: post
title: Blog
desc: "A list of all of duclvz's blog posts"
permalink: /blog
featured: true
---

{% for post in site.posts  %}
[{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %Y" }}
{% endfor %}
<hr>
[View Posts organized by Tags](/tags)