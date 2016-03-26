Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/app', function () {
  this.render('splash');
});

Accounts.ui.config({ passwordSignupFields: 'USERNAME_AND_EMAIL' });

Meteor.subscribe('users');