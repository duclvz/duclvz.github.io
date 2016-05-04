---
layout: post
title: Categories
permalink: /categories
---

{% for category in site.categories %}
[{{ category | first | capitalize }}](#{{ category | first | slugize }})
{% endfor %}
<hr>

{% for category in site.categories %}
    {% capture category_name %}{{ category | first }}{% endcapture %}
### {{ category_name | capitalize }}
    {% for post in site.categories[category_name] %}
- [{{post.title}}]({{ root_url }}{{ post.url }})
    {% endfor %}
{% endfor %}