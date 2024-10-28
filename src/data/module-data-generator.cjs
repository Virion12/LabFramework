const fs = require('fs');
const path = require('path');

const count = Number(process.argv[2]); // Liczba obiektów do wygenerowania
const colors = ['red', 'blue', 'green', 'black', 'white', 'silver', 'yellow'];
let brands = [];

// Wczytanie marek samochodów z pliku car_brands.txt
fs.readFile(path.join(__dirname, 'car_brands.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Przygotowanie danych z pliku
    brands = data.split('\n').map(s => s.trim()).filter(n => n.length > 0);
    
    let content = "export const data = [\n";

    // Generowanie obiektów samochodów
    for (let i = 0; i < count; i++) {
        const id = i + 1; // Unikalne id
        const brand = brands[Math.floor(Math.random() * brands.length)]; // Losowa marka
        const year = Math.floor(Math.random() * (2023 - 1990 + 1)) + 1990; // Losowy rok
        const color = colors[Math.floor(Math.random() * colors.length)]; // Losowy kolor

        content += `  { id: ${id}, brand: "${brand}", year: ${year}, color: "${color}" },\n`;
    }

    content += "];\n";

    fs.writeFile(path.join(__dirname, 'module-data.js'), content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('module-data.js generated successfully');
    });
});