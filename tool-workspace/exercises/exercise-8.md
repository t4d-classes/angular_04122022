# Exercise 8

1. Implement remove color in the Color Tool library. When removing a color, delete it from the REST API. You may use Color List or Item List component. Make the necessary changes to implement the remove within those components. After deleting from the REST API, refresh list to see the color removed.

```html
<ul>
  <li>red <button>X</button></li>
  <li>blue <button>X</button></li>
  <li>green <button>X</button></li>
</ul>
```

```http
DELETE http://localhost:3060/colors/2 HTTP/1.1
```

2. Ensure it works!