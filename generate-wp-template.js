const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'out', 'index.html');
const outputPath = path.join(__dirname, 'template-landing.php');

if (!fs.existsSync(htmlPath)) {
  console.error("Error: out/index.html not found! Run npm run build first.");
  process.exit(1);
}

let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 1. Add WordPress Template Header
const wpHeader = `<?php
/*
Template Name: NextJS Landing Page
*/
?>
`;

// 2. Replace absolute paths starting with "/" (but not absolute urls or hash links)
// We want to match: src="/..." href="/..."
// e.g. href="/_next/..." or src="/logo.png"
// Regex: (href|src)="\/((?!wp-content|_next\/static\/media|http|https|#)[^"]+)"
// We will target attributes:
// - href="/..."
// - src="/..."
htmlContent = htmlContent.replace(/(href|src)="\/([^"]+)"/g, (match, attr, val) => {
  // If the path is an external URL or anchor link, leave it
  if (val.startsWith('http') || val.startsWith('#') || val.startsWith('mailto:') || val.startsWith('tel:')) {
    return match;
  }
  // Otherwise, prepend the WordPress theme stylesheet directory URI function
  return `${attr}="<?php echo get_stylesheet_directory_uri(); ?>/landing-assets/${val}"`;
});

// Let's also check for any background image styles or video src
// e.g. bg-[url('/...')] -> in HTML tailwind it might be rendered as style="background-image:url('/...')"
htmlContent = htmlContent.replace(/url\('?\/([^'\)]+)'?\)/g, (match, val) => {
  if (val.startsWith('http') || val.startsWith('data:')) {
    return match;
  }
  return `url('<?php echo get_stylesheet_directory_uri(); ?>/landing-assets/${val}')`;
});

// Combine header and modified html
const finalContent = wpHeader + htmlContent;

fs.writeFileSync(outputPath, finalContent, 'utf8');
console.log("Successfully generated template-landing.php at " + outputPath);
