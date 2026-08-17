class Bok {
    titel: string = "";
    forfattare: string = "";
    ISBN: string = "";
    antalSidor: number = 0;
}

const bok1 = new Bok();

bok1.titel = "The Hobbit";
bok1.forfattare = "J.R.R Tolkien";
bok1.ISBN = "9780007458424";
bok1.antalSidor = 310;

const bok2 = new Bok();

bok2.titel = "Harry Potter och de vises sten";
bok2.forfattare = "J.K. Rowling";
bok2.ISBN = "9789129723946";
bok2.antalSidor = 384;

console.log(bok1.titel);
console.log(bok1.forfattare);
console.log(bok1.ISBN);
console.log(bok1.antalSidor);

console.log(bok2.titel);
console.log(bok2.forfattare);
console.log(bok2.ISBN);
console.log(bok2.antalSidor);