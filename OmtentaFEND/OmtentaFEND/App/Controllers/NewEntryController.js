function NewEntryController($scope, $http) {
    var message = $("#message");
    var email = $("#emailTB");
    $scope.SaveNewEntry = function () {
        $http.post('/odata/People', $scope.Person)
            .success(function() {
                message.html(email.val() + ' was saved.');
                message.attr("class", "success");
            })
            .error(function () {
                message.html("Save failed<br />Have you forgotten the mail?");
                message.attr("class", "error");
            });
    };
}