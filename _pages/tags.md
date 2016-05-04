---
layout: post
title: Posts by Tag
desc: "A list of duclvz's posts organized by tags"
permalink: /tags
---

Click on a tag to see relevant list of posts.

{% for tag in site.tags %}
  {% assign t = tag | first %}
- [{{ t | downcase }}](#{{t | downcase | replace:" ","-" }})
{% endfor %}

---

{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}
### [{{ t | downcase }}](#{{t | downcase | replace:" ","-" }})
{% for post in posts %}
  {% if post.tags contains t %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %-d, %Y" }}
  {% endif %}
{% endfor %}

---

{% endfor %}