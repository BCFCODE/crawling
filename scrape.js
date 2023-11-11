const puppeteer = require('puppeteer');

async function scrapeData() {
  // Launch a headless browser
  const browser = await puppeteer.launch({ headless: 'new' });

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto('http://www.numericana.com/data/partition.htm');

  // Extract the text content of the <pre> tag
  const data = await page.$eval('pre', pre => pre.textContent);

  // Split the text into lines and find the line containing '14: 135'
  const lines = data.split('\n');
  const resultLine = lines.find(line => line.includes('15:'));

  // Print the result
  console.log(resultLine);

  // Close the browser
  await browser.close();
}

// Run the scraping function
scrapeData();