casper.open('http://192.168.1.68:8080/app.php/login', {
    method: 'POST',
    data: {
        'title': '<title>',
        'unique_id': '<unique_id>'
    }
}, function(response){
    if(response.status == 200){
        require('utils').dump(this.page.content);
    }
});