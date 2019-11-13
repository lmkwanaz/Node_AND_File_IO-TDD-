 let fs = require('fs');

class Visitor {
    constructor(full_name, age, date_of_visit, time_of_visit, comments, name_of_the_person_who_assisted_the_visitor) {
        this.full_name = full_name;
        this.age = age;
        this.date_of_visit = date_of_visit;
        this.time_of_visit = time_of_visit;
        this.comments = comments;
        this.name_of_the_person_who_assisted_the_visitor =
            name_of_the_person_who_assisted_the_visitor;
    }
    save() {
        let json = JSON.stringify(this, null, 4);
        var i;
        i = 1;
        while (fs.existsSync(`visitor_${i}.json`)) {
            i++;
        }
        var write_info = `visitor_${i}.json`;
        fs.writeFile(write_info, json, function (err) {
            if (err)
                throw err;
            console.log('is now Saved!');
            return true;
        });
        return true;
    }
    load(Num) {
        var strFile = fs.readFileSync(`visitor_${Num}.json`, 'utf8');
        console.log(strFile);
    }
}
exports.Visitor = Visitor;

///run this class (node Visistor.js)
