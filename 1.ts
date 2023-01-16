class HesapMakinasi {
    constructor (){}
    public topla(sayı1:number,sayı2:number):number{
        return sayı1+sayı2
    }
    public çarp(sayı1:number,sayı2:number):number{
        return sayı1*sayı2
    }
    public bol(sayı1:number,sayı2:number):number{
        return sayı1/sayı2
    }
    public cikar(sayı1:number,sayı2:number):number{
        return sayı1-sayı2
    }
    }
    const hesapMakinasi=new HesapMakinasi()
     const deger1 =hesapMakinasi.çarp(7,8)
     console.log(deger1)
     const deger2=hesapMakinasi.topla(15,16)
     console.log(deger2)
     const deger3=hesapMakinasi.bol(1000,3)
     console.log(deger3)
     const deger4 =hesapMakinasi.cıkar(1000,1001)
     console.log(deger4)