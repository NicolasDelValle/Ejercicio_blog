const { Articulo } = require("../models");

async function showAdmin(req, res) {

    const articles = await Articulo.findAll();
    console.log(articles);
    //res.render("admin", { articles });
    res.json(articles);
};

async function deleteArticle(req, res) {

    const {id} = req.params;

    await Articulo.destroy({where: {id : id}});


    res.redirect('/admin');
};

async function updateArticle(req, res) {

    const {id} = req.params;

    await Articulo.update(
        {titulo : req.body.titulo,
         contenido : req.body.contenido,
         imagen : req.body.imagen},
        {where: {id : id}}
        );

    res.redirect('/admin');
}


module.exports = {
    showAdmin,
    deleteArticle,
    updateArticle,
}