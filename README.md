# actions.diy

A [GitHub Action](https://github.com/features/actions) to let you custom your action logic

## Usage

You can use this action after any other action. Here is an example setup of this action:

1. Create a `.github/workflows/diy.yml` file in your GitHub repo.
2. Add the following code to the `diy.yml` file.

```yml
on: push
name: Do whatever you want Action
jobs:
  Diy:
    name: Do whatever you want Action
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Do it yourself
      uses: echoings/actions.diy@main
```

3. Create a `.echo.actions.diy.js` file in your root project, which is export an async function definition as follow, then **You can handle notify yourself**

```Typescript
module.exports = async function notify(
  _ctx: github.context (@actions/github),
  _envs: process.env,
  _axios: Axios,
  _core: @actions/core
): {
  code?: number,
  data?: any,
  msg: string
}
```
`Tips: ` If you need more extra dependency package, please do and use [ncc](https://github.com/vercel/ncc#readme) to bundle them together.