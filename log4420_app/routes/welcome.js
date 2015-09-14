/**
 * Created by Zoe on 15-09-13.
 */
/* GET Game Welcome page. */
router.get('/welcome', function(req, res) {
    res.render('welcome', { title: 'Hello, Game!' });
});