---
title: Hello World
description: A sample kitchen sink page
date: 2012-12-13 12:00:00 +1000
categories: [blog]
reading: 30 seconds
css: hello-world
layout: default
---

Hello World, from a page!  
Hello World, from another line!

Paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim

# En H1'er
## En H2'er
### En H3'er

**Vi prøver lige en blockquote**
> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.  

**Hvad med noget kode?**

{% highlight javascript linenos %}
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
{% endhighlight %}

Inline kode er også en mulighed ```<h1>Hello World</h1>```  

**Inline stuff**
Put some *emphasis* on a **strong** *__word__*, and link to some silly stuff at [Google](http://icanhas.cheezburger.com/roflympics "roflympics").  

**Horizontal Rules**
- - - -  

**Lister**

* Red
* Green
* Blue

1. Bird
2. McHale
3. Parish  

**Image**
<br>
![Placekittens .. it's the best](http://placekitten.com/g/600/600 "mew")  

<figure>  
<img src="http://placekitten.com/600/600" alt="Placekittens .. it's the best">
<figcaption>Placekittens ... it's the best</figcaption>
</figure>
