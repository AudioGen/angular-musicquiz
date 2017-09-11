/*'use strict';

// Define the `phonecatApp` module
angular.module('musicquizApp', [
	//whcich depends on 'musicQuiz'
  'musicQuiz'
]);
*/

var musicQuizApp = angular.module("musicQuizApp", []);

musicQuizApp.controller("musicQuizController", function musicQuizController($scope){
	$scope.quizzes = [
     {
       question: "Who had hits in the 70s with the songs &quot;Lonely Boy&quot; and &quot;Never Let Her Slip Away&quot;?",
       answer : "Andrew Gold"
     }, {
     	question: "Who is the artist of the recent new album the Uncanny Valley?",
     	answer: "Perturbator"
     }
	];
});

