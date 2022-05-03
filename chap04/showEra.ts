export {}

const year = Math.round(Math.random() * 120 + 1901);

if (year < 1912) {
    console.log(`${year}年は、明治です。`);
} else if (year < 1928) {
    console.log(`${year}年は、大正です。`);
} else if (year < 1989) {
    console.log(`${year}年は、昭和です。`);
} else if (year < 2019) {
    console.log(`${year}年は、平成です。`);
} else {
    console.log(`${year}年は、令和です。`);
} 