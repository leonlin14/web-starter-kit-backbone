requirejs.config({
  baseUrl: 'vendor/',
  paths: {
    jquery: 'jquery/dist/jquery.min',
    backbone: 'backbone/backbone',
    underscore: 'underscore/underscore'
  },
  shim: {
    'backbone': {
        deps: ['jquery', 'underscore']
    }
  }
});
require([
  /* by order */
  'scripts/main.js',
  'jquery',
  'underscore',
  'backbone'
], function() {
  //------SETUP-------
  var app = app || {}; //宣告的空物件

  //------VIEW--------
  //把空物件放到showView(類別)裏面
  app.showView = Backbone.View.extend({
    el: '#tabs', //給範圍(在這個範圍裡面的動作)
    events: {
      'click .tab-btn': 'playRound'
    },
    playRound: function(e) {
      //this 表示這個class(app.showView)，沒有加的話只會在function裡面找
      this.$el.find(".tab-btn").removeClass("selected");
      this.$el.find(e.currentTarget).addClass("selected");
    }
  });

  //BOOTUP
  //將showView實例化
  $(document).ready(function(){
    app.showView = new app.showView();
  });
});