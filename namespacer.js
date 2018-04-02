// Simple pattern used for namespacing in JavaScript.
// The module pattern will be used to group related functionality. 
// Modules are not yet supported in the main browswers natively.

// I do not plan to use any 3rd party libraries. 
// This may mean reinventing the wheel in some cases but I do not want anything 
// going on under the hood which I am not aware of.
// I will 'borrow' functions and snippets where required. This will be referenced.
if (typeof (littleDebugger) === "undefined") {
    littleDebugger = {};
}

if (typeof (littleDebugger.common) === "undefined") {
    littleDebugger.common = {};
}

if (typeof (littleDebugger.common.namespacer) === "undefined") {
    littleDebugger.common.namespacer = {};
}

// Creates a namespace in the global space.
// <namespaceText> . seperated namespace to be created.
littleDebugger.common.namespacer.createNamespace = function(namespaceText) {
    var namespaces = namespaceText.split(".");
    if (typeof (window[namespaces[0]]) === "undefined") {
        window[namespaces[0]] = {};
    }

    var currentSpace = window[namespaces[0]];

    for (var i = 1; i < namespaces.length; i++) {
        var namespace = namespaces[i];
        if (typeof (currentSpace[namespace]) === "undefined") {
            currentSpace[namespace] = {};
        }

        currentSpace = currentSpace[namespace];
    }
};