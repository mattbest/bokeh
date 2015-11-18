{% if websocket_url -%}
  var websocket_url = "{{ websocket_url }}";
{%- else %}
  var websocket_url = null;
{%- endif %}

var docs_json = {{ docs_json }};
var render_items = {{ render_items }};

Bokeh.embed.embed_items(docs_json, render_items, websocket_url);
