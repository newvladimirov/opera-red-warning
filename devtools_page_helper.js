function apply_style_sheet_for_current_panel_only() {
    const devtools_custom_css = `.console-view > div[class^="console-warning-" i] { display : none !important ; }`;
    chrome.devtools.panels.applyStyleSheet(devtools_custom_css);
}

// run for whatever panel opens by default
apply_style_sheet_for_current_panel_only();

// fallback if Console panel was not opened by default (most likely due to Elements panel opening first)
chrome.devtools.panels.elements.onSelectionChanged.addListener(apply_style_sheet_for_current_panel_only);