---
title: Hello World
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/deployment.html)

```javascript
function action(timeArray, currentArray) {
    var result = currentArray;
    if (getInsideIndex(timeArray, currentArray).length > 0) {
        let testObj = { a: 1, b: 2 };
        let testArr = [1, 2, 3];

        currentArray.reduce(function (previous, current, index) {
            var merged = mergePeriod(previous, current);

            if (merged.length === 1) {
                // Case merged //
                result.splice(index, 1, merged[0]);

                while (getInsideIndex(result[index + 1] || [], merged).length > 0) {
                    result.splice(index, 2, mergePeriod(result[index], result[index + 1])[0]);
                }
                return merged[0];
            } else {
                return timeArray;
            }
        }, timeArray);

        testObj.hasOwnProperty('');
        testArr.push(1)
    } else {
        result.splice(getOutsideIndex(timeArray, result), 0, timeArray);
    }

    return result;
}

describe('', function () {
    
});

it('should ', function () {
    
});
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Angular Repeat</title>
    <script src="../bower_components/angular/angular.js"></script>
    <script src="controller.js"></script>
    <script src="directive.js"></script>
</head>
<body ng-app="myApp">
<div ng-controller="myCtrl">
    <div repeat-hello="5">
        <p>Hello</p>
    </div>
    <ul>
            <li>
                <label for="medium">Medium</label>
                <select name="medium" id="medium" required formControlName="medium">
                    <!--<option value="Movies">Movies</option>-->
                    <!--<option value="Series">Series</option>-->
                    <option *ngFor="let medium of lookupLists.mediums" value="{{medium}}">{{medium}}</option>
                </select>
            </li>
    </ul>
</div>
</body>
</html>
```

```css
:host {
    display: flex;
    min-height: 90vh;
    flex-direction: column;
    padding: 10px;
}
header {
    color: #c6c5c3;
}
header.medium-movies {
    color: #53ace4;
}
header.medium-series {
    color: #45bf94;
}
header > h2 {
    font-size: 1.4em;
}
header > h2.error {
    color: #d93a3e;
}
section {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
}
section > media-item {
    margin: 10px;
}
footer {
    text-align: right;
}
footer .icon {
    width: 64px;
    height: 64px;
    margin: 15px;
}

```


