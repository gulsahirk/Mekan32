const anaSayfa = function(req, res, next) {
  res.render('mekanlar-liste',
    { title : 'Anasayfa',
      'footer' : 'Gülşah IRK 2020',
      'sayfaBaslik' : {
        'siteAd' : 'Mekan32',
        'aciklama' : 'Isparta civarındaki mekanları keşfedin!'
      },
      'mekanlar' : [
        {
          'ad' : 'Starbucks',
          'adres' : 'Centrum Garden',
          'puan' : '5',
          'imkanlar' : ['Kahve', 'Çay', 'Pasta' , 'Çalışma Alanları'],
          'mesafe' : '10km'
        },
        {
          'ad' : 'Gloria Jeans',
          'adres' : 'Iyaş Avm',
          'puan' : '3',
          'imkanlar' : ['Kahve', 'Kek', 'Çay' , 'Çalışma Alanları'],
          'mesafe' : '5km'
        },
        {
          'ad' : 'Viola',
          'adres' : 'Iyaş Avm',
          'puan' : '2',
          'imkanlar' : ['Kahve', 'Kek', 'Pasta'],
          'mesafe' : '5km'
        },
        {
          'ad' : 'MackBear',
          'adres' : 'Fatih Mahallesi',
          'puan' : '5',
          'imkanlar' : ['Kahve Çeşitleri', 'Kek', 'Pasta'],
          'mesafe' : '6km'
        },
        {
          'ad' : 'DOR',
          'adres' : 'Kafeler Caddesi',
          'puan' : '1',
          'imkanlar' : ['Kahve', 'Kek', 'Çay', 'Yemek'],
          'mesafe' : '10km'
        }
      ]
    }
   );
}

const mekanBilgisi = function(req, res, next) {
  res.render('mekan-detay', 
    { title : 'Mekan Bilgisi',
      'sayfaBaslik' : 'Starbucks',
      'footer' : 'Gülşah IRK 2020',
      'mekanBilgisi' : {
        'ad' : 'Starbucks',
        'adres' : 'Centrum Garden',
        'puan' : 5,
        'imkanlar' : ['Kahve', 'Çay', 'Pasta'],
        'koordinatlar' : {
          'enlem': '37.781885',
          'boylam' : '30.566034'
        },
        'saatler' : [
          {
            'gunler' : 'Pazartesi - Cuma',
            'acilis' : '7:00',
            'kapanis' : '23:00',
            'kapali' : false
          },
          {
            'gunler' : 'Cumartesi',
            'acilis' : '9:00',
            'kapanis' : '22:00',
            'kapali' : false
          },
          {
            'gunler' : 'Pazar',
            'kapali' : true
          }
        ],
        'yorumlar' : [
          {
            'yorumYapan' : 'Rozerin GÜNEŞ',
            'puan' : '5',
            'tarih' : '04.12.2020',
            'yorumMetni' : 'Mükemmel bir yer.'
          },
          {
            'yorumYapan' : 'Gamze KOÇAK',
            'puan' : '1',
            'tarih' : '03.12.2020',
            'yorumMetni' : 'Hoş bir mekan.'
          },
          {
            'yorumYapan' : 'İsmihan TOPSAKAL',
            'puan' : '4',
            'tarih' : '01.11.2019',
            'yorumMetni' : 'Kahveleri güzel.'
          }
        ]

      }
    }
  );
}

const yorumEkle = function(req, res, next) {
  res.render('yorum-ekle', 
    { 
      title : 'Yorum Ekle',
      'footer' : 'Gülşah IRK 2020'
    }
  );
}


module.exports = {
  anaSayfa,
  mekanBilgisi, 
  yorumEkle
}
