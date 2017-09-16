var app=angular.module('chatApp',['ngMaterial'])
	.config(function($mdThemingProvider) {
  		$mdThemingProvider.theme('default')
    		.dark();
});

app.controller('chatController',function($scope,$sce){
	$scope.messages=[

	// {   sender:"BOT",
	// 	text:"hey! who are you?",
	// 	time:"1:25pm"		
	// },

	// {   sender:"USER",
	// 	text:"hi!I am Ruchika",
	// 	time:"1:24:"
	// },
	// {	   sender:"BOT",
	// 	text:"wh0 is nishanth? ",
	// 	time:"1:23pm"
	// },
	// {   sender:"USER",
	// 	text:"An idiot!!",
	// 	time:"1:23pm"
	// }

	];

var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
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

