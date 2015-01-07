blastoff
========

Find out when the next rocket launch is. 

# What's it do?

Running `blastoff` from the command line will output information on upcoming space missions and rocket launches in chronological order. It can also be `require`'d for use in code.

## Installation

```
npm install -g blastoff
````

For non-command-line use, you can obviously leave out the -g flag.

## Use

```
blastoff
```

Prints info for the next rocket launch.

```
blastoff --count 5 -b
```

Prints info for the next 5 rocket launches in boring mode (plain old json). If you `require` it, it will always return json so no option needs to be set.

`blastoff(count, callback)`

**count**: A number that determines how many results to return.

**callback**: Follows standard (err, data) pattern.`

```javascript
var blastoff = require('blastoff');

blastoff(1, function(err, data){
  if(err){
    console.log('Looks like Miklós made a mistake somewhere.');
  }else{
    console.log(data);
  }
});

//-> Output will be json
```

Thanks to spaceflightnow.com for the data.
