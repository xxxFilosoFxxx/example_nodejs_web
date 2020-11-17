$(function() {

    const currentNumber_1 = $('#dynamic-number-1').text();

    $('#dynamic-number-1').animate({numberValue: currentNumber_1}, {
        duration: 3000,
        step: function() {
            $('#dynamic-number-1').text(Math.ceil(this.numberValue));
        }
    });


    const currentNumber_2 = $('#dynamic-number-2').text();

    $('#dynamic-number-2').animate({numberValue: currentNumber_2}, {
        duration: 3000,
        step: function() {
            $('#dynamic-number-2').text(Math.ceil(this.numberValue));
        }
    });


    const currentNumber_3 = $('#dynamic-number-3').text();

    $('#dynamic-number-3').animate({numberValue: currentNumber_3}, {
        duration: 3000,
        step: function() {
            $('#dynamic-number-3').text(Math.ceil(this.numberValue));
        }
    });


    const currentNumber_4 = $('#dynamic-number-4').text();

    $('#dynamic-number-4').animate({numberValue: currentNumber_4}, {
        duration: 3000,
        step: function() {
            $('#dynamic-number-4').text(Math.ceil(this.numberValue));
        }
    });

});
