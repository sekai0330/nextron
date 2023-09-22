<p align="center"><img src="https://i.imgur.com/0vkxIMN.png"></p>
<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/nextron">
    <img src="https://img.shields.io/npm/v/nextron.svg?style=for-the-badge&labelColor=000000" alt="NPM version">
  </a>
  <a aria-label="NPM downloads" href="https://www.npmjs.com/package/nextron">
    <img src="https://img.shields.io/npm/dt/nextron.svg?style=for-the-badge&labelColor=000000" alt="NPM downloads">
  </a>
  <img src="https://img.shields.io/github/license/saltyshiomix/nextron.svg?style=for-the-badge&labelColor=000000" alt="Package License (MIT)">
  <a aria-label="AWESOME NEXTJS" href="https://github.com/unicodeveloper/awesome-nextjs">
    <img src="https://img.shields.io/badge/AWESOME%20%20NEXTJS-b37fb3.svg?style=for-the-badge" alt="AWESOME NEXTJS">
  </a>
</p>

<h2 align="center">
  <a aria-label="2023 Roadmaps - I'm back!" href="https://github.com/saltyshiomix/nextron/issues/398">
    2023 Roadmaps - I'm back!
  </a>
</h2>

## Support

### Nextron vs Next.js

| nextron         | next               |
| --------------- | ------------------ |
| `v9.x`          | `v13.x` (upcoming) |
| `v8.x`          | `v12.x`            |
| `v7.x`          | `v11.x`            |
| `v6.x`          | `v10.x`            |
| `v5.x`          | `v9.x`             |
| `v4.x`          | `v8.x`             |
| `v2.x` / `v3.x` | `v7.x`             |
| `v1.x`          | `v6.x`             |

### Package Manager

`npm`, `yarn` and `pnpm` are supported.

## My Belief for Nextron

1. Show a way of developing desktop apps with only web knowledge
1. Easy to use
1. Be transparent and open to OSS developers

## Usage

### Create Application with Template

We can use `examples/*` as a template.

To create the `examples/with-material-ui`, run the command below:

```
# with npx
$ npx create-nextron-app MY_APP --example with-material-ui

# with yarn
$ yarn create nextron-app MY_APP --example with-material-ui

# with pnpm
$ pnpm dlx create-nextron-app MY_APP --example with-material-ui
```

For nextron v8 or below, please specify `--branch` option:

```
npx create-nextron-app MY_APP --example with-material-ui --branch release/v8
```

### Run Electron with Development Mode

Run `npm run dev`, and nextron automatically launches an electron app.

```json
{
  "scripts": {
    "dev": "nextron"
  }
}
```

### Production Build

Run `npm run build`, and nextron outputs packaged bundles under the `dist` folder.

```json
{
  "scripts": {
    "build": "nextron build"
  }
}
```

### Build Options

To build Windows 32 bit version, run `npm run build:win32` like below:

```json
{
  "scripts": {
    "build": "nextron build",
    "build:all": "nextron build --all",
    "build:win32": "nextron build --win --ia32",
    "build:win64": "nextron build --win --x64",
    "build:mac": "nextron build --mac --x64",
    "build:linux": "nextron build --linux"
  }
}
```

**CAUTION**: To build macOS binary, your host machine must be macOS!

### Build Configuration

Edit `electron-builder.yml` properties for custom build configuration.

```yml
appId: com.example.nextron
productName: My Nextron App
copyright: Copyright © 2020 Yoshihide Shiono
directories:
  output: dist
  buildResources: resources
files:
  - from: .
    filter:
      - package.json
      - app
publish: null # see https://www.electron.build/configuration/publish
```

