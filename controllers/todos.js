
module.exports = {
    index
}


function index(req, res) {
    res.render('todos/index', {
        todos: todoDb.getAll()
    });
}