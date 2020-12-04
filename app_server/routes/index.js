var express = require('express');
var router = express.Router();

//mekanlar.js yolu
var ctrlMekanlar=require('../controllers/Mekanlar');
//diğerleri.js yolu
var ctrlDigerleri=require('../controllers/Digerleri');

//Anasayfa rotası
router.get('/', ctrlMekanlar.anaSayfa);
//Mekan bilgisi rotası
router.get('/mekan', ctrlMekanlar.mekanBilgisi);
//yeni yorum rotası
router.get('/mekan/yorum/yeni', ctrlMekanlar.yorumEkle);
//Hakkında rotası
router.get('/hakkinda', ctrlDigerleri.hakkinda)
module.exports = router;