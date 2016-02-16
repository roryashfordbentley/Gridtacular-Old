## Introduction

### Gridtacular, What is it?

Gridtacular is a modular flexbox powered responsive grid system. The grid has been designed from the ground up to adapt to your workflow and naming conventions.

The grid system is customisable via a Sass map which allows you to customise the grid to your requirements in a similar way to many popular javascript libraries.

### Getting started

First you need to add the sass files to your project. Include `src/_flexbones-grid.scss` and `src/_grid-settings.scss` in your sass workflow. Both files then need to be imported into your main Sass stylesheet.

You can view the entire source of this demo by browsing the docs/ folder.

### Grid Setup

The most basic setup looks like this:

<pre><code class="language-scss">$grid_args:(
    config: (
        gridclass: 'grid'
        columnclass: 'span--'
    ),
    grids: (
        mygrid: (
            columns: 12,
            gutter: 2rem
        )
    )
);

@include grid_generate($grid_args);</code></pre>

### Markup

The grid comes with some default classes for the grid container and for grid items but this is completely customisable to fit in with your current naming conventions.

Grid containers by default have a class of <code class="language-scss">.grid</code>. Grid items have a class structure <code class="language-scss">.grid[no of columns to span]-[total columns][breakpoint]</code> e.g. <code class="language-html">&lt;div class="span--1-1 span--1-2--m span--1-4--l"&gt;1&lt;/div&gt;</code>

```html
<div class="grid">
    <div class="span--1-1  span--1-2--m  span--1-4--l">1</div>
    <div class="span--1-1  span--1-2--m  span--1-4--l">2</div>
    <div class="span--1-1  span--1-2--m  span--1-4--l">3</div>
    <div class="span--1-1  span--1-2--m  span--1-4--l">4</div>
</div>
```
which produces a grid like so:

<div class="example-grid">
    <div class="grid">
        <div class="span--1-1  span--1-2--m  span--1-4--l">
            <div class="example-grid__content">1</div>
        </div>
        <div class="span--1-1  span--1-2--m  span--1-4--l">
            <div class="example-grid__content">2</div>
        </div>
        <div class="span--1-1  span--1-2--m  span--1-4--l">
            <div class="example-grid__content">3</div>
        </div>
        <div class="span--1-1  span--1-2--m  span--1-4--l">
            <div class="example-grid__content">4</div>
        </div>
    </div>
</div>