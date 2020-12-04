//hakkında controller metodu
//index.js dosyasındaki router.get('/',ctrlDigerleri.hakkinda);
//ile motot url'ye bağlanıyor
const hakkinda=function(req, res) {
  res.render('hakkinda', { title: 'Hakkında' });
}

module.exports={
    hakkinda
}

