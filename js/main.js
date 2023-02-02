$(document).ready(function(){

    var behavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        }
    };
    
    $('#telefone').mask(behavior, options);

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('99999-999')

    $('form').validate({
        errorClass: "my-error-class",
        validClass: "my-valid-class",
        highlight: function (element, errorClass, validClass) {
              //element.id é a ID do input
            $(element.form).find('label[for="lb_'+nome+'"]')
            .addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element.form).find('label[for="lb_'+nome+'"]')
            .removeClass(errorClass);
        },
        rules: {
                nome: {
                    required: true,
                    minlength: 4
                },
                cpf: {
                    required: true,
                    minlength: 14
                },
                telefone: {
                    required: true,
                    minlength: 14
                },
                email: {
                    required: true,
                    email: true
                },
                logradouro: {
                    required: true,
                    minlength: 4
                },
                numero: {
                    required: true,
                    minlength: 1
                },
                complemento: {
                    required: false
                },
                bairro: {
                    required: true,
                    minlength: 2
                },
                cep: {
                    required: true,
                    minlength: 9
                }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo.',
            cpf: 'Por favor, insira o seu CPF.',
            telefone: 'Por favor, insira o seu telefone.',
            email: 'Por favor, insira o seu e-mail.',
            logradouro: 'Por favor, insira o seu logradouro.',
            numero: 'Por favor, insira o número do seu endereço.',
            bairro: 'Por favor, insira o seu bairro.',
            cep: 'Por favor, insira o seu CEP.'
        }
    });
})
