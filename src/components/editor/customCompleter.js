export const customCompleter = {
    getCompletions: function (editor, session, pos, prefix, callback) {
        let BasicAutocompleteKeyWords = [
            "const",
            "yield",
            "import",
            "get",
            "set",
            "async",
            "await",
            "break",
            "case",
            "default",
            "delete",
            "do",
            "else",
            "for",
            "function",
            "if",
            "return",
            "switch",
            "typeof",
            "let",
            "var",
            "while",
            "enum",
            "export",
            "implements",
            "private",
            "public",
            "protected",
            "static"
        ];

        let keyWords = [
            "box()",
            "sphere()",
            "circle()",
            "cone()",
            "cylinder()",
            "dodecahedron()",
            "icosahedron()",
            "octahedron()",
            "prism()",
            "ring()",
            "tetrahedron()",
            "text()",
            "torus()",
            "torusknot()",
            "triangle()",
            "setColor()",
            "setPosition()",
            "setXPos()",
            "setYPos()",
            "setZPos()",
            "setScale()",
            "setXScale()",
            "setYScale()",
            "setZScale()",
            "setRotation()",
            "pitchX()",
            "yawY()",
            "rollZ()",
            "setRadius()",
            "resetCursor()",
            "spin()",
            "yoyo()",
            "sideToSide()",
            "goUp()",
            "goDown()",
            "goRight()",
            "goLeft()",
            "goTowards()",
            "goAway()",
            "grow()",
            "shrink()",
            "fadeOut()",
            "fadeIn()",
            "group()",
            "getRandomColor()",
            "setPhiLength()",
            "setLoop()",
            "setDuration()",
            "setMagnitude()",
            "colorShift()",
            "makeDroppable()",
            "makeUnDroppable",
            "makePushable()",
            "makeUnPushable()",
            "getColor()",
            "getXPos()",
            "getYPos()",
            "getZPos()",
            "getXScale()",
            "getYScale()",
            "getZScale()",
            "getXRotation()",
            "getYRotation()",
            "getZRotation()",
            "getRadius()",
            "getPhiLength()",
            "getLoop()",
            "getDuration()",
            "getMagnitude()",

        ];

        let Colors = [
            "aliceblue",
            "antiquewhite",
            "aqua",
            "aquamarine",
            "azure",
            "beige",
            "bisque",
            "black",
            "blanchedalmond",
            "blue",
            "blueviolet",
            "brown",
            "burlywood",
            "cadetblue",
            "chartreuse",
            "chocolate",
            "coral",
            "cornflowerblue",
            "cornsilk",
            "crimson",
            "cyan",
            "darkblue",
            "darkcyan",
            "darkgoldenrod",
            "darkgray",
            "darkgreen",
            "darkgrey",
            "darkkhaki",
            "darkmagenta",
            "darkolivegreen",
            "darkorange",
            "darkorchid",
            "darkred",
            "darksalmon",
            "darkseagreen",
            "darkslateblue",
            "darkslategray",
            "darkslategrey",
            "darkturquoise",
            "darkviolet",
            "deeppink",
            "deepskyblue",
            "dimgray",
            "dimgrey",
            "dodgerblue",
            "firebrick",
            "floralwhite",
            "forestgreen",
            "fuchsia",
            "gainsboro",
            "ghostwhite",
            "gold",
            "goldenrod",
            "gray",
            "green",
            "greenyellow",
            "grey",
            "honeydew",
            "hotpink",
            "indianred",
            "indigo",
            "ivory",
            "khaki",
            "lavender",
            "lavenderblush",
            "lawngreen",
            "lemonchiffon",
            "lightblue",
            "lightcoral",
            "lightcyan",
            "lightgoldenrodyellow",
            "lightgray",
            "lightgreen",
            "lightgrey",
            "lightpink",
            "lightsalmon",
            "lightseagreen",
            "lightskyblue",
            "lightslategray",
            "lightslategrey",
            "lightsteelblue",
            "lightyellow",
            "lime",
            "limegreen",
            "linen",
            "magenta",
            "maroon",
            "mediumaquamarine",
            "mediumblue",
            "mediumorchid",
            "mediumpurple",
            "mediumseagreen",
            "mediumslateblue",
            "mediumspringgreen",
            "mediumturquoise",
            "mediumvioletred",
            "midnightblue",
            "mintcream",
            "mistyrose",
            "moccasin",
            "navajowhite",
            "navy",
            "oldlace",
            "olive",
            "olivedrab",
            "orange",
            "orangered",
            "orchid",
            "palegoldenrod",
            "palegreen",
            "paleturquoise",
            "palevioletred",
            "papayawhip",
            "peachpuff",
            "peru",
            "pink",
            "plum",
            "powderblue",
            "purple",
            "rebeccapurple",
            "red",
            "rosybrown",
            "royalblue",
            "saddlebrown",
            "salmon",
            "sandybrown",
            "seagreen",
            "seashell",
            "sienna",
            "silver",
            "skyblue",
            "slateblue",
            "slategray",
            "slategrey",
            "snow",
            "springgreen",
            "steelblue",
            "tan",
            "teal",
            "thistle",
            "tomato",
            "turquoise",
            "violet",
            "wheat",
            "white",
            "whitesmoke",
            "yellow",
            "yellowgreen"
        ];

        callback(null, BasicAutocompleteKeyWords.map(function (word) {
            return {
                caption: word,
                value: word,
                meta: "keyword",
                score: 1
            };
        }));

        callback(null, keyWords.map(function (word) {
            return {
                caption: word,
                value: word,
                meta: "MYR",
                score: 2
            };
        }));

        callback(null, Colors.map(function (word) {
            return {
                caption: word,
                value: word,
                meta: "color",
                score: 0
            };
        }));
    }
};

export default customCompleter;