const svgtofont = require("svgtofont");
const path = require("path");

svgtofont({
    src: path.resolve(process.cwd(), "svg"), // svg path
    dist: path.resolve(process.cwd(), "fonts"), // output path
    // styleTemplates: path.resolve(rootPath, "styles"), // file templates path (optional)
    fontName: "hds", // font name
    css: true, // Create CSS files.
    startUnicode: 0xea01, // unicode start number
    svgicons2svgfont: {
        fontHeight: 1000,
        normalize: true
    },
    // website = null, no demo html files
    website: {
        title: "svgtofont",
        // Must be a .svg format image.
        logo: path.resolve(process.cwd(), "svg", "git.svg"),
        version: 1.0,
        meta: {
            description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
            keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG"
        },
        description: ``,
        // Add a Github corner to your website
        // Like: https://github.com/uiwjs/react-github-corners
        corners: {
            url: 'https://github.com/jaywcjlove/svgtofont',
            width: 62, // default: 60
            height: 62, // default: 60
            bgColor: '#dc3545' // default: '#151513'
        },
        links: [
            {
                title: "GitHub",
                url: "https://github.com/jaywcjlove/svgtofont"
            },
            {
                title: "Feedback",
                url: "https://github.com/jaywcjlove/svgtofont/issues"
            },
            {
                title: "Font Class",
                url: "index.html"
            },
            {
                title: "Unicode",
                url: "unicode.html"
            }
        ],
        footerInfo: `Licensed under MIT. (Yes it's free and <a href="https://github.com/jaywcjlove/svgtofont">open-sourced</a>`
    }
}).then(() => {
    console.log('done!');
});
