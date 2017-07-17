$(function(){
  var formFeatures = (function(){
    var data = {
      firstName: $('#first_name'),
      lastName: $('#last_name'),
      email: $('#email_address'),
      password: $('#password')
    };

    return data;

  })();

  var form = (function(formFt){
    minChar(formFt.password);

    function minChar(el) {
      el.on('input', function() {
        if(el.val().length < 8) {
          $(this).parent().addClass('has-error');
        }
        else {
          $(this).parent().removeClass('has-error');
          $(this).parent().addClass('has-success');

        }
     });
    }
    $('.btn-success').click(function(){
      console.log("Name: ", formFt.firstName.val());
      console.log("Last Name: ", formFt.lastName.val());
      console.log("Email Address: ", formFt.email.val());
      console.log("Password: ", formFt.password.val());
    });

  })(formFeatures);

});
