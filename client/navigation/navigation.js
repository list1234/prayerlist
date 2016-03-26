Template.navigation.helpers({
  'email' : function () {
    // body...
    return Meteor.user().emails[0].address;
  },
  'name' : function () {
    // body...
    return Meteor.user().username;
  }
});

