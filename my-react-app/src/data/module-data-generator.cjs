const fs = require('fs').promises;

const count = Number(process.argv[2])

async function readFile(filename) {
    const data = await fs.readFile(filename, 'utf8');
    return data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
}

async function generateData() {
    try {
        const brands = await readFile('./src/lab01/brand.txt');
        const colors = await readFile('./src/lab01/color.txt');
        const maxSpeeds = await readFile('./src/lab01/maxSpeed.txt');

        let carsData = [];

        for (let i = 0; i < count; i++) {
            carsData.push({
                id: i + 1,
                brand: brands[Math.floor(Math.random() * brands.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                maxSpeed: maxSpeeds[Math.floor(Math.random() * maxSpeeds.length)],
            });
        }

        const content = `export const data = ${JSON.stringify(carsData, null, 2)};`;

        await fs.writeFile('./src/data/module-data.js', content);
        console.log("module-data.js generated");
    } catch (error) {
        console.error("Error generating data:", error);
    }
}

generateData();