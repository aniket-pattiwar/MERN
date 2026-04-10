const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const outputFile = path.join(__dirname, 'index-alpha.html');

// The specific days to include
const days = ['1', '2', '2.2'];

try {
    let indexHtml = fs.readFileSync(indexFile, 'utf8');
    let combinedContent = '';

    days.forEach((day, index) => {
        const fileId = `day${day}`;
        const domId = `day${day.replace('.', '-')}`;
        const filePath = path.join(__dirname, `${fileId}.html`);
        
        let dayContent = '';
        if (fs.existsSync(filePath)) {
            dayContent = fs.readFileSync(filePath, 'utf8');
            console.log(`Successfully read ${fileId}.html`);
        } else {
            console.warn(`Warning: ${fileId}.html not found at ${filePath}.`);
            dayContent = `<div class="alert alert-danger">Error loading ${fileId}.html</div>`;
        }

        // Wrap the content in the required Bootstrap tab pane structure
        const paneHtml = `
            <div class="tab-pane fade ${index === 0 ? 'show active' : ''}" id="${domId}-content" role="tabpanel" aria-labelledby="${domId}-tab-btn">
${dayContent}
            </div>
        `;
        combinedContent += paneHtml + '\n';
    });

    // Replace the HTML placeholder with the bundled data
    indexHtml = indexHtml.replace(
        '<!-- Content will be loaded dynamically by the script below -->',
        combinedContent
    );

    // Remove the JavaScript fetch loop to prevent CORS errors and duplicate loading
    const fetchScriptRegex = /\/\/ --- Dynamic Content Loading ---[\s\S]*?(?=\/\/ --- All simulation functions)/;
    indexHtml = indexHtml.replace(fetchScriptRegex, '// Dynamic loading script removed for standalone file\n\n            ');

    fs.writeFileSync(outputFile, indexHtml, 'utf8');
    console.log(`\nSuccess! ${outputFile} has been created.`);
    console.log(`You can now double-click index-alpha.html in your file explorer to view it.`);
} catch (err) {
    console.error('An error occurred:', err);
}