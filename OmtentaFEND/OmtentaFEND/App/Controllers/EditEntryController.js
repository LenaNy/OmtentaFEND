function EditEntryController($rootScope, $scope, $routeParams, $route, $http) {
    var id = $routeParams.id;

    $http.get("/odata/People(" + id + ")")
        .success(function (data) {
            $scope.Person = data;
    }).error(function() {
            alert("error");
        });


    $scope.SaveUpdate = function (key) {
        var message = $("#message");
        var email = $("#emailTB");
        $http.patch("/odata/People(" + key + ")", $scope.Person)
            .success(function () {
                message.html(email.val() + ' was saved.');
                message.attr("class", "success");
            })
            .error(function () {
                message.html("Save failed<br />Have you forgotten the mail?");
                message.attr("class", "error");
            });
    };
};