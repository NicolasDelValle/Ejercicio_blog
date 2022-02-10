# Ejercicio_blog

::Rutas

[GET]/home
[GET]/articulo/:id > redirecciona a articulo.ejs
[GET]/admin
[GET]/admin/eliminar/:id
[GET]/admin/modificar/:id > redirecciona a modificar.ejs
[POST]/admin/crear > redirecciona a crear.ejs
[GET]/api/articulos

::Tablas

Articulos[idArticulo, idAutor, titulo, contenido, imagen, fechaDeCreacion]

Comentarios[idComentario, idArticulo, contenido, email, nombre]

Autor[idAutor, nombre, apellido, email]
