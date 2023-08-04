document.addEventListener('DOMContentLoaded', function() {

    // I'm lucky
    document.querySelector('#lucky').addEventListener('click', function(event) {
        // Stop submission
        event.preventDefault();
        // Add input
        let form = document.querySelector('form');
        let input = document.createElement('input');
        input.name = 'btnI';
        input.type = 'hidden';
        input.value = "J'ai de la chance";
        form.append(input);
        // Submit
        form.submit();
    })
})