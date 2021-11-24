/*Casella, Axel Martín*/

var d = document, c = console.log;

let contador = 0;
let totalCompra = 0;

//Navbar
        $('.nav-item').on('click', function () {
            $(".navbar-collapse").collapse("hide");
        });

//query SetBásico
        $(document).ready(function () {
            setBasico();
        });

/*INICIO*/

/*Slider inicio*/

(function() {

	function init(item) {
		var items = item.querySelectorAll('li'),
        current = 0,
        autoUpdate = true,
        timeTrans = 4000;
        
		//creo el nav
		var nav = document.createElement('nav');
		nav.className = 'nav_arrows';

		//creo botón prev.
		var prevbtn = document.createElement('button');
		prevbtn.className = 'prev';
		prevbtn.setAttribute('aria-label', 'Prev');

		//creo boton sig.
		var nextbtn = document.createElement('button');
		nextbtn.className = 'next';
		nextbtn.setAttribute('aria-label', 'Next');

		//creo contador
		var counter = document.createElement('div');
		counter.className = 'counter';
		counter.innerHTML = "<span>1</span><span>"+items.length+"</span>";

		if (items.length > 1) {
			nav.appendChild(prevbtn);
			nav.appendChild(counter);
			nav.appendChild(nextbtn);
			item.appendChild(nav);
		}

		items[current].className = "current";
		if (items.length > 1) items[items.length-1].className = "prev_slide";

		var navigate = function(dir) {
			items[current].className = "";

			if (dir === 'right') {
				current = current < items.length-1 ? current + 1 : 0;
			} else {
				current = current > 0 ? current - 1 : items.length-1;
			}

			var	nextCurrent = current < items.length-1 ? current + 1 : 0,
				prevCurrent = current > 0 ? current - 1 : items.length-1;

			items[current].className = "current";
			items[prevCurrent].className = "prev_slide";
			items[nextCurrent].className = "";

			//actualizo contador
			counter.firstChild.textContent = current + 1;
		}
    
    item.addEventListener('mouseenter', function() {
			autoUpdate = false;
		});

		item.addEventListener('mouseleave', function() {
			autoUpdate = true;
		});

		setInterval(function() {
			if (autoUpdate) navigate('right');
		},timeTrans);
    
		prevbtn.addEventListener('click', function() {
			navigate('left');
		});

		nextbtn.addEventListener('click', function() {
			navigate('right');
		});

		//teclas navegador
		document.addEventListener('keydown', function(ev) {
			var keyCode = ev.keyCode || ev.which;
			switch (keyCode) {
				case 37:
					navigate('left');
					break;
				case 39:
					navigate('right');
					break;
			}
		});

		// navegación
		item.addEventListener('touchstart', handleTouchStart, false);        
		item.addEventListener('touchmove', handleTouchMove, false);
		var xDown = null;
		var yDown = null;
		function handleTouchStart(evt) {
			xDown = evt.touches[0].clientX;
			yDown = evt.touches[0].clientY;
		};
		function handleTouchMove(evt) {
			if ( ! xDown || ! yDown ) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*importante*/
				if ( xDiff > 0 ) {
					/* izquierda */
					navigate('right');
				} else {
					navigate('left');
				}
			} 
			/* reseteo valius */
			xDown = null;
			yDown = null;
		};


	}

	[].slice.call(document.querySelectorAll('.cd-slider')).forEach( function(item) {
		init(item);
	});

})();

/*Fin Slider incio*/

/*JASON PRODUCTOS*/

Cacerolas = {
    lineaAqua: [
        {
            id: 1,
            Nombre: 'Cacerola 18cm',
            Precio: 13550,
            Imagen: {
                src: "imagenes/cacerolas/01aqua.jpg",
                alt: "Cacerola 18cm con mango",
            },
            'Descripción': 'Estas Cacerolas con mango son ideales para preparaciones de platos pequeños en familias entre 2 y 3 integrantes o como complemento de piezas más grandes ya que en ellas se pueden realizar rellenos o salsas de forma práctica. Poseen una pequeña base, paredes laterales altas y mango lo que facilita el manejo de las piezas. Junto a la Sartén y la Cacerola de 24 cm, permiten resolver cocciones que van desde una entrada o un plato principal hasta un postre. Su uso es muy versátil ya que permite cocinar panes, tortas, carnes, cremas y salsas. Además tienen la opción de incorporar un complemento: Savarín: Para la cocción de flanes, budines, soufflés, etc.',
        },
        {
            id: 2,
            Nombre: "Sartén 24cm",
            Precio: 17600,
            Imagen: {
                src: "imagenes/cacerolas/02aqua.jpg",
                alt: "Sartén 24cm",
            },
            'Descripción': 'En esta Sartén podrá realizar recetas para compartir con 4 o 5 comensales. En conjunto con la Cacerola con asas de 24 cm (diámetro) y la Bifera, son un equipo ideal para satisfacer las necesidades de la cocina de matrimonios jóvenes con hijos pequeños, ya que sus capacidades son óptimas para alimentar a una familia promedio de 4 integrantes. Podrá lucirse con la cocción de: tortas, tartas, carnes, pescados, verduras rellenas, salsas, etc.',
        },
        {
            id: 3,
            Nombre: "Cacerola 24cm",
            Precio: 18000,
            Imagen: {
                src: "imagenes/cacerolas/03aqua.jpg",
                alt: "Cacerola 24cm",
            },
            'Descripción': 'Estas Cacerolas son las más vendidas de nuestra línea de productos y gracias a los complementos que hemos desarrollado, permiten disfrutar de todas las funciones y beneficios de las piezas Essen. Son una excelente opción ya que se adaptan a una familia de entre 4 y 5 integrantes resolviendo absolutamente todas las posibilidades de preparaciones y cocciones tanto dulces como saladas: desde tortas a panes, carnes, cazuelas, guisados y sopas, etc. Además tienen la opción de incorporar complementos',
        },
        {
            id: 4,
            Nombre: "Cuadrada 30cm",
            Precio: 25000,
            Imagen: {
                src: "imagenes/cacerolas/04aqua.jpg",
                alt: "Cacerola Cuadrada 30cm",
            },
            'Descripción': 'Diseño y estilo en un solo producto. Su capacidad se destaca ya que permite desarrollar cocciones para entre 6 y 8 comensales. Su forma cuadrada permite acomodar perfectamente porciones grandes de carne y guarniciones de forma muy sencilla. Además, por la amplitud de sus medidas facilita la manipulación de los ingredientes durante la cocción. Incorporando las Budineras para cacerolas cuadradas,  podrás preparar  budines, terrinas, panes etc. de forma elegante, rica y fácil.',
		},
		{
            id: 5,
            Nombre: "Sartén 31cm",
            Precio: 24000,
            Imagen: {
                src: "imagenes/cacerolas/05aqua.jpg",
                alt: "Sartén 31cm con asas",
            },
            'Descripción': 'Esta sartén tiene el tamaño ideal para realizar grandes porciones, sobre todo para recetas de tartas, tortillas, verduras rellenas y paellas. Su diseño facilita los desmoldes y las asas fijas ayudan a manejar el producto con mayor seguridad durante las cocciones. Complementando esta sartén con la cacerola con asas de 24cm y la bifera con asas,  tendrá la oportunidad de contar con piezas de cocina para preparaciones importantes de hasta 5 o 6 adultos.',
		},
		{
            id: 6,
            Nombre: "Bifera con asas",
            Precio: 16500,
            Imagen: {
                src: "imagenes/cacerolas/06aqua.jpg",
                alt: "Bifera con asas",
            },
            'Descripción': '¡Exclusivo diseño! Optimiza la distribución del calor logrando una cocción pareja y un sellado crocante. Esta bífera ha sido pensada para realizar cocciones para 4 comensales. Está recubierta por antiadherente lo que facilita su limpieza y sus paredes laterales son más altas lo que minimiza el salpicado. Su uso ideal es para la cocción de carnes, grillado de verduras, arrollados de queso, hamburguesas, brochetes, carnes blancas, etc. Es una pieza fundamental en la cocina de todos los días y se complementa perfectamente con la sartén con mango de 24 cm y la cacerola con asas 24 cm.',
        }
    ],
    lineaMoka: [
        {
            id: 7,
            Nombre: "Sartén 24cm",
            Precio: 17600,
            Imagen: {
                src: "imagenes/cacerolas/01moka.jpg",
                alt: "Sartén 24cm",
            },
            'Descripción': 'En esta Sartén podrás realizar preparaciones para 4 o 5 comensales y, gracias a su tapa de vidrio, podrás conectarte visualmente con tus preparaciones. Lucite con la cocción de: tortas, tartas, carnes, pescados, verduras rellenas, salsas, etc.',
        },
        {
            id: 8,
            Nombre: "Cacerola 24cm",
            Precio: 18300,
            Imagen: {
                src: "imagenes/cacerolas/02moka.jpg",
                alt: "Cacerola 24cm",
            },
            'Descripción': 'Cacerolas de nuestro diámetro más vendido. Con tapa de vidrio que te permite conectarte visualmente con tus preparaciones. Excelente opción para familias de entre 4 y 5 integrantes resolviendo absolutamente todas las posibilidades de preparaciones y cocciones tanto dulces como saladas: desde tortas a panes, carnes, cazuelas, guisados y sopas, etc. Además tienen la opción de incorporar complementos.',
        },
        {
            id: 9,
            Nombre: "Sartén 28cm",
            Precio: 22800,
            Imagen: {
                src: "imagenes/cacerolas/03moka.jpg",
                alt: "Sartén 28cm",
            },
            'Descripción': 'Sartén apta para realizar preparaciones para 5 o 6 personas gracias a su amplio volumen. Asas de aluminio, fundidas junto con el cuerpo de la pieza para garantizar su funcionalidad durante toda la vida útil del producto. Tapa de vidrio que te permite conectar visualmente con todas tus preparaciones. En esta Sartén se pueden realizar múltiples recetas: tortillas, omelettes, tortas, tartas, presas de pollo, pizzetas, pescados, verduras rellenas, salsas, etc.',
        },
        {
            id: 10,
            Nombre: "Cacerola 28cm",
            Precio: 23000,
            Imagen: {
                src: "imagenes/cacerolas/04moka.jpg",
                alt: "Cacerola 28cm",
            },
            'Descripción': 'Cacerola ideal para preparaciones de 5 o 6 personas, con tapa de vidrio que te permite visualizar el avance de la cocción. Es una cacerola altamente indicada para la cocción de tortas, tartas, presas de pollo, pescados, salsas, carnes y mucho más. Se complementa perfectamente con Sartén Moka de 28 cm conformando una dupla esencial para tus recetas de todos los días.',
        }
    ],
    lineaTerra: [
        {
            id: 11,
            Nombre: "Cacerola 18cm",
            Precio: 13500,
            Imagen: {
                src: "imagenes/cacerolas/01terra.jpg",
                alt: "Cacerola 18cm con mango",
            },
            'Descripción': 'Estas Cacerolas con mango son ideales para preparaciones de platos pequeños en familias entre 2 y 3 integrantes o como complemento de piezas más grandes ya que en ellas se pueden realizar rellenos o salsas de forma práctica. Poseen una pequeña base, paredes laterales altas y mango lo que facilita el manejo de las piezas. Junto a la Sartén y la Cacerola de 24 cm, permiten resolver cocciones que van desde una entrada o un plato principal hasta un postre. Su uso es muy versátil ya que permite cocinar panes, tortas, carnes, cremas y salsas.',
        },
        {
            id: 12,
            Nombre: "Sartén 24cm",
            Precio: 17600,
            Imagen: {
                src: "imagenes/cacerolas/02terra.jpg",
                alt: "Sartén 24cm",
            },
            'Descripción': 'En esta Sartén podrá realizar recetas para compartir con 4 o 5 comensales. En conjunto con la Cacerola con asas de 24 cm (diámetro) y la Bifera, son un equipo ideal para satisfacer las necesidades de la cocina de matrimonios jóvenes con hijos pequeños, ya que sus capacidades son óptimas para alimentar a una familia promedio de 4 integrantes. Podrá lucirse con la cocción de: tortas, tartas, carnes, pescados, verduras rellenas, salsas, etc.',
        },
        {
            id: 13,
            Nombre: "Cacerola 24cm",
            Precio: 18300,
            Imagen: {
                src: "imagenes/cacerolas/03terra.jpg",
                alt: "Cacerola 24cm",
            },
            'Descripción': 'Estas Cacerolas son las más vendidas de nuestra línea de productos y gracias a los complementos que hemos desarrollado, permiten disfrutar de todas las funciones y beneficios de las piezas Essen. Son una excelente opción ya que se adaptan a una familia de entre 4 y 5 integrantes resolviendo absolutamente todas las posibilidades de preparaciones y cocciones tanto dulces como saladas: desde tortas a panes, carnes, cazuelas, guisados y sopas, etc.',
        },
        {
            id: 14,
            Nombre: "Cuadrada 30cm",
            Precio: 25000,
            Imagen: {
                src: "imagenes/cacerolas/04terra.jpg",
                alt: "Cacerola Cuadrada 30cm",
            },
            'Descripción': 'Diseño y estilo en un solo producto. Su capacidad se destaca ya que permite desarrollar cocciones para entre 6 y 8 comensales. Su forma cuadrada permite acomodar perfectamente porciones grandes de carne y guarniciones de forma muy sencilla. Además, por la amplitud de sus medidas facilita la manipulación de los ingredientes durante la cocción. Incorporando las Budineras para cacerolas cuadradas,  podrás preparar  budines, terrinas, panes etc. de forma elegante, rica y fácil.',
		},
		{
            id: 15,
            Nombre: "Sartén 31cm",
            Precio: 24000,
            Imagen: {
                src: "imagenes/cacerolas/05terra.jpg",
                alt: "Sartén 31cm con asas",
            },
            'Descripción': 'Esta sartén tiene el tamaño ideal para realizar grandes porciones, sobre todo para recetas de tartas, tortillas, verduras rellenas y paellas. Su diseño facilita los desmoldes y las asas fijas ayudan a manejar el producto con mayor seguridad durante las cocciones. Complementando esta sartén con la cacerola con asas de 24cm y la bifera con asas, tendrá la oportunidad de contar con piezas de cocina para preparaciones importantes de hasta 5 o 6 adultos.',
		},
		{
            id: 16,
            Nombre: "Bifera con asas",
            Precio: 17600,
            Imagen: {
                src: "imagenes/cacerolas/06terra.jpg",
                alt: "Bifera con asas",
            },
            'Descripción': '¡Exclusivo diseño! Optimiza la distribución del calor logrando una cocción pareja y un sellado crocante. Esta bífera ha sido pensada para realizar cocciones para 4 comensales. Está recubierta por antiadherente lo que facilita su limpieza y sus paredes laterales son más altas lo que minimiza el salpicado. Su uso ideal es para la cocción de carnes, grillado de verduras, arrollados de queso, hamburguesas, brochetes, carnes blancas, etc. Es una pieza fundamental en la cocina de todos los días y se complementa perfectamente con la sartén con mango de 24 cm y la cacerola con asas 24 cm.',
        }
	],
	lineaMarsala: [
        {
            id: 17,
            Nombre: "Sartén 24cm",
            Precio: 17600,
            Imagen: {
                src: "imagenes/cacerolas/01marsala.jpg",
                alt: "Sartén 24cm",
            },
            'Descripción': 'En esta Sartén podrá realizar recetas para compartir con 4 o 5 comensales. En conjunto con la Cacerola con asas de 24 cm (diámetro) y la Bifera, son un equipo ideal para satisfacer las necesidades de la cocina de matrimonios jóvenes con hijos pequeños, ya que sus capacidades son óptimas para alimentar a una familia promedio de 4 integrantes.',
		},
		{
            id: 18,
            Nombre: "Cuadrada 30cm",
            Precio: 25000,
            Imagen: {
                src: "imagenes/cacerolas/02marsala.jpg",
                alt: "Cacerola Cuadrada 30cm",
            },
            'Descripción': 'Esta pieza ha sido pensada para mantener un exacto equilibrio entre diseño y estilo. Su capacidad de cocción se destaca ya que permite desarrollar cocciones para entre 6 y 8 comensales. Su forma cuadrada permite acomodar perfectamente porciones grandes de carne y sus guarniciones de forma muy sencilla. Además, por la amplitud de sus medidas facilita la manipulación de los ingredientes durante la cocción. Es ideal para la preparación de: Tortillas, tortas, tartas, presas de pollo, pescados, carnes rojas, verduras rellenas, salsas, canelones, pastas, etc.',
		},
		{
            id: 19,
            Nombre: "Cacerola 24cm",
            Precio: 18300,
            Imagen: {
                src: "imagenes/cacerolas/03marsala.jpg",
                alt: "Cacerola 24cm",
            },
            'Descripción': 'Estas Cacerolas son las más vendidas de nuestra línea de productos y gracias a los complementos que hemos desarrollado, permiten disfrutar de todas las funciones y beneficios de las piezas Essen. Son una excelente opción ya que se adaptan a una familia de entre 4 y 5 integrantes resolviendo absolutamente todas las posibilidades de preparaciones y cocciones tanto dulces como saladas: desde tortas a panes, carnes, cazuelas, guisados y sopas, etc. Además tienen la opción de incorporar complementos.',
		},
		{
            id: 20,
            Nombre: "Cacerola 18cm",
            Precio: 13500,
            Imagen: {
                src: "imagenes/cacerolas/04marsala.jpg",
                alt: "Cacerola 18cm con mango",
            },
            'Descripción': 'Estas Cacerolas con mango son ideales para preparaciones de platos pequeños en familias entre 2 y 3 integrantes o como complemento de piezas más grandes ya que en ellas se pueden realizar rellenos o salsas de forma práctica. Poseen una pequeña base, paredes laterales altas y mango lo que facilita el manejo de las piezas. Junto a la Sartén y la Cacerola de 24 cm, permiten resolver cocciones que van desde una entrada o un plato principal hasta un postre. Su uso es muy versátil ya que permite cocinar panes, tortas, carnes, cremas y salsas. Además tienen la opción de incorporar un complemento: Savarín.',
		},
		{
            id: 21,
            Nombre: "Sartén 30 cm",
            Precio: 24000,
            Imagen: {
                src: "imagenes/cacerolas/05marsala.jpg",
                alt: "Sartén 30 cm con asas",
            },
            'Descripción': 'Esta sartén tiene el tamaño ideal para realizar grandes porciones, sobre todo para recetas de tartas, tortillas, verduras rellenas y paellas. Su diseño facilita los desmoldes y las asas fijas ayudan a manejar el producto con mayor seguridad durante las cocciones. Complementando esta sartén con la cacerola con asas de 28 cm y la bifera grande, tendrá la oportunidad de contar con piezas de cocina para preparaciones importantes de hasta 5 o 6 adultos.',
		},
		{
            id: 22,
            Nombre: "Bifera",
            Precio: 18000,
            Imagen: {
                src: "imagenes/cacerolas/06marsala.jpg",
                alt: "Bifera",
            },
            'Descripción': '¡Exclusivo diseño! Optimiza la distribución del calor logrando una cocción pareja y un sellado crocante. Está recubierta por antiadherente lo que facilita su limpieza y sus paredes laterales son más altas lo que minimiza el salpicado. Su uso ideal es para la cocción de carnes, grillado de verduras, arrollados de queso, hamburguesas, brochetes, carnes blancas, etc. Es una pieza fundamental en la cocina de todos los días y se complementa perfectamente con la sartén con mango de 24 cm y la cacerola con asas 24 cm .',
		},
		{
            id: 23,
            Nombre: "Cacerola 33cm",
            Precio: 30000,
            Imagen: {
                src: "imagenes/cacerolas/07marsala.jpg",
                alt: "Cacerola 33cm",
            },
            'Descripción': 'Esta es la olla más grande de la línea Essen. Permite desarrollar cocciones para hasta 10 comensales. Es ideal para la cocción de: pastas, guisados, consomé, salsas, presas de pollo, cazuelas, pescados, etc.',
		},
		{
            id: 24,
            Nombre: "Cacerola 28cm",
            Precio: 24000,
            Imagen: {
                src: "imagenes/cacerolas/08marsala.jpg",
                alt: "Cacerola 28cm",
            },
            'Descripción': 'Pieza de importante tamaño, ideal para familias numerosas de 5 a 6 personas. Es una cacerola altamente indicada para la cocción de tortas, tartas, presas de pollo, pescados, salsas, etc. Ha sido desarrollada en conjunto con una serie de complementos, que permiten el correcto aprovechamiento de todas las funciones de nuestras cacerolas: Savarín: Para la cocción de flanes, budines, soufflés, etc.',
		},
		{
            id: 25,
            Nombre: "Cacerola 20cm",
            Precio: 19000,
            Imagen: {
                src: "imagenes/cacerolas/09marsala.jpg",
                alt: "Cacerola 20cm",
            },
            'Descripción': 'Una medida que le permitirá realizar, de forma, rápida, fácil, sana, los platos más variados, pensada para una familia de 1 ó 2 adultos y hasta 2 niños pequeños. Junto a la bifera chica, sartén de 20 o 22 cm (diámetro), resultan aliados básicos para realizar todas las comidas de forma práctica, rica y saludable. Es una de las cacerolas más vendidas de nuestra línea.Para la cocción de: tortas, panes, presas de pollo, pescados, salsas, etc.',
		},
		{
            id: 26,
            Nombre: "Sartén 28cm",
            Precio: 24500,
            Imagen: {
                src: "imagenes/cacerolas/10marsala.jpg",
                alt: "Sartén 28cm",
            },
            'Descripción': 'Estas sartenes ofrecen un volumen considerable, permitiendo la realización de platos y cocciones para familias entre 5 y 6 integrantes. El diseño facilita los desmoldes y las asas fijas ayudan a manejar el producto con mayor seguridad durante las cocciones. Complementando cualquiera de estas sartenes con la cacerola con asas de 28 cm y la bifera grande, tendrá la oportunidad de contar con piezas de cocina para preparaciones importantes de hasta 5 o 6 adultos.',
		},
		{
            id: 27,
            Nombre: "Sartén 20cm",
            Precio: 17500,
            Imagen: {
                src: "imagenes/cacerolas/11marsala.jpg",
                alt: "Sartén 20cm",
            },
            'Descripción': 'Estas sartenes son ideales para hogares de 1 ó 2 personas. Son las piezas básicas para descubrir la cocina práctica, rica y saludable que permite Essen. En conjunto con la cacerola con asas de 20 ó 22 cm y la bifera, son ideales para resolver las comidas de todos los días. Son piezas ideales para la cocción de: Tortillas, omelettes, tortas, tartas, presas de pollo, pizzetas, pescados, verduras rellenas, salsas, etc.',
		}
	],
	bazarPremium: [
        {
            id: 28,
            Nombre: "Centrifugador de Vegetales",
            Precio: 3000,
            Imagen: {
                src: "imagenes/cacerolas/01bazar.jpg",
                alt: "Centrifugador de Vegetales",
            },
            'Descripción': 'Secá tus verduras solo con girar la palanca.  El contenedor plástico permite visualizar el agua centrifugada. Con base de silicona para asegurar buena adherencia con la mesada.',
		},
		{
            id: 29,
            Nombre: "Multiprocesador de Vegetales",
            Precio: 7500,
            Imagen: {
                src: "imagenes/cacerolas/02bazar.jpg",
                alt: "Multiprocesador de Vegetales",
            },
            'Descripción': 'Permite picar gran variedad de hierbas, verduras y frutas. Contenedor transparente. Tapa con cierre hermético. Base con antideslizante',
		},
		{
            id: 30,
            Nombre: "Pelador de vegetales",
            Precio: 1100,
            Imagen: {
                src: "imagenes/cacerolas/03bazar.jpg",
                alt: "Pelador de vegetales",
            },
            'Descripción': 'Útil para pelar cualquier vegetal. Posee un mango ergonómico y antideslizante y la punta sirve para retirar partes no deseables. Apto para zurdos y diestros.',
		},
		{
            id: 31,
            Nombre: "Molinillo de Especias Triple",
            Precio: 4500,
            Imagen: {
                src: "imagenes/cacerolas/04bazar.jpg",
                alt: "Molinillo de Especias Triple",
            },
            'Descripción': 'Mecanismo de molienda cerámico - Posibilidad de regular el grosor - 3 recipientes herméticos intercambiables - Posibilidad de preparar la mezcla de especias favorita. Material plástico de alta resistencia',
		},
		{
            id: 32,
            Nombre: "Abrelatas 5 en 1",
            Precio: 1900,
            Imagen: {
                src: "imagenes/cacerolas/05bazar.png",
                alt: "Abrelatas 5 en 1",
            },
            'Descripción': 'Abre de manera sencilla y segura: Latas de Conserva, sin dejarfilos y sin tocar los alimentos. Tapas de Botella tipo corona. Tapas a Rosca de Envases plásticos o de vidrio. Tapas sujetas con anillo de tirar de aluminio. Tapas a rosca con vacío.',
		},
		{
            id: 33,
            Nombre: "Set de Bowls de acero x 3",
            Precio: 5500,
            Imagen: {
                src: "imagenes/cacerolas/06bazar.jpg",
                alt: "Set de Bowls de acero x 3 Aqua",
            },
            'Descripción': 'La presentación del Set en tres diferentes volúmenes lo hace adaptable a todas las necesidades de la cocina. Poseen un asa de acero recubierta de silicona para facilitar el agarre. La base de los mismos cuenta con recubrimiento de silicona para favorecer apoyo cuando se necesita batir o mezclar con intensidad. Su pico vertedor ayuda a volcar mezclas líquidas. Sus bordes son redondeados y suaves al tacto, lo que facilita su limpieza.',
		},
		{
            id: 34,
            Nombre: "Set de Cuchillas Colores",
            Precio: 2100,
            Imagen: {
                src: "imagenes/cacerolas/07bazar.jpg",
                alt: "Set de Cuchillas",
            },
            'Descripción': 'Mango anatómico con grabado antideslizante - Color indicador de uso para evitar la contaminación cruzada (rojo: carne, verde: vegetales), funda protectora.',
		},
		{
            id: 35,
            Nombre: "Set Mate Neo Aqua",
            Precio: 2900,
            Imagen: {
                src: "imagenes/cacerolas/08bazar.jpg",
                alt: "Set Mate Neo Aqua",
            },
            'Descripción': 'Interior de acero inoxidable en forma redondeada que facilita la limpieza. Tapa flexible que permite calzar la bombilla, permitiendo un transporte seguro y práctico.',
		}
	]		
};

