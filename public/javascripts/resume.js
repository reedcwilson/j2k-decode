
$().ready(function() {
  $('#fullpage').fullpage({
    verticalCentered: false,
    resize : true,
    scrollingSpeed: 700,
    easing: 'easeInQuart',
    //sectionsColor: ['#4bbfc3', '#7baabe', '#ccddff'],
    //navigation: true,
    //navigationPosition: 'right',
    //navigationTooltips: ['Experience', 'Skills', 'Education'],
    //slidesNavigation: true,
    //slidesNavPosition: 'bottom',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    autoScrolling: true,
    scrollOverflow: false,
    paddingTop: '0px',
    paddingBottom: '0px',
    normalScrollElementTouchThreshold: 5,
    keyboardScrolling: true,
    touchSensitivity: 5,
    animateAnchor: true,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterResize: function(){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction){}
  });

  //$('.experience-tbl td').each(function(index, value) {
  //  value.onclick = function() {
  //    id = $(value).find('p.experience-id').text();
  //    $('#more-experience-' + id).delay(200).show().animate({opacity: 1, top:"40%"},'slow');
  //  };
  //});
});
