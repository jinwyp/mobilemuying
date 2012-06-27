// ==========================================================================
// Project:   Ember - JavaScript Application Framework
// Copyright: ©2011-2012 Tilde Inc. and contributors
//            Portions ©2006-2011 Strobe Inc.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================


/**************************
 * Application
 **************************/

App1 = Em.Application.create();





/**************************
 * Models
 **************************/
App1.Tweet = Em.Object.extend({
    avatar: null,
    screen_name: null,
    text: null,
    date: null
});

/**************************
 * Views
 **************************/


App1.SearchTextField = Em.TextField.extend({
        insertNewline: function(){
            App1.tweetsController.loadTweets();
        }
});

/**************************
 * Controllers
 **************************/

App1.tweetsController = Em.ArrayController.create({
    content: [],
    username: '',
    loadTweets: function() {
        var me = this;
        var username = me.get("username");

        if ( username ) {
            var url = 'http://api.twitter.com/1/statuses/user_timeline.json'
                url += '?screen_name=%@&callback=?'.fmt(me.get("username"));
            // push username to recent user array
            App1.recentUsersController.addUser(username);
            $.getJSON(url,function(data){
                me.set('content', []);
                $(data).each(function(index,value){
                    var t = App1.Tweet.create({
                        avatar: value.user.profile_image_url,
                        screen_name: value.user.screen_name,
                        text: value.text,
                        date: value.created_at
                    });
                    me.pushObject(t);
                })
            });
        }
    }
});

App1.recentUsersController = Em.ArrayController.create({
    content: [],
    addUser: function(name) {
        if ( this.contains(name) ) this.removeObject(name);
        this.pushObject(name);
    },
    removeUser: function(view){
        this.removeObject(view.context);
    },
    searchAgain: function(view){
        App1.tweetsController.set('username', view.context);
        App1.tweetsController.loadTweets();
    },
    reverse: function(){
        return this.toArray().reverse();
    }.property('@each')
});

//console.log(App1.tweetsController.content);














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