//Array de categorías
Categorias = {
    categoria1: [
        {
            id: 36,
            Nombre: 'Cacerola 18cm',
            Precio: 13550,
            Imagen: {
                src: "imagenes/cacerolas/01aqua.jpg",
                alt: "Cacerola 18cm con mango",
            },
            'Descripción': 'Estas Cacerolas con mango son ideales para preparaciones de platos pequeños en familias entre 2 y 3 integrantes o como complemento de piezas más grandes ya que en ellas se pueden realizar rellenos o salsas de forma práctica. Poseen una pequeña base, paredes laterales altas y mango lo que facilita el manejo de las piezas. Junto a la Sartén y la Cacerola de 24 cm, permiten resolver cocciones que van desde una entrada o un plato principal hasta un postre. Su uso es muy versátil ya que permite cocinar panes, tortas, carnes, cremas y salsas. Además tienen la opción de incorporar un complemento: Savarín: Para la cocción de flanes, budines, soufflés, etc.',
        },
        {
            id: 37,
            Nombre: "Cacerola 24cm",
            Precio: 18000,
            Imagen: {
                src: "imagenes/cacerolas/03aqua.jpg",
                alt: "Cacerola 24cm",
            },
            'Descripción': 'Estas Cacerolas son las más vendidas de nuestra línea de productos y gracias a los complementos que hemos desarrollado, permiten disfrutar de todas las funciones y beneficios de las piezas Essen. Son una excelente opción ya que se adaptan a una familia de entre 4 y 5 integrantes resolviendo absolutamente todas las posibilidades de preparaciones y cocciones tanto dulces como saladas: desde tortas a panes, carnes, cazuelas, guisados y sopas, etc. Además tienen la opción de incorporar complementos',
        },
        {
            id: 38,
            Nombre: "Cacerola 24cm",
            Precio: 18300,
            Imagen: {
                src: "imagenes/cacerolas/02moka.jpg",
                alt: "Cacerola 24cm",
            },
            'Descripción': 'Cacerolas de nuestro diámetro más vendido. Con tapa de vidrio que te permite conectarte visualmente con tus preparaciones. Excelente opción para familias de entre 4 y 5 integrantes resolviendo absolutamente todas las posibilidades de preparaciones y cocciones tanto dulces como saladas: desde tortas a panes, carnes, cazuelas, guisados y sopas, etc. Además tienen la opción de incorporar complementos.',
		},
		{
            id: 39,
            Nombre: "Cacerola 28cm",
            Precio: 23000,
            Imagen: {
                src: "imagenes/cacerolas/04moka.jpg",
                alt: "Cacerola 28cm",
            },
            'Descripción': 'Cacerola ideal para preparaciones de 5 o 6 personas, con tapa de vidrio que te permite visualizar el avance de la cocción. Es una cacerola altamente indicada para la cocción de tortas, tartas, presas de pollo, pescados, salsas, carnes y mucho más. Se complementa perfectamente con Sartén Moka de 28 cm conformando una dupla esencial para tus recetas de todos los días.',
		},
		{
            id: 40,
            Nombre: "Cacerola 18cm",
            Precio: 13500,
            Imagen: {
                src: "imagenes/cacerolas/01terra.jpg",
                alt: "Cacerola 18cm con mango",
            },
            'Descripción': 'Estas Cacerolas con mango son ideales para preparaciones de platos pequeños en familias entre 2 y 3 integrantes o como complemento de piezas más grandes ya que en ellas se pueden realizar rellenos o salsas de forma práctica. Poseen una pequeña base, paredes laterales altas y mango lo que facilita el manejo de las piezas. Junto a la Sartén y la Cacerola de 24 cm, permiten resolver cocciones que van desde una entrada o un plato principal hasta un postre. Su uso es muy versátil ya que permite cocinar panes, tortas, carnes, cremas y salsas.',
		},
		{
            id: 41,
            Nombre: "Cacerola 24cm",
            Precio: 18300,
            Imagen: {
                src: "imagenes/cacerolas/03terra.jpg",
                alt: "Cacerola 24cm",
            },
            'Descripción': 'Estas Cacerolas son las más vendidas de nuestra línea de productos y gracias a los complementos que hemos desarrollado, permiten disfrutar de todas las funciones y beneficios de las piezas Essen. Son una excelente opción ya que se adaptan a una familia de entre 4 y 5 integrantes resolviendo absolutamente todas las posibilidades de preparaciones y cocciones tanto dulces como saladas: desde tortas a panes, carnes, cazuelas, guisados y sopas, etc.',
		},
		{
            id: 42,
            Nombre: "Cacerola 24cm",
            Precio: 18300,
            Imagen: {
                src: "imagenes/cacerolas/03marsala.jpg",
                alt: "Cacerola 24cm",
            },
            'Descripción': 'Estas Cacerolas son las más vendidas de nuestra línea de productos y gracias a los complementos que hemos desarrollado, permiten disfrutar de todas las funciones y beneficios de las piezas Essen. Son una excelente opción ya que se adaptan a una familia de entre 4 y 5 integrantes resolviendo absolutamente todas las posibilidades de preparaciones y cocciones tanto dulces como saladas: desde tortas a panes, carnes, cazuelas, guisados y sopas, etc. Además tienen la opción de incorporar complementos.',
		},
		{
            id: 43,
            Nombre: "Cacerola 33cm",
            Precio: 30000,
            Imagen: {
                src: "imagenes/cacerolas/07marsala.jpg",
                alt: "Cacerola 33cm",
            },
            'Descripción': 'Esta es la olla más grande de la línea Essen. Permite desarrollar cocciones para hasta 10 comensales. Es ideal para la cocción de: pastas, guisados, consomé, salsas, presas de pollo, cazuelas, pescados, etc.',
		},
		{
            id: 44,
            Nombre: "Cacerola 28cm",
            Precio: 24000,
            Imagen: {
                src: "imagenes/cacerolas/08marsala.jpg",
                alt: "Cacerola 28cm",
            },
            'Descripción': 'Pieza de importante tamaño, ideal para familias numerosas de 5 a 6 personas. Es una cacerola altamente indicada para la cocción de tortas, tartas, presas de pollo, pescados, salsas, etc. Ha sido desarrollada en conjunto con una serie de complementos, que permiten el correcto aprovechamiento de todas las funciones de nuestras cacerolas: Savarín: Para la cocción de flanes, budines, soufflés, etc.',
		},
		{
            id: 45,
            Nombre: "Cacerola 20cm",
            Precio: 19000,
            Imagen: {
                src: "imagenes/cacerolas/09marsala.jpg",
                alt: "Cacerola 20cm",
            },
            'Descripción': 'Una medida que le permitirá realizar, de forma, rápida, fácil, sana, los platos más variados, pensada para una familia de 1 ó 2 adultos y hasta 2 niños pequeños. Junto a la bifera chica, sartén de 20 o 22 cm (diámetro), resultan aliados básicos para realizar todas las comidas de forma práctica, rica y saludable. Es una de las cacerolas más vendidas de nuestra línea.Para la cocción de: tortas, panes, presas de pollo, pescados, salsas, etc.',
		},
		,
		{
            id: 46,
            Nombre: "Cacerola 18cm",
            Precio: 13500,
            Imagen: {
                src: "imagenes/cacerolas/04marsala.jpg",
                alt: "Cacerola 18cm con mango",
            },
            'Descripción': 'Estas Cacerolas con mango son ideales para preparaciones de platos pequeños en familias entre 2 y 3 integrantes o como complemento de piezas más grandes ya que en ellas se pueden realizar rellenos o salsas de forma práctica. Poseen una pequeña base, paredes laterales altas y mango lo que facilita el manejo de las piezas. Junto a la Sartén y la Cacerola de 24 cm, permiten resolver cocciones que van desde una entrada o un plato principal hasta un postre. Su uso es muy versátil ya que permite cocinar panes, tortas, carnes, cremas y salsas. Además tienen la opción de incorporar un complemento: Savarín.',
		}
	],
	categoria2: [
		{
            id: 47,
            Nombre: "Sartén 24cm",
            Precio: 17600,
            Imagen: {
                src: "imagenes/cacerolas/02aqua.jpg",
                alt: "Sartén 24cm",
            },
            'Descripción': 'En esta Sartén podrá realizar recetas para compartir con 4 o 5 comensales. En conjunto con la Cacerola con asas de 24 cm (diámetro) y la Bifera, son un equipo ideal para satisfacer las necesidades de la cocina de matrimonios jóvenes con hijos pequeños, ya que sus capacidades son óptimas para alimentar a una familia promedio de 4 integrantes. Podrá lucirse con la cocción de: tortas, tartas, carnes, pescados, verduras rellenas, salsas, etc.',
		},
		{
            id: 48,
            Nombre: "Sartén 31cm",
            Precio: 24000,
            Imagen: {
                src: "imagenes/cacerolas/05aqua.jpg",
                alt: "Sartén 31cm con asas",
            },
            'Descripción': 'Esta sartén tiene el tamaño ideal para realizar grandes porciones, sobre todo para recetas de tartas, tortillas, verduras rellenas y paellas. Su diseño facilita los desmoldes y las asas fijas ayudan a manejar el producto con mayor seguridad durante las cocciones. Complementando esta sartén con la cacerola con asas de 24cm y la bifera con asas,  tendrá la oportunidad de contar con piezas de cocina para preparaciones importantes de hasta 5 o 6 adultos.',
		},
		{
            id: 49,
            Nombre: "Sartén 24cm",
            Precio: 17600,
            Imagen: {
                src: "imagenes/cacerolas/01moka.jpg",
                alt: "Sartén 24cm",
            },
            'Descripción': 'En esta Sartén podrás realizar preparaciones para 4 o 5 comensales y, gracias a su tapa de vidrio, podrás conectarte visualmente con tus preparaciones. Lucite con la cocción de: tortas, tartas, carnes, pescados, verduras rellenas, salsas, etc.',
		},
		{
            id: 50,
            Nombre: "Sartén 28cm",
            Precio: 22800,
            Imagen: {
                src: "imagenes/cacerolas/03moka.jpg",
                alt: "Sartén 28cm",
            },
            'Descripción': 'Sartén apta para realizar preparaciones para 5 o 6 personas gracias a su amplio volumen. Asas de aluminio, fundidas junto con el cuerpo de la pieza para garantizar su funcionalidad durante toda la vida útil del producto. Tapa de vidrio que te permite conectar visualmente con todas tus preparaciones. En esta Sartén se pueden realizar múltiples recetas: tortillas, omelettes, tortas, tartas, presas de pollo, pizzetas, pescados, verduras rellenas, salsas, etc.',
		},
		{
            id: 51,
            Nombre: "Sartén 24cm",
            Precio: 17600,
            Imagen: {
                src: "imagenes/cacerolas/02terra.jpg",
                alt: "Sartén 24cm",
            },
            'Descripción': 'En esta Sartén podrá realizar recetas para compartir con 4 o 5 comensales. En conjunto con la Cacerola con asas de 24 cm (diámetro) y la Bifera, son un equipo ideal para satisfacer las necesidades de la cocina de matrimonios jóvenes con hijos pequeños, ya que sus capacidades son óptimas para alimentar a una familia promedio de 4 integrantes. Podrá lucirse con la cocción de: tortas, tartas, carnes, pescados, verduras rellenas, salsas, etc.',
		},
		{
            id: 52,
            Nombre: "Sartén 31cm",
            Precio: 24000,
            Imagen: {
                src: "imagenes/cacerolas/05terra.jpg",
                alt: "Sartén 31cm con asas",
            },
            'Descripción': 'Esta sartén tiene el tamaño ideal para realizar grandes porciones, sobre todo para recetas de tartas, tortillas, verduras rellenas y paellas. Su diseño facilita los desmoldes y las asas fijas ayudan a manejar el producto con mayor seguridad durante las cocciones. Complementando esta sartén con la cacerola con asas de 24cm y la bifera con asas, tendrá la oportunidad de contar con piezas de cocina para preparaciones importantes de hasta 5 o 6 adultos.',
		},
		{
            id: 53,
            Nombre: "Sartén 24cm",
            Precio: 17600,
            Imagen: {
                src: "imagenes/cacerolas/01marsala.jpg",
                alt: "Sartén 24cm",
            },
            'Descripción': 'En esta Sartén podrá realizar recetas para compartir con 4 o 5 comensales. En conjunto con la Cacerola con asas de 24 cm (diámetro) y la Bifera, son un equipo ideal para satisfacer las necesidades de la cocina de matrimonios jóvenes con hijos pequeños, ya que sus capacidades son óptimas para alimentar a una familia promedio de 4 integrantes.',
		},
		{
            id: 54,
            Nombre: "Sartén 30 cm",
            Precio: 24000,
            Imagen: {
                src: "imagenes/cacerolas/05marsala.jpg",
                alt: "Sartén 30 cm con asas",
            },
            'Descripción': 'Esta sartén tiene el tamaño ideal para realizar grandes porciones, sobre todo para recetas de tartas, tortillas, verduras rellenas y paellas. Su diseño facilita los desmoldes y las asas fijas ayudan a manejar el producto con mayor seguridad durante las cocciones. Complementando esta sartén con la cacerola con asas de 28 cm y la bifera grande, tendrá la oportunidad de contar con piezas de cocina para preparaciones importantes de hasta 5 o 6 adultos.',
		},
		{
            id: 55,
            Nombre: "Sartén 28cm",
            Precio: 24500,
            Imagen: {
                src: "imagenes/cacerolas/10marsala.jpg",
                alt: "Sartén 28cm",
            },
            'Descripción': 'Estas sartenes ofrecen un volumen considerable, permitiendo la realización de platos y cocciones para familias entre 5 y 6 integrantes. El diseño facilita los desmoldes y las asas fijas ayudan a manejar el producto con mayor seguridad durante las cocciones. Complementando cualquiera de estas sartenes con la cacerola con asas de 28 cm y la bifera grande, tendrá la oportunidad de contar con piezas de cocina para preparaciones importantes de hasta 5 o 6 adultos.',
		}
	],
	categoria3: [
		{
            id: 56,
            Nombre: "Bifera con asas",
            Precio: 16500,
            Imagen: {
                src: "imagenes/cacerolas/06aqua.jpg",
                alt: "Bifera con asas",
            },
            'Descripción': '¡Exclusivo diseño! Optimiza la distribución del calor logrando una cocción pareja y un sellado crocante. Esta bífera ha sido pensada para realizar cocciones para 4 comensales. Está recubierta por antiadherente lo que facilita su limpieza y sus paredes laterales son más altas lo que minimiza el salpicado. Su uso ideal es para la cocción de carnes, grillado de verduras, arrollados de queso, hamburguesas, brochetes, carnes blancas, etc. Es una pieza fundamental en la cocina de todos los días y se complementa perfectamente con la sartén con mango de 24 cm y la cacerola con asas 24 cm.',
		},
		{
            id: 57,
            Nombre: "Bifera con asas",
            Precio: 17600,
            Imagen: {
                src: "imagenes/cacerolas/06terra.jpg",
                alt: "Bifera con asas",
            },
            'Descripción': '¡Exclusivo diseño! Optimiza la distribución del calor logrando una cocción pareja y un sellado crocante. Esta bífera ha sido pensada para realizar cocciones para 4 comensales. Está recubierta por antiadherente lo que facilita su limpieza y sus paredes laterales son más altas lo que minimiza el salpicado. Su uso ideal es para la cocción de carnes, grillado de verduras, arrollados de queso, hamburguesas, brochetes, carnes blancas, etc. Es una pieza fundamental en la cocina de todos los días y se complementa perfectamente con la sartén con mango de 24 cm y la cacerola con asas 24 cm.',
		},
		{
            id: 58,
            Nombre: "Bifera",
            Precio: 18000,
            Imagen: {
                src: "imagenes/cacerolas/06marsala.jpg",
                alt: "Bifera",
            },
            'Descripción': '¡Exclusivo diseño! Optimiza la distribución del calor logrando una cocción pareja y un sellado crocante. Está recubierta por antiadherente lo que facilita su limpieza y sus paredes laterales son más altas lo que minimiza el salpicado. Su uso ideal es para la cocción de carnes, grillado de verduras, arrollados de queso, hamburguesas, brochetes, carnes blancas, etc. Es una pieza fundamental en la cocina de todos los días y se complementa perfectamente con la sartén con mango de 24 cm y la cacerola con asas 24 cm .',
		}
	],
	categoria4: [
		{
            id: 59,
            Nombre: "Cuadrada 30cm",
            Precio: 25000,
            Imagen: {
                src: "imagenes/cacerolas/04aqua.jpg",
                alt: "Cacerola Cuadrada 30cm",
            },
            'Descripción': 'Diseño y estilo en un solo producto. Su capacidad se destaca ya que permite desarrollar cocciones para entre 6 y 8 comensales. Su forma cuadrada permite acomodar perfectamente porciones grandes de carne y guarniciones de forma muy sencilla. Además, por la amplitud de sus medidas facilita la manipulación de los ingredientes durante la cocción. Incorporando las Budineras para cacerolas cuadradas,  podrás preparar  budines, terrinas, panes etc. de forma elegante, rica y fácil.',
		},
		{
            id: 60,
            Nombre: "Cuadrada 30cm",
            Precio: 25000,
            Imagen: {
                src: "imagenes/cacerolas/04terra.jpg",
                alt: "Cacerola Cuadrada 30cm",
            },
            'Descripción': 'Diseño y estilo en un solo producto. Su capacidad se destaca ya que permite desarrollar cocciones para entre 6 y 8 comensales. Su forma cuadrada permite acomodar perfectamente porciones grandes de carne y guarniciones de forma muy sencilla. Además, por la amplitud de sus medidas facilita la manipulación de los ingredientes durante la cocción. Incorporando las Budineras para cacerolas cuadradas,  podrás preparar  budines, terrinas, panes etc. de forma elegante, rica y fácil.',
		},
		{
            id: 61,
            Nombre: "Cuadrada 30cm",
            Precio: 25000,
            Imagen: {
                src: "imagenes/cacerolas/02marsala.jpg",
                alt: "Cacerola Cuadrada 30cm",
            },
            'Descripción': 'Esta pieza ha sido pensada para mantener un exacto equilibrio entre diseño y estilo. Su capacidad de cocción se destaca ya que permite desarrollar cocciones para entre 6 y 8 comensales. Su forma cuadrada permite acomodar perfectamente porciones grandes de carne y sus guarniciones de forma muy sencilla. Además, por la amplitud de sus medidas facilita la manipulación de los ingredientes durante la cocción. Es ideal para la preparación de: Tortillas, tortas, tartas, presas de pollo, pescados, carnes rojas, verduras rellenas, salsas, canelones, pastas, etc.',
		}
	]
};

