'use strict';

// $('button').click(function(){
//     console.log('stop clicking me!!')
// })

// $('button').on('click', function(){
//     console.log('stop clicking me!!');
//     $('ul').toggleClass('on');
// })

// $('ul').on('click', function(){
//     console.log(this);
//     console.log($(this));
//     console.log($(this).html());
//     console.log($(this).text());
// })

// $('ul li').on('click',function(){
//     console.log($(this).text());
// })

$('select').on('change',function(){
    console.log($(this));
    console.log($(this).val());
})


$.ajax('./people.json')
.then(data=>{
    // console.log(data);
    data.forEach((item)=>{
        console.log(item);
        let newPerson = new Person(item);
        console.log(newPerson);
        newPerson.render();
    })

})

function Person(value) {
    this.name = value.name;
}

Person.prototype.render = function(){
    // $('ul').append(`
    //     <li>${this.name}</li>
    // `);
    // let personClone = $('.person-template').first().clone();
    let personClone = $('.person-template').clone();
    personClone.removeClass('person-template')
    console.log(personClone);
    personClone.find('.ppl').text(this.name);
    $('ul').append(personClone)
}




