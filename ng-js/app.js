/**
 * Created by debasis on 18/7/15.
 */
var fbflag=0;


function statusChangeCallback(response) {
    //console.log('statusChangeCallback');
    //console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
         testAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        /*document.getElementById('status').innerHTML = 'Please log ' +
         'into this app.';*/
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        /* document.getElementById('status').innerHTML = 'Please log ' +
         'into Facebook.';*/
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '434078603403320',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.2' // use version 2.2
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=id,name,email,first_name,last_name', function(response) {

        $.ajax({url: "http://www.bigtrolly.com/shop/sociallogin.html",data:response,type: "POST", success: function(result){

            //$("#div1").html(result);
            //alert(result);
            if(result>1){
                window.location.href="shop/dashboard";
            }
            console.log(result);
        }});
        //  console.log('Successful login for: ' + response.name);
        /* document.getElementById('status').innerHTML =
         'Thanks for logging in, ' + response.name + '!';*/
        console.log(response);


    });
}



'use strict';

/* App Module */

var gartitube = angular.module('gartitube', [
    'ui.router',
    'ngAnimate',
    'angularValidator',
    'ngCookies',
    'ngDialog',
    'ngSanitize',
    'ap.lateralSlideMenu',
    'com.2fdevs.videogular',
    'ui.calendar',
    'ui.bootstrap',
    'colorpicker.module'
    // 'homeControllers'
]);



gartitube.config(function($stateProvider, $urlRouterProvider,$sceProvider,$sceDelegateProvider) {


    //
    $sceProvider.enabled(false);
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from outer templates domain.
        'partials/**'
    ]);
    // For any unmatched url, redirect to /state1
    $urlRouterProvider
        .otherwise("/index");
    //
    // Now set up the states
    $stateProvider
        .state('index',{
            url:"/index",

            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },


                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/loader.html' ,
                    controller:'index'

                }


            }
        })


        .state('intro',{
            url:"/intro",
            resolve:{
                'MyServiceData':function(MyService){
                    // MyServiceData will also be injectable in your controller, if you don't want this you could create a new promise with the $q service
                    return MyService.promise;
                }
            },

            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },


                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/intro.html' ,
                    controller:'loader'

                }


            }
        })

        .state('home',{
            url:"/home",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/home.html' ,
                    controller:'home'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }
    )
        .state('gratitube-sent',{
            url:"/gratitube-sent",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/gratitube_sent.html' ,
                    controller:'gratitubesent'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }
    )


        .state('record',{
            url:"/record",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    //ontroller:'loader'
                    controller:'navigation'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/record.html' ,
                    controller:'record'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }

    )



        .state('friends',{
            url:"/friends",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                 'navigation': { templateUrl: 'partials/navigation.html',
                 //ontroller:'loader'
                     controller:'navigation'

                 },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/friends.html' ,
                    controller:'friends'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                 controller:'footer'

                 }



            }
        }

    )

        .state('logout',{
            url:"/logout",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
               /* 'navigation': { templateUrl: 'partials/navigation.html'
                    //ontroller:'loader'

                },*/

                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },


                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/loader.html' ,
                    controller:'logout'

                }
                /*'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'record'

                }*/



            }
        }

    )

        .state('share',{
            url:"/share",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/share.html' ,
                    controller:'share'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        })

            .state('templates',{
                url:"/templates",


                views: {

                    // the main template will be placed here (relatively named)
                    '': { templateUrl: 'index.html' },
                    'navigation': { templateUrl: 'partials/navigation.html',
                        controller:'navigation'
                        //ontroller:'loader'

                    },

                    // the child views will be defined here (absolutely named)
                    'content': { templateUrl: 'partials/templates.html' ,
                        controller:'templates'

                    },
                    'footer': { templateUrl: 'partials/footer.html' ,
                        controller:'footer'

                    }



                }
            }

        )
        .state('chartity',{
            url:"/chartity",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/chartity.html' ,
                    controller:'chartity'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }

    )
        .state('reminders',{
            url:"/reminders",

            resolve:{
                'MyServiceData':function(MyCalendar){
                    // MyServiceData will also be injectable in your controller, if you don't want this you could create a new promise with the $q service
                    return MyCalendar.promise;
                }
            },


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/reminders.html' ,
                    controller:'reminders'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }

    )
        .state('add-reminder',{
            url:"/add-reminder",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/add_reminder.html' ,
                    controller:'addreminder'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }

    )
        .state('details',{
            url:"/details/:id",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/details.html' ,
                    controller:'details'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }

    )
        .state('news-details',{
            url:"/news-details/:id",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/news_details.html' ,
                    controller:'newsDetails'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }

    )
        .state('profile',{
            url:"/profile",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/profile.html' ,
                    controller:'profile'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }

    )
        .state('contacts',{
            url:"/contacts",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/contacts.html' ,
                    controller:'contacts'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }

    )
        .state('invite',{
            url:"/invite",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/invite.html' ,
                    controller:'contacts'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }

    )
	        .state('fbfriends',{
            url:"/fbfriends",


            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },
                'navigation': { templateUrl: 'partials/navigation.html',
                    controller:'navigation'
                    //ontroller:'loader'

                },

                // the child views will be defined here (absolutely named)
                'content': { templateUrl: 'partials/fbfriends.html' ,
                    controller:'fbfriends'

                },
                'footer': { templateUrl: 'partials/footer.html' ,
                    controller:'footer'

                }



            }
        }

    )

});


