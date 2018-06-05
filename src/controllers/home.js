exports.get = (req, res) => {
  res.render('home', { csrfToken: req.csrfToken(),  activePage: { isAuthenticated:req.isAuthenticated(), home: true , title:'داشبورد'} });
};
