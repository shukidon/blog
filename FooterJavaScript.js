<!-- CopyRight http://bulldra.http://bulldra.hatenablog.com -->
<script src="https://www.google.com/jsapi"></script>
<script src="http://bulldra.github.io/commons.js" charset="utf-8"></script>
<script src="http://bulldra.github.io/breadcrumb.js" charset="utf-8"></script>

<!-- PerTags -->
<script defer>
;(function(document){

var pres = document.getElementsByTagName("pre")

for(var i=pres.length; i--; ){
  var el = makeOl(pres[i])
  pres[i].appendChild(el)
}


function makeOl(pre){

  if (pre.className.indexOf("gist") !== -1) {
    return
  }

  var ol = document.createElement("ol")
    , li = document.createElement("li")
    , df = document.createDocumentFragment()
    , br = pre.innerHTML.match(/\n/g) || 0

  ol.className = "preLine"
  ol.setAttribute("role", "presentation")

  // no lang, no line-number
  if( pre.className && ! /lang-./.test(pre.className) ){
    br.length += 1
  }

  for(var i=br.length; i--; ){
    var li2 = li.cloneNode(true)
    df.appendChild(li2)
  }
  ol.appendChild(df)
  return ol
}

})(document)
</script>
<!-- PerTags -->
