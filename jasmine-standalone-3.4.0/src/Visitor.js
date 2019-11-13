const { Visitor } = require("./Visitor.1");

let = require('fs');

let alice = new Visitor('lwandie', 12, '04/11/2016', '18:00',
 'dope', 'gwen');

   alice.save();

   console.log(alice);

 alice.load(1)

  


  let bob = new Visitor('bob', 13,  '07/12/2016', '18:00',
  'dope', 'thandiwe');
  bob.save();
  console.log(bob);
  
  //bob.load(1);