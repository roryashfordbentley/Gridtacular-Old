---
title: Index 
subtitle: Testing
template: page.hbt
---

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



## Examples

### Basic Grid Example

This grid is 6 columns at Large, 3 columns at Medium and 1 columns at small sizes

<div class="example-grid">
    <div class="grid">
        <div class="span--1-1  span--1-3--m  span--1-6--l">
            <div class="example-grid__content">1</div>
        </div>
        <div class="span--1-1  span--1-3--m  span--1-6--l">
            <div class="example-grid__content">2</div>
        </div>
        <div class="span--1-1  span--1-3--m  span--1-6--l">
            <div class="example-grid__content">3</div>
        </div>
        <div class="span--1-1  span--1-3--m  span--1-6--l">
            <div class="example-grid__content">4</div>
        </div>
        <div class="span--1-1  span--1-3--m  span--1-6--l">
            <div class="example-grid__content">5</div>
        </div>
        <div class="span--1-1  span--1-3--m  span--1-6--l">
            <div class="example-grid__content">6</div>
        </div>
    </div>
</div>


### Automagic Widths

Fit any number to column in a given space. Works responsively so you can use 'span--fit--l' for automagic widths at your large breakpoint and define how many columns to span at other sizes

<div class="example-grid">
    <div class="grid">
        <div class="span--1-1  span--1-3--m  span--fit--l">
            <div class="example-grid__content">1</div>
        </div>
        <div class="span--1-1  span--1-3--m  span--fit--l">
            <div class="example-grid__content">2</div>
        </div>
        <div class="span--1-1  span--1-3--m  span--fit--l">
            <div class="example-grid__content">3</div>
        </div>
        <div class="span--1-1  span--1-3--m  span--fit--l">
            <div class="example-grid__content">4</div>
        </div>
        <div class="span--1-1  span--1-3--m  span--fit--l">
            <div class="example-grid__content">5</div>
        </div>
    </div>
</div>


### Vertical Alignment

#### Top

<div class="example-grid">
    <div class="grid  grid--v-top">
        <div class="span--1-1  span--1-3--m  span--v--center">
            <div class="example-grid__content">1 </div>
        </div>
        <div class="span--1-1  span--1-3--m  span--v--center">
            <div class="example-grid__content  example-grid__content--tall">2 </div>
        </div>
        <div class="span--1-1  span--1-3--m  span--v--center">
            <div class="example-grid__content">3 </div>
        </div>
    </div>
</div>

#### Center

<div class="example-grid">
    <div class="grid  grid--v-center">
        <div class="span--1-1  span--1-3--m  span--v--center">
            <div class="example-grid__content  example-grid__content--tall">1 </div>
        </div>
        <div class="span--1-1  span--1-3--m  span--v--center">
            <div class="example-grid__content  example-grid__content--tall">2 </div>
        </div>
        <div class="span--1-1  span--1-3--m  span--v--center">
            <div class="example-grid__content">3 </div>
        </div>
    </div>
</div>

#### Bottom

<div class="example-grid">
    <div class="grid  grid--v-bottom">
        <div class="span--1-1  span--1-3--m  span--v--center">
            <div class="example-grid__content">1 </div>
        </div>
        <div class="span--1-1  span--1-3--m  span--v--center">
            <div class="example-grid__content  example-grid__content--tall">2 </div>
        </div>
        <div class="span--1-1  span--1-3--m  span--v--center">
            <div class="example-grid__content">3 </div>
        </div>
    </div>
</div>

#### Stretch (default behaviour)

If you want the inner element to be 100% of the grid item you must give it a display: flex; attribute, as in the example below.

<div class="example-grid">
    <div class="grid  grid--v-stretch">
        <div class="span--1-1  span--1-3--m  span--flex">
            <div class="example-grid__content">1 </div>
        </div>
        <div class="span--1-1  span--1-3--m  span--flex">
            <div class="example-grid__content">As this column gets taller the other columns within the grid will automagically grow with it!!! </div>
        </div>
        <div class="span--1-1  span--1-3--m  span--flex">
            <div class="example-grid__content">3 </div>
        </div>
    </div>
</div>

### Justify Content

#### Justify Start

