$(document).ready(function() {
    $('#myContainer').multiscroll({
        sectionsColor: ['#8FB98B', '#DE564B', '#EAE1C0'],
        anchors: ['first', 'second', 'third'],
        menu: '#menu',
        easing: 'easeOutBack'
    });
});