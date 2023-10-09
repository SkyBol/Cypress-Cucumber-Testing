const fse = require('fs-extra');

const srcDir = `../test/`;
const destDir = `./integration/tmp`;

module.exports = () => {
    try {
        fse.copySync(srcDir, destDir, { overwrite: true })
        console.log("copied files")
    } catch (err) {
        console.error(err)
    }
}