gartitube.directive('slider', function($timeout) {
    return {
        restrict: 'AE',
        replace: true,
        //$sceProvider:false,
        scope: {
            images: '='
        },
        link: function(scope, elem, attrs) {},
        templateUrl: 'partials/slider.html'
    };
});

gartitube.directive('imageslider', function($timeout) {
    return {
        restrict: 'AE',
        replace: true,
        //$sceProvider:false,
        scope: {
            images: '='
        },
        link: function(scope, elem, attrs) {},
        templateUrl: 'partials/imageslider.html'
    };
});

gartitube.service('number',  function() {
    return {
        isPositive: function(operationPrice) {
            return String(operationPrice).indexOf("-") == -1;
        }
    };
});

gartitube.controller('index', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog) {

    if(typeof($cookieStore.get('recordFile')) != 'undefined'){

        var dialog1 = ngDialog.open({
            template: '<div><div>Processing...</div><div>',
            plain: true,
            //showClose:false,
            scope:$scope
        });

        setTimeout(function(){
            dialog1.close();
            $state.go('record');
            return;
        },5000);

    }

    if(typeof($cookieStore.get('importContact')) != 'undefined'){

        $state.go('contacts');
        return;

    }

    if(typeof($cookieStore.get('importContact1')) != 'undefined'){

        $state.go('invite');
        return;

    }

    var winh = $(window).height();
    var winw = $(window).width();

    $('.introbody').css('height',winh);
    $('.introbody').css('width',winw);

    $('.sliderbody').css('height',winh);
    $('.sliderbody').css('width',winw);


    $scope.init=function(){




        $scope.username=angular.element( document.querySelector( '#username' )).val();
        $scope.deviceid=angular.element( document.querySelector( '#deviceid' )).val();
        $scope.accessToken=angular.element( document.querySelector( '#accessToken' )).val();
        //alert($scope.username+'='+$scope.deviceid+"----"+$scope.accessToken);
        if( ($scope.username)!='' &&  ($scope.deviceid)!=''){

            $scope.userinfo={
                username:$scope.username,
                deviceid:$scope.deviceid,
                accessToken:$scope.accessToken
               // accessToken:$scope.accessToken

            }



            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/register',
                data    : $.param($scope.userinfo),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {
                if(data>0){
                    $cookieStore.put('username',data);
                    $scope.username=''
                    $scope.deviceid=''
                    $scope.redirected='yes';
                    angular.element( document.querySelector( '#username' )).val('');
                    angular.element( document.querySelector( '#deviceid' )).val('');
                    $state.go('home');
                    return;
                }
                else{
                    $cookieStore.put('loginfail','yes')
                    $scope.dialog1 = ngDialog.open({
                        template: '<div><div>Your Login failed .. please try again!</div><div>',
                        plain: true,
                        //showClose:false,
                        scope:$scope
                    });
                    $state.go('intro');
                    return;

                }



            });
            //$scope.redirect();





        }else{
            $scope.redirect();
        }

/*        setTimeout(function(){
            var winh = $(window).height();
            var winw = $(window).width();

            $('.introbody').css('height',winh);
            $('.introbody').css('width',winw);

            $('.sliderbody').css('height',winh);
            $('.sliderbody').css('width',winw);

        },1000);
*/


    };

    setTimeout(function(){


        $scope.init();

    },3000);



    $scope.redirect=function(){

        //alert($cookieStore.get('username'));
        if( $cookieStore.get('username')>0){
            //alert($cookieStore.get('username'));
            $scope.username=''
            $scope.deviceid=''
            angular.element( document.querySelector( '#username' )).val('');
            angular.element( document.querySelector( '#deviceid' )).val('');
            $state.go('home');
            return;
        }else{
            //alert(2343);
           /* setTimeInterval(function(){



            },4000);*/

            setTimeout(function(){

                $state.go('intro');
                return;
            },3100);
        }

    }


})
gartitube.controller('record', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {

   //$cookieStore.put('username',34);
   // $cookieStore.put('recordFile',1);
	
	$scope.filename = '';
    $scope.filetype = '';
    $scope.tempimage = '';
    $scope.locfilepath = '';

    $scope.privacyVal = 'Public';
    $scope.recipientId = [];
	
	$scope.images = [{
            src: 'ng-images/anniversary.png',
            title: 'Pic 1',
            price:'$24.99'
        },
        {
            src: 'ng-images/bday.png',
            title: 'Pic 2',
            price:'$29.99'
        },
        {
            src: 'ng-images/congrats.png',
            title: 'Pic 2',
            price:'$21.99'
        },
        {
            src: 'ng-images/get-well.png',
            title: 'Pic 2',
            price:'$44.99'
        },
        {
            src: 'ng-images/graduation.png',
            title: 'Pic 2',
            price:'$34.99'

        },
        {
            src: 'ng-images/just-because.png',
            title: 'Pic 2',
            price:'$39.99'
        },
        {
            src: 'ng-images/new-baby.png',
            title: 'Pic 2',
            price:'$14.99'
        },
        {
            src: 'ng-images/new-home.png',
            title: 'Pic 2',
            price:'$19.99'
        },
        {
            src: 'ng-images/religious-events.png',
            title: 'Pic 2',
            price:'$4.99'
        },
        {
            src: 'ng-images/retirement.png',
            title: 'Pic 2',
            price:'$24.99'
        },
        {
            src: 'ng-images/thank-you.png',
            title: 'Pic 2',
            price:'$49.99'
        },
        {
            src: 'ng-images/wedding.png',
            title: 'Pic 2',
            price:'$4.99'
        }
    ];

    $scope.currentIndex = 0;
    $scope.next1= function() {
        $scope.currentIndex < $scope.images.length - 1 ? $scope.currentIndex++ : $scope.currentIndex =  0;
    };

    $scope.prev1 = function() {
        // $sce();
        $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.images.length - 1;
        //alert( $scope.currentIndex);
    };

    $scope.$watch('currentIndex', function() {
        //alert(9);
        $scope.images.forEach(function(image) {
            //alert(image);
            //$(image).hide(2000);
            image.visible = false; // make every image invisible
        });

        $scope.images[$scope.currentIndex].visible = true; // make the current image visible
    });



    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getfriendinfo',
        data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
        //data    : $.param({'username':34}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.friendList = data.data;

    });

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getCharityList'
    }) .success(function(data) {
		
		$scope.charityList = data;

    });

    $scope.selRecipient = function(id){
        var idx = $scope.recipientId.indexOf(id);
        if($scope.recipientId.indexOf(id) < 0){
            if($scope.recipientId.length){
                $scope.recipientId.push(id);
            }else{
                $scope.recipientId = [id];
            }
        }else{
            $scope.recipientId.splice(idx,1);
        }
    }

    $scope.sharegratitube=function(){
		
		$scope.formsubmitflag=0;
        //dialog1.close();
        //dialog2.close();
        ///alert(345);
        $scope.title=angular.element( document.querySelector( '#title' )).val();
        $scope.message=angular.element( document.querySelector( '#message' )).val();

        /*if($scope.recipientId.length <1) {
            $scope.formsubmitflag=1;

            var dialog5 = ngDialog.open({
                template: '<div><div>Please Select Atleast One Recipient</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });
        }*/

        if($scope.title.length<1) {
            $scope.formsubmitflag=1;

            var dialog1 = ngDialog.open({
                template: '<div><div>Please Enter a Title</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });
        }

        if($scope.message.length<1) {
            $scope.formsubmitflag=1;

            var dialog2 = ngDialog.open({
                template: '<div><div>Please Enter a Message</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });
        }

        if($scope.filename=='' && $scope.tempimage == '') {
            $scope.formsubmitflag=1;

            var dialog2 = ngDialog.open({
                template: '<div><div>Upload file</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });
        }

        if($scope.formsubmitflag==0){

            var dialog1 = ngDialog.open({
                template: '<div><div>Sharing...</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });

            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/saveGratitube',
                data    : $.param({'filename':$scope.filename,'filetype':$scope.filetype,'title':$scope.title,'message':$scope.message,'user_name':$cookieStore.get('username'),'privacyVal':$scope.privacyVal,'charityL':$scope.charityL,'charityD':$scope.charityD,'tempimage':$scope.tempimage,'locfilepath':$scope.locfilepath}),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {
				
				dialog1.close();
                $cookieStore.put('lastUpFileName',$scope.filename);
                $cookieStore.put('lastUpFileType',$scope.filetype);
                $cookieStore.put('lastUpFileTitle',$scope.title);
                $cookieStore.put('lastUpFileMsg',$scope.message);
                $cookieStore.put('lastGratitubeId',data);

                $state.go('share');
            });
        }



    }


    if(typeof($cookieStore.get('recordFile')) != 'undefined'){

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/gettempfile',
            data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {

            $scope.filename = data.filename;
            $scope.filetype = data.filetype;
            $scope.tempimage = data.tempimage;
            $scope.locfilepath = data.locfilepath;



            $cookieStore.remove('recordFile');

        });



    }
	
	if(typeof($cookieStore.get('chooseTemplateFile')) != 'undefined'){
		$scope.filename = $cookieStore.get('chooseTemplateFile');
		$scope.filetype = $cookieStore.get('chooseTemplateFileType');
		$scope.tempimage = $cookieStore.get('chooseTemplatetempImage');

		$cookieStore.remove('chooseTemplateFile');
		$cookieStore.remove('chooseTemplateFileType');
		$cookieStore.remove('chooseTemplatetempImage');
	}


    $scope.uploadvideochoose=function(){

        $cookieStore.put('recordFile',1);
        window.location = "uploadvideoapp";
    }


    $scope.uploadvideo=function(){

        //alert(89);
        $cookieStore.put('recordFile',1);
        window.location = "uploadvideochoose"
    }

    $scope.uploadimage=function(){

        //alert(89);
        $cookieStore.put('recordFile',1);
        window.location = "uploadimageapp"
    }

    $scope.saveRecord = function(){
        $state.go('home');
        return;
    }
	
	$scope.formreset = function(){
		$scope.filename = '';
		$scope.filetype = '';
		$scope.tempimage = '';
        $scope.locfilepath = '';

		$scope.privacyVal = 'Public';
		
		angular.element( document.querySelector( '#title' )).val('');
        angular.element( document.querySelector( '#message' )).val('');
		
		$scope.charityL = '';
		$scope.charityD = '';
	}

})

gartitube.controller('fbfriends', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number,$timeout) {
	$http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getfriendinfo',
        data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
        //data    : $.param({'username':34}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.friendList = data.data;

    });
	
	$scope.selRecipient = function(recId){
		
		$http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/sharewithfbfriends',
        data    : $.param({'recipient_id':recId,'gratitube_id':$cookieStore.get('lastGratitubeId')}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		}) .success(function(data) {

			var dialog1 = ngDialog.open({
					template: '<div><div>Share Successfully</div><div>',
					plain: true,
					//showClose:false,
					scope:$scope
				});

				$timeout(function(){
					dialog1.close();
				},2000);

		});
	}
	
});

