$('form').on('submit', function (e){
    e.preventDefault();

    var types = $('input[type=text]').val().replace('','');
    types = types.split(',');
    console.log(types);
    var trainerTypes = types.map(function (type) {
        console.log(type);
        return $.ajax({
            url: 'http://pokeapi.co/api/v2/type/' + type,
            dataType: 'json',
            method: 'GET'
        })
    });
    console.log(trainerTypes);
});