<div class="example-grid">
    <div class="grid  grid--align-start">
        <div class="span--1-4">
            <div class="example-grid__content">1 </div>
        </div>
        <div class="span--1-4">
            <div class="example-grid__content">2 </div>
        </div>
        <div class="span--1-4">
            <div class="example-grid__content">3 </div>
        </div>
    </div>
</div>

#### Justify End

<div class="example-grid">
    <div class="grid  grid--align-end">
        <div class="span--1-4">
            <div class="example-grid__content">1 </div>
        </div>
        <div class="span--1-4">
            <div class="example-grid__content">2 </div>
        </div>
        <div class="span--1-4">
            <div class="example-grid__content">3 </div>
        </div>
    </div>
</div>

#### Justify Center

<div class="example-grid">
    <div class="grid  grid--align-center">
        <div class="span--1-4">
            <div class="example-grid__content">1 </div>
        </div>
        <div class="span--1-4">
            <div class="example-grid__content">2 </div>
        </div>
        <div class="span--1-4">
            <div class="example-grid__content">3 </div>
        </div>
    </div>
</div>

#### Justify space between

<div class="example-grid">
    <div class="grid  grid--align-space-between">
        <div class="span--1-4">
            <div class="example-grid__content">1 </div>
        </div>
        <div class="span--1-4">
            <div class="example-grid__content">2 </div>
        </div>
        <div class="span--1-4">
            <div class="example-grid__content">3 </div>
        </div>
    </div>
</div>

#### Justify space around

<div class="example-grid">
    <div class="grid  grid--align-space-around">
        <div class="span--1-4">
            <div class="example-grid__content">1 </div>
        </div>
        <div class="span--1-4">
            <div class="example-grid__content">2 </div>
        </div>
        <div class="span--1-4">
            <div class="example-grid__content">3 </div>
        </div>
    </div>
</div>

### Nested Grids

You can nest grids as deep as you like with no inheritance issues.

<div class="example-grid">
    <div class="grid">
        <div class="span--1-1  span--1-2--l">
            <div class="example-grid__content">
                <div class="example-grid">
                    <div class="grid">
                        <div class="span--1-1  span--1-2--m">
                            <div class="example-grid__content">
                                nested
                             </div>
                        </div>
                        <div class="span--1-1  span--1-2--m">
                            <div class="example-grid__content">
                                nested
                             </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
        <div class="span--1-1  span--1-2--l">
            <div class="example-grid__content">
                <div class="example-grid">
                    <div class="grid">
                        <div class="span--1-1  span--1-2--m">
                            <div class="example-grid__content">
                                nested
                             </div>
                        </div>
                        <div class="span--1-1  span--1-2--m">
                            <div class="example-grid__content">
                                nested
                             </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    </div>
</div>



## Grid Settings

Gridtacular takes a Sass map of arguments to setup and control the majority of the grid system. First you must instantiate the grid by calling the Gridtacular Mixin <code class="language-scss">@include gridtacular($grid_args);</code>

The following is example of the most basic requirements for setting up a grid. 

```scss
$grid_args:(
    config: (
        gridclass:           'grid',
        columnclass:         'grid-item--',
    ),
    grids: (
        small: (
            columns: 6,
            suffix: '--s',
            gutter: 1rem
        ),
        large: (
            columns: 12,
            suffix: '--l',
            gutter: 1rem
        )
    )
);

@include gridtacular($grid_args);
```
In the example you can see that we have created a variable <code class="language-scss">$grid_args</code> that contains a Sass map. We then create a <code class="language-scss">config</code>sub map and <code class="language-scss">grids</code> Sub map.

Grids can contain an infinite number of grid definitions. For each grid that you add to this map Gridtacular will generate and output the required classes.

Each of the grids contains a series of options. These options define the rules that govern the grids that are generated.

#### Config Args

Argument | Type | Default | Info
------ | ---- | ------- | -----------
gridclass | string | "grid" | Set the grid class e.g. 'grid'
columnclass | string | "grid" | Set the grid column class e.g. 'span--' *change to itemclass
push | bool | false | Enable/disable push classes
pushclass | string | "push--" | Set the push class
$default_omega | bool | true | Enable/disable omega classes
$debug | bool | false | Enable the breakpoint debug tool 
$classdebug | bool | false | Enable/disable the class debug tool


*may rename 'global'*

#### Grids Args