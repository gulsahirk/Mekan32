const hakkinda = function(req, res, next) {
  res.render('hakkinda', 
    { 
      title: 'Hakkında',
      'footer' : 'Gülşah IRK 2020'
    }
  );
}

module.exports = {
  hakkinda
}