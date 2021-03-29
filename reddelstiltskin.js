// References:
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts

// match pattern for the URLs to redirect
var pattern = "*://www.reddit.com/*";

// redirect function
// returns an object with a property `redirectURL`
// set to the new URL
function redirect(requestDetails) {
    console.log("Redirecting from: " + requestDetails.url);

    console.log(requestDetails.url);

    agedURL = requestDetails.url;
    agedURL = agedURL.replace('www', 'old');
    agedURL = agedURL.replace('\/posts', '\/submitted');

    console.log("Redirecting to: " + agedURL);
    return {
        redirectUrl: agedURL
    };
}
  
// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls:[pattern]},
    ["blocking"]
);
