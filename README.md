# whats-next-in-frontendland-talk
Slides and source material from my talk "What's next in frontend-land".

---

### Project requirements
* Git
* Node.js v10
* Yarn

### Using locally
Clone the repo
```bash
$ git clone https://github.com/moebiusmania/whats-next-in-frontendland-talk
```

Switch to repo folder & install dependencies
```bash
$ cd whats-next-in-frontendland-talk && yarn
```

Start the dev server on `localhost:8080`
```bash
$ yarn start
```

### Development
The project is based on Vuepress (*and, as the name implies, Vue.js itself...*) so you may requrie a Vue.js dedicated plugin in your editor to support code highlightning in `.vue` files.

If you use [VS Code](https://code.visualstudio.com/) you can grab the excellent [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur).

You can buil locally the project using this command: 
```bash
$ yarn build
```

Then if you want to publish the fresh built `./slides` folder as a Github Page on the current repo (*if you are owner/contributor*) just run:
```bash
$ yarn deploy
```

### License
Released under the [MIT license](LICENSE).
