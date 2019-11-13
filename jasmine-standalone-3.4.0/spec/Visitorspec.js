describe('A Person class should have details of',()=>{
    it('should return name, age, gender and interests', ()=>{
        let alice = new Visitor('lwandie', 12, '04/11/2016', '18:00',
        'dope', 'gwen')
        let file =  alice.save();
        console.log(file);
        
        expect(file).toBe(true);
    });

});