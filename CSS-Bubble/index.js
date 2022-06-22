$(document).ready(function () {
  $('.bubble').each(function () {
    var heightWidth = Math.floor(20 + Math.random() * (100 - 20 + 1));
    var scale = Math.floor(1 + Math.random() * (2 - 1 + 1));
    var color = Math.floor(Math.random() * 16777215).toString(16);
    var bubbleTopDist = Math.floor(10 + Math.random() * (600 - 10 + 1));
    var zIndex = Math.floor(9 + Math.random() * (999 - 9 + 1));
    var randomDelay = Math.floor(1001 + Math.random() * (10000 - 1000));

    $(this).css('height', heightWidth + 'px');
    $(this).css('width', heightWidth + 'px');
    $(this).css('background-color', '#' + color);
    $(this).css('margin-top', bubbleTopDist + 'px');
    $(this).css('z-index', zIndex);
    $(this).css('animation-delay', `${randomDelay}ms`);
  });
});
