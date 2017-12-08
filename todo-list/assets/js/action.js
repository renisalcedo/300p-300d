(function() {
  var item = {
    item: ['Exercise', 'Code'],
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    cacheDom: function() {
      this.$el = $('#itemModule');
      this.$button = this.$el.find('button');
      this.$input = this.$el.find('input');
      this.$ul = this.$el.find('ul');
      this.template = this.$el.find('#item-template').html();
    },
    bindEvents: function() {
      this.$button.on('click', this.addItem.bind(this));
      this.$ul.delegate('i.del', 'click', this.deleteItem.bind(this));
    },
    render: function() {
      var data = {
        item: this.item,
      };

      this.$ul.html(Mustache.render(this.template, data));
    },
    addItem: function() {
      if(this.$input.val().length > 0) {
        this.item.push(this.$input.val());
        this.$input.val('');
        this.render();
      }
    },
    deleteItem: function(e) {
      var $remove = $(e.target).closest('li');
      var i = this.$ul.find('li').index($remove);

      this.item.splice(i,1);
      this.render();
    }
  };

  // Will delete the todo if enter pressed
  document.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      $('#addItem').click();
    }
  });

    item.init();
})();
