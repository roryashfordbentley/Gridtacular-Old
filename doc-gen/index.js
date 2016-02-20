var Metalsmith  = require("metalsmith");
var Handlebars  = require("handlebars");
var fs          = require('fs');
var markdown    = require("metalsmith-markdown");
var templates   = require("metalsmith-templates");
var collections = require("metalsmith-collections");
var permalinks  = require("metalsmith-permalinks");
var drafts      = require("metalsmith-drafts");
var define      = require("metalsmith-define");
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

//console.log(Metalsmith);

/*function navigation(){
    var anchorlinks =  [];
    return function (files, metalsmith, done){
        //Object.keys(files).forEach(function(file) {
        for (var file in files) {
            if (!html(file)) return;
            var elements = file.querySelectorAll("#");
            
            for (i = 0; i < elements.length; ++i) {
                anchorlinks.push(elements[i].id);  
            }
        }
        console.log(files);
        done();
    };
}*/

Metalsmith(__dirname)
    .source("src")
    .use(markdown())
    //.use(navigation())
    .use(templates('handlebars'))
    .use(headings('h2'))
    .use(ignore([
        '.DS_Store',
        'sass',
        'sass/*',
        'js',
        'js/*'
    ]))
    .use(permalinks({
        pattern: ':title'
    }))
    .destination('../docs')
    .build(function(err) {
        if (err) console.log(err);
    }
);

console.log('metalsmith complete');