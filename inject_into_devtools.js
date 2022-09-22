// necessary for DevTools in private windows
if (/^(?:chrome-|opera-)?devtools:$/gi.test(window.location.protocol) === true) {
    const devtools_custom_css = `.console-view > div[class^="console-warning-" i] { display : none !important ; }`;

    const add_css_rules = (css_rules) => { (document.head || document.documentElement).appendChild(document.createElement("style")).innerHTML = css_rules; };

    // applies to all panels
    add_css_rules(devtools_custom_css);
}