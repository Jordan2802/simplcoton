$(function() {

    $('#affiche').click(function() {

      $('.me').first().show('slow', function showNextOne() {

        $(this).next('div').show('slow', showNextOne);

      });

    });

    $('#cache').click(function() {

      $('div').first().hide('slow', function hideNextOne() {

        $(this).next('div').hide('slow', hideNextOne);

      });

    });

  });
