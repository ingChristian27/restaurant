
(function(){
	angular.module('restaurant.controller', [])

    .controller('menuController', function(){
            this.name="hola mundo",
            this.productos ={
                "almuerzos":[
                    {
                        "nombre": "Coca cola",
                        "Descripcion": "gaseosa helada",
                        "precio": "1200"
                    },
                    {
                        "nombre": "Limonada de coco",
                        "Descripcion": "limonada con zumo de coco",
                        "precio": "3200"
                    },
                    {
                        "nombre": "CLub Colombia",
                        "Descripcion": "cerveza club colombia",
                        "precio": "2000"
                    }
                ]            
            },
            this.menu = {
                "categoria": [
                    {
                        "id": "001",
                        "nombre": "bebida",
                        "producto": [
                            {
                                "nombre": "Coca cola",
                                "Descripcion": "gaseosa helada",
                                "precio": "1200"
                            },
                            {
                                "nombre": "Limonada de coco",
                                "Descripcion": "limonada con zumo de coco",
                                "precio": "3200"
                            },
                            {
                                "nombre": "CLub Colombia",
                                "Descripcion": "cerveza club colombia",
                                "precio": "2000"
                            }
                        ]
                    },
                {
                        "id": "002",
                        "nombre": "Almuerzo",
                        "producto": [
                            {
                                "nombre": "Menu del día",
                                "Descripcion": "pescado, arroz con coco y patacon",
                                "precio": 12000
                            },
                            {
                                "nombre": "bandeja paisa",
                                "Descripcion": "arroz, frijo, chicharron, patacon",
                                "precio": 15200
                            },
                            {
                                "nombre": "ajiaco",
                                "Descripcion": "SOpa bogotana",
                                "precio": 8000
                            }
                        ]
                    }
                ]
            };
        });



})();
