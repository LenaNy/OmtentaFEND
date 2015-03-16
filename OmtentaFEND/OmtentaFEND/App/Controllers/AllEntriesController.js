function AllEntriesController($scope, $http) {
    $http.get("/odata/People")
        .success(function(data) {
            $scope.People = data.value;
        }).error(function() {
            alert("error");
        });

    $scope.DeleteEntry = function(key) {
        if (confirm("Are you sure you want to delete this entry?")) {
            $http.delete("/odata/People('" + key + "')")
                .success(function() {
                    $http.get("/odata/People")
                        .success(function(data) {
                            $scope.People = data.value;
                        });

                    alert('Entry deleted');
                })
                .error(function() {
                    alert("Couldn't delete entry");
                });
            //alert('Entry deleted');
        } else {
            alert("Deletion Stopped");
        }
    };

};