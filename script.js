$(document).ready(
    function () {
        $padre = $('#capa0');
        $hijo = $('#capa0 .efecto');

        $hijo.each(
            function () {
                var elemento = $(this);
                if (elemento.hasClass('e-derecha')) {
                    elemento.css({ right: '0px', filter: 'opacity(100%)' });
                }
                if (elemento.hasClass('e-izquierda')) {
                    elemento.css({ left: '0px', filter: 'opacity(100%)' });
                }
                if (elemento.hasClass('e-abajo')) {
                    elemento.css({ bottom: '0px', filter: 'opacity(100%)' });
                }
                if (elemento.hasClass('e-ariba')) {
                    elemento.css({ top: '0px', filter: 'opacity(100%)' });

                }


            }



        );

    }

);