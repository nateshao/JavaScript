jQuery.fn.extend({
  checkAll: function() {
    this.prop('checked', true);
  },
  checkNone: function() {
    this.prop('checked', false);
  },
  checkInvert: function() {
    this.each(function(i, ele) {
      ele.checked = !ele.checked;
    });
  }
});