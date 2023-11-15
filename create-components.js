/** @format */

// create-components.js
const { execSync } = require('child_process')

const components = [
    { name: 'Header', subdir: 'Components' },
    { name: 'Footer', subdir: 'Components' },
    { name: 'Sections', subdir: 'Components' },
    { name: 'Navbar', subdir: 'Components' },
    { name: 'Card', subdir: 'Components' },
]

components.forEach((component) => {
    const command = `npx plop component-with-subdir -- --name=${component.name} --subdir=${component.subdir}`
    execSync(command, { stdio: 'inherit' })
})

console.log('Done creating components!')

// node create-components.js