//Select Categorías
const cat1 = d.querySelector('a[href="#cace"]');
const cat2 = d.querySelector('a[href="#sart"]');
const cat3 = d.querySelector('a[href="#bif"]');
const cat4 = d.querySelector('a[href="#cuadra"]');

//Select secciones
const seccion7 = d.querySelector('#cace');
const seccion8 = d.querySelector('#sart');
const seccion9 = d.querySelector('#bif');
const seccion10 = d.querySelector('#cuadra');

let div1x = d.createElement('div');
div1x.className = 'container mb-2';
let div2x = d.createElement('div');
div2x.className = 'row mb-2 col-md-12';
let h2_1x = d.createElement('h2');
h2_1x.innerHTML = '<b>Categoría :</b>';
let div3x = d.createElement('div');
div3x.className = 'row col-md-12';
let h5_1x = d.createElement('h5');
h5_1x.innerHTML = 'Cacerolas';
let div4x = d.createElement('div');
div4x.className = 'row col-md-12';
let p1x = d.createElement('p');
p1x.innerHTML = 'Compartí tus platos y marcá tendencia, porque tu cocina además de rica, es linda.';

seccion7.appendChild(div1x);
div1x.appendChild(div2x);
div2x.appendChild(h2_1x);
div1x.appendChild(div3x);
div3x.appendChild(h5_1x);
div1x.appendChild(div4x);
div4x.appendChild(p1x);

