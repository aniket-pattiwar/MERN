// const fs = require('fs');
// const path = require('path');

// console.log('Starting build...');

// // --- Configuration ---
// const templateFile = 'index.template.html';
// const outputFile = 'index.html';
// const contentPlaceholder = '<!--INJECT_CONTENT_HERE-->';
// const dayFilePrefix = 'day';

// try {
//     // 1. Read the main index.html template
//     let indexContent = fs.readFileSync(templateFile, 'utf-8');
//     console.log(`Template file '${templateFile}' read successfully.`);

//     // 2. Find all the dayX.html files in the current directory
//     const dayFiles = fs.readdirSync(__dirname)
//         .filter(file => file.startsWith(dayFilePrefix) && file.endsWith('.html'))
//         .sort((a, b) => {
//             // Sort files numerically (day1, day2, ..., day10)
//             const numA = parseInt(a.replace(dayFilePrefix, '').replace('.html', ''));
//             const numB = parseInt(b.replace(dayFilePrefix, '').replace('.html', ''));
//             return numA - numB;
//         });

//     // 3. Generate the HTML for all tab panes
//     let allTabsContent = '';
//     dayFiles.forEach((fileName, index) => {
//         // Extract the number from the filename (e.g., "day4.html" -> 4)
//         const dayNumber = parseInt(fileName.replace(dayFilePrefix, '').replace('.html', ''));
//         const fileContent = fs.readFileSync(fileName, 'utf-8');
//         const isActive = dayNumber === 1 ? 'show active' : '';
//         allTabsContent += `<div class="tab-pane fade ${isActive}" id="day${dayNumber}-content" role="tabpanel" aria-labelledby="day${dayNumber}-tab-btn">${fileContent}</div>\n`;
//     });
//     console.log(`Generated content for ${dayFiles.length} day files.`);

//     // 4. Replace the placeholder in the template with the generated content
//     indexContent = indexContent.replace(contentPlaceholder, allTabsContent);

//     // 5. Write the final, combined index.html file
//     fs.writeFileSync(outputFile, indexContent);
//     console.log(`✅ Build complete! '${outputFile}' has been generated.`);

// } catch (error) {
//     console.error('❌ Build failed:', error);
// }