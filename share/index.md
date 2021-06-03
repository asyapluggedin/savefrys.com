---
layout: default
---


<br>
<!-- Navigation -->
<div markdown="0">
<a id="ddmenuLink" href="../menuBar.html"></a>
<div class="element">
<h2>Share Your Story</h2>

<form method="POST" action="https://savefrys.herokuapp.com/v3/entry/github/xnastasia/savefrys.com/main/comments">
  <input name="options[redirect]" type="hidden" value="https://savefrys.com/share">
  <!-- e.g. "2016-01-02-this-is-a-post"
  <!--input name="options[slug]" type="hidden" value="{{ page.slug }}" -->
  <label>Name<input name="fields[name]" type="text"></label><br/>
  <label>E-mail<input name="fields[email]" type="email"></label><br/>
  <label>Message<textarea name="fields[message]"></textarea></label><br/>

  <button type="submit">Go!</button>
</form>
</div>
<div class="element">
<h2>Other Peoples Stories</h2>
<!-- Comments -->
{% if site.data.comments %}
    <h3>
    {% if site.data.comments.size > 1 %}
      {{ site.data.comments | size }}
    {% endif %}
    Comments:
    </h3>
  {% assign comments = site.data.comments | sort %}
    {% for comment in comments %}
      <label>
        <strong>{{ comment[1].name }}</strong>
        {% if comment[1].url %}
          </a>
        {% endif %}
      </label>
      <p>{{ comment[1].message | markdownify }}</p>
      <p>--------------------------------------</p>
  {% endfor %}
{% endif %}
</div>

</div>

