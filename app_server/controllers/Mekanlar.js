//anaSayfa controller metodu
//index.js dosyasındaki router.get('/',ctrlMekanlar.anaSayfa);
//ile metot url'ye bağlanıyor
const anaSayfa=function (req,res){
    res.render('mekanlar-liste',{'title':'Anasayfa'});
}
//mekanBilgisi controller metodu
//index.js dosyasındaki router.get('/',ctrlMekanlar.mekanBilgisi);
//ile metot url'ye bağlanıyor
const mekanBilgisi=function(req,res){
    res.render('mekan-detay',{'title':'Mekan Bilgisi'});
}
//yorumEkle controller metodu
//index.js dosyasındaki router.get('/',ctrlMekanlar.yorumEkle);
//ile metot url'ye bağlanıyor
const yorumEkle=function(req,res){
    res.render('yorum-ekle',{'title':'Yorum Ekle'});
}
//metotlarımızı kullanmak üzere dış dünyaya aç
//diğer dosyalardan require ile alabilmemizi sağlayacak
module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
};