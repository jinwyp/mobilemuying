// ==========================================================================
// Project:   Ember - JavaScript Application Framework
// Copyright: ©2011-2012 Tilde Inc. and contributors
//            Portions ©2006-2011 Strobe Inc.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================


// add a namespace
var App = Em.Application.create();

// Example 1
App.president = Em.Object.create({
    firstName: "Barack",
    lastName: "Obama",
    name: "xxx xxx" ,
    fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
        // Tell Ember that this computed property depends on firstName
        // and lastName
    }.property('firstName', 'lastName')
});

$('#btn1').click( function() {
    App.president.set('lastName', 'Obamaomao');
});


// Example 2
App.InfoView = Em.View.extend({
    templateName: 'info',
    posts: 25,
    hobbies: "Riding bicycles"
});
App.InfoView.create().appendTo('#temp-wrap');

// or
// var info = App.InfoView.create();
// info.appendTo('#temp-wrap');


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