gartitube.controller('share', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {

    $scope.fbShare = function(){

        var dialog1 = ngDialog.open({
            template: '<div><div>Sharing...</div><div>',
            plain: true,
            //showClose:false,
            scope:$scope
        });

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/sharetofb',
            data    : $.param({'filename':$cookieStore.get('lastUpFileName'),'filetype':$cookieStore.get('lastUpFileType'),'username':$cookieStore.get('username')}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            dialog1.close();
        });

    }

    $scope.emailShare = function(){
        $scope.dialog2 = ngDialog.open({
            template: '<div><input type="text" id="emailList" /><input type="button" ng-click="emailShare1()" value="send"><div>',
            plain: true,
            //showClose:false,
            scope:$scope
        });
    }

    $scope.emailShare1 = function(){
        $scope.dialog2.close();

        var dialog1 = ngDialog.open({
            template: '<div><div>Sharing...</div><div>',
            plain: true,
            //showClose:false,
            scope:$scope
        });

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/sharetoemail',
            data    : $.param({'userMail':$('#emailList').val(),'filename':$cookieStore.get('lastUpFileName'),'filetype':$cookieStore.get('lastUpFileType'),'filetitle':$cookieStore.get('lastUpFileTitle'),'filemsg':$cookieStore.get('lastUpFileMsg')}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            dialog1.close();
        });
    }



});