//Creo el Div Principal para la categoría cacerolas
let contenedor1x = d.createElement('div');
contenedor1x.className = 'productos row mt-5';
div1x.appendChild(contenedor1x);

//Recorro mi base de datos Categorias.categoria1
let divAquax, imgAquax, h4Aquax, pAquax, spanAquax, infoAquax, buttonAquax;
for (let propiedadesx in Categorias.categoria1){
	//DIV PADRE
	let divAquax = d.createElement('div');
	divAquax.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-3';
	contenedor1x.appendChild(divAquax);
	//IMG
	imgAquax = d.createElement('img');
	imgAquax.className = 'd-block w-100 br-1 sombra-2 ef-1';
	imgAquax.src = Categorias.categoria1[propiedadesx].Imagen.src;
	imgAquax.alt = Categorias.categoria1[propiedadesx].Imagen.alt;
	imgAquax.dataId = Categorias.categoria1[propiedadesx].id;
	imgAquax.className = 'pruebax d-block w-100 br-1 sombra-2 ef-1';
	//H4
	h4Aquax = d.createElement('h4');
	h4Aquax.className = 'text-center mt-4';
	h4Aquax.innerHTML = Categorias.categoria1[propiedadesx].Nombre;
	//PARRAFO
	pAquax = d.createElement('p');
	pAquax.className = 'text-center';
	pAquax.innerHTML = 'Precio: $'
	//SPAN
	spanAquax = d.createElement('span');
	spanAquax.className = 'c-1';
	spanAquax.innerHTML = Categorias.categoria1[propiedadesx].Precio;
	//INFO
	infoAquax = d.createElement('p');
	//Coloco la descripcion en font-size 0 para que no se vea en la ventana principal
	infoAquax.innerHTML = Categorias.categoria1[propiedadesx].Descripción;
	infoAquax.className = 'mostrar';
	infoAquax.style.fontSize = '0';
	//BUTTON
	divbuttonAquax = d.createElement('div');
	divbuttonAquax.className = 'text-center';
	buttonAquax = d.createElement('button');
	buttonAquax.className = 'btnAgregar p-2 px-4';
	buttonAquax.innerHTML = 'Agregar';

	//APENCHALEO
	divAquax.appendChild(imgAquax);
	divAquax.appendChild(h4Aquax);
	divAquax.appendChild(pAquax);
	pAquax.appendChild(spanAquax);   
	divAquax.appendChild(infoAquax);
	divAquax.appendChild(divbuttonAquax);
	divbuttonAquax.appendChild(buttonAquax);
		
}


let div1bx = d.createElement('div');
div1bx.className = 'container mb-2';
let div2bx = d.createElement('div');
div2bx.className = 'row mb-2 col-md-12';
let h2_1bx = d.createElement('h2');
h2_1bx.innerHTML = '<b>Categoría</b>';
let div3bx = d.createElement('div');
div3bx.className = 'row col-md-12';
let h5_1bx = d.createElement('h5');
h5_1bx.innerHTML = 'Sartenes';
let div4bx = d.createElement('div');
div4bx.className = 'row col-md-12';
let p1bx = d.createElement('p');
p1bx.innerHTML = 'Compartí tus platos y marcá tendencia, porque tu cocina además de rica, es linda.';

seccion8.appendChild(div1bx);
div1bx.appendChild(div2bx);
div2bx.appendChild(h2_1bx);
div1bx.appendChild(div3bx);
div3bx.appendChild(h5_1bx);
div1bx.appendChild(div4bx);
div4bx.appendChild(p1bx);

//Creo el Div Principal para la categoría sartenes
let contenedor1bx = d.createElement('div');
contenedor1bx.className = 'productos row mt-5';
div1bx.appendChild(contenedor1bx);

//Recorro mi base de datos Categorias.categoria2
let divMokax, imgMokax, h4Mokax, pMokax, spanMokax, infoMokax, buttonMokax;
for (let propiedadesx in Categorias.categoria2){
	//DIV PADRE
	let divMokax = d.createElement('div');
	divMokax.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-3';
	contenedor1bx.appendChild(divMokax);
	//IMG
	imgMokax = d.createElement('img');
	imgMokax.className = 'd-block w-100 br-1 sombra-2 ef-1';
	imgMokax.src = Categorias.categoria2[propiedadesx].Imagen.src;
	imgMokax.alt = Categorias.categoria2[propiedadesx].Imagen.alt;
	imgMokax.dataId = Categorias.categoria2[propiedadesx].id;
	imgMokax.className = 'pruebax d-block w-100 br-1 sombra-2 ef-1';
	//H4
	h4Mokax = d.createElement('h4');
	h4Mokax.className = 'text-center mt-4';
	h4Mokax.innerHTML = Categorias.categoria2[propiedadesx].Nombre;
	//PARRAFO
	pMokax = d.createElement('p');
	pMokax.className = 'text-center';
	pMokax.innerHTML = 'Precio: $'
	//SPAN
	spanMokax = d.createElement('span');
	spanMokax.className = 'c-1';
	spanMokax.innerHTML = Categorias.categoria2[propiedadesx].Precio;
	//INFO
	infoMokax = d.createElement('p');
	//Coloco la descripcion en font-size 0 para que no se vea en la ventana principal
	infoMokax.innerHTML = Categorias.categoria2[propiedadesx].Descripción;
	infoMokax.className = 'mostrar';
	infoMokax.style.fontSize = '0';
	//BUTTON
	divbuttonMokax = d.createElement('div');
	divbuttonMokax.className = 'text-center';
	buttonMokax = d.createElement('button');
	buttonMokax.className = 'btnAgregar p-2 px-4';
	buttonMokax.innerHTML = 'Agregar';

	//APENCHALEO
	divMokax.appendChild(imgMokax);
	divMokax.appendChild(h4Mokax);
	divMokax.appendChild(pMokax);
	pMokax.appendChild(spanMokax);   
	divMokax.appendChild(infoMokax);
	divMokax.appendChild(divbuttonMokax);
	divbuttonMokax.appendChild(buttonMokax);
		
}


let div1cx = d.createElement('div');
div1cx.className = 'container mb-2';
let div2cx = d.createElement('div');
div2cx.className = 'row mb-2 col-md-12';
let h2_1cx = d.createElement('h2');
h2_1cx.innerHTML = '<b>Categoría :</b>';
let div3cx = d.createElement('div');
div3cx.className = 'row col-md-12';
let h5_1cx = d.createElement('h5');
h5_1cx.innerHTML = 'Biferas';
let div4cx = d.createElement('div');
div4cx.className = 'row col-md-12';
let p1cx = d.createElement('p');
p1cx.innerHTML = 'Compartí tus platos y marcá tendencia, porque tu cocina además de rica, es linda.';

seccion9.appendChild(div1cx);
div1cx.appendChild(div2cx);
div2cx.appendChild(h2_1cx);
div1cx.appendChild(div3cx);
div3cx.appendChild(h5_1cx);
div1cx.appendChild(div4cx);
div4cx.appendChild(p1cx);

//Creo el Div Principal para la categoría3
let contenedor1cx = d.createElement('div');
contenedor1cx.className = 'productos row mt-5';
div1cx.appendChild(contenedor1cx);

//Recorro mi base de datos Categorías.categoria3
let divTerrax, imgTerrax, h4Terrax, pTerrax, spanTerrax, infoTerrax, buttonTerrax;
for (let propiedadesx in Categorias.categoria3){
	//DIV PADRE
	let divTerrax = d.createElement('div');
	divTerrax.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-3';
	contenedor1cx.appendChild(divTerrax);
	//IMG
	imgTerrax = d.createElement('img');
	imgTerrax.className = 'd-block w-100 br-1 sombra-2 ef-1';
	imgTerrax.src = Categorias.categoria3[propiedadesx].Imagen.src;
	imgTerrax.alt = Categorias.categoria3[propiedadesx].Imagen.alt;
	imgTerrax.dataId = Categorias.categoria3[propiedadesx].id;
	imgTerrax.className = 'pruebax d-block w-100 br-1 sombra-2 ef-1';
	//H4
	h4Terrax = d.createElement('h4');
	h4Terrax.className = 'text-center mt-4';
	h4Terrax.innerHTML = Categorias.categoria3[propiedadesx].Nombre;
	//PARRAFO
	pTerrax = d.createElement('p');
	pTerrax.className = 'text-center';
	pTerrax.innerHTML = 'Precio: $'
	//SPAN
	spanTerrax = d.createElement('span');
	spanTerrax.className = 'c-1';
	spanTerrax.innerHTML = Categorias.categoria3[propiedadesx].Precio;
	//INFO
	infoTerrax = d.createElement('p');
	//Coloco la descripcion en font-size 0 para que no se vea en la ventana principal
	infoTerrax.innerHTML = Categorias.categoria3[propiedadesx].Descripción;
	infoTerrax.className = 'mostrar';
	infoTerrax.style.fontSize = '0';
	//BUTTON
	divbuttonTerrax = d.createElement('div');
	divbuttonTerrax.className = 'text-center';
	buttonTerrax = d.createElement('button');
	buttonTerrax.className = 'btnAgregar p-2 px-4';
	buttonTerrax.innerHTML = 'Agregar';

	//APENCHALEO
	divTerrax.appendChild(imgTerrax);
	divTerrax.appendChild(h4Terrax);
	divTerrax.appendChild(pTerrax);
	pTerrax.appendChild(spanTerrax);   
	divTerrax.appendChild(infoTerrax);
	divTerrax.appendChild(divbuttonTerrax);
	divbuttonTerrax.appendChild(buttonTerrax);
		
}


let div1dx = d.createElement('div');
div1dx.className = 'container mb-2';
let div2dx = d.createElement('div');
div2dx.className = 'row mb-2 col-md-12';
let h2_1dx = d.createElement('h2');
h2_1dx.innerHTML = '<b>Categoría :</b>';
let div3dx = d.createElement('div');
div3dx.className = 'row col-md-12';
let h5_1dx = d.createElement('h5');
h5_1dx.innerHTML = 'Cuadradas';
let div4dx = d.createElement('div');
div4dx.className = 'row col-md-12';
let p1dx = d.createElement('p');
p1dx.innerHTML = 'Compartí tus platos y marcá tendencia, porque tu cocina además de rica, es linda.';

seccion10.appendChild(div1dx);
div1dx.appendChild(div2dx);
div2dx.appendChild(h2_1dx);
div1dx.appendChild(div3dx);
div3dx.appendChild(h5_1dx);
div1dx.appendChild(div4dx);
div4dx.appendChild(p1dx);

//Creo el Div Principal para la categoria10
let contenedor1dx = d.createElement('div');
contenedor1dx.className = 'productos row mt-5';
div1dx.appendChild(contenedor1dx);

//Recorro mi base de datos Categorias.categoria4
let divMarsalax, imgMarsalax, h4Marsalax, pMarsalax, spanMarsalax, infoMarsalax, buttonMarsalax;
for (let propiedadesx in Categorias.categoria4){
	//DIV PADRE
	let divMarsalax = d.createElement('div');
	divMarsalax.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-3';
	contenedor1dx.appendChild(divMarsalax);
	//IMG
	imgMarsalax = d.createElement('img');
	imgMarsalax.className = 'd-block w-100 br-1 sombra-2 ef-1';
	imgMarsalax.src = Categorias.categoria4[propiedadesx].Imagen.src;
	imgMarsalax.alt = Categorias.categoria4[propiedadesx].Imagen.alt;
	imgMarsalax.dataId = Categorias.categoria4[propiedadesx].id;
	imgMarsalax.className = 'pruebax d-block w-100 br-1 sombra-2 ef-1';
	//H4
	h4Marsalax = d.createElement('h4');
	h4Marsalax.className = 'text-center mt-4';
	h4Marsalax.innerHTML = Categorias.categoria4[propiedadesx].Nombre;
	//PARRAFO
	pMarsalax = d.createElement('p');
	pMarsalax.className = 'text-center';
	pMarsalax.innerHTML = 'Precio: $'
	//SPAN
	spanMarsalax = d.createElement('span');
	spanMarsalax.className = 'c-1';
	spanMarsalax.innerHTML = Categorias.categoria4[propiedadesx].Precio;
	//INFO
	infoMarsalax = d.createElement('p');
	//Coloco la descripcion en font-size 0 para que no se vea en la ventana principal
	infoMarsalax.innerHTML = Categorias.categoria4[propiedadesx].Descripción;
	infoMarsalax.className = 'mostrar';
	infoMarsalax.style.fontSize = '0';
	//BUTTON
	divbuttonMarsalax = d.createElement('div');
	divbuttonMarsalax.className = 'text-center';
	buttonMarsalax = d.createElement('button');
	buttonMarsalax.className = 'btnAgregar p-2 px-4';
	buttonMarsalax.innerHTML = 'Agregar';

	//APENCHALEO
	divMarsalax.appendChild(imgMarsalax);
	divMarsalax.appendChild(h4Marsalax);
	divMarsalax.appendChild(pMarsalax);
	pMarsalax.appendChild(spanMarsalax);   
	divMarsalax.appendChild(infoMarsalax);
	divMarsalax.appendChild(divbuttonMarsalax);
	divbuttonMarsalax.appendChild(buttonMarsalax);
		
}

// Selector de href 
const hrefInicio = d.querySelector('a[href="#inicio"]');
const hrefAqua = d.querySelector('a[href="#lineaAqua"]');
const hrefMoka = d.querySelector('a[href="#lineaMoka"]');
const hrefTerra = d.querySelector('a[href="#lineaTerra"]');
const hrefMarsala = d.querySelector('a[href="#lineaMarsalla"]');
const hrefBazar = d.querySelector('a[href="#bazarPremium"]');

// Selector footer
const footer = d.querySelector('footer');

// Selector  secciones vacias creadas en el html , creo sus contenidos y apenchaleo
const seccion1 = d.querySelector('#inicio');

const seccion2 = d.querySelector('#lineaAqua');

let div1 = d.createElement('div');
div1.className = 'container mb-2';
let div2 = d.createElement('div');
div2.className = 'row mb-2 col-md-12';
let h2_1 = d.createElement('h2');
h2_1.innerHTML = '<b>Línea Contemporanea Aqua</b>';
let div3 = d.createElement('div');
div3.className = 'row col-md-12';
let h5_1 = d.createElement('h5');
h5_1.innerHTML = 'Cacerolas y sartenes';
let div4 = d.createElement('div');
div4.className = 'row col-md-12';
let p1 = d.createElement('p');
p1.innerHTML = 'Compartí tus platos y marcá tendencia, porque tu cocina además de rica, es linda.';

seccion2.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(h2_1);
div1.appendChild(div3);
div3.appendChild(h5_1);
div1.appendChild(div4);
div4.appendChild(p1);

//Creo el Div Principal para los productosAqua
let contenedor1 = d.createElement('div');
contenedor1.className = 'productos row mt-5';
div1.appendChild(contenedor1);

