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
  <div class="story"><label>Name<input name="fields[name]" type="text"></label><br/>
  <label>E-mail<input name="fields[email]" type="email"></label><br/>
  <label>Store<input name="fields[store]" type="text"></label><br/>
  <label>Message<textarea name="fields[message]"></textarea></label><br/>

  <button type="submit">Send!</button>
  </div>
</form>
</div>
<div class="element">
<h2>Other Peoples Stories</h2>
<!-- Comments -->
  
  <!-- TODO: Make it sort by most recent not by most old. Also add time and date stamp -->

{% if site.data.comments %}
  {% assign comments = site.data.comments | sort %}
    {% for comment in comments %}
      <div class=""><label>
        <strong>{{ comment[1].name }}</strong>
      </label>
      <p>{{ comment[1].message | markdownify }}</p>
      <p style="text-align: center;">--------------------------------------</p>
  {% endfor %}
{% endif %}
    </div>
</div>

</div>

