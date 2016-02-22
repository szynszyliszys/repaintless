# Repaintless

Repaintless in a lightweight animation library that consists only of animations that don't cause reflows and repaints of a website when used correctly. The idea for a library came after seeing the talk by [Paul Lewis](https://twitter.com/aerotwist) on animations and FLIP technique. Basic idea is to remove transition from element, not to apply it while animating. It saves user a tiny lag before animation starts and feels super smooth. To understand the concept better you can read [a blog post on that](https://aerotwist.com/blog/flip-your-animations/).

> The reason you can afford to do this relatively expensive precalculation is because there is a window of 100ms after someone interacts with your site where you’re able to do work without them noticing. If you’re inside that window users will feel like the site responded instantly! It’s only when things are moving that you need to maintain 60fps.

## How to use

Download reprintless.css file and include in website's head section:

```html
<head>
  <link href="path-to-css-directory/reprintless.css" rel="stylesheet"></link>
</head>
```

Now all you need to do is add class "element-animated" and the second class with chosen animation name, eg.:

```html
<div class="element-animated tremble"> I tremble! </div>
```

Default timing of an animation is one second. You can have an animation that has 0.5s by adding class "short" or 2s animation by adding class "long". Also, you can make it infinite by adding "infinite" class. See how these work:

```html
<div class="element-animated slide-from-top short"> I am quick! </div>

<div class="element-animated slide-from-top long"> I am slooow... </div>

<div class="element-animated slide-from-top infinite"> I will do that forever to drive you crazy! </div>
```

## List of animations

All possible animations are listed here. Some of them are looped by default and it is always mentioned next to the name. Hopefully the list of animations will get longer and longer.

- slide-from-top
- slide-from-bottom
- slide-from-left
- slide-from-right
- slide-from-right-bottom
- slide-left-right (looped)
- tremble (looped)

## License

[The MIT License (MIT)](http://choosealicense.com/licenses/mit/)


