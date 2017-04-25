var express = require('express');
var app = express();
var findRecord = require('./src/book');
// var q = require('q');

app.get('/api/v1/books/:id', function (request, response) {
    findRecord(request.params.id).then(function(books) {
        response.json({
            "book": {
                "id": books.id,
                "title": books.title,
                "publisher": {
                    "id": books.publisher_id,
                    "name": books.name,
                },
                "author": {
                    "id": books.author_id,
                    "first_name": books.first_name,
                    "last_name": books.last_name
                }
            }
        });
    }, function(error) {
        response.json(error);
    });
});

app.listen(8000);
