## Introduction

### Gridtacular, What is it?

Gridtacular is a modular flexbox powered responsive grid system. I has been designed to adapt to your workflow and naming conventions.

The grid system is customisable via a Sass map which allows you to customise the grid to your requirements in a similar way to many popular javascript libraries.

### Getting started

First you need to add the sass files to your project. Include <code class="language-scss">src/_flexbones-grid.scss</code> and <code class="language-scss">src/_grid-settings.scss</code> in your sass workflow. Both files then need to be imported into your main Sass stylesheet.

You can view the entire source of this demo by browsing the <code class="language-html">docs/</code> folder.

### Grid Setup

The most basic setup looks like this:

```scss
$grid_args:(
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

@include grid_generate($grid_args);
```

### Markup

The grid comes with some default classes for the grid container and for grid items but this is completely customisable to fit in with your current naming conventions.

Grid containers by default have a class of <code class="language-scss">.grid</code>. Grid items have a class structure <code class="language-scss">.grid[no of columns to span]-[total columns][breakpoint]</code>. 

The following is a simple example ofa responsve grid that has a single item per row at the smallest breakpoint, 2 items per row at the medium breakpoint and 4 items per row at the large breakpoint.

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