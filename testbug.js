if (Meteor.isClient) {
	Router.map(function() {

    ////////////
	  //Works
		////////////

    //this.route('hello_world', {  path: '/', template: 'hello_world'});

    //Doesn't work
    this.route('hello_world', {  path: '/' });

	});


}