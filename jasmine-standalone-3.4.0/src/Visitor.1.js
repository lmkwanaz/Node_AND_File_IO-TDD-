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
         i = 0;

         while (fs.existsSync(`visitor_${i}.json`)) {
             console.log(`this file visitor_${i}.json already exist!`);
            //  break;
            i++;

         }

        // do{i++}while(fs.exists(`visitor_${i}.json`));
 
         var write_info = `visitor_${i}.json`;
         fs.writeFile(write_info, json, function (err) {
             if (err)
                 throw err;
             console.log('is now Saved!');
             return true;
         });
 


        this.full_name =  this.full_name.replace(' ', '_').toLowerCase();
        var write_info = `visitor_${this.full_name}.json`;
        fs.writeFile(write_info, json, function (err) {
            if (err)
                throw err;
            console.log('is now Saved!');
            return true;
        });
        return true;
    }

    load(args) {

       

        if(isNaN(args)){

            console.log("hey");
            
            args = this.full_name.replace(' ', '_').toLowerCase();
            var strFile = fs.readFileSync(`visitor_${args}.json`, 'utf8');
            console.log(strFile);
            
        }else{

        var strFile = fs.readFileSync(`visitor_${args}.json`, 'utf8');
        console.log(strFile);
        
        }

        // var strFile = fs.readFileSync(`visitor_${args}.json`, 'utf8');
        // console.log(strFile);



       // args = this.full_name.replace(' ', '_').toLowerCase();
        // var strFile = fs.readFileSync(`visitor_${args}.json`, 'utf8');
        // console.log(strFile);
    }
}
exports.Visitor = Visitor;

///run this class (node Visistor.js)