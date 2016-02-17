var Metalsmith  = require("metalsmith");
var Handlebars  = require("handlebars");
var fs          = require('fs');
var markdown    = require("metalsmith-markdown");
var templates   = require("metalsmith-templates");
var collections = require("metalsmith-collections");
var permalinks  = require("metalsmith-permalinks");
var drafts      = require("metalsmith-drafts");
var define      = require("metalsmith-define");
var concat      = require("metalsmith-concat");
var ignore      = require("metalsmith-ignore");
var headings    = require('metalsmith-headings');

// Register partial layouts

Handlebars.registerPartial(
    'header', 
    fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString()
);

Handlebars.registerPartial(
    'footer', 
    fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString()
);

Handlebars.registerPartial(
    'sidebar', 
    fs.readFileSync(__dirname + '/templates/partials/sidebar.hbt').toString()
);

// All paths relative to index.js

Metalsmith(__dirname)
    .source("src")
    .use(headings('h2'))
    .use(markdown())
    .use(permalinks({
        pattern: ':title'
    }))
    .use(templates('handlebars'))
    .use(ignore([
        '.DS_Store',
        'sass',
        'sass/*',
        'js',
        'js/*'
    ]))
    .destination('./build')
    .build(function(err) {
        if (err) console.log(err);
    }
);