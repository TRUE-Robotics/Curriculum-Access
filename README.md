# Curriculum Access

## Project setup

1. Install the necessary dependencies:
    ```
    npm install
    ```

2. Create a `.env` file with the following variables:
    ```
    VUE_APP_AWS_ACCESS_KEY_ID=
    VUE_APP_AWS_SECRET_ACCESS_KEY=
    VUE_APP_AWS_REGION=
    VUE_APP_ACCESS_PASSWORD=
    ```

For development, set the `config.dev` variable to `true` in `config.js`, otherwise, access will be denied for loading web pages.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
