<form method="POST" action="https://savefrys.herokuapp.com/v3/entry/github/mocsabnimajneb/savefrys.com/github-pages/comments">
  <input name="options[redirect]" type="hidden" value="https://mocsabnimajneb.github.io/savefrys.com/thanks">
  <!-- e.g. "2016-01-02-this-is-a-post"
  <!--input name="options[slug]" type="hidden" value="{{ page.slug }}" -->
  <label>Name<input name="fields[name]" type="text"></label>
  <label>E-mail<input name="fields[email]" type="email"></label>
  <label>Message<textarea name="fields[message]"></textarea></label>

  <button type="submit">Go!</button>
</form>
