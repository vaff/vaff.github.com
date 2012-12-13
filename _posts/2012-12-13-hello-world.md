---
title: Hello World
layout: default
---

Hello World, from a page!
Hello World, from another line!

<br>

Paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim

<br>

# En H1'er
## En H2'er
### En H3'er

<br>

**Vi prøver lige en blockquote**
> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

<br>

**Hvad med noget kode?**

```javascript
$(function () {
    var $nav = $('#main');
    $nav.animate({left: '0'}, 500, function () {
        $nav.find('ul li')
        .delay(500)
        .each(function(index) {
            $(this).delay(200*index).fadeIn(200);
        });
    });
});
```

    $(function () {
        var $nav = $('#main');
        $nav.animate({left: '0'}, 500, function () {
            $nav.find('ul li')
            .delay(500)
            .each(function(index) {
                $(this).delay(200*index).fadeIn(200);
            });
        });
    });


Inline kode er også en mulighed ```<h1>Hello World</h1>```


<br>

**Inline stuff**
Put some *emphasis* on a **strong** *__word__*, and link to some silly stuff at [Google](http://icanhas.cheezburger.com/roflympics "roflympics").

<br>

**Horizontal Rules**
- - -

<br>

**Lister**

* Red
* Green
* Blue

<br>

1. Bird
2. McHale
3. Parish

<br><br>

**Image**
![Placekittens .. it's the best](http://placekitten.com/g/600/600 "mew")

<br><br>

**Video**
```<iframe width="500" height="375" src="http://www.youtube.com/embed/c-CeXxaW348" frameborder="0" allowfullscreen></iframe>```

<br><br>

**Form elements**
<form action="#" id="contact" class="clearfix">
<fieldset class="message" style="width:250px;">
<textarea name="message" cols="26" rows="7" placeholder="drop me a line or two..."></textarea>
</fieldset>
<fieldset class="details">
<input type="text" id="name" name="name" placeholder="name">
<input type="email" id="email" name="email" placeholder="email" required>
<input type="text" id="human" name="human" placeholder="four + seven is?" required>
<button type="submit">Send &rarr;</button>
</fieldset>
</form>

