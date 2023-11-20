document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("elementInput").focus();
});

document
  .getElementById("elementForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const elementName = document.getElementById("elementInput").value.trim();
    if (!elementName) return;

    const url = findElementUrl(elementName);
    if (url) {
      chrome.tabs.create({ url: url });
    } else {
      document.getElementById("errorMessage").textContent =
        "Element not found.";
    }
  });

function findElementUrl(elementName) {
  const mappings = {
    html: "semantics",
    head: "semantics",
    title: "semantics",
    base: "semantics",
    link: "semantics",
    meta: "semantics",
    style: "semantics",
    body: "sections",
    article: "sections",
    section: "sections",
    nav: "sections",
    aside: "sections",
    h1: "sections",
    h2: "sections",
    h3: "sections",
    h4: "sections",
    h5: "sections",
    h6: "sections",
    hgroup: "sections",
    header: "sections",
    footer: "sections",
    address: "sections",
    p: "grouping-content",
    hr: "grouping-content",
    pre: "grouping-content",
    blockquote: "grouping-content",
    ol: "grouping-content",
    ul: "grouping-content",
    menu: "grouping-content",
    li: "grouping-content",
    dl: "grouping-content",
    dt: "grouping-content",
    dd: "grouping-content",
    figure: "grouping-content",
    figcaption: "grouping-content",
    main: "grouping-content",
    search: "grouping-content",
    div: "grouping-content",
    a: "text-level-semantics",
    em: "text-level-semantics",
    strong: "text-level-semantics",
    small: "text-level-semantics",
    s: "text-level-semantics",
    cite: "text-level-semantics",
    q: "text-level-semantics",
    dfn: "text-level-semantics",
    abbr: "text-level-semantics",
    ruby: "text-level-semantics",
    rt: "text-level-semantics",
    rp: "text-level-semantics",
    data: "text-level-semantics",
    time: "text-level-semantics",
    code: "text-level-semantics",
    var: "text-level-semantics",
    samp: "text-level-semantics",
    kbd: "text-level-semantics",
    sub: "text-level-semantics",
    sup: "text-level-semantics",
    i: "text-level-semantics",
    b: "text-level-semantics",
    u: "text-level-semantics",
    mark: "text-level-semantics",
    bdi: "text-level-semantics",
    bdo: "text-level-semantics",
    span: "text-level-semantics",
    br: "text-level-semantics",
    wbr: "text-level-semantics",
    ins: "edits",
    del: "edits",
    picture: "embedded-content",
    source: "embedded-content",
    img: "embedded-content",
    iframe: "embedded-content",
    embed: "embedded-content",
    object: "embedded-content",
    video: "embedded-content",
    audio: "embedded-content",
    track: "embedded-content",
    map: "embedded-content",
    area: "embedded-content",
    table: "tables",
    caption: "tables",
    colgroup: "tables",
    col: "tables",
    tbody: "tables",
    thead: "tables",
    tfoot: "tables",
    tr: "tables",
    td: "tables",
    th: "tables",
    form: "forms",
    label: "forms",
    input: "forms",
    button: "forms",
    select: "forms",
    datalist: "forms",
    optgroup: "forms",
    option: "forms",
    textarea: "forms",
    output: "forms",
    progress: "forms",
    meter: "forms",
    fieldset: "forms",
    legend: "forms",
    details: "interactive-elements",
    summary: "interactive-elements",
    dialog: "interactive-elements",
    script: "scripting",
    noscript: "scripting",
    template: "scripting",
    slot: "scripting",
    canvas: "scripting",
  };
  const base_url = "https://html.spec.whatwg.org/multipage/";
  return mappings[elementName]
    ? `${base_url}${mappings[elementName]}.html#the-${elementName}-element`
    : null;
}
