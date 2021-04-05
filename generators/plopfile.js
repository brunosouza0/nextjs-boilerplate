module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a Component',
    prompts: [
      {
        type: 'list',
        name: 'action',
        message: 'select action:',
        choices: [
          { name: 'create component', value: 'component' },
          { name: 'create template', value: 'template' }
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: (answers) => `${answers.action} name?`
      }
    ],
    actions: (data) => {
      switch (data.action) {
        case 'component':
          return [
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/index.tsx',
              templateFile: 'templates/component.tsx.hbs'
            },
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/styles.ts',
              templateFile: 'templates/styles.ts.hbs'
            },
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/stories.tsx',
              templateFile: 'templates/stories.tsx.hbs'
            },
            {
              type: 'add',
              path: '../src/components/{{pascalCase name}}/test.tsx',
              templateFile: 'templates/test.tsx.hbs'
            }
          ]
        case 'template':
          return [
            {
              type: 'add',
              path: '../src/templates/{{pascalCase name}}/index.tsx',
              templateFile: 'templates/template.tsx.hbs'
            },
            {
              type: 'add',
              path: '../src/templates/{{pascalCase name}}/styles.ts',
              templateFile: 'templates/styles.ts.hbs'
            },
            {
              type: 'add',
              path: '../src/templates/{{pascalCase name}}/test.tsx',
              templateFile: 'templates/test.tsx.hbs'
            }
          ]
      }
    }
  })
}
