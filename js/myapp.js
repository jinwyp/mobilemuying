// ==========================================================================
// Project:   Ember - JavaScript Application Framework
// Copyright: ©2011-2012 Tilde Inc. and contributors
//            Portions ©2006-2011 Strobe Inc.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================




Songs = Ember.Application.create({
    mixmaster: 'Andy',
    totalReviews: 0,
    ready: function(){
        //alert('Ember sings helloooooooooo!');
    }
});

Songs.Song = Ember.Object.extend({
    title: null,
    artist: null,
    genre: null,
    listens: 0
});

var mySong = Songs.Song.create({
    title: 'Son of the Morning',
    artist: 'Oh, Sleeper',
    genre: 'Screamo'
});
console.log(mySong.genre);


Songs.ReviewTextArea = Ember.TextArea.extend({
    placeholder: 'Enter your review'
});


Songs.songsController = Ember.ArrayController.create({
    content: [],
    init: function(){
        this._super();
        var song = Songs.Song.create({
            title: 'Son of the Morning',
            artist: 'Oh, Sleeper',
            genre: 'Screamo'
        });
        this.pushObject(song);
    }
});
console.log(Songs.songsController.content);














// add a namespace
var App = Ember.Application.create({
	mixmaster: 'Andy', 
	totalReviews: 0

});

App.PeopleView = Ember.View.create({
  people: [ { name: 'Yehuda' },
            { name: 'Tom' } ]
});

// Example 1
App.president = Ember.Object.create({
    firstName: "Barack",
    lastName: "Obama",
    name: 0 ,
	
    fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
        // Tell Ember that this computed property depends on firstName
        // and lastName
    }.property('firstName', 'lastName')
});



$('#btn1').click( function() {
    App.president.set('lastName', 'Obamaomao');
	App.president.firstName = 1;
	console.log(App.president.name); 
});

// Example 2
App.InfoView = Ember.View.extend({
    templateName: 'info',
    posts: 25,
    hobbies: "Riding bicycles"
});

var info1 = App.InfoView.create({
	posts: 27
});
console.log(info1.posts); 

App.ReviewTextArea = Ember.TextArea.extend({
	placeholder: 'Enter your review' 
});

$('#btn22').click( function() {
    info.appendTo('#temp11');
});

// Example 3
App.country = Ember.Object.create({
    // Ending a property with 'Binding' tells Ember to
    // create a binding to the presidentName property.
    presidentNameBinding: 'App.president.name'
});
// Later, after Ember has resolved bindings...
$('#btn2').click( function() {
    alert(App.country.get('presidentName'));  // "Barack Obama"
});


// Example 4
App.ClickableView = Ember.View.extend({
    click: function(evt) {
        alert("ClickableView was clicked!");
    }
});

// Example 5
App.ListingView = Ember.View.extend({
    templateName: 'edit',
    edit: function(event) {
        alert('Edited')
    }
});

App.LogoView = Ember.View.extend({
    logoUrl: 'http://www.mycorp.com/images/logo.png'
});