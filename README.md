# Repaintless.css - making animations fast

[![CDNJS](https://img.shields.io/cdnjs/v/Repaintless.css.svg)](https://cdnjs.com/libraries/Repaintless.css)

Repaintless.css in a lightweight animation library that consists only of animations that don't cause reflows and repaints of a website when used correctly. The idea for a library came after seeing the talk by [Paul Lewis](https://twitter.com/aerotwist) on animations and FLIP technique. Basic idea is to remove transition from element, not to apply it while animating. It saves user a tiny lag before animation starts and feels super smooth. To understand the concept better you can read [a blog post on that](https://aerotwist.com/blog/flip-your-animations/) or at least this quote from the post:

> The reason you can afford to do this relatively expensive precalculation is because there is a window of 100ms after someone interacts with your site where you’re able to do work without them noticing. If you’re inside that window users will feel like the site responded instantly! It’s only when things are moving that you need to maintain 60fps.

## Demo

[There is a demo page for the library.](http://szynszyliszys.github.io/repaintless/)

## Download

Download repaintless.css file from repaintless-css directory and include in website's head section:

```html
<head>
  <link href="path-to-css-directory/repaintless.css" rel="stylesheet"></link>
</head>
```

You can also get it by npm:

```sh
$ npm install repaintless
```

Or by Bower:

```sh
$ bower install repaintless
```


## How to use

All you need to do is add class "element-animated" and the second class with chosen animation name, eg.:

```html
<div class="element-animated tremble"> I tremble! </div>
```

Default timing of an animation is one second. You can have an animation that has 0.5s by adding class "short" or 2s animation by adding class "long". Also, you can make it infinite by adding "infinite" class. See how these work:

```html
<div class="element-animated slide-from-top short"> I am quick! </div>

<div class="element-animated slide-from-top long"> I am slooow... </div>

<div class="element-animated slide-from-top infinite"> I will do that forever to drive you crazy! </div>
```

## Customization

For now there is no gulp task for that. To get few out of all animations you need to edit [repaintless.scss](https://github.com/szynszyliszys/repaintless/blob/master/repaintless-scss/repaintless.scss) file and leave there @import declarations for wanted animations only. After that use gulp build task to create css file.

You can also easily change the offset value for animated elements. Each animation has its own scss  variable in the same file, right at the top. Names always follow the key $animation-name-offset: value;

## List of animations

All possible animations are listed here. Some of them are looped by default and it is always mentioned next to the name. Hopefully the list of animations will get longer and longer.

- slide-from-top
- slide-from-bottom
- slide-from-left
- slide-from-right
- slide-from-right-bottom
- slide-from-right-top
- slide-from-left-bottom
- slide-from-left-top
- slide-top-bottom (looped)
- slide-left-right (looped)
- tremble (looped)
- fade-in
- fade-out
- pulsate (looped)
- rotate
- rotate-slide-from-right
- rotate-slide-from-left
- rotate-slide-from-top
- rotate-slide-from-bottom
- appear-from-right
- appear-from-left
- appear-from-top
- appear-from-bottom

## Changelog

Check what was changed in the newest version in the [Changelog](https://github.com/szynszyliszys/repaintless/blob/master/CHANGELOG.md).

## License

The library is licensed under [The MIT License (MIT)](http://choosealicense.com/licenses/mit/).

Go to [Lunar Logic website](http://www.lunarlogic.io/) to learn more [about us](http://www.lunarlogic.io/company) and [our work](http://www.lunarlogic.io/portfolio).


