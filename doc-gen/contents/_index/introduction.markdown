# Introduction

## [Gridtacular, What is is?](#nav-what-is-it)

Gridtacular is a modular flexbox powered responsive grid system. The grid has been designed from the ground up to adapt to your workflow and naming conventions.

The grid system is customisable via a Sass map which allows you to customise the grid to your requirements in a similar way to many popular javascript libraries.

## [Getting started](#nav-getting-started)

First you need to add the sass files to your project. Include `src/_flexbones-grid.scss` and `src/_grid-settings.scss` in your sass workflow. Both files then need to be imported into your main Sass stylesheet.

You can view the entire source of this demo by browsing the docs/ folder.

## [Grid Setup](#nav-grid-setup)

The most basic setup looks like this:

<pre><code>$grid_args:(
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

## [Markup](#nav-markup)

The grid comes with some default classes for the grid container and for grid items but this is completely customisable to fit in with your current naming conventions.

Grid containers by default have a class of `.grid`. Grid items have a class structure `.grid[no of columns to span]-[total columns][breakpoint]` e.g. `<div class="span--1-1 span--1-2--m span--1-4--l">1</div>`

<div class="grid">
    <div class="span--1-1  span--1-2--m  span--1-4--l">1</div>
    <div class="span--1-1  span--1-2--m  span--1-4--l">2</div>
    <div class="span--1-1  span--1-2--m  span--1-4--l">3</div>
    <div class="span--1-1  span--1-2--m  span--1-4--l">4</div>
</div>