//Recorro mi base de datos Cacerolas.lineAqua
let divAqua, imgAqua, h4Aqua, pAqua, spanAqua, infoAqua, buttonAqua;
for (let propiedades in Cacerolas.lineaAqua){
	//DIV PADRE
	let divAqua = d.createElement('div');
	divAqua.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-3';
	contenedor1.appendChild(divAqua);
	//IMG
	imgAqua = d.createElement('img');
	imgAqua.className = 'd-block w-100 br-1 sombra-2 ef-1';
	imgAqua.src = Cacerolas.lineaAqua[propiedades].Imagen.src;
	imgAqua.alt = Cacerolas.lineaAqua[propiedades].Imagen.alt;
	imgAqua.dataId = Cacerolas.lineaAqua[propiedades].id;
	//H4
	h4Aqua = d.createElement('h4');
	h4Aqua.className = 'text-center mt-4';
	h4Aqua.innerHTML = Cacerolas.lineaAqua[propiedades].Nombre;
	//PARRAFO
	pAqua = d.createElement('p');
	pAqua.className = 'text-center';
	pAqua.innerHTML = 'Precio: $'
	//SPAN
	spanAqua = d.createElement('span');
	spanAqua.className = 'c-1';
	spanAqua.innerHTML = Cacerolas.lineaAqua[propiedades].Precio;
	//INFO
	infoAqua = d.createElement('p');
	//Coloco la descripcion en font-size 0 para que no se vea en la ventana principal
	infoAqua.innerHTML = Cacerolas.lineaAqua[propiedades].Descripción;
	infoAqua.className = 'mostrar';
	infoAqua.style.fontSize = '0';
	//BUTTON
	divbuttonAqua = d.createElement('div');
	divbuttonAqua.className = 'text-center';
	buttonAqua = d.createElement('button');
	buttonAqua.className = 'btnAgregar p-2 px-4';
	buttonAqua.innerHTML = 'Agregar';

	//APENCHALEO
	divAqua.appendChild(imgAqua);
	divAqua.appendChild(h4Aqua);
	divAqua.appendChild(pAqua);
	pAqua.appendChild(spanAqua);   
	divAqua.appendChild(infoAqua);
	divAqua.appendChild(divbuttonAqua);
	divbuttonAqua.appendChild(buttonAqua);
		
}

const seccion3 = d.querySelector('#lineaMoka');
let div1b = d.createElement('div');
div1b.className = 'container mb-2';
let div2b = d.createElement('div');
div2b.className = 'row mb-2 col-md-12';
let h2_1b = d.createElement('h2');
h2_1b.innerHTML = '<b>Línea Elemental Moka</b>';
let div3b = d.createElement('div');
div3b.className = 'row col-md-12';
let h5_1b = d.createElement('h5');
h5_1b.innerHTML = 'Cacerolas y sartenes';
let div4b = d.createElement('div');
div4b.className = 'row col-md-12';
let p1b = d.createElement('p');
p1b.innerHTML = 'Compartí tus platos y marcá tendencia, porque tu cocina además de rica, es linda.';

seccion3.appendChild(div1b);
div1b.appendChild(div2b);
div2b.appendChild(h2_1b);
div1b.appendChild(div3b);
div3b.appendChild(h5_1b);
div1b.appendChild(div4b);
div4b.appendChild(p1b);

//Creo el Div Principal para los productosMoka
let contenedor1b = d.createElement('div');
contenedor1b.className = 'productos row mt-5';
div1b.appendChild(contenedor1b);

//Recorro mi base de datos Cacerolas.lineMoka
let divMoka, imgMoka, h4Moka, pMoka, spanMoka, infoMoka, buttonMoka;
for (let propiedades in Cacerolas.lineaMoka){
	//DIV PADRE
	let divMoka = d.createElement('div');
	divMoka.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-3';
	contenedor1b.appendChild(divMoka);
	//IMG
	imgMoka = d.createElement('img');
	imgMoka.className = 'd-block w-100 br-1 sombra-2 ef-1';
	imgMoka.src = Cacerolas.lineaMoka[propiedades].Imagen.src;
	imgMoka.alt = Cacerolas.lineaMoka[propiedades].Imagen.alt;
	imgMoka.dataId = Cacerolas.lineaMoka[propiedades].id;
	//H4
	h4Moka = d.createElement('h4');
	h4Moka.className = 'text-center mt-4';
	h4Moka.innerHTML = Cacerolas.lineaMoka[propiedades].Nombre;
	//PARRAFO
	pMoka = d.createElement('p');
	pMoka.className = 'text-center';
	pMoka.innerHTML = 'Precio: $'
	//SPAN
	spanMoka = d.createElement('span');
	spanMoka.className = 'c-1';
	spanMoka.innerHTML = Cacerolas.lineaMoka[propiedades].Precio;
	//INFO
	infoMoka = d.createElement('p');
	//Coloco la descripcion en font-size 0 para que no se vea en la ventana principal
	infoMoka.innerHTML = Cacerolas.lineaMoka[propiedades].Descripción;
	infoMoka.className = 'mostrar';
	infoMoka.style.fontSize = '0';
	//BUTTON
	divbuttonMoka = d.createElement('div');
	divbuttonMoka.className = 'text-center';
	buttonMoka = d.createElement('button');
	buttonMoka.className = 'btnAgregar p-2 px-4';
	buttonMoka.innerHTML = 'Agregar';

	//APENCHALEO
	divMoka.appendChild(imgMoka);
	divMoka.appendChild(h4Moka);
	divMoka.appendChild(pMoka);
	pMoka.appendChild(spanMoka);   
	divMoka.appendChild(infoMoka);
	divMoka.appendChild(divbuttonMoka);
	divbuttonMoka.appendChild(buttonMoka);
		
}

const seccion4 = d.querySelector('#lineaTerra');
let div1c = d.createElement('div');
div1c.className = 'container mb-2';
let div2c = d.createElement('div');
div2c.className = 'row mb-2 col-md-12';
let h2_1c = d.createElement('h2');
h2_1c.innerHTML = '<b>Línea Contemporanea Terra</b>';
let div3c = d.createElement('div');
div3c.className = 'row col-md-12';
let h5_1c = d.createElement('h5');
h5_1c.innerHTML = 'Cacerolas y sartenes';
let div4c = d.createElement('div');
div4c.className = 'row col-md-12';
let p1c = d.createElement('p');
p1c.innerHTML = 'Piezas diseñadas para sumar un nuevo estilo a tu cocina, con un color neutro atemporal que aporta calidez y elegancia.';

seccion4.appendChild(div1c);
div1c.appendChild(div2c);
div2c.appendChild(h2_1c);
div1c.appendChild(div3c);
div3c.appendChild(h5_1c);
div1c.appendChild(div4c);
div4c.appendChild(p1c);

//Creo el Div Principal para los productosTerra
let contenedor1c = d.createElement('div');
contenedor1c.className = 'productos row mt-5';
div1c.appendChild(contenedor1c);

//Recorro mi base de datos Cacerolas.lineaTerra
let divTerra, imgTerra, h4Terra, pTerra, spanTerra, infoTerra, buttonTerra;
for (let propiedades in Cacerolas.lineaTerra){
	//DIV PADRE
	let divTerra = d.createElement('div');
	divTerra.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-3';
	contenedor1c.appendChild(divTerra);
	//IMG
	imgTerra = d.createElement('img');
	imgTerra.className = 'd-block w-100 br-1 sombra-2 ef-1';
	imgTerra.src = Cacerolas.lineaTerra[propiedades].Imagen.src;
	imgTerra.alt = Cacerolas.lineaTerra[propiedades].Imagen.alt;
	imgTerra.dataId = Cacerolas.lineaTerra[propiedades].id;
	//H4
	h4Terra = d.createElement('h4');
	h4Terra.className = 'text-center mt-4';
	h4Terra.innerHTML = Cacerolas.lineaTerra[propiedades].Nombre;
	//PARRAFO
	pTerra = d.createElement('p');
	pTerra.className = 'text-center';
	pTerra.innerHTML = 'Precio: $'
	//SPAN
	spanTerra = d.createElement('span');
	spanTerra.className = 'c-1';
	spanTerra.innerHTML = Cacerolas.lineaTerra[propiedades].Precio;
	//INFO
	infoTerra = d.createElement('p');
	//Coloco la descripcion en font-size 0 para que no se vea en la ventana principal
	infoTerra.innerHTML = Cacerolas.lineaTerra[propiedades].Descripción;
	infoTerra.className = 'mostrar';
	infoTerra.style.fontSize = '0';
	//BUTTON
	divbuttonTerra = d.createElement('div');
	divbuttonTerra.className = 'text-center';
	buttonTerra = d.createElement('button');
	buttonTerra.className = 'btnAgregar p-2 px-4';
	buttonTerra.innerHTML = 'Agregar';

	//APENCHALEO
	divTerra.appendChild(imgTerra);
	divTerra.appendChild(h4Terra);
	divTerra.appendChild(pTerra);
	pTerra.appendChild(spanTerra);   
	divTerra.appendChild(infoTerra);
	divTerra.appendChild(divbuttonTerra);
	divbuttonTerra.appendChild(buttonTerra);
		
}

const seccion5 = d.querySelector('#lineaMarsalla');
let div1d = d.createElement('div');
div1d.className = 'container mb-2';
let div2d = d.createElement('div');
div2d.className = 'row mb-2 col-md-12';
let h2_1d = d.createElement('h2');
h2_1d.innerHTML = '<b>Línea Clásica Marsala</b>';
let div3d = d.createElement('div');
div3d.className = 'row col-md-12';
let h5_1d = d.createElement('h5');
h5_1d.innerHTML = 'Cacerolas, sartenes y bifera';
let div4d = d.createElement('div');
div4d.className = 'row col-md-12';
let p1d = d.createElement('p');
p1d.innerHTML = 'Un verdadero clásico es el que evoluciona para estar siempre vigente. Renová el color de tu cocina y descubrí Nova Trimium el exclusivo antiadherente tricapa de Essen ultra resistente a la abrasión.';

seccion5.appendChild(div1d);
div1d.appendChild(div2d);
div2d.appendChild(h2_1d);
div1d.appendChild(div3d);
div3d.appendChild(h5_1d);
div1d.appendChild(div4d);
div4d.appendChild(p1d);

//Creo el Div Principal para los productosMarsala
let contenedor1d = d.createElement('div');
contenedor1d.className = 'productos row mt-5';
div1d.appendChild(contenedor1d);

//Recorro mi base de datos Cacerolas.lineaMarsala
let divMarsala, imgMarsala, h4Marsala, pMarsala, spanMarsala, infoMarsala, buttonMarsala;
for (let propiedades in Cacerolas.lineaMarsala){
	//DIV PADRE
	let divMarsala = d.createElement('div');
	divMarsala.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-3';
	contenedor1d.appendChild(divMarsala);
	//IMG
	imgMarsala = d.createElement('img');
	imgMarsala.className = 'd-block w-100 br-1 sombra-2 ef-1';
	imgMarsala.src = Cacerolas.lineaMarsala[propiedades].Imagen.src;
	imgMarsala.alt = Cacerolas.lineaMarsala[propiedades].Imagen.alt;
	imgMarsala.dataId = Cacerolas.lineaMarsala[propiedades].id;
	//H4
	h4Marsala = d.createElement('h4');
	h4Marsala.className = 'text-center mt-4';
	h4Marsala.innerHTML = Cacerolas.lineaMarsala[propiedades].Nombre;
	//PARRAFO
	pMarsala = d.createElement('p');
	pMarsala.className = 'text-center';
	pMarsala.innerHTML = 'Precio: $'
	//SPAN
	spanMarsala = d.createElement('span');
	spanMarsala.className = 'c-1';
	spanMarsala.innerHTML = Cacerolas.lineaMarsala[propiedades].Precio;
	//INFO
	infoMarsala = d.createElement('p');
	//Coloco la descripcion en font-size 0 para que no se vea en la ventana principal
	infoMarsala.innerHTML = Cacerolas.lineaMarsala[propiedades].Descripción;
	infoMarsala.className = 'mostrar';
	infoMarsala.style.fontSize = '0';
	//BUTTON
	divbuttonMarsala = d.createElement('div');
	divbuttonMarsala.className = 'text-center';
	buttonMarsala = d.createElement('button');
	buttonMarsala.className = 'btnAgregar p-2 px-4';
	buttonMarsala.innerHTML = 'Agregar';

	//APENCHALEO
	divMarsala.appendChild(imgMarsala);
	divMarsala.appendChild(h4Marsala);
	divMarsala.appendChild(pMarsala);
	pMarsala.appendChild(spanMarsala);   
	divMarsala.appendChild(infoMarsala);
	divMarsala.appendChild(divbuttonMarsala);
	divbuttonMarsala.appendChild(buttonMarsala);
		
}

const seccion6 = d.querySelector('#bazarPremium');
let div1e = d.createElement('div');
div1e.className = 'container mb-2';
let div2e = d.createElement('div');
div2e.className = 'row mb-2 col-md-12';
let h2_1e = d.createElement('h2');
h2_1e.innerHTML = '<b>Línea Bazar Premium</b>';
let div3e = d.createElement('div');
div3e.className = 'row col-md-12';
let h5_1e = d.createElement('h5');
h5_1e.innerHTML = 'Herramientas que facilitan tus preparaciones.';
let div4e = d.createElement('div');
div4e.className = 'row col-md-12';
let p1e = d.createElement('p');
p1e.innerHTML = 'Equipate con lo mejor de Essen y descubrí en cada paso de tus recetas el placer de cocinar.';

seccion6.appendChild(div1e);
div1e.appendChild(div2e);
div2e.appendChild(h2_1e);
div1e.appendChild(div3e);
div3e.appendChild(h5_1e);
div1e.appendChild(div4e);
div4e.appendChild(p1e);

//Creo el Div Principal para los productos BazarPremium
let contenedor1e = d.createElement('div');
contenedor1e.className = 'productos row mt-5';
div1e.appendChild(contenedor1e);

//Recorro mi base de datos Cacerolas.BazarPremium
let divBazar, imgBazar, h4Bazar, pBazar, spanBazar, infoBazar, buttonBazar;
for (let propiedades in Cacerolas.bazarPremium){
	//DIV PADRE
	let divBazar = d.createElement('div');
	divBazar.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-3';
	contenedor1e.appendChild(divBazar);
	//IMG
	imgBazar = d.createElement('img');
	imgBazar.className = 'd-block w-100 br-1 sombra-2 ef-1';
	imgBazar.src = Cacerolas.bazarPremium[propiedades].Imagen.src;
	imgBazar.alt = Cacerolas.bazarPremium[propiedades].Imagen.alt;
	imgBazar.dataId = Cacerolas.bazarPremium[propiedades].id;
	//H4
	h4Bazar = d.createElement('h4');
	h4Bazar.className = 'text-center mt-4';
	h4Bazar.innerHTML = Cacerolas.bazarPremium[propiedades].Nombre;
	//PARRAFO
	pBazar = d.createElement('p');
	pBazar.className = 'text-center';
	pBazar.innerHTML = 'Precio: $'
	//SPAN
	spanBazar = d.createElement('span');
	spanBazar.className = 'c-1';
	spanBazar.innerHTML = Cacerolas.bazarPremium[propiedades].Precio;
	//INFO
	infoBazar = d.createElement('p');
	//Coloco la descripcion en font-size 0 para que no se vea en la ventana principal
	infoBazar.innerHTML = Cacerolas.bazarPremium[propiedades].Descripción;
	infoBazar.className = 'mostrar';
	infoBazar.style.fontSize = '0';
	//BUTTON
	divbuttonBazar = d.createElement('div');
	divbuttonBazar.className = 'text-center';
	buttonBazar = d.createElement('button');
	buttonBazar.className = 'btnAgregar p-2 px-4';
	buttonBazar.innerHTML = 'Agregar';

	//APENCHALEO
	divBazar.appendChild(imgBazar);
	divBazar.appendChild(h4Bazar);
	divBazar.appendChild(pBazar);
	pBazar.appendChild(spanBazar);   
	divBazar.appendChild(infoBazar);
	divBazar.appendChild(divbuttonBazar);
	divbuttonBazar.appendChild(buttonBazar);
		
}

