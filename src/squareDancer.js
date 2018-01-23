var makeSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'src/images/carlton.gif');
  this.$node.addClass('carlton');
};

makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};