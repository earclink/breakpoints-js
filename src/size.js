var Size = function(name, min, max){
    this.name = name;
    this.min = min? min: 0;
    this.max = max? max: Infinity;

    this.media = MediaBuilder.get(this.min, this.max);

    this.initialize.apply(this);
  
    var self = this;
    this.changeListener = function(mql){
    $(window).trigger('sizeChange.breakpoints', self);
};
    this.mql.addListener(this.changeListener);
}

Size.prototype = $.extend({}, MediaQuery.prototype, Size.prototype, {
    destory: function(){
        this.off();
        this.mql.removeListener(this.changeHander);
    }
});