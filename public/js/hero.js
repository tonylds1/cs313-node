function getHeroesByPower() {
    let powers = $('#powers').val().replace(' ', '%20');
    let target = '/hero/powers/'+powers;
    let output = $('#output');
    output.empty();

    $.get(target, function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var hero = data[i];
            output.append("<div class='dHero'><h1>" + hero.ds_name +
                "</h1><p>" + hero.tx_history +
                "</p></div>");
        }

    }).fail(function() {
        output.append('<div>Ops. Sorry, something was terrible wrong.</div>');
    });
}

$('form_hero').on('submit', function(e){
    e.preventDefault();
    alert('aldkjfasdf');
})