// SET BÁSICO 28CM
var imagenespublicidad = [
	{ img: "publi2.jpg", text: "Set Básico 28 cm"},
	{ img: "publi3.jpg", text: "Chef Sensors"},
	{ img: "publi5.jpg", text: "Set Avellana"}
	];

	window.addEventListener("load", function load(){
	var i = Math.floor(Math.random()*imagenespublicidad.length);
	document.getElementById("box").innerHTML = "<img  class='img-fluid' src='imagenes/" + imagenespublicidad[i].img+ "' alt='" + imagenespublicidad[i].text+ "' />";
	},false);

var avisoEssen = d.getElementById('aviso');

const cerrar = d.createElement('a');
cerrar.href = "javascript:void(0)";
cerrar.innerHTML = 'X';

function setBasico() {
    let seleccionado = null;
    d.body.style.overflow = 'hidden';
    window.d.body.appendChild(avisoEssen);
    let tiempo = 10;
    const spanTiempo = d.getElementById('tiempoRestante');

    avisoEssen.appendChild(cerrar);
    cerrar.onclick = function () {
        d.body.style.overflow = 'auto';
        seleccionado = true;
        tiempo = 10;
        clearInterval(restaTiempo);
        spanTiempo.textContent = tiempo;
        avisoEssen.parentNode.removeChild(avisoEssen);
    }

    //Temporizador 
    const restaTiempo = setInterval(function () {
        tiempo--;
        if (tiempo <= 0) {
            tiempo = 10;
            clearInterval(restaTiempo);
            spanTiempo.textContent = tiempo;
        } else {
            spanTiempo.textContent = tiempo;
        }
    }, 1000);

    //Temporizador que se encarga de cerrar la publicidad 
    avisoPublicitario = setTimeout(function () {
        if (seleccionado === null) {
            d.body.style.overflow = 'auto';
            avisoEssen.parentNode.removeChild(avisoEssen);
        }
    }, 10000);
    
window.addEventListener("keyup",function A(e){
	if(e.keyCode==27) {
        document.getElementById("aviso").style.display="none";
			}
		});
	}

//le asigno al href correspondiente la función onclick , los comparo contra null , y los remuevo del body
hrefInicio.onclick = function () {
    let s2 = d.querySelector('#lineaAqua');
    if (s2 != null) {
		d.body.removeChild(s2);
    }

    let s3 = d.querySelector('#lineaMoka');
    if (s3 != null) {
        d.body.removeChild(s3);
    }

    let s4 = d.querySelector('#lineaTerra');
    if (s4 != null) {
        d.body.removeChild(s4);
    }

	let s5 = d.querySelector('#lineaMarsalla');
    if (s5 != null) {
        d.body.removeChild(s5);
	}
	
	let s6 = d.querySelector('#bazarPremium');
    if (s6 != null) {
        d.body.removeChild(s6);
	}
	
	let s7 = d.querySelector('#cace');
    if (s7 != null) {
        d.body.removeChild(s7);
	}
	
	let s8 = d.querySelector('#sart');
    if (s8 != null) {
        d.body.removeChild(s8);
	}
	
	let s9 = d.querySelector('#bif');
    if (s9 != null) {
        d.body.removeChild(s9);
	}
	
	let s10 = d.querySelector('#cuadra');
    if (s10 != null) {
        d.body.removeChild(s10);
    }

    let s1 = d.querySelector('#inicio');
    if (s1 == null) {
        d.body.insertBefore(seccion1, footer);
        setBasico();
    }
}

hrefAqua.onclick = function () {	
    let s1 = d.querySelector('#inicio');
    if (s1 != null) {
		d.body.removeChild(s1);
		
    }

    let s3 = d.querySelector('#lineaMoka');
    if (s3 != null) {
        d.body.removeChild(s3);
    }

    let s4 = d.querySelector('#lineaTerra');
    if (s4 != null) {
        d.body.removeChild(s4);
	}
	
	let s5 = d.querySelector('#lineaMarsalla');
    if (s5 != null) {
        d.body.removeChild(s5);
	}
	
	let s6 = d.querySelector('#bazarPremium');
    if (s6 != null) {
        d.body.removeChild(s6);
	}
	
	let s7 = d.querySelector('#cace');
    if (s7 != null) {
        d.body.removeChild(s7);
	}
	
	let s8 = d.querySelector('#sart');
    if (s8 != null) {
        d.body.removeChild(s8);
	}
	
	let s9 = d.querySelector('#bif');
    if (s9 != null) {
        d.body.removeChild(s9);
	}
	
	let s10 = d.querySelector('#cuadra');
    if (s10 != null) {
        d.body.removeChild(s10);
    }

    let s2 = d.querySelector('#lineaAqua');
    if (s2 == null) {
        d.body.insertBefore(seccion2, footer);
        setBasico()
    }
}

hrefMoka.onclick = function () {
	let s1 = d.querySelector('#inicio');
    if (s1 != null) {
        d.body.removeChild(s1);
    }
	
	let s2 = d.querySelector('#lineaAqua');
    if (s2 != null) {
        d.body.removeChild(s2);
    }

    let s4 = d.querySelector('#lineaTerra');
    if (s4 != null) {
        d.body.removeChild(s4);
	}
	
	let s5 = d.querySelector('#lineaMarsalla');
    if (s5 != null) {
        d.body.removeChild(s5);
	}
	
	let s6 = d.querySelector('#bazarPremium');
    if (s6 != null) {
        d.body.removeChild(s6);
	}
	
	let s7 = d.querySelector('#cace');
    if (s7 != null) {
        d.body.removeChild(s7);
	}
	
	let s8 = d.querySelector('#sart');
    if (s8 != null) {
        d.body.removeChild(s8);
	}
	
	let s9 = d.querySelector('#bif');
    if (s9 != null) {
        d.body.removeChild(s9);
	}
	
	let s10 = d.querySelector('#cuadra');
    if (s10 != null) {
        d.body.removeChild(s10);
    }

    let s3 = d.querySelector('#lineaMoka');
    if (s3 == null) {
        d.body.insertBefore(seccion3, footer);
        setBasico();
    }
}

hrefTerra.onclick = function () {
	let s1 = d.querySelector('#inicio');
    if (s1 != null) {
        d.body.removeChild(s1);
    }
	
	let s2 = d.querySelector('#lineaAqua');
    if (s2 != null) {
        d.body.removeChild(s2);
    }

    let s3 = d.querySelector('#lineaMoka');
    if (s3 != null) {
        d.body.removeChild(s3);
	}
	
	let s5 = d.querySelector('#lineaMarsalla');
    if (s5 != null) {
        d.body.removeChild(s5);
	}

	let s6 = d.querySelector('#bazarPremium');
    if (s6 != null) {
        d.body.removeChild(s6);
	}
	
	let s7 = d.querySelector('#cace');
    if (s7 != null) {
        d.body.removeChild(s7);
	}
	
	let s8 = d.querySelector('#sart');
    if (s8 != null) {
        d.body.removeChild(s8);
	}
	
	let s9 = d.querySelector('#bif');
    if (s9 != null) {
        d.body.removeChild(s9);
	}
	
	let s10 = d.querySelector('#cuadra');
    if (s10 != null) {
        d.body.removeChild(s10);
    }

    let s4 = d.querySelector('#lineaTerra');
    if (s4 == null) {
        d.body.insertBefore(seccion4, footer);
        setBasico();
    }
}

hrefMarsala.onclick = function () {
	let s1 = d.querySelector('#inicio');
    if (s1 != null) {
        d.body.removeChild(s1);
    }
	
	let s2 = d.querySelector('#lineaAqua');
    if (s2 != null) {
        d.body.removeChild(s2);
    }

    let s3 = d.querySelector('#lineaMoka');
    if (s3 != null) {
        d.body.removeChild(s3);
	}
	
	let s4 = d.querySelector('#lineaTerra');
    if (s4 != null) {
        d.body.removeChild(s4);
	}

	let s6 = d.querySelector('#bazarPremium');
    if (s6 != null) {
        d.body.removeChild(s6);
	}
	
	let s7 = d.querySelector('#cace');
    if (s7 != null) {
        d.body.removeChild(s7);
	}
	
	let s8 = d.querySelector('#sart');
    if (s8 != null) {
        d.body.removeChild(s8);
	}
	
	let s9 = d.querySelector('#bif');
    if (s9 != null) {
        d.body.removeChild(s9);
	}
	
	let s10 = d.querySelector('#cuadra');
    if (s10 != null) {
        d.body.removeChild(s10);
    }

    let s5 = d.querySelector('#lineaMarsalla');
    if (s5 == null) {
        d.body.insertBefore(seccion5, footer);
        setBasico();
    }
}

hrefBazar.onclick = function () {
	let s1 = d.querySelector('#inicio');
    if (s1 != null) {
        d.body.removeChild(s1);
    }
	
	let s2 = d.querySelector('#lineaAqua');
    if (s2 != null) {
        d.body.removeChild(s2);
    }

    let s3 = d.querySelector('#lineaMoka');
    if (s3 != null) {
        d.body.removeChild(s3);
	}
	
	let s4 = d.querySelector('#lineaTerra');
    if (s4 != null) {
        d.body.removeChild(s4);
	}

	let s5 = d.querySelector('#lineaMarsalla');
    if (s5 != null) {
        d.body.removeChild(s5);
	}

	let s7 = d.querySelector('#cace');
    if (s7 != null) {
        d.body.removeChild(s7);
	}
	
	let s8 = d.querySelector('#sart');
    if (s8 != null) {
        d.body.removeChild(s8);
	}
	
	let s9 = d.querySelector('#bif');
    if (s9 != null) {
        d.body.removeChild(s9);
	}
	
	let s10 = d.querySelector('#cuadra');
    if (s10 != null) {
        d.body.removeChild(s10);
    }

    let s6 = d.querySelector('#bazarPremium');
    if (s6 == null) {
        d.body.insertBefore(seccion6, footer);
        setBasico();
    }
}

cat1.onclick = function () {
	let s1 = d.querySelector('#inicio');
    if (s1 != null) {
        d.body.removeChild(s1);
    }
	
	let s2 = d.querySelector('#lineaAqua');
    if (s2 != null) {
        d.body.removeChild(s2);
    }

    let s3 = d.querySelector('#lineaMoka');
    if (s3 != null) {
        d.body.removeChild(s3);
	}
	
	let s4 = d.querySelector('#lineaTerra');
    if (s4 != null) {
        d.body.removeChild(s4);
	}

	let s5 = d.querySelector('#lineaMarsalla');
    if (s5 != null) {
        d.body.removeChild(s5);
	}

	let s6 = d.querySelector('#bazarPremium');
    if (s6 != null) {
        d.body.removeChild(s6);
	}

	let s8 = d.querySelector('#sart');
    if (s8 != null) {
        d.body.removeChild(s8);
	}
	
	let s9 = d.querySelector('#bif');
    if (s9 != null) {
        d.body.removeChild(s9);
	}
	
	let s10 = d.querySelector('#cuadra');
    if (s10 != null) {
        d.body.removeChild(s10);
    }

    let s7 = d.querySelector('#cace');
    if (s7 == null) {
        d.body.insertBefore(seccion7, footer);
        setBasico();
    }
}

cat2.onclick = function () {
	let s1 = d.querySelector('#inicio');
    if (s1 != null) {
        d.body.removeChild(s1);
    }
	
	let s2 = d.querySelector('#lineaAqua');
    if (s2 != null) {
        d.body.removeChild(s2);
    }

    let s3 = d.querySelector('#lineaMoka');
    if (s3 != null) {
        d.body.removeChild(s3);
	}
	
	let s4 = d.querySelector('#lineaTerra');
    if (s4 != null) {
        d.body.removeChild(s4);
	}

	let s5 = d.querySelector('#lineaMarsalla');
    if (s5 != null) {
        d.body.removeChild(s5);
	}
	
	let s6 = d.querySelector('#bazarPremium');
    if (s6 != null) {
        d.body.removeChild(s6);
	}

	let s7 = d.querySelector('#cace');
    if (s7 != null) {
        d.body.removeChild(s7);
	}
	
	let s9 = d.querySelector('#bid');
    if (s9 != null) {
        d.body.removeChild(s9);
	}
	
	let s10 = d.querySelector('#cuadra');
    if (s10 != null) {
        d.body.removeChild(s10);
    }

    let s8 = d.querySelector('#sart');
    if (s8 == null) {
        d.body.insertBefore(seccion8, footer);
        setBasico();
    }
}

cat3.onclick = function () {
	let s1 = d.querySelector('#inicio');
    if (s1 != null) {
        d.body.removeChild(s1);
    }
	
	let s2 = d.querySelector('#lineaAqua');
    if (s2 != null) {
        d.body.removeChild(s2);
    }

    let s3 = d.querySelector('#lineaMoka');
    if (s3 != null) {
        d.body.removeChild(s3);
	}
	
	let s4 = d.querySelector('#lineaTerra');
    if (s4 != null) {
        d.body.removeChild(s4);
	}

	let s5 = d.querySelector('#lineaMarsalla');
    if (s5 != null) {
        d.body.removeChild(s5);
	}

	let s6 = d.querySelector('#bazarPremium');
    if (s6 != null) {
        d.body.removeChild(s6);
	}

	let s8 = d.querySelector('#sart');
    if (s8 != null) {
        d.body.removeChild(s8);
	}
	
	let s7 = d.querySelector('#cace');
    if (s7 != null) {
        d.body.removeChild(s7);
	}
	
	let s10 = d.querySelector('#cuadra');
    if (s10 != null) {
        d.body.removeChild(s10);
    }

    let s9 = d.querySelector('#bif');
    if (s9 == null) {
        d.body.insertBefore(seccion9, footer);
        setBasico();
    }
}

cat4.onclick = function () {
	let s1 = d.querySelector('#inicio');
    if (s1 != null) {
        d.body.removeChild(s1);
    }
	
	let s2 = d.querySelector('#lineaAqua');
    if (s2 != null) {
        d.body.removeChild(s2);
    }

    let s3 = d.querySelector('#lineaMoka');
    if (s3 != null) {
        d.body.removeChild(s3);
	}
	
	let s4 = d.querySelector('#lineaTerra');
    if (s4 != null) {
        d.body.removeChild(s4);
	}

	let s5 = d.querySelector('#lineaMarsalla');
    if (s5 != null) {
        d.body.removeChild(s5);
	}

	let s6 = d.querySelector('#bazarPremium');
    if (s6 != null) {
        d.body.removeChild(s6);
	}

	let s8 = d.querySelector('#sart');
    if (s8 != null) {
        d.body.removeChild(s8);
	}
	
	let s9 = d.querySelector('#bif');
    if (s9 != null) {
        d.body.removeChild(s9);
	}
	
	let s7 = d.querySelector('#cace');
    if (s7 != null) {
        d.body.removeChild(s7);
    }

    let s10 = d.querySelector('#cuadra');
    if (s10 == null) {
        d.body.insertBefore(seccion10, footer);
        setBasico();
    }
}

//MODAL CACEROLAS
let imagenes = d.querySelectorAll('div div.productos img');

for (let i = 0; i < imagenes.length; i++) {
	imagenes[i].onclick = AbrirModal 
}

