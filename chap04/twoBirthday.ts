export {}

const a = Math.round(Math.random() * 68 + 1950);
const b = Math.round(Math.random() * 68 + 1950);
console.log(`Aさんは、${a}年生まれです。`);
console.log(`Bさんは。${b}年生まれです。`)

if ( a > 1988 && b > 1988 ) {
    console.log("AさんもBさんも平成生まれ");
} else if ( a > 1988 || b > 1988 ) {
    console.log("どちらかが平成生まれ")
} else {
    console.log("両方とも昭和生まれ")
}