gartitube.controller('templates', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getAllTemplates'
    }) .success(function(data) {
		
		$scope.templatesList = data;

    });
	
	$scope.selTemplate = function(item){
		$cookieStore.put('chooseTemplateFile',item.file_name);
		$cookieStore.put('chooseTemplateFileType',item.file_type);
		$cookieStore.put('chooseTemplatetempImage',item.video_image);

		$state.go('record');
	}
	
});

gartitube.controller('chartity', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getCharityList'
    }) .success(function(data) {
		
		$scope.charityList = data;

    });
});

gartitube.controller('reminders', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number,$compile, $timeout, uiCalendarConfig,MyCalendar,$filter) {





    $scope.converttodateformat=function(dateval){

        //return 'teeewst'+dateval;
        return $filter('date')(new Date(dateval), 'dd/MM/yyyy');
    }

    $scope.vieweventdetailspopup=function(date){

        $scope.dialog1 = ngDialog.open({
            template: '<div><h1>'+date.title+'</h1><br><span>'+date.details+'</span><div>',
            plain: true,
            showClose:true,
            scope:$scope
        });
    }

    if(typeof ( $cookieStore.get('addNewReminder')) != 'undefined'){
        $cookieStore.remove('addNewReminder');


        $timeout(function(){
            window.location.reload();
        },2000);
    }

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that contains custom events on the scope */
    $scope.events = [];

    var data12=(MyCalendar.doStuff());

    /* event source that contains custom events on the scope */
    if(data12 != null && typeof data12 != 'string'){
        $scope.events = data12;
    }



    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){

        $scope.dialog1 = ngDialog.open({
            template: '<div><h1>'+date.title+'</h1><br><span>'+date.details+'</span><div>',
            plain: true,
            showClose:true,
            scope:$scope
        });



        //$scope.alertMessage = (date.title + ' was clicked ');
    };
    /* alert on Drop */
    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
        //$scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
        //$scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };

    /* add custom event*/
    $scope.addEvent = function() {
        $scope.events.push({
            title: 'Open Sesame',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            className: ['openSesame']
        });
    };
    /* remove event */
    $scope.remove = function(index) {
        $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
        uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };

    /* Change View */
    $scope.renderCalender = function(calendar) {
        $timeout(function() {
            if(uiCalendarConfig.calendars[calendar]){
                uiCalendarConfig.calendars[calendar].fullCalendar('render');
            }
        });
    };

    /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) {
        //element.attr({'tooltip': event.title,'tooltip-append-to-body': true});
        $compile(element)($scope);
    };

    var calHeight = parseInt($(window).height())-parseInt(250);

    /* config object */
    $scope.uiConfig = {
        calendar:{
            height: calHeight,
            editable: true,
            header:{
                left: 'title',
                center: '',
                right: 'prev,next'
            },
            eventClick: $scope.alertOnEventClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            eventRender: $scope.eventRender
        }
    };

    $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    /* event sources array*/
    $scope.eventSources = [ $scope.events];



});


