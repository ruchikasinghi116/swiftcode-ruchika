var app=angular.module('chatApp',['ngMaterial'])
	.config(function($mdThemingProvider) {
  		$mdThemingProvider.theme('default')
    		.dark();
});

app.controller('chatController',function($scope,$sce){
	$scope.messages=[

		];

var  exampleSocket =  new  WebSocket("wss://swiftcode-ruchika.herokuapp.com/chatSocket");
    exampleSocket.onmessage  =   function(event) {
    var jsonData = JSON.parse(event.data); 
    jsonData.time = new Date().toLocaleTimeString();
    $scope.messages.push(jsonData);
    $scope.$apply();  
    console.log(jsonData);   
  };


	$scope.sendMessage = function ()
	{ exampleSocket.send($scope.userMessage);       
	  console.log($scope.userMessage);
	  $scope.userMessage = ""; 

	 };
    $scope.trust = $sce.trustAsHtml;
})

