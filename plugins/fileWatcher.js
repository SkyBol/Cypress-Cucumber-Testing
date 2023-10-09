const fs = require('fs');
var path = require('path');

const srcDir = `../test/`
const destDir = `integration/tmp`;

module.exports = (file) => {
    try {
        const pathToWatch = getParentTestFolderPath(file);
        if (pathToWatch === undefined) {
            return;
        } else {
            const watcher = fs.watch(pathToWatch, () => {
                file.emit('rerun');
            });
            file.on('close', () => {
                watcher.close();
            });
        }
    } catch (err) {
        console.error(err)
    }
}

function getParentTestFolderPath(file) {
    const base = path.normalize(file.filePath);
    const dest = path.normalize(destDir);
    const relative = base.split(dest)[1];

    if (relative === undefined) {
        return;
    }

    const targetPath = path.join(srcDir, relative);
    const absolutePath = path.join(__dirname, "..", targetPath);
    return absolutePath;
}
