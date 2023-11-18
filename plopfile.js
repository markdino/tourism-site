/** @format */

// plopfile.js
module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Create a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.jsx',
                templateFile: 'plop-templates/component.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/index.js',
                templateFile: 'plop-templates/index.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.scss',
                templateFile: 'plop-templates/styles.hbs',
            },
        ],
    })

    plop.setGenerator('multi-component', {
        description: 'Create multiple components',
        prompts: [
            {
                type: 'input',
                name: 'names',
                message: 'Enter component names (comma separated):',
            },
        ],
        actions: (data) => {
            const names = data.names.split(',').map((name) => name.trim())

            return names.map((name) => ({
                type: 'component',
                name,
            }))
        },
    })

    plop.setGenerator('component-with-subdir', {
        description: 'Create a component with a subdirectory',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name:',
            },
            {
                type: 'input',
                name: 'subdir',
                message: 'Subdirectory name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{subdir}}/{{name}}/{{name}}.jsx',
                templateFile: 'plop-templates/component.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{subdir}}/{{name}}/index.jsx',
                templateFile: 'plop-templates/index.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{subdir}}/{{name}}/{{name}}.scss',
                templateFile: 'plop-templates/styles.hbs',
            },
        ],
    })
}
