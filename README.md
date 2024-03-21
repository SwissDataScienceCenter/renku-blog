# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation
Follow the instructions in the [yarn source page](https://classic.yarnpkg.com/lang/en/docs/install/)

```
$ npm i
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The blog is automatically deployed from the `main` branch.

### Contributing

The easiest way to contribute a blog post is to fork this repository, add a new entry in the `blog` directory and make a pull request with your
content! To preview your work, you might want to use a devcontainer in VSCode locally or use Codespaces on GitHub. Either way, the blog will automatically build and render in the browser. If the browser window does not automatically open, VSCode should alert you about the open port
and offer to display it in the browser for you.
