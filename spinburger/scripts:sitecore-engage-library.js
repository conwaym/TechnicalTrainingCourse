// Initialize the engage variable
var engage = undefined;

// Create and inject the <script> tag into the HTML
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = "https://d1mj578wat5n4o.cloudfront.net/sitecore-engage-v.1.3.0.min.js";
var x = document.querySelector("script");
x.parentNode.insertBefore(s, x);    

// Initialize the Engage JavaScript Library
s.addEventListener("load", async () => {
    var settings = {
        clientKey: "sise1uscpabezjawzpn5z2djcai3v07u",
        targetURL: "https://api-us.boxever.com/v1.2",
        pointOfSale: "StandardDemo",
        cookieDomain: "",
        cookieExpiryDays: 365,
        forceServerCookieMode: false,
        includeUTMParameters: true,
        webPersonalization: "<boolean_or_object>"
    };
    engage = await window.Engage.init(settings);
    
    // Send a VIEW event
    // ...
});