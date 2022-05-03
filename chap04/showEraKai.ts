export {}

const year = Math.round(Math.random() * 120 + 1901);

if (year < 1912) {
    console.log(`${year}年は、明治${year - 1867}年です。`);
} else if (year < 1926) {
    console.log(`${year}年は、大正${year - 1911}年です。`);
} else if (year < 1989) {
    console.log(`${year}年は、昭和${year - 1925}年です。`);
} else if (year < 2019) {
    console.log(`${year}年は、平成${year - 1988}年です。`);
} else {
    console.log(`${year}年は、令和${year - 2018}年です。`);
} 