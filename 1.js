"use strict";
class HesapMakinasi {
    constructor() { }
    topla(sayı1, sayı2) {
        return sayı1 + sayı2;
    }
    çarp(sayı1, sayı2) {
        return sayı1 * sayı2;
    }
    bol(sayı1, sayı2) {
        return sayı1 / sayı2;
    }
    cikar(sayı1, sayı2) {
        return sayı1 - sayı2;
    }
}
const hesapMakinasi = new HesapMakinasi();
const deger1 = hesapMakinasi.çarp(7, 8);
console.log(deger1);
const deger2 = hesapMakinasi.topla(15, 16);
console.log(deger2);
const deger3 = hesapMakinasi.bol(1000, 3);
console.log(deger3);
const deger4 = hesapMakinasi.cıkar(1000, 1001);
console.log(deger4);
