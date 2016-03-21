# Saint - Sane Templates
Overly simplistic Node templates. Probably not super practical but they work for me.

```javascript
const saint = require('/path/to/saint');

saint.render('{{ language }} is way better than {{ other_language }}.', {
	language: 'Python', // works with strings
	other_language: () => { return languagesOtherThanPython(); } // as well as functions
});
// that's about it.
```

If you need something that actually works, take a look at mustache, handlebars, hogan.js or nunjucks.
