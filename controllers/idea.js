const jwt = require('jsonwebtoken');
//airtable
var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'key6g32DRULc2ELR4' }).base('appTIhrtdSQzoGMIf');

exports.Postidea = (req, res, next) => {
    const domain = req.body.domain;
    const problem = req.body.problem;
    const token = req.body.jwttoken;

    var decodedtoken;
    try {
        decodedtoken = jwt.verify(token, 'heyphil123');
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedtoken) {
        res.statusCode(402).json({ messege: 'Login in to submit ideas' });
    } else {
        const email = decodedtoken.email;
        let toprecord;

        base('users').select({
            fields: ["Email"],
            cellFormat: "json",
            view: "Grid view"
        })
            .eachPage((records) => {
                records.map(record => {
                    var { fields } = record;
                    var { Email } = fields;
                    if (Email === email) {
                        exist = true;
                        toprecord = record;
                    }
                });
                if (exist) {
                    base('ideas').create([{
                        "fields": {
                            "Name": name,
                            "Solution": solution,
                            "user": [toprecord.id],
                            "Domain": domain,
                            "Problem": problem
                        }
                    }], (err, results) => {
                        if (err) {
                            console.log(err);
                        } else {
                            //console.log(results);
                            res.redirect('http://localhost:3000/');
                        }
                    });

                }
            }, err => {
                console.log(err);
            });
    }


};

exports.getideas = (req, res, next) => {
    var recordlist = [];
    base('ideas').select({
        view: "Grid view"
    }).eachPage((records, fetchNextPage) => {

        records.forEach((record) => {
            var { fields } = record;
            var { id } = record;
            var parsedrecord = {
                id: id,
                data: fields
            };
            recordlist.push(parsedrecord);
        });

        fetchNextPage();

    }, (err) => {
        if (err) {
            console.error(err);
            return;
        } else {
            //console.log(recordlist);
            res.json({
                messege: 'sent',
                recordlist: recordlist
            });
        }
    });

};

exports.putupvote = (req, res, next) => {
    const ideaId = req.params.ideaid;
    var currentupvote = 0;
    console.log(ideaId);
    base('ideas')
        .find(ideaId, (err, record) => {
            if (err) { console.error(err); return; }
            else {
                currentupvote = record.fields.upvote;
                currentupvote = currentupvote + 1;

                base('ideas').update([
                    {
                        "id": ideaId,
                        "fields": {
                            "upvote": currentupvote
                        }
                    }], (err, record) => {
                        if (err) {
                            console.error(err);
                            return;
                        } else {
                            var { fields } = record[0];
                            var parsedrecord = {
                                id: ideaId,
                                data: fields
                            };
                            res.json({
                                messege: 'sent',
                                record: parsedrecord
                            });

                        }
                    });

            }
        });

};