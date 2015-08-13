angular.module("horror", [])
    .controller("HorrorController", function($scope, $http){
        var horror = this;
        horror.showCount = 5;
        $.getJSON("data.json", function(data) {
            horror.data = data;
            setTimeout(function(){
                $("#message").replaceWith("<div id='message'><p style='text-align:center' class='animated fadeIn'>沒有啦，騙你的啦哈哈</p></div>");
                setTimeout(function(){
                    $("#message").remove();
                    $("#downMessage").show();
                    $scope.$apply();
                    $("#info").show();
                    $(".page").show();
                }, 1500);
            }, 1000);
        });

        horror.showMore = function(scope, el, attrs) {
            horror.showCount = horror.showCount + 10;
        };
    });