// Get the actual current year (e.g., 2026)
const currentYear = new Date().getFullYear();

// Subtract 11 to get the retro copyright year (e.g., 2015)
const retroYear = currentYear - 11;

// Create the exact copyright string structure
const copyrightText = `Wonny Cat and The Kongkie Comedy Show are registered trademark of KK Productions and SCA. Copyright 2000-${retroYear}-${currentYear} All Rights Reserved.`;

// Insert the text into the HTML element
document.getElementById('copyright-text').textContent = copyrightText;
