# 10-in-20 Recipes

## Contents

- [Description](#description)
- [SBA Requirements](#sba-requirements)
- [API](#api)
- [Web Page](#web-page)
- [Author](#author)

## Description

### 10-in-20 Recipes

This tool enables users to discover recipes based on the ingredients they have on hand in their kitchen. The tool will provide <strong>10 recipes</strong> which can be prepared in <strong>20 minutes</strong>. Hence, "10-in-20 Recipes".

## SBA Requirements

### SBA 308A: JavaScript Web Application

1. The program uses Axios for HTTP request to communicate with the web API.
2. The program facilitates user interaction through its search feature in the home page, where user can input their preferred cuisine and ingredients. The http method 'GET' was used to request data from web API.
3. For bonus points, added HTTP request using Axios with 'POST' method. This can be seen in the module - recipeFunctions.js. The function can be invoked from index.js, which is currently commented out.

```sh
Note: The HTTP request with 'POST' method does not currently have a user interaction. It was added as per bonus requirement.
```

4. The program utilizes asynchronous operation for 'Promise' using async and await.
5. Created the following module file to organize some of the functions.

```js
recipeFunctions.js;
```

## API

The program utilizes the following Rapid API host:

```sh
spoonacular-recipe-food-nutrition-v1.p.rapidapi.com
```

## Web Page
![Web Page Screenshot](img/webpage.png)
## Author

Christian Samson
