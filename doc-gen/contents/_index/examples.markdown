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