//spørgsmål 3

btn1.addEventListener('click', function(){
    step2.style.display = 'block';
    step1.style.display = 'none';
});

btn2.addEventListener('click', function(){
    step3.style.display = 'block';
    step2.style.display = 'none';
});

(function ( ) {

    const form = document.getElementById( 'bordbestilling' )
    
    form.addEventListener( 'submit' , 
          function ( event ) { validate( form, event ) } )
  } ) ( )
  
  function validate( form, event ) {
    let value = form.elements[ 'Navn' ].value
    if( value === '' ) {
      alert( 'Indtast Venligst Dit Navn' )
      event.preventDefault( ) ; return }
    
    value = form.elements[ 'Email' ].value 
    if( ( value === '' ) || ( value.indexOf('@') === -1 ) || 
    ( value.indexOf('.') === -1 ) ) {
      alert( 'Indtast Venligst En Valid Mailadresse' )
      event.preventDefault( ) }
  }