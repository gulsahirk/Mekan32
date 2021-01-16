var express = require('express');
var router = express.Router();
var ctrlMekanlar=require('../controllers/Mekanlar');
var ctrlDigerleri=require('../controllers/Digerleri');

router.get('/', ctrlMekanlar.anaSayfa);
router.get('/mekan/:mekanid',ctrlMekanlar.mekanBilgisi);
router.get('/mekan/:mekanid/yorum/yeni', ctrlMekanlar.yorumEkle);
router.post('/mekan/:mekanid/yorum/yeni' , ctrlMekanlar.yorumumuEkle);
router.get('/hakkinda', ctrlDigerleri.hakkinda);

module.exports = router;