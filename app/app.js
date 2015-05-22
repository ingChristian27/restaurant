
(function (){
	var app = angular.module('restaurant',[] );

	app.controller('menuController', function(){
		this.menu ={
			"items": [
			            {
			                "name": "coke",
			                "qty": 20,
			                "category": 0,
			                "sizes": [
			                "small",
			                "large"
			                ]
			            },
			            {
			                "name": "pepsi",
			                "qty": 20,
			                "category": 0,
			                "sizes": [
			                "small",
			                "large"
			                ]
			            },
			            {
			                "name": "water",
			                "qty": 20,
			                "category": 0,
			                "sizes": [
			                "small",
			                "large"
			                ]
			            },
			            {
			                "name": "hamburger",
			                "qty": 40,
			                "category": 1,
			                "sizes": [
			                "small",
			                "large"
			                ]
			            },
			            {
			                "name": "fries",
			                "qty": 20,
			                "category": 1,
			                "sizes": [
			                "small",
			                "large"
			                ]
			            },
			            {
			                "name": "pizza",
			                "qty": 20,
			                "category": 1,
			                "sizes": [
			                "small",
			                "large"
			                ]
			            }
			        ],
			        "categories": [
			            "drinks",
			            "junk food"
			        ]
		};
	});


})();




/*
{
    "menu": {
        "items": [
            {
                "name": "coke",
                "qty": 20,
                "category": 0,
                "sizes": [
                    "small",
                    "large"
                ]
            },
            {
                "name": "pepsi",
                "qty": 20,
                "category": 0,
                "sizes": [
                    "small",
                    "large"
                ]
            },
            {
                "name": "water",
                "qty": 20,
                "category": 0,
                "sizes": [
                    "small",
                    "large"
                ]
            },
            {
                "name": "hamburger",
                "qty": 40,
                "category": 1,
                "sizes": [
                    "small",
                    "large"
                ]
            },
            {
                "name": "fries",
                "qty": 20,
                "category": 1,
                "sizes": [
                    "small",
                    "large"
                ]
            },
            {
                "name": "pizza",
                "qty": 20,
                "category": 1,
                "sizes": [
                    "small",
                    "large"
                ]
            }
        ],
        "categories": [
            "drinks",
            "junk food"
        ]
    }
}

*/