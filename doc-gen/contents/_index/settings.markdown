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