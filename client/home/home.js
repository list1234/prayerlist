Template.home.rendered = function () {
    // body...
    Deps.autorun(function () {
      // body...
      Meteor.subscribe("posts", Meteor.userId());
      Meteor.subscribe("likes");
    })
};

Template.home.helpers({

  'posts' : function () {
    // body...
    return Posts.find({parent: null}, {sort: {date: -1}});
  }

});

Template.home.events({
  // body...
  'keyup .posttext': function (evt, tmpl) {
    // body...
    if (evt.which === 13) {
      var posttext = tmpl.find('.posttext').value;
      var options = {text: posttext, parent: null};
      Meteor.call('addPost', options);
      // Posts.insert({text: posttext, owner: Meteor.userID(), date: new Date(), parent: null});
      $('.posttext').val("").select().focus();
    }
  }
});