gartitube.controller('addreminder', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {

    $scope.minDate = new Date();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.format = 'MM/dd/yyyy';


    $scope.addReminder = function(){

        if(typeof($scope.form.title) == 'undefined' || $scope.form.title == ''){
            alert('Please Enter Reminder Title');
        }else if(typeof($scope.form.rdate) == 'undefined' || $scope.form.rdate == ''){
            alert('Please Enter Date');
        }else if(typeof($scope.form.rdetail) == 'undefined' || $scope.form.rdetail == ''){
            alert('Please Enter Reminder Details');
        }else{

            $scope.form1 = {
                'user_id_r':$cookieStore.get('username'),
                'title':$scope.form.title,
                'rdate':$scope.form.rdate,
                'rdetail':$scope.form.rdetail
            }

            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/savereminder',
                data    : $.param($scope.form1),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {

                $cookieStore.put('addNewReminder',1);

                $state.go('reminders');
                //window.location.href = 'http://gratitube-app.influxiq.com/#/reminders';

            });
        }

    }



});

gartitube.controller('contacts', function($scope,$stateParams,$sce,$http,MyService,$cookieStore,$state,ngDialog,number,$timeout) {

    $cookieStore.remove('importContact');

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getcontacts',
        data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.contactList = data;
    });

    $scope.importContact = function(){
        $cookieStore.put('importContact',1);
        window.location.href = 'http://gratitube-app.influxiq.com/import-contacts';
    }

    $scope.importContact1 = function(){
        $cookieStore.put('importContact1',1);
        window.location.href = 'http://gratitube-app.influxiq.com/import-contacts';
    }

    $scope.emailShare = function(email){

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/sharetoemail',
            data    : $.param({'userMail':email,'filename':$cookieStore.get('lastUpFileName'),'filetype':$cookieStore.get('lastUpFileType'),'filetitle':$cookieStore.get('lastUpFileTitle'),'filemsg':$cookieStore.get('lastUpFileMsg')}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {

            var dialog1 = ngDialog.open({
                template: '<div><div>Mail Sent Successfully</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });

            $timeout(function(){
                dialog1.close();
            },2000);

        });

    }

    $scope.emailinvite = function(email){

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/invitemail',
            data    : $.param({'userMail':email}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {

            var dialog1 = ngDialog.open({
                template: '<div><div>Mail Sent Successfully</div><div>',
                plain: true,
                //showClose:false,
                scope:$scope
            });

            $timeout(function(){
                dialog1.close();
            },2000);

        });
    }



});
gartitube.controller('profile', function($scope,$stateParams,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {
    //$cookieStore.put('username',22);

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getUserDetails',
        data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.form = data;
    });

    $scope.updateProfile = function(){
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/updateUserDetails',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {

        });
    }

});