For more information, please check out [electron-builder official configuration documents](https://www.electron.build/configuration/configuration).

## nextron.config.js

```js
module.exports = {
  // specify an alternate main src directory, defaults to 'main'
  mainSrcDir: 'main',
  // specify an alternate renderer src directory, defaults to 'renderer'
  rendererSrcDir: 'renderer',

  // main process' webpack config
  webpack: (config, env) => {
    // do some stuff here
    return config
  },
}
```

## Custom Babel Config for the Main Process

We can extends the default babel config of main process by putting `.babelrc` in our project root like this:

**`.babelrc`**:

```json
{
  "presets": ["nextron/babel"]
}
```

## Examples

See [examples](./examples) folder for more information.

### [examples/basic-javascript](./examples/basic-javascript)

<p align="center"><img src="https://i.imgur.com/X7dSE68.png"></p>

```
# with npx
$ npx create-nextron-app my-app --example basic-javascript

# with yarn
$ yarn create nextron-app my-app --example basic-javascript

# with pnpm
$ pnpm dlx create-nextron-app my-app --example basic-javascript
```

### [examples/basic-typescript](./examples/basic-typescript)

<p align="center"><img src="https://i.imgur.com/NZfsD1p.png"></p>

```
# with npx
$ npx create-nextron-app my-app --example basic-typescript

# with yarn
$ yarn create nextron-app my-app --example basic-typescript

# with pnpm
$ pnpm dlx create-nextron-app my-app --example basic-typescript
```

### [examples/custom-build-options](./examples/custom-build-options)

<p align="center"><img src="https://i.imgur.com/QqQekRJ.png"></p>

```
# with npx
$ npx create-nextron-app my-app --example custom-build-options

# with yarn
$ yarn create nextron-app my-app --example custom-build-options

# with pnpm
$ pnpm dlx create-nextron-app my-app --example custom-build-options
```

### [examples/custom-main-entry](./examples/custom-main-entry)

<p align="center"><img src="https://i.imgur.com/nqpLJI0.png"></p>

```
# with npx
$ npx create-nextron-app my-app --example custom-main-entry

# with yarn
$ yarn create nextron-app my-app --example custom-main-entry

# with pnpm
$ pnpm dlx create-nextron-app my-app --example custom-main-entry
```

### [examples/custom-renderer-port](./examples/custom-renderer-port)

<p align="center"><img src="https://i.imgur.com/X7dSE68.png"></p>

```
# with npx
$ npx create-nextron-app my-app --example custom-renderer-port

# with yarn
$ yarn create nextron-app my-app --example custom-renderer-port

# with pnpm
$ pnpm dlx create-nextron-app my-app --example custom-renderer-port
```

### [examples/ipc-communication](./examples/ipc-communication)

<p align="center"><img src="https://i.imgur.com/kIDlAFT.png"></p>

```
# with npx
$ npx create-nextron-app my-app --example ipc-communication

# with yarn
$ yarn create nextron-app my-app --example ipc-communication

# with pnpm
$ pnpm dlx create-nextron-app my-app --example ipc-communication
```

### [examples/store-data](./examples/store-data)

<p align="center"><img src="https://i.imgur.com/BgFze6G.png"></p>

```
# with npx
$ npx create-nextron-app my-app --example store-data

# with yarn
$ yarn create nextron-app my-app --example store-data

# with pnpm
$ pnpm dlx create-nextron-app my-app --example store-data
```

### [examples/with-ant-design](./examples/with-ant-design)

<p align="center"><img src="https://i.imgur.com/NrkTPe9.png"></p>

```
# with npx
$ npx create-nextron-app my-app --example with-ant-design

# with yarn
$ yarn create nextron-app my-app --example with-ant-design

# with pnpm
$ pnpm dlx create-nextron-app my-app --example with-ant-design
```

### [examples/with-chakra-ui](./examples/with-chakra-ui)

<p align="center">
  <img src="https://i.imgur.com/oahHuxG.png">
  <img src="https://i.imgur.com/sZ01Nyl.png">
</p>

```
# with npx
$ npx create-nextron-app my-app --example with-chakra-ui

# with yarn
$ yarn create nextron-app my-app --example with-chakra-ui

# with pnpm
$ pnpm dlx create-nextron-app my-app --example with-chakra-ui
```

### [examples/with-emotion](./examples/with-emotion)

<p align="center"><img src="https://i.imgur.com/3UKgyH7.png"></p>

```
# with npx
$ npx create-nextron-app my-app --example with-emotion

# with yarn
$ yarn create nextron-app my-app --example with-emotion

# with pnpm
$ pnpm dlx create-nextron-app my-app --example with-emotion
```

### [examples/with-material-ui](./examples/with-material-ui)

<p align="center"><img src="https://i.imgur.com/flcMvDC.png"></p>

```
# with npx
$ npx create-nextron-app my-app --example with-material-ui

# with yarn
$ yarn create nextron-app my-app --example with-material-ui

# with pnpm
$ pnpm dlx create-nextron-app my-app --example with-material-ui
```

### [examples/with-tailwindcss](./examples/with-tailwindcss)

<p align="center"><img src="https://i.imgur.com/a9QWW0v.png"></p>

```
# with npx
$ npx create-nextron-app my-app --example with-tailwindcss

# with yarn
$ yarn create nextron-app my-app --example with-tailwindcss

# with pnpm
$ pnpm dlx create-nextron-app my-app --example with-tailwindcss
```

## Develop

### Basic

```
$ git clone https://github.com/saltyshiomix/nextron.git
$ cd nextron
$ pnpm install
$ pnpm dev # default is examples/basic-javascript
```

### Developing `examples/*`

```
$ pnpm dev <EXAMPLE-FOLDER-NAME>
```

### Developing for your own project

1. Install development version of nextron

```
$ cd nextron
$ npm install
$ npm run build
$ npm link
```

2. Install linked nextron in your project

```
$ cd your-project
$ npm link nextron
```

3. On every change in nextron, run `npm run build` in nextron folder and restart your project

## Maintainers ⚡

- [saltyshiomix (Shiono Yoshihide)](https://github.com/saltyshiomix)
- [lacymorrow (Lacy Morrow)](https://github.com/lacymorrow)
- [Psycokwet](https://github.com/Psycokwet)
- [m5x5](https://github.com/m5x5)
- [andirsun (Anderson Laverde)](https://github.com/andirsun)

For more information, please see [Looking for maintainers ⚡ #244](https://github.com/saltyshiomix/nextron/discussions/244).

## Related

- [create-nextron-app](https://github.com/saltyshiomix/create-nextron-app) - Create Nextron (Electron + Next.js) apps in one command ⚡
- [Nuxtron](https://github.com/saltyshiomix/nuxtron) - ⚡ Electron + Nuxt.js ⚡

## License

This project is licensed under the terms of the [MIT license](https://github.com/saltyshiomix/nextron/blob/master/LICENSE).
