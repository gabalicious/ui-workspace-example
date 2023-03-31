# UI Workspace Example

This is the UI Workspace, a monorepo for the UI component library, Storybook, and related apps and packages.

### Requirements

- [Node.js](https://nodejs.org/en/) 18 LTS or higher
- [npm](https://www.npmjs.com/) 8.19.2 or higher

### Apps & Packages

- [app/storybook-vue-app](./apps/sb-vue-app/README.md) - See documentation and interact with the components from component library in isolation.
- `packages/eslint-config-custom` - A shared ESLint configuration for the monorepo.
- `packages/tsconfig` - A shared TypeScript configuration for the monorepo.
- [packages/ui](./packages/ui/README.md) - The component library, built with Vue.js and Vite.

### Develop

To develop all apps and packages, run the following command:

```
cd ui-workspace
npm run dev
```

This will start the Storybook Vue.js app.

### Publish

This will be handled by gitlab when merging to main. To publish manually run the following command:

```bash
cd ui-workspace

npm run build
npm run publish
```


## Useful Links

- [Turbo Repo Docs](https://turborepo.org/docs/)
- [Storybook Examples](https://storybook.js.org/showcase)
- [Vite Library Mode](https://vitejs.dev/guide/build.html#library-mode)
