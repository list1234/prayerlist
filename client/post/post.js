
Template.post.helpers({
  likeCount : function () {
    // body...
    return Likes.find({parent:this._id}).count();
  },
  postComments : function () {
    // body...
    return Posts.find({parent: this._id});
  },
  username: function () {
    console.log ('this.owner: ', this.owner);
    console.log ('dbg: ', Meteor.users.findOne(this.owner).username);
    return Meteor.users.findOne(this.owner).username;
  },
  author: function (post) {
    return Meteor.users.findOne(this.owner);
  },
});

Template.post.events({
  'keyup .comment': function  (evt, tmpl) {
    // body...
    if (evt.which === 13) {
      var commenttext = tmpl.find('.comment').value;
      var options = {text: commenttext, parent: this._id};
      Meteor.call('addPost', options);
      $('.comment').val('')//.select().focus();
    } 
  }
})

//Template.post.events({
//  'click .pray': fucntion(evt,tmpl){
//    var options = {parent:this._id};
//    Meteor.call('likePost',options);
//  }
//})

Template.post.events({
  'click .pray':function(evt,tmpl){
    //var commenttext = "pray";
    var options = {parent:this._id, ownerI: this.owner};
    Meteor.call('likePost',options);
    //alert("I am an alert box!");
  }
})

Template.postcomment.helpers({
  'username' : function () {
    return Meteor.users.findOne(this.owner).username;
  },
  author: function (post) {
    return Meteor.users.findOne(post.owner);
  },
});