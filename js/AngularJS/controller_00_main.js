beachLiveApp.controller('main_controller', function($scope, data, AngFirebase, $state){
	$scope.tab = data.tab;
	$scope.data = data;


/** Admin Login **/

	$scope.failed = false;

	$scope.login = function(_userName, _password){

		// Login to Firebase
		AngFirebase.login(_userName, _password, function(user){
			if(user){
                // User is signed in.
                $scope.failed = false;
                $('#loginModal').modal('hide')
				console.log("Logged In")
				
				// BUG...
				setTimeout(function(){
				    //do what you need here
					$state.go("admin.announcement")
				}, 1000);
                
            } else {
                // No user is signed in.
	            $scope.failed = true;
	         	console.log("Failed Login");

            }
            // Clear  
			$scope.admin.user = "";
			$scope.admin.password = "";

			if(!$scope.$$phase) {
				$scope.$apply();
			}
		}); 



		// // console.log($scope.admin.user);
		// // console.log($scope.admin.password);

		// if(bool_successful){
		// 	$('#loginModal').modal('toggle') 
		// 	console.log("Logged In")
			
		// 	// BUG...
		// 	setTimeout(function(){
		// 	    //do what you need here
		// 		$state.go("admin.announcement")
		// 	}, 1000);
		// } else {
		// 	$scope.failed = true;
  //        	console.log("Failed Login");
		// }
		// // Clear  
		// $scope.admin.user = "";
		// $scope.admin.password = "";
	}
});