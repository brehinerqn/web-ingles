$(document).ready(
    function () {


        $(window).scroll(
            function () {
                deslizar($('#capa0'), $('#capa0 .efecto'));
                deslizar($('#capa1'), $('#capa1 .efecto'));
                deslizar($('#capa2'), $('#capa2 .efecto'));
                deslizar($('#capa3'), $('#capa3 .efecto'));
                deslizar($('#capa4'), $('#capa4 .efecto'));

                efecto_parallax( $('#capa0'), 0.3 );
                efecto_parallax( $('#capa1'), 0.3 );
                efecto_parallax( $('#capa2'), 0.3 );
                efecto_parallax( $('#capa3'), 0.3 );
                efecto_parallax( $('#capa4'), 0.3 );


            }
        );

    }
);
function deslizar(padre, hijo) {


    hijo.each(
        function () {

            var scroll = padre.offset().top - $(window).scrollTop();
            var elemento = $(this);
            var restar = "";
            var ocul = "";

            if (elemento.hasClass('e-derecha')) {
                restar = { right: '0px', filter: 'opacity(100%)' };
                ocul = { right: '-100px', filter: 'opacity(0%)' };
            }
            if (elemento.hasClass('e-izquierda')) {
                restar = { left: '0px', filter: 'opacity(100%)' };
                ocul = { left: '-100px', filter: 'opacity(0%)' };
            }
            if (elemento.hasClass('e-abajo')) {
                restar = { bottom: '0px', filter: 'opacity(100%)' };
                ocul = { bottom: '-100px', filter: 'opacity(0%)' };
            }
            if (elemento.hasClass('e-arriba')) {
                restar = { top: '0px', filter: 'opacity(100%)' };
                ocul = { top: '-100px', filter: 'opacity(0%)' };

            }
            if (scroll <= 350 && scroll >= -350) {
                elemento.css(restar);

            }
            else {
                elemento.css(ocul);
            }


        }


    );
}
function efecto_parallax(div, speed){

    var diff = $(window).scrollTop() - div.offset().top;
    var pos_y = -(diff * speed);
    var coordenadas = '0' + pos_y + 'px';
    div.css({'background-position': coordenadas});

}