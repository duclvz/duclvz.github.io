---
layout: default
permalink: /
---

<div id="main-content">
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
            <div class="ads-center">
            </div>
            <div class="category-title">
              <div class="category-info">
                <div class="category-channel" title="Latest News">
                  <span>Latest Posts</span>
                </div>
              </div>
            </div>
            <div class="feature-section mdc-layout-grid__inner">
            {% for post in site.posts limit:5 %}
              <div class="video-item mdc-layout-grid__cell {% if forloop.index == 1 %} mdc-layout-grid__cell--span-8 {% else %} mdc-layout-grid__cell--span-4 {% endif %} {% if forloop.index == 2 %} has-desc {% endif %} mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-4-phone">
                <a href="{{ post.url | relative_url }}" class="video-thumbnail" data-originsrc="{{ post.thumbnail | relative_url | prepend: site.cdn }}"
                  {% if post.preview %} data-previewsrc="{{ post.preview | relative_url }}" {% endif %}
                >
                  <img
                    class="thumbnail-image"
                    alt="{{ post.title }}"
                    title="{{ post.title }}"
                    src="{%if post.thumbnail %}{{ post.thumbnail | relative_url | prepend: site.cdn }}{% else %}{{ '/assets/images/slash.svg' | relative_url | prepend: site.cdn }}{% endif %}"
                  />
                </a>
                <a href="{{ post.url | relative_url }}" class="video-metadata">
                  <h3 class="video-title"> {{ post.title }} </h3>
                  <div class="video-category">
                  <span>{{ post.date | date_to_string }} </span>
                  </div>
                  <div class="video-desc">
                    <span>{{ post.description | truncatewords: 30 }}</span>
                  </div>
                </a>
              </div>
            {% endfor %}
            </div>
            <div class="video-list mdc-layout-grid__inner">
            {% for post in site.posts limit:9 %}
              {% if forloop.index <= 5 %}
                {% continue %}
              {% endif %}
              <div class="video-item mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
                <a href="{{ post.url | relative_url }}" class="video-thumbnail" data-originsrc="{{ post.thumbnail | relative_url | prepend: site.cdn }}"
                  {% if post.preview %} data-previewsrc="{{ post.preview | relative_url }}" {% endif %}
                >
                  <img
                    class="thumbnail-image"
                    alt="{{ post.title }}"
                    title="{{ post.title }}"
                    src="{%if post.thumbnail %}{{ post.thumbnail | relative_url | prepend: site.cdn }}{% else %}{{ '/assets/images/slash.svg' | relative_url | prepend: site.cdn }}{% endif %}"
                  />
                </a>
                <a href="{{ post.url | relative_url }}" class="video-metadata">
                  <h3 class="video-title"> {{ post.title }} </h3>
                  <div class="video-category">
                  <span>{{ post.date | date_to_string }} </span>
                  </div>
                  <div class="video-desc">
                    <span>{{ post.description | truncatewords: 30 }}</span>
                  </div>
                </a>
              </div>
            {% endfor %}
            </div>
          </div>
        </div>
      </div>
      <div class="ads-center mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
      </div>
    </div>
  </div>
</div>