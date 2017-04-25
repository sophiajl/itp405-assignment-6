var mysql = require('mysql');
// var q = require('q');

function findRecord(id) {
    return new Promise(function (resolve, reject) {
        // var b = q.defer();
        var connection = mysql.createConnection({
            host: 'itp460.usc.edu',
            user: 'student',
            password: 'ttrojan',
            database: 'itp405-midterm'
        });

        connection.connect();
        connection.query('SELECT books.id, books.title, books.publisher_id, publishers.name, books.author_id, authors.first_name, authors.last_name FROM books INNER JOIN publishers ON books.publisher_id = publishers.id INNER JOIN authors ON books.author_id = authors.id WHERE books.id = ?', [id], function (error, books) {
            if (error) {
                reject();
            }
            else {
                if(books.length === 0){
                    reject({
                        errorType: 'Book not found',
                        id: id
                    })
                }else{
                    resolve(books[0]);
                }
            }
        });
    });
}

    module.exports = findRecord;