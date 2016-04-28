describe("Filter", function() {
 beforeEach(module('app'));

  var startFrom;
  beforeEach(inject(function($filter){
    startFrom = $filter('startFrom');
  }));
   
  it('Filter to slice input start positions',function(){
    var input=  [{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"},{"id": 28676835,"name": "100","full_name": "ben/100"}];
    var start = 10;
    expect(startFrom(input)).not.toEqual(input.slice(start));
  })
});