let divModal, aModal, divModalrow, divModalbeforerow, imgModal, h4Modal, pModal, spanModal, detalleModal, botonModaldiv ,btnModal, liCarritoC, quitarProductoB;
function AbrirModal (){
	let prodInfo
	for (let i in Cacerolas){
		for (let tipo in Cacerolas[i]) {
			if(Cacerolas[i][tipo].id == this.dataId){
			prodInfo = Cacerolas[i].id;
			//CREO LA VENTANA MODAL
			divModal = d.createElement('div');
			divModal.className = 'container modal';
			divModal.setAttribute("id","modalProducto");
			aModal = d.createElement('a');
			aModal.href = "javascript:void(0)";
        	aModal.innerHTML = 'X';
			divModalrow = d.createElement('div');
			divModalrow.className = 'row';
			divModalbeforerow = d.createElement('div');
			divModalbeforerow.className = 'col-sm-12';
			imgModal = d.createElement('img');
			imgModal.className = 'img-fluid';
			imgModal.src = this.src;
			imgModal.alt = this.alt;
			h4Modal = d.createElement('h4');
			h4Modal.className = 'text-center mt-4';
			h4Modal.innerHTML = Cacerolas[i][tipo].Nombre;
			pModal = d.createElement('p');
			pModal.className = 'text-center';
			pModal.innerHTML = 'Precio : $';
			spanModal = d.createElement('span');
			spanModal.className = 'c-1';
			spanModal.innerHTML = Cacerolas[i][tipo].Precio;
			detalleModal = d.createElement('p');
			detalleModal.className = 'text-center';
			detalleModal.style.fontSize = '1.2em';
			detalleModal.innerHTML = Cacerolas[i][tipo].Descripción;
			botonModaldiv = d.createElement('div');
			botonModaldiv.className = 'text-center';
			btnModal = d.createElement('button');
			btnModal.className = 'btnAgregar p-2 px-4';
			btnModal.innerHTML = 'AGREGAR';
			d.body.style.overflow = 'hidden';
			btnModal.onclick = function (){
			quitarProductoB = d.createElement('a');
			contador++;
			spanCarrito.textContent = contador;
			totalCompra += parseFloat(this.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML);
			liCarritoC = d.createElement('li');
			liCarritoC.innerHTML = "<img  class='img-fluid ctamaño' src='" + this.parentNode.parentNode.getElementsByTagName('img')[0].src + "' alt='" + this.parentNode.parentNode.getElementsByTagName('img')[0].alt + "' />"  + this.parentNode.parentNode.getElementsByTagName('h4')[0].innerHTML + '      $ ' + this.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML;
			ulCarrito.appendChild(liCarritoC);
			quitarProductoB.setAttribute("title", "Quitar el producto");
			quitarProductoB.className = 'quitar';
			quitarProductoB.href = 'javascript:void(0)';
			quitarProductoB.innerHTML = '|X|';
			liCarritoC.appendChild(quitarProductoB);

				
		//Quitar de a un producto
		quitarProductoB.onclick = function () {
		ulCarrito.removeChild(this.parentNode);
		contador--;
		totalCompra -= parseFloat(Cacerolas[i][tipo].Precio);
		pTotalProducCarrito.textContent = 'Cantidad de productos : ' + contador;
		spanCarrito.textContent = contador;
		pTotalCompraCarrito.innerHTML = 'Total : $' + totalCompra;
	}
}


		d.body.appendChild(divModal);
		divModal.appendChild(aModal);
		divModal.appendChild(divModalrow);
		divModalrow.appendChild(divModalbeforerow);
		divModalbeforerow.appendChild(imgModal);
		divModalbeforerow.appendChild(h4Modal);
		divModalbeforerow.appendChild(pModal);
		pModal.appendChild(spanModal);
		divModalbeforerow.appendChild(detalleModal);
		divModalbeforerow.appendChild(botonModaldiv);
		botonModaldiv.appendChild(btnModal);
		
		
		window.addEventListener("keyup",function B(e){
			if(e.keyCode==27) {
				divModal.style.display="none";
					}
				});
			
		//Cerrar Modal Cacerolas
		aModal.onclick = function () {
		d.body.removeChild(divModal);
		d.body.style.overflow = 'auto';
		return false;
			}
			
		 }
		 
	  }
	  
   }
   
}

//MODAL CATEGORÍAS
let imagenesx = d.querySelectorAll('.pruebax');

for (let ix = 0; ix < imagenesx.length; ix++) {
	imagenesx[ix].onclick = AbrirModalx 
}

let divModalx, aModalx, divModalrowx, divModalbeforerowx, imgModalx, h4Modalx, pModalx, spanModalx, detalleModalx, botonModaldivx ,btnModalx, liCarritoCx, quitarProductoBx;
function AbrirModalx (){
	let prodInfox
	for (let ix in Categorias){
		for (let tipox in Categorias[ix]) {
			if(Categorias[ix][tipox].id == this.dataId){
			prodInfox = Categorias[ix].id;
			//CREO LA VENTANA MODAL
			divModalx = d.createElement('div');
			divModalx.className = 'container modal';
			divModalx.setAttribute("id","modalProducto");
			aModalx = d.createElement('a');
			aModalx.href = "javascript:void(0)";
        	aModalx.innerHTML = 'X';
			divModalrowx = d.createElement('div');
			divModalrowx.className = 'row';
			divModalbeforerowx = d.createElement('div');
			divModalbeforerowx.className = 'col-sm-12';
			imgModalx = d.createElement('img');
			imgModalx.className = 'img-fluid';
			imgModalx.src = this.src;
			imgModalx.alt = this.alt;
			h4Modalx = d.createElement('h4');
			h4Modalx.className = 'text-center mt-4';
			h4Modalx.innerHTML = Categorias[ix][tipox].Nombre;
			pModalx = d.createElement('p');
			pModalx.className = 'text-center';
			pModalx.innerHTML = 'Precio : $';
			spanModalx = d.createElement('span');
			spanModalx.className = 'c-1';
			spanModalx.innerHTML = Categorias[ix][tipox].Precio;
			detalleModalx = d.createElement('p');
			detalleModalx.className = 'text-center';
			detalleModalx.style.fontSize = '1.2em';
			detalleModalx.innerHTML = Categorias[ix][tipox].Descripción;
			botonModaldivx = d.createElement('div');
			botonModaldivx.className = 'text-center';
			btnModalx = d.createElement('button');
			btnModalx.className = 'btnAgregar p-2 px-4';
			btnModalx.innerHTML = 'AGREGAR';
			d.body.style.overflow = 'hidden';
			btnModalx.onclick = function (){
			quitarProductoBx = d.createElement('a');
			contador++;
			spanCarrito.textContent = contador;
			totalCompra += parseFloat(this.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML);
			liCarritoCx = d.createElement('li');
			liCarritoCx.innerHTML =	"<img  class='img-fluid ctamaño' src='" + this.parentNode.parentNode.getElementsByTagName('img')[0].src + "' alt='" + this.parentNode.parentNode.getElementsByTagName('img')[0].alt + "' />"  +  this.parentNode.parentNode.getElementsByTagName('h4')[0].innerHTML + '      $ ' + this.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML;
			ulCarrito.appendChild(liCarritoCx);
			quitarProductoBx.setAttribute("title", "Quitar el producto");
			quitarProductoBx.className = 'quitar';
			quitarProductoBx.href = 'javascript:void(0)';
			quitarProductoBx.innerHTML = '|X|';
			liCarritoCx.appendChild(quitarProductoBx);

	//Quitar de a un producto
	quitarProductoBx.onclick = function () {
	ulCarrito.removeChild(this.parentNode);
	contador--;
	totalCompra -= parseFloat(Categorias[ix][tipox].Precio);
	pTotalProducCarrito.textContent = 'Cantidad de productos : ' + contador;
	spanCarrito.textContent = contador;
	pTotalCompraCarrito.innerHTML = 'Total : $' + totalCompra;	
	}
}
		
		d.body.appendChild(divModalx);
		divModalx.appendChild(aModalx);
		divModalx.appendChild(divModalrowx);
		divModalrowx.appendChild(divModalbeforerowx);
		divModalbeforerowx.appendChild(imgModalx);
		divModalbeforerowx.appendChild(h4Modalx);
		divModalbeforerowx.appendChild(pModalx);
		pModalx.appendChild(spanModalx);
		divModalbeforerowx.appendChild(detalleModalx);
		divModalbeforerowx.appendChild(botonModaldivx);
		botonModaldivx.appendChild(btnModalx);

	
		window.addEventListener("keyup",function C(e){
			if(e.keyCode==27) {
				divModalx.style.display="none";
					}
				});
			

		//Cerrar Modal Cacerolas
		aModalx.onclick = function () {
		d.body.removeChild(divModalx);
		d.body.style.overflow = 'auto';
		return false;
			}
			
		 }
		 
	  }
	  
   }
   
}

//Carrito

//Selecciono todos los botones de agregar	
var buttons = d.querySelectorAll('.btnAgregar');

var spanCarrito = d.querySelector('#span');

//Creo la ventana modal del carrito
var abrirCarrito = d.querySelector('#carritoModal');

let modalCarrito, aModalCarrito = d.createElement('a'), cerrarCarrito = d.createElement('a'), modalCarritorow = d.createElement('div'), modalCarritoCol = d.createElement('div'), 
ulCarrito = d.createElement('ul'), liCarrito = d.createElement('li'), quitarProducto, pTotalProducCarrito = d.createElement('p'), spanTPC = d.createElement('span'), 
pTotalCompraCarrito = d.createElement('p'), spanTCC = d.createElement('span'), divbtnVaciar = d.createElement('div'), btnVaciar = d.createElement('button'), 
divbtnFinalizar = d.createElement('div'), btnFinalizar = d.createElement('button');

let form = d.createElement('form'), divError = d.createElement('div') , h5Form = d.createElement('h5'), divFormGroup = d.createElement('div'), labelForm = d.createElement('label'),
	selectForm = d.createElement('select'), optionVisa = d.createElement('option'), optionMaster = d.createElement('option'), optionNaranja = d.createElement('option'), 
	optionAmex = d.createElement('option'), label2 = d.createElement('label'), inputLabel2 = d.createElement('input'), label3 = d.createElement('label'), 
	inputLabel3 = d.createElement('input'), label4 = d.createElement('label'), inputLabel4 = d.createElement('input'), label5 = d.createElement('label'), 
	inputLabel5 = d.createElement('input'), label6 = d.createElement('label'), inputLabel6 = d.createElement('input'), label7 = d.createElement('label'), 
	inputLabel7 = d.createElement('input'), label8 = d.createElement('label'), inputLabel8 = d.createElement('input'), divBTNform = d.createElement('div'), 
	divBTNformCol = d.createElement('div'), buttonFormFinalizar = d.createElement('buton'), divModalForm = d.createElement('div'), cerrarFormulario = d.createElement('a'), 
	divFormRow = d.createElement('div'), divFormCol = d.createElement('div'), labelnew1 = d.createElement('label'), inputlabelnew1 = d.createElement('input'),
	labelnew2  = d.createElement('label'), inputlabelnew2 = d.createElement('input'), labelnew3 = d.createElement('label'), inputlabelnew3 = d.createElement('input'), 
	mensajes = [];
	
abrirCarrito.onclick = function (){
	modalCarrito = d.createElement('div');
	modalCarrito.className = 'container modal';
	modalCarrito.setAttribute("id","modalCarrito");
	d.body.appendChild(modalCarrito);
	aModalCarrito.href = "javascript:void(0)";
    aModalCarrito.innerHTML = 'X';
	cerrarCarrito.href = "javascript:void(0)";
    cerrarCarrito.innerHTML = 'X';
    modalCarrito.appendChild(cerrarCarrito);
	modalCarritorow.className = 'row';
	modalCarrito.appendChild(modalCarritorow);
	modalCarritoCol.className = 'col-sm-12';
	modalCarritorow.appendChild(modalCarritoCol);
	ulCarrito.className = 'mx-auto justify-content-center ulcarrito';
	modalCarritoCol.appendChild(ulCarrito);
	ulCarrito.appendChild(liCarrito);
	
	pTotalProducCarrito.className = 'text-center';
	pTotalProducCarrito.innerHTML = 'Cantidad de productos : ';
	spanTPC.className = 'c-1';
	spanTPC.innerHTML = contador;
	modalCarritoCol.appendChild(pTotalProducCarrito);
	pTotalProducCarrito.appendChild(spanTPC);

	pTotalCompraCarrito.className = 'text-center';
	pTotalCompraCarrito.innerHTML = 'Total : $';
	spanTCC.className = 'c-1';
	spanTCC.innerHTML = totalCompra;
	modalCarritoCol.appendChild(pTotalCompraCarrito);
	pTotalCompraCarrito.appendChild(spanTCC);
	
	//Botones extra
	
	divbtnVaciar.className = 'text-center mx-auto';
	btnVaciar.className = 'btnVaciar p-2 px-4';
	btnVaciar.innerHTML = 'Vaciar';
	modalCarritoCol.appendChild(divbtnVaciar);
	divbtnVaciar.appendChild(btnVaciar);

	divbtnFinalizar.className = 'text-center mx-auto mt-2';
	btnFinalizar.className = 'btnFinalizar p-2 px-4';
	btnFinalizar.innerHTML = 'Comprar';
	modalCarritoCol.appendChild(divbtnFinalizar);
	divbtnFinalizar.appendChild(btnFinalizar);
	d.body.style.overflow = 'hidden';

	btnVaciar.onclick = function () {
		if(contador == 0 && totalCompra == 0){
		btnVaciar.setAttribute("disable","");
		}else{
		contador = 0;
		totalCompra = 0;
		spanCarrito.textContent = contador;
		pTotalProducCarrito.innerHTML = 'Cantidad de productos : ' + contador;
		pTotalCompraCarrito.innerHTML = 'Total : $' + totalCompra;
		ulCarrito.innerHTML = '';
		modalCarritoCol.removeChild(ulCarrito);
	}
}

window.addEventListener("keyup",function D(e){
	if(e.keyCode==27) {
		modalCarrito.style.display="none";
			}
		});

	//Cerrar Modal Carrito
	cerrarCarrito.onclick = function () {
	d.body.removeChild(modalCarrito);
	d.body.style.overflow = 'auto';
	return false;
	}
}
	
