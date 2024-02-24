"use client";
"use strict";
exports.__esModule = true;
var outline_1 = require("@heroicons/react/24/outline");
var react_1 = require("react");
function Search(_a) {
    var times = _a.times, numPeoples = _a.numPeoples, tags = _a.tags;
    var _b = react_1.useState(false), isOpen = _b[0], setOpen = _b[1];
    function openSearch() {
        console.log("open");
        setOpen(!isOpen);
    }
    return (React.createElement("div", { className: 'm-2' }, isOpen ?
        React.createElement("div", null,
            React.createElement(outline_1.ChevronUpIcon, { onClick: openSearch, className: "h-6 w-6" }),
            times.map(function (time, index) { return (React.createElement("span", { key: index }, time)); }),
            numPeoples.map(function (numPeople, index) { return (React.createElement("span", { key: index }, numPeople)); }),
            tags.map(function (tag, index) { return (React.createElement("span", { key: index }, tag)); }))
        :
            React.createElement("button", { onClick: openSearch, className: "flex gap-2 text-gray-600 p-2 border-2 rounded-full w-full" },
                React.createElement(outline_1.MagnifyingGlassIcon, { className: "h-6 w-6" }),
                React.createElement("span", null, "\u05D7\u05D9\u05E4\u05D5\u05E9"))));
}
exports["default"] = Search;
