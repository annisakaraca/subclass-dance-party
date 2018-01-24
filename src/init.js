$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
  // call lineUp method on each dancer on page
    // $('.cat-div').append($('.cat'));
    // $('.shark-div').append($('.dancer'));
    // $('.carlton-div').append($('.square'));
    //$('img').addClass('lined-up');
    // $('img.cat').each(function() {
    $('img.cat').css('top', '100px');
    $('img.shark').css('top', '375px');
    $('img.carlton').css('top', '650px');
    // move cats to left
    var catImgs = $(document).find('.cat');
    for (var x = 0; x < catImgs.length; x++) {
      $(catImgs[x]).css('left', '' + (x * 25) + 'px');
    }
    // move carltons to left
    var carltonImgs = $(document).find('.carlton');
    for (var x = 0; x < carltonImgs.length; x++) {
      $(carltonImgs[x]).css('left', '' + (x * 25) + 'px');
    }
    // move sharks to left
    var sharkImgs = $(document).find('.shark');
    for (var x = 0; x < sharkImgs.length; x++) {
      $(sharkImgs[x]).css('left', '' + (x * 25) + 'px');
    }
  });

  $(document).on('mouseover', 'img', function(event) {
    $(this).css('color', 'red');
  });

  $(document).on('mouseout', 'img', function(event) {
    $(this).css('height', '25%');
  });

});

