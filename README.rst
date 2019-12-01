====================================
React-Static - TypeScript Template
====================================

Command
====================================

* `yarn start` 
* `yarn build`
* `yarn deploy`
* `yarn prod`

Dependencies
====================================

- react-static v7
- ant.design

Test
====================================

To use this template, run react-static create and use the typescript template.
react-static-typescript-plugin supports path aliases [since v3.1](https://github.com/react-static/react-static/pull/963#issuecomment-455596728). It has been set up in this template.

.. code-block:: javascript

  tsconfig.json
  {
    "paths": {
      "@components/*": ["src/components/*"]
    },
  }

  // this works in your React app
  import FancyDiv from '@components/FancyDiv'