gartitube.controller('newsDetails', function($scope,$stateParams,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {

	
	
	$http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getgoodnewsById',
                data    : $.param({'newsId':$stateParams.id}),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {

                $scope.newsDetails = data;

            });
	
});
gartitube.controller('details', function($scope,$stateParams,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {
    
	$http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/gratitubeById',
                data    : $.param({'gratitubeId':$stateParams.id}),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {

                $scope.gratDetails = data;
				
				

            });

    $scope.selTemplate = function(item){

        $cookieStore.put('chooseTemplateFile',item.filename);
        $cookieStore.put('chooseTemplateFileType',item.filetype);
        $cookieStore.put('chooseTemplatetempImage',item.video_image);

        $state.go('record');
    }
     
});


gartitube.controller('footer', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {

    $scope.gotoPopular = function(){
        $cookieStore.put('currenttab','three.tpl.html');
        $state.go('home');
    }

});
gartitube.controller('navigation', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {


    $scope.inIt= function () {

        $scope.userinfo={
            username:$cookieStore.get('username')
            //username:34


        }


        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getuserpic',
            data    : $.param($scope.userinfo),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //alert(data.id);
            //alert(data.name);
            $scope.userimage=data.id;
            $scope.name=data.name;



        });
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getfriendinfo',
            data    : $.param($scope.userinfo),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
           // alert(angular.fromJson(data));
            //console.log(data.summary['total_count']);
            //alert(data.name);
            $scope.friendno=data.summary['total_count'];
            //$scope.name=data.name;



        });


    }

    setTimeout(function(){

        $scope.inIt();
    },100);

})

gartitube.controller('home', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog,number) {

    //alert("this is home");

    //alert($cookieStore.get('username'));

    $scope.fileList = [];
    $scope.allFileList = [];

    $scope.tabs = [{
        title: 'My Gratitubes',
        url: 'one.tpl.html'
    }, {
        title: 'Good news',
        url: 'two.tpl.html'
    }, {
        title: 'Trending',
        url: 'three.tpl.html'
    }];



    $scope.currentTab = 'one.tpl.html';

    if(typeof ($cookieStore.get('currenttab')) == 'undefined'){
        $cookieStore.put('currenttab','one.tpl.html');
    }

    $scope.currentTab = $cookieStore.get('currenttab');

    $scope.onClickTab = function (tab) {
        $cookieStore.put('currenttab',tab.url);
        $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/receiverGratitube',
        data    : $.param({'user_id':$cookieStore.get('username')}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(result) {

        $scope.fileList = result;

        if(typeof (result) === 'object')
            $scope.filecount = result.length;
        else
            $scope.filecount = 0;
        //console.log(result);
        //console.log($scope.filecount);
      // alert($scope.filecount);

    });

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getAllTemplates'
    }) .success(function(data) {

        $scope.allFileList = data;

    });
	
	$scope.goodNewsList = [];
	
	$http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getgoodnews'
    }) .success(function(data) {

        $scope.goodNewsList = data;

    });

    $scope.showFile = function(item){
        var hhh = '';
        if(item.filetype == 'image'){
            hhh = '<img src="http://torqkd.com/uploads/video1/images/'+item.filename+'.jpg" alt="#" style="width: 100%;" />';
        }
        if(item.filetype == 'video'){
            hhh = '<videogular>\
                <vg-media vg-src="[{src: (\'http://torqkd.com/uploads/video1/converted/'+item.filename+'.mp4\'), type: \'video/mp4\'}]" vg-native-controls="true" ></vg-media>\
                <vg-poster vg-url="\'http://torqkd.com/uploads/video1/thumb/'+item.filename+'.jpg\'"></vg-poster>\
            </videogular>';
        }


        $scope.dialog1 = ngDialog.open({
            template: '<div>'+hhh+'<div>',
            plain: true,
            showClose:false,
            scope:$scope
        });
    }

})

