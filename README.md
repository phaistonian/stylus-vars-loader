This simple loader will prepend the file (or files) of your choice hosting your variables to stylus files.

For example, say you have an `index.js` file and you do this
`import './index.styl'`
then instead of always referencing your global `vars.styl` file from the `index.styl`, you can use the loader to do it for you.

### Install
`npm i -D stylus-vars-loader`
or
`yarn add stylus-vars-loader`

### Use
```js
{
  test: /\.styl$/,
  use: [
    'style-loader',
    'css-loader',
    'stylus-loader',
    {
      loader: 'stylus-vars-loader',
      options: {
        file: './css/vars.styl',

        // you can also do multiple files
        file: ['./css/vars.styl', './css/media-queries.styl'],
      },
    },
  ]
}
```
