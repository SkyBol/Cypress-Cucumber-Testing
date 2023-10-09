const fs = require('fs');

const destDir = `./integration/tmp`;

module.exports = () => {
    try {
        fs.rmSync(destDir, { recursive: true, force: true });
        console.log("deleted files")
    } catch (err) {
        console.error(err)
    }
}