gartitube.controller('gratitubesent', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog) {

    $scope.fileList = [];

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getallfile',
        data    : $.param({'user_id':$cookieStore.get('username')}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(result) {

        $scope.fileList = result;

        if(typeof (result) === 'object')
            $scope.filecount = result.length;
        else
            $scope.filecount = 0;

    });

    $scope.showFile = function(item){
        var hhh = '';
        if(item.filetype == 'image'){
            hhh = '<img src="http://torqkd.com/uploads/video1/images/'+item.filename+'.jpg" alt="#" style="width: 100%;" />';
        }
        if(item.filetype == 'video'){
            hhh = '<videogular>\
                <vg-media vg-src="[{src: (\'http://torqkd.com/uploads/video1/converted/'+item.filename+'.mp4\'), type: \'video/mp4\'}]" vg-native-controls="true" ></vg-media>\
                <vg-poster vg-url="\'http://torqkd.com/uploads/video1/thumb/'+item.filename+'.jpg\'"></vg-poster>\
            </videogular>';
        }


        $scope.dialog1 = ngDialog.open({
            template: '<div>'+hhh+'<div>',
            plain: true,
            showClose:false,
            scope:$scope
        });
    }

})
gartitube.controller('loader', function($scope,$sce,$http,MyService,$cookieStore,$state,ngDialog) {



   $scope.loginfacebook=function(){
       alert(34543);
      /* var ua = navigator.userAgent.toLowerCase();
       var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
       alert(isAndroid);
       if(isAndroid) {
           // Do something!
           // Redirect to Android-site?
           //window.location = 'http://gratitube-app.influxiq.com/facebook';
       }
       else{

           alert('not android');
       }*/
   }
    $scope.init=function(){

        $(function(){


            $('.fblogin').click(function(){

                var ua = navigator.userAgent.toLowerCase();
                var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
               // alert(isAndroid);
                if(isAndroid) {
                    // Do something!
                    // Redirect to Android-site?
                    window.location = 'http://gratitube-app.influxiq.com/facebook';
                }
                else{





                        // This is called with the results from from FB.getLoginStatus().


                    FB.login(function(response) {

                        console.log(response);


                        // handle the response
                        fbflag=1;
                    }, {scope: 'public_profile,email'});




                }

            });


        });

        $scope.username=angular.element( document.querySelector( '#username' )).val();
        $scope.deviceid=angular.element( document.querySelector( '#deviceid' )).val();
        //alert($scope.username+'='+$scope.deviceid);
        if( ($scope.username)!='' &&  ($scope.deviceid)!=''){

            $scope.userinfo={
                username:$scope.username,
                deviceid:$scope.deviceid

            }



            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/register',
                data    : $.param($scope.userinfo),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {
                if(data>0){
                    scope.username=''
                    $scope.deviceid=''
                    angular.element( document.querySelector( '#username' )).val('');
                    angular.element( document.querySelector( '#deviceid' )).val('');
                    $cookieStore.put('username',data);
                    alert(data);
                    $state.go('home');
                    return;
                }
                else{
                    $cookieStore.put('loginfail','yes')
                    $scope.dialog1 = ngDialog.open({
                        template: '<div><div>Your Login failed .. please try again!</div><div>',
                        plain: true,
                        //showClose:false,
                        scope:$scope
                    });
                    $state.go('intro');
                    return;

                }



            });





        }



    };

    setTimeout(function(){
        var winh = $(window).height();
        var winw = $(window).width();

        $('.introbody').css('height',winh);
        $('.introbody').css('width',winw);

        $('.sliderbody').css('height',winh);
        $('.sliderbody').css('width',winw);


        $('.arrows').css('height',winh);
        $('.arrows').css('width',winw);

        $('.arrowswrapper').css('height',winh);
        $('.arrowswrapper').css('width',winw);

        $('.arrows').css('display','block');

    },1000);

    setTimeout(function(){

        $scope.init();

    },3000);




    $scope.san= function(url) {
        alert( MyService.doStuff('slider1'));
        // $sce.getTrustedUrl(url);

    };

    var data=(MyService.doStuff('slider1'));
    // alert(data);
    $scope.images = [{
        //src: 'ng-images/mobile300.png',
        title: 'Pic 1',
        content:"partials/slider1.html"
    }, {
        // src: 'ng-images/T-Mobile-Comet-1.jpg',
        title: 'Pic 2',
        content:"partials/slider2.html"
    },
        {
            //src: 'ng-images/mobile300.png',
            title: 'Pic 2',
            content:"partials/slider3.html"
        },
        {
            //src: 'ng-images/mobile300.png',
            title: 'Pic 2',
            content:"partials/slider4.html"
        },
        {
            //src: 'ng-images/mobile300.png',
            title: 'Pic 2',
            content:"partials/slider5.html"
        }
    ];
    //alert($sce.isEnabled());


    angular.forEach($scope.images, function(value, key) {
        //this.push(key + ': ' + value);
        //alert(value['content']);
        $sce.parseAsResourceUrl(value['content'])
        //alert($sce.trustAsUrl(value['content']));
    });
    //$sce.trustAsUrl('partial/slider1.html')



    if( $cookieStore.get('loginfail')=='yes'){
        $scope.currentIndex = $scope.images.length - 1;
        $cookieStore.remove('loginfail');
    }
    $scope.currentIndex = 0; // Initially the index is at the first image

    $scope.next1= function() {
        // $sce();
        //alert(8);
        $scope.currentIndex < $scope.images.length - 1 ? $scope.currentIndex++ : $scope.currentIndex =  $scope.currentIndex;
        // alert( $scope.currentIndex);
    };

    $scope.prev1 = function() {
        // $sce();
        $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = 0;
        //alert( $scope.currentIndex);
    };

    $scope.$watch('currentIndex', function() {
        //alert(9);
        $scope.images.forEach(function(image) {
            //alert(image);
            //$(image).hide(2000);
            image.visible = false; // make every image invisible
        });

        $scope.images[$scope.currentIndex].visible = true; // make the current image visible
    });

});