//Formulario de compra
btnFinalizar.onclick = function() {
	if(contador == 0 && totalCompra == 0){
	btnFinalizar.setAttribute("disable", "");	
	}else{
	d.body.removeChild(modalCarrito);	
	divModalForm.className = 'container modal';
	divModalForm.setAttribute("id", "modalFormulario");
	d.body.appendChild(divModalForm);
	cerrarFormulario.href = "javascript:void(0)";
    cerrarFormulario.innerHTML = 'X';
	divModalForm.appendChild(cerrarFormulario);
	divFormRow.className = 'row';
	divModalForm.appendChild(divFormRow);
	divFormCol.className = 'col-sm-12';
	divFormRow.appendChild(divFormCol);
	form.setAttribute("id", "metodos");
	form.setAttribute("action", "#");
	form.setAttribute("method", "POST");
	form.className = 'mt-2';
	divFormCol.appendChild(form);
	divError.setAttribute("id", "error");
	divError.className = 'col-12 mt-1';
	form.appendChild(divError);
	h5Form.className = 'col-12 text-success mt-1';
	h5Form.innerHTML = 'Formulario de Pago';
	form.appendChild(h5Form);
	divFormGroup.className = 'form-group row m-auto col-12';
	form.appendChild(divFormGroup);
	labelForm.innerHTML = 'Entidad Financiera:';
	divFormGroup.appendChild(labelForm);
	selectForm.className = 'form-control mb-3';
	divFormGroup.appendChild(selectForm);
	optionVisa.innerHTML = 'Visa';
	optionMaster.innerHTML = 'MasterCard';
	optionNaranja.innerHTML = 'Naranja';
	optionAmex.innerHTML = 'American Express';
	selectForm.appendChild(optionVisa);
	selectForm.appendChild(optionMaster);
	selectForm.appendChild(optionNaranja);
	selectForm.appendChild(optionAmex);
	label2.className = 'mt-2';
	label2.innerHTML = 'Número de Tarjeta:';
	divFormGroup.appendChild(label2);
	inputLabel2.setAttribute("id", "numero");
	inputLabel2.setAttribute("type", "number");
	inputLabel2.setAttribute("min", "1000000000000000");
	inputLabel2.setAttribute("max", "9999999999999999");
	inputLabel2.setAttribute("name", "numeroTarjeta");
	inputLabel2.setAttribute("placeholder", "Ingrese los 16 dígitos de la tarjeta");
	inputLabel2.value = this.value;
	inputLabel2.className = 'form-control';
	divFormGroup.appendChild(inputLabel2);
	label3.innerHTML = 'Vencimiento:';
	label3.className = 'mt-2';
	divFormGroup.appendChild(label3);
	inputLabel3.setAttribute("id", "vencimiento");
	inputLabel3.setAttribute("type", "date");
	inputLabel3.setAttribute("name", "vencimiento");
	inputLabel3.className = 'form-control';
	inputLabel3.value = this.value;
	divFormGroup.appendChild(inputLabel3);	
	label4.className = 'mt-2';
	label4.innerHTML = 'Código de seguridad:';
	divFormGroup.appendChild(label4);
	inputLabel4.setAttribute("id", "codigo");
	inputLabel4.setAttribute("type", "number");
	inputLabel4.setAttribute("min", "001");
	inputLabel4.setAttribute("max", "9999");
	inputLabel4.setAttribute("name", "CodigoTarjeta");
	inputLabel4.setAttribute("placeholder", "Ingresé el código de seguridad");
	inputLabel4.className = 'form-control';
	inputLabel4.value = this.value;
	divFormGroup.appendChild(inputLabel4);
	labelnew1.className = 'mt-2';
	labelnew1.innerHTML = 'Nombre:';
	divFormGroup.appendChild(labelnew1);
	inputlabelnew1.setAttribute("id", "nombre");
	inputlabelnew1.setAttribute("type", "text");
	inputlabelnew1.setAttribute("name", "nombre");
	inputlabelnew1.setAttribute("placeholder", "como figura en la tarjeta...");
	inputlabelnew1.className = 'form-control';
	inputlabelnew1.value = this.value;
	divFormGroup.appendChild(inputlabelnew1);
	labelnew2.className = 'mt-2';
	labelnew2.innerHTML = 'D.N.I:';
	divFormGroup.appendChild(labelnew2);
	inputlabelnew2.setAttribute("id", "dni");
	inputlabelnew2.setAttribute("type", "number");
	inputlabelnew2.setAttribute("min", "00000001");
	inputlabelnew2.setAttribute("max", "99999999");
	inputlabelnew2.setAttribute("name", "dni");
	inputlabelnew2.setAttribute("placeholder", "Ingresé el dni del titular de la tarjeta...");
	inputlabelnew2.className = 'form-control';
	inputlabelnew2.value = this.value;
	divFormGroup.appendChild(inputlabelnew2);
	labelnew3.className = 'mt-2';
	labelnew3.setAttribute("for", "meil");
	labelnew3.innerHTML = 'Correo electronico:';
	divFormGroup.appendChild(labelnew3);
	inputlabelnew3.setAttribute("id", "meil");
	inputlabelnew3.setAttribute("type", "email");
	inputlabelnew3.setAttribute("name", "email");
	inputlabelnew3.setAttribute("placeholder", "nombre@ejemplo.com");
	inputlabelnew3.className = 'form-control';
	inputlabelnew3.value = this.value;
	divFormGroup.appendChild(inputlabelnew3);
	label5.className = 'mt-2';
	label5.innerHTML = 'Provincia:';
	divFormGroup.appendChild(label5);
	inputLabel5.setAttribute("id", "provincia");
	inputLabel5.setAttribute("type", "text");
	inputLabel5.setAttribute("name", "provincia");
	inputLabel5.setAttribute("placeholder", "Ingrese la provincia donde recibirá la entrega...");
	inputLabel5.className = 'form-control';
	inputLabel5.value = this.value;
	divFormGroup.appendChild(inputLabel5);
	label6.className = 'mt-2';
	label6.innerHTML = 'Localidad:';
	divFormGroup.appendChild(label6);
	inputLabel6.setAttribute("id", "localidad");
	inputLabel6.setAttribute("type", "text");
	inputLabel6.setAttribute("name", "Localidad");
	inputLabel6.setAttribute("placeholder", "Ingrese la localidad donde recibirá la entrega...");
	inputLabel6.className = 'form-control';
	inputLabel6.value = this.value;
	divFormGroup.appendChild(inputLabel6);
	label7.className = 'mt-2';
	label7.innerHTML = 'Dirección de entrega:';
	divFormGroup.appendChild(label7);
	inputLabel7.setAttribute("id", "direccion");
	inputLabel7.setAttribute("name", "Direccion");
	inputLabel7.setAttribute("type", "text");
	inputLabel7.setAttribute("placeholder", "Ingrese la dirección...");
	inputLabel7.className = 'form-control';
	inputLabel7.value = this.value;
	divFormGroup.appendChild(inputLabel7);
	label8.className = 'mt-2';
	label8.innerHTML = 'Código Postal:';
	divFormGroup.appendChild(label8);
	inputLabel8.setAttribute("id", "cPostal");
	inputLabel8.setAttribute("name", "codigoPostal");
	inputLabel8.setAttribute("type", "number");
	inputLabel8.setAttribute("min", "0001");
	inputLabel8.setAttribute("max", "9999");
	inputLabel8.setAttribute("placeholder", "Ingrese su código postal...");
	inputLabel8.className = 'form-control';
	inputLabel8.value = this.value;
	divFormGroup.appendChild(inputLabel8);
	divBTNform.className = 'form-group row botonForm mt-3 mb-2';
	form.appendChild(divBTNform);
	divBTNformCol.className = 'col-12 text-center';
	divBTNform.appendChild(divBTNformCol);
	buttonFormFinalizar.setAttribute("type", "submit");
	buttonFormFinalizar.setAttribute("id", "ok");
	buttonFormFinalizar.className = 'btn btn-success col-12';
	buttonFormFinalizar.innerHTML = 'Finalizar Compra';
	divBTNformCol.appendChild(buttonFormFinalizar);
	
	window.addEventListener("keyup",function E(e){
		if(e.keyCode==27) {
			divModalForm.style.display="none";
				}
			});	

	cerrarFormulario.onclick = function () {
	d.body.removeChild(divModalForm);
	d.body.style.overflow = 'auto';
	return false;
		}	
	}
}

	buttonFormFinalizar.onclick = function () {
	
	//Validacion Formulario
	const numeroTarjeta = d.getElementById('numero');
	const caducidad = d.getElementById('vencimiento');
	const codigo = d.getElementById('codigo');
	const direccion = d.getElementById('direccion');
	const ciudad = d.getElementById('localidad');
	const provincia = d.getElementById('provincia');
	const postal = d.getElementById('cPostal');
	const nombre = d.getElementById('nombre');
	const dni = d.getElementById('dni');
	const email = d.getElementById('meil');
	const error = d.getElementById('error');
				
		if (numeroTarjeta.value === ''){
						
		mensajes.push('Usted no a ingresado el número de la tarjeta');
		numeroTarjeta.style.borderColor = 'red';
		}
					
		if (numeroTarjeta.value < 1000000000000000 || numeroTarjeta.value > 9999999999999999){
						
			mensajes.push('Usted a ingresado un número de tarjeta inválido');
			numeroTarjeta.style.borderColor = 'red';
		}

		if (caducidad.value === '') {
			mensajes.push('Usted no a ingresado la fecha de caducidad de su tarjeta');
			caducidad.style.borderColor = 'red';
		}

		if (codigo.value === '') {
			mensajes.push('Usted no a ingresado el código de seguridad de su tarjeta');
			codigo.style.borderColor = 'red';
		}

		if (codigo.value < 0001 || codigo.value > 9999 ) {
			mensajes.push('Usted a ingresado el código de su tarjeta de forma inválida');
			codigo.style.borderColor = 'red';
		}
		
		if (direccion.value === '') {  
			mensajes.push('Usted no a ingresado una dirección')
			direccion.style.borderColor = 'red';
		}
					
		if (ciudad.value === '') {
			mensajes.push('Usted no a ingresado una ciudad')
			ciudad.style.borderColor = 'red';
		}

		if (provincia.value === '') {
			mensajes.push('Usted no a ingresado una provincia')
			provincia.style.borderColor = 'red';
		}

		if (postal.value === '') {
			mensajes.push('Usted no a ingresado un código postal')
			postal.style.borderColor = 'red';
		}

		if (postal.value < 0001 || postal.value > 9999) {
			mensajes.push('Usted a ingresado un código postal inválido')
			postal.style.borderColor = 'red';
		}
		
		if (nombre.value === '') {
			mensajes.push('Usted no a ingresado un nombre')
			nombre.style.borderColor = 'red';
		}

		if (dni.value === '') {
			mensajes.push('Usted no a ingresado un dni')
			postal.style.borderColor = 'red';
		}

		if (dni.value < 00000001 || dni.value > 99999999) {
			mensajes.push('Usted a ingresado un dni inválido')
			dni.style.borderColor = 'red';
		}

		if (email.value === '') {
			mensajes.push('Usted no a ingresado un correo electrónico')
			email.style.borderColor = 'red';
		}
		
		if (mensajes.length > 0) {
			error.className = 'alert alert-danger';
			error.innerHTML = mensajes.join('.<br>');
			mensajes = [];
		} else {
			numeroTarjeta.style.borderColor = '#999';
			caducidad.style.borderColor = '#999';
			codigo.style.borderColor = '#999';
			provincia.style.borderColor = '#999';
			ciudad.style.borderColor = '#999';
			direccion.style.borderColor = '#999';
			postal.style.borderColor = '#999';
			nombre.style.borderColor = '#999';
			dni.style.borderColor = '#999';
			email.style.borderColor = '#999';
			contador = 0;
			totalCompra = 0;
			ulCarrito.innerHTML = '';
			spanCarrito.innerHTML = contador;
			d.body.removeChild(divModalForm);
			ultimoModal = d.createElement('div');
			ultimoModal.setAttribute("id", "modalGracias");
			ultimoModal.className = 'container modal';
			d.body.appendChild(ultimoModal);
			cerrarGracias = d.createElement('a');
			cerrarGracias.href = "javascript:void(0)";
			cerrarGracias.innerHTML = 'X';
			ultimoModal.appendChild(cerrarGracias);
			ultimoModalRow = d.createElement('div');
			ultimoModalRow.className = 'row';
			ultimoModal.appendChild(ultimoModalRow);
			ultimoModalCol = d.createElement('div');
			ultimoModalCol.className = 'col-sm-12 mb-5';
			ultimoModalRow.appendChild(ultimoModalCol);
			imgReparacion = d.createElement('img');
			imgReparacion.className = 'img-fluid mt-5';
			imgReparacion.setAttribute("src", "imagenes/5.png");
			ultimoModalCol.appendChild(imgReparacion);
			ultimoh2 = d.createElement('h2');
			ultimoh2.className = 'text-center text-success mt-2';
			ultimoh2.innerHTML = '¡FELICITACIONES!';
			ultimoModalCol.appendChild(ultimoh2);
			textoReparacion = d.createElement('p');
			textoReparacion.className = 'text-center mt-2';
			textoReparacion.innerHTML = 'Gracias por su compra. Recibirá las instrucciones para el envío por correo electrónico. En caso de no recibir el correo, por favor revise su bandeja de SPAM No dude en contactarnos por cualquier consulta.'
			ultimoModalCol.appendChild(textoReparacion);
			ultimoHref = d.createElement('a');
			ultimoHref.href = "index.html";
			ultimoHref.innerHTML = '--> Click aquí para regresar al inicio';
			ultimoHref.className = 'mt-2 ultimohref';
			ultimoModalCol.appendChild(ultimoHref);
			
			window.addEventListener("keyup",function F(e){
				if(e.keyCode==27) {
					ultimoModal.style.display="none";
						}
					});

			//Cerrar Modal Formulario
			cerrarGracias.onclick = function () {
			d.body.removeChild(ultimoModal);
			d.body.style.overflow = 'auto';
			return false;
			}		
		}
					
			//Cerrar Modal Formulario
			cerrarFormulario.onclick = function () {
			d.body.removeChild(divModalForm);
			divError.innerHTML = "";
			mensajes = [];
			numeroTarjeta.value === '';
			caducidad.value === '';
			codigo.value === '';
			direccion.value === '';
			ciudad.value === '';
			provincia.value === '';
			postal.value === '';
			nombre.value === '';
			dni.value === '';
			email.value === '';
			numeroTarjeta.style.borderColor = '#999';
			caducidad.style.borderColor = '#999';
			codigo.style.borderColor = '#999';
			provincia.style.borderColor = '#999';
			ciudad.style.borderColor = '#999';
			direccion.style.borderColor = '#999';
			postal.style.borderColor = '#999';
			nombre.style.borderColor = '#999';
			dni.style.borderColor = '#999';
			email.style.borderColor = '#999';
			d.body.style.overflow = 'auto';
			return false;
			}	
		}
					
//Recorro con un For los botones y le asigno un contador al onclick
for (var i = 0; i < buttons.length; i++){
	buttons[i].onclick = function (){
	liCarritoB = d.createElement('li'), quitarProducto = d.createElement('a'), spanExclusivo = d.createElement('span'); 
	contador++;
	spanCarrito.textContent = contador;
	totalCompra += parseFloat(this.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML);
	liCarritoB.innerHTML =	"<img  class='img-fluid ctamaño' src='" + this.parentNode.parentNode.getElementsByTagName('img')[0].src + "' alt='" + this.parentNode.parentNode.getElementsByTagName('img')[0].alt + "' />"  +  this.parentNode.parentNode.getElementsByTagName('h4')[0].innerHTML + '      $ ';
	spanExclusivo.innerHTML = this.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML;
	liCarritoB.appendChild(spanExclusivo);
	quitarProducto.setAttribute("title", "Quitar el producto");
	quitarProducto.className = 'quitar';
	quitarProducto.href = 'javascript:void(0)';
	quitarProducto.innerHTML = '|X|';
	modalCarritoCol.appendChild(ulCarrito);
    ulCarrito.appendChild(liCarritoB);
    liCarritoB.appendChild(quitarProducto);	
	
	//Quitar de a un producto
	quitarProducto.onclick = function () {
	ulCarrito.removeChild(this.parentNode);
	contador--;
	totalCompra -= this.parentNode.getElementsByTagName('span')[0].textContent;
	pTotalProducCarrito.textContent = 'Cantidad de productos : ' + contador;
	spanCarrito.textContent = contador;
	pTotalCompraCarrito.innerHTML = 'Total : $' + totalCompra;
		}
	}
}

//remuevo las secciones que no están activas cuando ingreso al inicio y lo coloco al final del JS para poder hacer el Selector de los datos
d.body.removeChild(seccion2);
d.body.removeChild(seccion3);
d.body.removeChild(seccion4);
d.body.removeChild(seccion5);
d.body.removeChild(seccion6);
d.body.removeChild(seccion7);
d.body.removeChild(seccion8);
d.body.removeChild(seccion9);
d.body.removeChild(seccion10);



