router.get('/calculateFeetFromMiles', function(request, response) {
    response.send({ result: request.query.miles * 5280 });
});

router.post('/calculateCircumference', function(request, response) {
    console.log(request.body);
    response.send({ result: request.query.radius * 2 * 3.14 });
});