gartitube.controller('logout', function($scope,$http,$state,$cookieStore,$cookies) {

     $scope.init = function () {
        $cookieStore.remove('username');
        $cookieStore.remove('currenttab');
        //$cookieStore.remove('userid');
         angular.element( document.querySelector( '#username' )).val('');
         angular.element( document.querySelector( '#deviceid' )).val('');
         angular.element( document.querySelector( '#accessToken' )).val('');

         //$state.go('index');
        //alert($cookieStore.get('userid'));

         window.location.href = 'app-logout';
    };

    $scope.init();

});


gartitube.controller('friends', function($scope,$http,$state,$cookieStore,$cookies) {

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getfriendinfo',
         data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
       // data    : $.param({'username':34}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.friendList = data.data;

    });

    $scope.friendStatus = [];

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getUserFriendRel',
        data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
        //data    : $.param({'username':34}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.friendStatus = data;

    });

    $scope.changeStatus = function(itemId,status){
        $scope.friendStatus[itemId] = status;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/userfriendrel',
            data    : $.param({'username':$cookieStore.get('username'),'friend_id':itemId,'status':status}),  // pass in data as strings
        //    data    : $.param({'username':34,'friend_id':itemId,'status':status}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
        });
    }

});




gartitube.service('MyService', function($http) {
    var slider1data = null;
    var promise=null;
    var slider2data = null;
    var slider3data = null;
    var slider4data = null;
    var slider5data = null;
    var testimonialjson = null;

    var slider1 = $http.get('partials/slider1.html').success(function (slider1) {
        //alert(data);
        slider1data=slider1;
    });
    var slider2 = $http.get('partials/slider2.html').success(function (slider2) {
        //alert(data);
        slider2data=slider2;
    });
    var slider3 = $http.get('partials/slider3.html').success(function (slider3) {
        //alert(data);
        slider3data=slider3;
    });
    var slider4 = $http.get('partials/slider4.html').success(function (slider4) {
        //alert(data);
        slider4data=slider4;
    });
    var slider5 = $http.get('partials/slider5.html').success(function (slider5) {
        //alert(slider5);
        slider5data=slider5;
    });
    return {
        promise:slider1,
        setData: function (slider5data) {
            //alert(slider5data);
            slider1data = slider5data;
        },
        doStuff: function (t) {
            //alert(myData);
            if(t=='slider1')
            //alert(data);
                return slider1data;//.getSomeData();
            if(t=='slider2'){

                return slider2data;

            }
            if(t=='slider3'){
                return slider3data;

            }
            if(t=='slider4'){
                return slider4data;

            }
            if(t=='slider5'){
                return slider5data;

            }
        }
    };

});

gartitube.service('MyCalendar', function($http,$cookieStore) {
    var eventList = [];


    var promise = $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.gratitube.influxiq.com/?q=ngmodule/getreminders',
        data    : $.param({'username':$cookieStore.get('username')}),  // pass in data as strings
       // data    : $.param({'username':34}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        eventList=data;
    });



    return {
        promise:promise,
        setData: function (data) {
            eventList = data;
        },
        doStuff: function (t) {
                return eventList;//.getSomeData();
        },
        putdata:function(userInfo){
        }
    };

});
