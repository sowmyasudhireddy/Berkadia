let http = require('http');
let { parse } = require('querystring');
let fs = require('fs');
let server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        collectRequestData(req, result => {
            console.log(result);
            let crudoperation = result.Operation;
            if (crudoperation == 'create') {
                create_file(result, res);
            } else if (crudoperation == 'read') {
                read_file(result, res);
            } else if (crudoperation == 'update') {
                update_file(result, res);
            }
            else {
                delete_file(result, res);
            }
        });
    }
    else {
        res.writeHeader(200, { "Content-Type": "text/html" });
        var readSream = fs.createReadStream('index.html', 'utf8')
        readSream.pipe(res);
    }
});
server.listen(3000, () => {
    console.log("Server started at port 3000");
});
function create_file(values, res) {
    fs.writeFile(values.notesName, values.content, (err) => {
        if (err) {
            console.error(err);
        }
    });
    console.log('writing a file...');
    res.write('created Sticky notes : ' + values.notesName);
    res.end();
}
function read_file(values, res) {
    fs.readFile(values.notesName, (err, data) => {
        if (err) {
            return console.error(err);
        }
        res.write("reading Sticky note : " + values.notesName + " : " + "Content : " + data.toString());
        res.end();
    });
}
function update_file(values, res) {
    fs.appendFile(values.notesName, values.content, (err_file) => {
        if (err_file) {
            return console.log(err_file);
        }
        res.write  ("Content Updated : " );
        res.end();
    });
}
function delete_file(values, res) {
    fs.unlink(values.notesName, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.write("Sticky Notes Deleted : " + values.notesName);
            res.end();
        }
    });
}

function collectRequestData(request, callback) {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        callback(parse(body));
    });
}