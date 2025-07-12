"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var quotes = [
    'Crafting Future-Ready Digital Experiences...',
    'Integrity in Every Line of Code.',
    'Designing With Purpose. Building With Precision.',
    'Where Creativity Meets Technology.',
    'Delivering Trust Through Technology.',
    'Innovating at the Speed of Thought.',
    'Smart Solutions. Real Impact.',
    'Pixels with Purpose. Code with Character.',
    'We Don’t Just Build, We Engineer.',
];
var TechSaraZLoader = function () {
    var _a = (0, react_1.useState)(0), quoteIndex = _a[0], setQuoteIndex = _a[1];
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            setQuoteIndex(function (prev) { return (prev + 1) % quotes.length; });
        }, 4000);
        return function () { return clearInterval(interval); };
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/70 text-center px-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-2xl sm:text-3xl font-mono text-blue-800 mb-6", children: ['{', "TechSaraZ", (0, jsx_runtime_1.jsx)("span", { className: "dots" }), '}'] }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg text-blue-900 font-medium transition-opacity duration-700 ease-in-out", children: quotes[quoteIndex] }), (0, jsx_runtime_1.jsx)("style", { children: "\n        .dots::after {\n          content: '';\n          animation: dots 1.5s steps(4, end) infinite;\n        }\n        @keyframes dots {\n          0%   { content: ''; }\n          25%  { content: '.'; }\n          50%  { content: '..'; }\n          75%  { content: '...'; }\n          100% { content: ''; }\n        }\n      " })] }));
};
exports.default = TechSaraZLoader;
