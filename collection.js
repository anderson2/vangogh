(function() {

  var app = angular.module('itemCollection', []);

/*
  app.controller('CollectionController', function(){
    this.items = vanGoghItems;

  });
*/

  app.controller('CollectionController', [ '$http', function($http){
    var collection = this;
    collection.items = [];
    
    $http.get('collection-items.json').success(function(data){
      collection.items = data;

    });

  }]);


  var vanGoghItems = [
    { 
      name: 'Houses at Auvers', 
      year: '1890',
      type: 'painting',
      subtype: 'oil',
      images: ['https://upload.wikimedia.org/wikipedia/commons/c/c6/VanGogh.jpg'],
      description: 
      'Houses at Auvers is an oil painting by Vincent van Gogh, painted towards the end of May or beginning of June 1890, shortly after he had moved to Auvers-sur-Oise, a small town northwest of Paris, France.',
      canPurchase: true,
      soldOut: true,
      comments: []
    },
    { 
      name: 'Restaurant in Arles', 
      year: '1888',
      type: 'painting',
      images: ['https://upload.wikimedia.org/wikipedia/commons/0/06/Van_Gogh_-_Das_Restaurant_Carrel_in_Arles.jpeg'],
      source: 'https://en.wikipedia.org/wiki/Interior_of_a_Restaurant_in_Arles',
      canPurchase: true,
      soldOut: true,
      comments: [
        {
          body: 'amazing colour and perspective',
          author: 'Theo',
          stars: 5,
          createdOn: 'Aug 10, 1892 8:19:02 PM'
        }
      ] 
    },
    { 
      name: 'Rooftops (Watercolour)', 
      year: '1882',
      subtype: 'watercolor',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/f/f9/Vincent_Willem_van_Gogh_016.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/2/27/Iron_Mill_in_The_Hague.jpg'
        ],
      source: 'https://commons.wikimedia.org/wiki/File:Vincent_Willem_van_Gogh_016.jpg',
      canPurchase: true,
      soldOut: true,
      comments: [] 
    },
    { 
      name: 'Pont de Langlois', 
      year: '1888', 
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/Vincent_Willem_van_Gogh_-_Pont_de_Langlois_-_Kr%C3%B6ller-M%C3%BCller.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/5d/Vincent_Willem_van_Gogh_letter_sketch.jpg'
        ],
      description: 'Van Gogh was 35 when he made the Langlois Bridge paintings and drawings. Living in Arles, in southern France, he was at the height of his career, producing some of his best work:[1] sunflowers, fields, farmhouses and people of the Arles, Nîmes and Avignon areas. It was a prolific time for Van Gogh: in less than 15 months he made about 100 drawings, produced more than 200 paintings and wrote more than 200 letters. The canals, drawbridges, windmills, thatched cottages and expansive fields of the Arles countryside reminded Van Gogh of his life in the Netherlands. Arles brought him the solace and bright sun that he sought for himself and conditions to explore painting with more vivid colors, intense color contrasts and varied brushstrokes. He also returned to the roots of his artistic training from the Netherlands, most notably with the use of a reed pen for his drawings.',
      source: 'https://en.wikipedia.org/wiki/Langlois_Bridge_at_Arles',
      canPurchase: true,
      soldOut: true,
      comments: []
    }

  ];
  

})();