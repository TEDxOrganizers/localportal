define([
  'joshlib!utils/woodman',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore',
  'joshlib!vendor/backbone',
  'joshlib!ui/layout',

  'views/conferences/NextEventsLayoutView',
  'views/homepage/TalksView'
], function(
  woodman,
  $,
  _,
  Backbone,
  Layout,

  NextEventsView,
  TalksView
) {
  var logger = woodman.getLogger('views.ConferencesPagePanel');
  var ConferencesPagePanel = Layout.extend({

    initialize: function(options) {
      logger.info('initialize ConferencesPagePanel');
      var options = options || {};

      this.displayer = new NextEventsView({
        appController: options.appController
      });

      this.talks = new TalksView({
        appController: options.appController
      });

      // this.tweets = new TweetsView({
      //   appController: options.appController
      // });

      options.children = {
        displayer: this.displayer,
        talks: this.talks,
        // tweets: this.tweets
      };

      Layout.prototype.initialize.call(this,options);
    },
  });

  return ConferencesPagePanel;
});