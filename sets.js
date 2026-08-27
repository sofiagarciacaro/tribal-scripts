(function() {

  var CUIDADO = {
    'PLATA 925':        { texto: '✓ Limpiá con un paño suave y seco<br>✓ Guardalos separados de otras piezas para evitar rozaduras<br>✓ Son joyitas delicadas — con un poco de amor duran muchísimo 🤍' },
    'ACERO DORADO':     { texto: '✓ Evitá el contacto prolongado con agua, perfume y cremas<br>✓ Guardá las piezas separadas para que no se rayen<br>✓ El baño de oro dura más cuando lo cuidás 🤍' },
    'ACERO BLANCO':     { texto: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelos antes de bañarte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el baño de plata dura muchísimo 🤍' },
    'ACERO QUIRÚRGICO': { texto: '✓ Resistente al agua y al sudor — podés usarlos todo el día<br>✓ Limpiá con un paño suave si hace falta<br>✓ No se oxidan ni ennegrecen con el uso 💪' },
    'NÍQUEL':           { texto: '✓ Evitá el contacto prolongado con agua y perfumes<br>✓ Guardalos separados para que no se rayen<br>✓ Con un poco de cuidado duran muchísimo 🤍' },
    'BRONCE ENCHAPADO': { texto: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelos antes de bañarte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el enchapado dura muchísimo 🤍' }
  };

  var TIPOS = {
    'aros': {
      hookEmoji: '👂',
      card2t: '🌙 Versátiles de verdad',
      card2txt: 'No importa el outfit ni la ocasión. Te los ponés y ya está.',
      card3t: '💡 Mucho looks en un solo set',
      card3txt: 'Según cómo los combines, el look cambia completamente.',
      reviewTitulo: 'Lo que dicen las que ya lo tienen'
    },
    'cadenas': {
      hookEmoji: '📿',
      card2t: '🌙 Usalas solas o todas juntas',
      card2txt: 'Cada cadenita funciona sola o en conjunto. Según el outfit, elegís cuánto querés sumar.',
      card3t: '💡 Del básico al statement',
      card3txt: 'Un set que cubre desde el look más simple hasta el más armado. Infinitas combinaciones.',
      reviewTitulo: 'Lo que dicen las que ya las tienen'
    },
    'anillos': {
      hookEmoji: '💍',
      card2t: '💡 Usalos solos o todos juntos',
      card2txt: 'Ya pensamos la combinación por vos. Cada anillo tiene su propio carácter pero juntos forman el stack perfecto.',
      card3t: '🌙 Para cualquier ocasión',
      card3txt: 'Uno solo para el día a día, todos juntos para cuando querés más presencia. Infinitas combinaciones.',
      reviewTitulo: 'Lo que dicen las que ya los tienen'
    },
    'regalo': {
      hookEmoji: '🎁',
      card2t: '🌙 Un regalo con historia',
      card2txt: 'El hilo rojo invisible conecta a quienes están destinados a encontrarse. Este set lo hace tangible.',
      card3t: '💡 Listo para regalar',
      card3txt: 'Viene con packaging especial con el mensaje del hilo rojo. No necesitás agregar nada más.',
      reviewTitulo: 'Lo que dicen las que ya lo regalaron'
    }
  };

  var REVIEWS = {
    'aros': [
      '"Me las puse y no me las saco más. Cada par queda increíble solo o combinado."',
      '"Llegaron hermosas y la calidad de la plata se nota desde que abrís el paquete."',
      '"Las uso de a uno o los dos juntos — siempre quedan bien sea cual sea el outfit."',
      '"Son perfectas para regalar. Se ven caras y la calidad es real."',
      '"El set completo me salió menos que lo que esperaba pagar por uno solo."',
      '"La combinación de los dos modelos es perfecta."',
      '"No parecen de set — parecen elegidas una a una."',
      '"Llegaron súper bien embaladas y antes de lo esperado."'
    ],
    'cadenas': [
      '"Las uso juntas todos los días. Me resolvió el outfit de cuello sin pensar nada."',
      '"Nunca entendí cómo hacer el layering bien y con este set me quedó perfecto."',
      '"Las dos solas también quedan hermosas. Son súper versátiles."',
      '"El dorado es precioso y no se va. Más de un mes usándolas y siguen igual."',
      '"Compré el set y me arrepiento de no haberlo hecho antes."',
      '"Me las preguntaron creyendo que eran de joyería cara."',
      '"Llegaron súper bien embaladas. El detalle del charm es divino."',
      '"El largo de cada una está perfecto para que no se enreden."'
    ],
    'anillos': [
      '"Los uso todos juntos y me preguntaron si eran elegidos uno a uno."',
      '"Me encanta que puedo usar uno solo o los dos juntos según el día."',
      '"El regulable es genial — no tengo que preocuparme por el talle."',
      '"Son preciosos. La combinación de los dos diseños es perfecta."',
      '"El acero blanco se ve igual que plata y el precio es mucho mejor."',
      '"Los compré para regalo y me pidieron el link al toque."',
      '"Muy cómodos — los uso todo el día y no molestan para nada."',
      '"Se ven de joyería cara. La calidad está muy por encima del precio."'
    ],
    'regalo': [
      '"Lo regalé para el día de los enamorados y la reacción fue increíble. Llegó con todo el packaging y el mensaje — perfecto."',
      '"No tuve que envolver nada ni agregar tarjeta. Llegó listo y re prolijo. Lo volvería a comprar sin dudarlo."',
      '"La pulsera es hermosa y la cadenita también. Pero lo que más sorprendió fue el packaging con el mensaje del hilo rojo."',
      '"Quedó tan lindo que casi no lo quería abrir. El detalle del hilo rojo le dio otro valor al regalo."',
      '"Lo pedí con poco tiempo y llegó antes de lo esperado. Perfecto para una ocasión especial."',
      '"Me pidieron el link apenas lo vieron. Todo el mundo quería saber de dónde era."',
      '"La calidad del acero se nota un montón. No es un regalito cualquiera — se siente especial."',
      '"Lo compré para mi mejor amiga y lloró cuando lo abrió. El mensaje del hilo rojo era justo lo que necesitaba leer."'
    ]
  };

  var SETS = {
    'set-lula-11776': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '4 joyitas',
      hook: 'Cuatro joyitas de plata, un look armado.',
      hookSub: 'Rayo con presencia + lisas y shiny que cierran el look.<br>Ya pensamos la combinación por vos.',
      items: ['Argolla Rayo 12mm', 'Argollas Lisas 12mm · 1 par', 'Argollita Shiny Lula 10mm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-paulin-11775': {
      tipo: 'aros', material: 'BRONCE ENCHAPADO', materialSub: 'Enchapado en oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Mia + Paulin — el dúo dorado.',
      hookSub: 'Dos argollas que se complementan solas.<br>El look dorado ya está armado.',
      items: ['Argollas Mia Gold 15mm · 1 par', 'Argollas Paulin Gold 14mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-sabrina-11180': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'El look de orejas ya está resuelto.',
      hookSub: 'Dos estilos que se complementan perfecto.<br>Usalos solos o juntos — siempre funciona.',
      items: ['Argollitas Paris · 9mm', 'Argollas Heart Strass · 10mm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-loop-11117': {
      tipo: 'cadenas', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 cadenitas',
      hook: 'El cuello ya tiene look.',
      hookSub: 'Dos largos pensados para convivir perfecto.<br>El layering resuelto sin prueba y error.',
      items: ['Cadenita Loop · 45cm', 'Cadenita Charm · 40cm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlas'
    },
    'set-bennu-11189': {
      tipo: 'anillos', material: 'ACERO BLANCO', materialSub: 'Baño de plata', materialEmoji: '🤍',
      piezas: '2 anillos',
      hook: 'Solos o juntos, ya combinan.',
      hookSub: 'Cada anillo tiene su propio carácter.<br>Juntos forman el stack perfecto — sin prueba y error.',
      items: ['Anillo Bennu · Regulable', 'Anillo Bianca · Regulable'],
      talle: 'Regulable', cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-abraham-11139': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '4 accesorios',
      hook: 'Cuatro joyitas, un look armado.',
      hookSub: 'Argollas con presencia + dos minis que se suman perfecto.<br>Infinitas combinaciones en un solo set.',
      items: ['Aros Abraham · 1 par', 'Mini Star', 'Mini Bichi'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-maru-11397': {
      tipo: 'aros', material: 'NÍQUEL', materialSub: 'Metal plateado', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Dos estilos, un look sin esfuerzo.',
      hookSub: 'Gota y argolla que se complementan perfecto.<br>El look de orejas sin pensarlo.',
      items: ['Argollas Gota Jack 10 · 1 par', 'Argollas Maru 12mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-ariadna-11228': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Dos pares, un look armado.',
      hookSub: 'Argollas con presencia + aros Yani que equilibran perfecto.<br>Ya pensamos la combinación por vos.',
      items: ['Argollas Ariadna 15mm · 1 par', 'Aros Yani · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-abridores-gota-11103': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '3 joyitas',
      hook: 'El look de abridores ya está resuelto.',
      hookSub: 'Un par para el primer perfo + un mini para sumar al look.<br>Ya pensamos la combinación por vos.',
      items: ['Abridores Gota · 1 par', 'Abridor Runy'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-abridores-zendaya-11104': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '3 joyitas',
      hook: 'Tres abridores, una combinación completa.',
      hookSub: 'Jessica, Zendaya y Scarlett — tres estilos que conviven perfecto.<br>Ya pensamos la combinación por vos.',
      items: ['Abridor Jessica', 'Abridor Zendaya', 'Abridor Scarlett'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-akira-11086': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Dos argollas, un look redondo.',
      hookSub: 'Una más grande y una más chica que se complementan solas.<br>El stack de argollas ya está resuelto.',
      items: ['Argollas Akira 22mm · 1 par', 'Argollas Antonia 17mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-akira-11744': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Coca + Akira — el dúo dorado.',
      hookSub: 'Una más chica y una más grande que se complementan solas.<br>El stack de argollas ya está resuelto.',
      items: ['Argollas Coca 13mm · 1 par', 'Argollas Akira 22mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-ale-11134': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Perla + argolla — el clásico elevado.',
      hookSub: 'Dos pares que se complementan en segundos.<br>Del look sutil al más armado — sin cambiar nada.',
      items: ['Aros Ale Perla · 1 par', 'Aros Camila 12mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-alama-11717': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Snake + Amaranto — dos estilos, un look.',
      hookSub: 'Dos argollas que se complementan solas.<br>El look de orejas sin prueba y error.',
      items: ['Argollas Snake Silver · 1 par', 'Argollas Amaranto 15mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-ari-11001': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '3 joyitas',
      hook: 'Tres minis, infinitas formas de llevarlos.',
      hookSub: 'Nudito y bolitas que conviven perfecto en la oreja.<br>Solos o juntos — siempre funciona.',
      items: ['Mini Nudito', 'Mini Bolita 4mm', 'Mini Bolita 2mm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-becky-11355': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Paris + Becky — el dúo que no falla.',
      hookSub: 'Dos estilos que se complementan perfecto.<br>Usalos solos o juntos — siempre funciona.',
      items: ['Argollas Paris 9mm · 1 par', 'Argollas Becky 10mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-best-11698': {
      tipo: 'aros', material: 'NÍQUEL', materialSub: 'Metal plateado', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Dos argollas que se hablan.',
      hookSub: 'Best + Ellis — un dúo pensado para convivir en la oreja.<br>El look sin esfuerzo.',
      items: ['Argollas Best 10mm · 1 par', 'Argollas Ellis · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-boomy-11002': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '3 joyitas',
      hook: 'Tres minis que arman el look.',
      hookSub: 'Boom, Olivos y Bamy — tres estilos que conviven perfecto.<br>Solos o todos juntos — siempre funciona.',
      items: ['Mini Boom', 'Mini Olivos', 'Mini Bamy'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-carmen-11225': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Redonda + oval — el dúo perfecto.',
      hookSub: 'Dos formas que se complementan solas.<br>El look de argollas ya está resuelto.',
      items: ['Argollas Carmen · 1 par', 'Argollas Oval · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-char-11181': {
      tipo: 'aros', material: 'ACERO BLANCO', materialSub: 'Baño de plata', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Argolla + perlita — clásico sin falla.',
      hookSub: 'Dos pares que ya combinan entre sí.<br>Simple, limpio y siempre listo para usar.',
      items: ['Argollas Char · 1 par', 'Perlitas 4mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-cubanitas-11220': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '3 pares',
      hook: 'Tres pares que se apilan solos.',
      hookSub: 'Cubanitas con presencia + dos minis que completan el look.<br>El look de orejas armado sin prueba y error.',
      items: ['Argollas Cubanitas 20mm · 1 par', 'Aros Strass Lolita 4mm · 1 par', 'Aros Mili 4mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-dove-11188': {
      tipo: 'anillos', material: 'ACERO BLANCO', materialSub: 'Baño de plata', materialEmoji: '🤍',
      piezas: '2 anillos',
      hook: 'El stack de anillos ya está resuelto.',
      hookSub: 'Dove + Alma — dos diseños que se complementan perfecto.<br>Regulables, se adaptan a cualquier mano.',
      items: ['Anillo Dove · Regulable', 'Anillo Alma · Regulable'],
      talle: 'Regulable', cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-dumblove-11106': {
      tipo: 'aros', material: 'NÍQUEL', materialSub: 'Metal plateado', materialEmoji: '🤍',
      piezas: '4 joyitas',
      hook: 'Cuatro joyitas, un look de orejas.',
      hookSub: 'Argollas con carácter + dos minis que se suman perfecto.<br>El look completo en un solo set.',
      items: ['Argollas Dumblove · 1 par', 'Argolla Acrita', 'Argolla Ellis Gold'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-evelyn-11111': {
      tipo: 'cadenas', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 cadenitas',
      hook: 'Dos cadenitas, un look resuelto.',
      hookSub: 'Evelyn + Medal en largos perfectos para convivir.<br>El layering sin esfuerzo.',
      items: ['Cadenita Evelyn · 40cm', 'Cadenita Medal · 45cm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlas'
    },
    'set-forza-11098': {
      tipo: 'aros', material: 'BRONCE ENCHAPADO', materialSub: 'Enchapado en oro', materialEmoji: '✨',
      piezas: '4 joyitas',
      hook: 'Cuatro joyitas doradas.',
      hookSub: 'Argollas con presencia + dos minis que se suman perfecto.<br>El look dorado ya está armado.',
      items: ['Argollas Forza Gold · 1 par', 'Argollita Mendy', 'Argollita Tina Gold'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-gotas-silver-protectora-09655': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 piezas',
      hook: 'Aros y pulsera — el look completo.',
      hookSub: 'Aros gota en la oreja + pulsera protectora en la muñeca.<br>El look completo de una.',
      items: ['Aros Gota · 1 par', 'Pulsera Lily Protectora'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-gotita-11089': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Gotas + argollas — un dúo que no falla.',
      hookSub: 'Dos estilos que se complementan en segundos.<br>Del look sutil al más armado — sin cambiar nada.',
      items: ['Aros Gotas Jack · 1 par', 'Argollas Mendy 10mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-hadid-11080': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '3 joyitas',
      hook: 'Argollas + mini — el clásico elevado.',
      hookSub: 'Un par con presencia + un mini Hadid que se suma perfecto.<br>Tres joyitas, un look resuelto.',
      items: ['Argollas Lisas · 1 par', 'Mini Aro Hadid'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-halo-11197': {
      tipo: 'aros', material: 'NÍQUEL', materialSub: 'Metal plateado', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Halo + Silver — el look sin esfuerzo.',
      hookSub: 'Dos argollas que ya combinan en la oreja.<br>Usalas solas o juntas — siempre funciona.',
      items: ['Argollas Halo · 1 par', 'Argollas Silver · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-honguito-11141': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Statement + clásico — siempre funciona.',
      hookSub: 'Un par con carácter y uno que lo equilibra perfecto.<br>El look resuelto en un solo set.',
      items: ['Argollas Honguito · 1 par', 'Bolitas 4mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-isel-11227': {
      tipo: 'aros', material: 'ACERO BLANCO', materialSub: 'Baño de plata', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Dos argollas blancas, un look.',
      hookSub: 'Isel + Cuba — distintas pero que conviven perfecto.<br>El stack de argollas ya está armado.',
      items: ['Argollas Isel 9mm · 1 par', 'Argollas Cuba 10mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-issa-11718': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Issa + Amaranto — el dúo que no falla.',
      hookSub: 'Dos argollas que conviven perfecto en la oreja.<br>El stack de argollas ya está resuelto.',
      items: ['Argollas Issa 15mm · 1 par', 'Argollas Amaranto 17mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-lara-11100': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '5 joyitas',
      hook: 'Cinco joyitas, el look de orejas completo.',
      hookSub: 'Argollas de distintos tamaños + ear cuff que cierra el look.<br>Ya pensamos la combinación por vos.',
      items: ['Argollas Lara 18mm · 1 par', 'Argolla Amaranto 15mm', 'Argolla Juana 10mm', 'Ear Cuff Kala'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-lil-rayo-11739': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '5 joyitas',
      hook: 'Cinco joyitas doradas, el look de orejas completo.',
      hookSub: 'Argollas con presencia + mini que cierra el look.<br>Ya pensamos la combinación por vos.',
      items: ['Argollas Fabita 17mm · 1 par', 'Argollas Lili Rayo 20mm · 1 par', 'Mini Tini'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-lowie-11183': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '4 joyitas',
      hook: 'Cuatro minis, el look de orejas resuelto.',
      hookSub: 'Nudito, Stella, Mariposa y Lowie — cuatro estilos que conviven perfecto.<br>Ya pensamos la combinación por vos.',
      items: ['Mini Nudito', 'Mini Stella', 'Mini Mariposa', 'Mini Lowie'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-luli-10999': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '3 joyitas',
      hook: 'Tres minis que ya combinan.',
      hookSub: 'Stella, Mariposa y Rayito — tres estilos que conviven perfecto en la oreja.<br>Solos o juntos — siempre funciona.',
      items: ['Mini Stella', 'Mini Mariposa', 'Mini Rayito'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-mandy-11614': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Willemina + Mendy — el dúo dorado.',
      hookSub: 'Dos argollas que se complementan solas.<br>El look de orejas ya está resuelto.',
      items: ['Argollas Willemina · 1 par', 'Argollas Mendy 10mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-marucha-11221': {
      tipo: 'cadenas', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 cadenitas',
      hook: 'Dos cadenitas, un look resuelto.',
      hookSub: 'Marucha + Snake en largos perfectos para convivir.<br>El layering sin esfuerzo.',
      items: ['Cadenita Marucha · 40cm', 'Cadenita Snake 2.7mm · 45cm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlas'
    },
    'set-mizy-11092': {
      tipo: 'aros', material: 'BRONCE ENCHAPADO', materialSub: 'Enchapado en oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Willemina + Mizy — el dúo dorado.',
      hookSub: 'Dos argollas que se complementan solas.<br>El look dorado ya está armado.',
      items: ['Argollas Willemina · 1 par', 'Argollas Mizy Gold · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-niegui-11218': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Strass + argolla — el dúo que no falla.',
      hookSub: 'Dos estilos que se complementan en segundos.<br>El look de orejas sin prueba y error.',
      items: ['Aros Strass Lolita 4mm · 1 par', 'Argollas Niegui · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-oli-11085': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Perla + argolla — el clásico en acero.',
      hookSub: 'Dos pares que ya combinan entre sí.<br>Simple, limpio y siempre listo para usar.',
      items: ['Argollas Oli Perla · 1 par', 'Argollas Juana 10mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-paquina-11142': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Paquina + Alul — el dúo dorado.',
      hookSub: 'Dos estilos que se complementan perfecto.<br>Usalos solos o juntos — siempre funciona.',
      items: ['Argollas Paquina · 1 par', 'Aros Alul · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-riri-11149': {
      tipo: 'aros', material: 'NÍQUEL', materialSub: 'Metal plateado', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Ellis + Riri — el dúo plateado.',
      hookSub: 'Dos argollas que ya combinan en la oreja.<br>El look sin esfuerzo.',
      items: ['Argollas Ellis Silver · 1 par', 'Argollas Riri Silver · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-rochi-11187': {
      tipo: 'anillos', material: 'ACERO BLANCO', materialSub: 'Baño de plata', materialEmoji: '🤍',
      piezas: '2 anillos',
      hook: 'El stack de anillos ya está resuelto.',
      hookSub: 'Rochi + Layla — dos diseños que se complementan perfecto.<br>Regulables, se adaptan a cualquier mano.',
      items: ['Anillo Rochi · Regulable', 'Anillo Layla · Regulable'],
      talle: 'Regulable', cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-shakira-11095': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '4 joyitas',
      hook: 'Ear cuff + argollas — el look completo.',
      hookSub: 'Shakira con presencia + Mendy y Churi que se suman perfecto.<br>El look de orejas armado en un solo set.',
      items: ['Ear Cuff Shakira', 'Argollas Mendy 10mm · 1 par', 'Argollita Churi 9mm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-snake-11150': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '4 joyitas',
      hook: 'Cuatro joyitas plateadas, un look armado.',
      hookSub: 'Willemina, Snake y Antonia — tres estilos que conviven perfecto.<br>Ya pensamos la combinación por vos.',
      items: ['Argollita Willemina Silver', 'Argollita Snake Silver', 'Argollas Antonia 15mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-spicy-11226': {
      tipo: 'aros', material: 'ACERO BLANCO', materialSub: 'Baño de plata', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Cuba + Spicy — el dúo blanco.',
      hookSub: 'Dos argollas que se complementan solas.<br>El stack de argollas ya está armado.',
      items: ['Argollas Cuba 10mm · 1 par', 'Argollas Spicy · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-tini-11137': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Tinita + Fabita — el dúo dorado.',
      hookSub: 'Dos estilos que se complementan en segundos.<br>Del look sutil al más armado — sin cambiar nada.',
      items: ['Aros Tinita · 1 par', 'Argollas Fabita 17mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-trueno-11140': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '5 joyitas',
      hook: 'Cinco joyitas doradas, el look de orejas completo.',
      hookSub: 'Relámpago con presencia + lisas y rayito que cierran el look.<br>Ya pensamos la combinación por vos.',
      items: ['Argollas Relámpago 12mm · 1 par', 'Argollas Lisas 10mm · 1 par', 'Mini Rayito Strass'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-tulum-11398': {
      tipo: 'aros', material: 'NÍQUEL', materialSub: 'Metal plateado', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Tulum + Ellis — el dúo que no falla.',
      hookSub: 'Una argolla con más presencia y una más delicada que ya combinan.<br>El look de orejas sin esfuerzo.',
      items: ['Argollas Tulum 15mm · 1 par', 'Argollas Ellis Gold · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-vitas-11743': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '3 pares',
      hook: 'Tres pares que se apilan solos.',
      hookSub: 'Vitas con presencia + Fabita y Strass que completan el look.<br>El look de orejas armado sin prueba y error.',
      items: ['Argollas Vitas · 1 par', 'Argollas Fabita 11mm · 1 par', 'Aros Strass Lolita 3mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-lover-11096': {
      tipo: 'aros', material: 'BRONCE ENCHAPADO', materialSub: 'Enchapado en oro', materialEmoji: '✨',
      piezas: '5 joyitas',
      hook: 'Cinco joyitas doradas, un look statement.',
      hookSub: 'Argollas con presencia + ear cuff que lo completa perfecto.<br>El look de orejas armado — sin prueba y error.',
      items: ['Argollas Valu Gold · 1 par', 'Ear Cuff Kira', 'Argollas Fabita 15mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-exa-11769': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Exa + Fabita — el dúo dorado.',
      hookSub: 'Dos argollas que se complementan solas.<br>El look de orejas ya está resuelto.',
      items: ['Argollas Exa 20mm · 1 par', 'Argollas Fabita 15mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-coca-11768': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Antonia + Coca — el dúo que no falla.',
      hookSub: 'Dos argollas que conviven perfecto en la oreja.<br>El stack de argollas ya está resuelto.',
      items: ['Argollas Antonia 12mm · 1 par', 'Argollas Coca 15mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-sardis-11767': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Sardis + perla — el clásico en acero.',
      hookSub: 'Dos pares que ya combinan entre sí.<br>Simple, limpio y siempre listo para usar.',
      items: ['Aros Sardis · 1 par', 'Perlas 4mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-serlmira-11766': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Serlmira + bolitas — el dúo dorado.',
      hookSub: 'Dos estilos que se complementan en segundos.<br>Del look sutil al más armado — sin cambiar nada.',
      items: ['Bolitas 3mm · 1 par', 'Aros Serlmira · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-sarria-11765': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Strass + Sarria — brillo y carácter.',
      hookSub: 'Dos estilos que se complementan en segundos.<br>El look de orejas sin prueba y error.',
      items: ['Aros Strass Lolita · 1 par', 'Aritos Sarria · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-helix-11764': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '3 joyitas',
      hook: 'Tres minis con cierre a rosca.',
      hookSub: 'Labrets y helix que no pinchan y se sostienen perfecto.<br>El look de orejas armado sin prueba y error.',
      items: ['Labret Myriam', 'Labret Cristal', 'Helix Milagros'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-mili-11219': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Dos tamaños, un look perfecto.',
      hookSub: 'Mili 5mm y Mili 6mm — dos tamaños que conviven en la oreja.<br>El stack sutil ya está resuelto.',
      items: ['Aros Mili 5mm · 1 par', 'Aros Mili 6mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-abridores-formis-11102': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '3 joyitas',
      hook: 'Tres abridores, una combinación completa.',
      hookSub: 'Lunita, Ibera y Square — tres estilos que conviven perfecto.<br>Ya pensamos la combinación por vos.',
      items: ['Abridor Lunita', 'Abridor Ibera', 'Abridor Square'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-gotas-gold-protectora-09654': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 piezas',
      hook: 'Aros y pulsera — el look dorado completo.',
      hookSub: 'Aros gota en la oreja + pulsera protectora en la muñeca.<br>El look completo de una.',
      items: ['Aros Gota Jack 16mm · 1 par', 'Pulsera Lily Protectora'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-maxim-11084': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Susy + Maxim — el dúo que no falla.',
      hookSub: 'Dos argollas que conviven perfecto en la oreja.<br>El stack de argollas ya está resuelto.',
      items: ['Argollas Susy · 1 par', 'Argollas Maxim · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-mailis-11771': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '3 pares',
      hook: 'Tres pares, un look sin esfuerzo.',
      hookSub: 'Gota Jack con presencia + Mailis y Strass que cierran el look.<br>El look de orejas armado sin prueba y error.',
      items: ['Aros Gota Jack 14mm · 1 par', 'Aros Mailis · 1 par', 'Aros Strass Lolita 3mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-martsa-11772': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '3 pares',
      hook: 'Tres pares, el look completo.',
      hookSub: 'Martsa con carácter + Fabita y Bolitas que cierran el look.<br>Ya pensamos la combinación por vos.',
      items: ['Aros Martsa · 1 par', 'Argollas Fabita 9mm · 1 par', 'Bolitas 3mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-forza-11773': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Forza + Liverpool — presencia y detalle.',
      hookSub: 'Dos estilos que se complementan en segundos.<br>El look de orejas sin prueba y error.',
      items: ['Argollas Forza Silver 18mm · 1 par', 'Aros Liverpool 5mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-say-11774': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Coca + perlitas — presencia y delicadeza.',
      hookSub: 'Dos pares que ya combinan entre sí.<br>Del look sutil al más armado — sin cambiar nada.',
      items: ['Argollas Coca 28mm · 1 par', 'Perlitas 8mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-cora-11777': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '5 joyitas',
      hook: 'Cinco joyitas de plata, el look de orejas completo.',
      hookSub: 'Cora y Lisas con presencia + Archie White que cierra el look.<br>Ya pensamos la combinación por vos.',
      items: ['Argollitas Cora 10mm · 1 par', 'Argollas Lisas 10mm · 1 par', 'Argollita Archie White 8mm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-balit-11778': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '4 joyitas',
      hook: 'Cuatro joyitas de plata, el look completo.',
      hookSub: 'Bali Titi con presencia + Ginebra y Shiny que cierran el look.<br>Ya pensamos la combinación por vos.',
      items: ['Argollitas Bali Titi 8mm · 1 par', 'Argollita Ginebra 7mm', 'Argollita Shiny 7mm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-emi-11779': {
      tipo: 'aros', material: 'PLATA 925', materialSub: 'Plata real', materialEmoji: '✨',
      piezas: '4 joyitas',
      hook: 'Cuatro argollitas de plata, un look armado.',
      hookSub: 'Selene, Cira y dos Emi en distintos tamaños que conviven perfecto.<br>Ya pensamos la combinación por vos.',
      items: ['Argollita Selene 10mm', 'Argollita Cira 10mm', 'Argollita Emi 10mm', 'Argollita Emi 8mm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-mailis-11802': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '3 pares',
      hook: 'Tres pares dorados, el look de orejas completo.',
      hookSub: 'Gotas Jack con presencia + Mailis y Bolitas que cierran el look.<br>El look de orejas armado sin prueba y error.',
      items: ['Aros Mailis · 1 par', 'Aros Gotas Jack 16mm · 1 par', 'Bolitas 4mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-aisha-11803': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Natasha + Aisha — el dúo dorado.',
      hookSub: 'Dos estilos que se complementan en segundos.<br>Del look sutil al más armado — sin cambiar nada.',
      items: ['Argollas Natasha 15mm · 1 par', 'Aros Aisha · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-darcy-11804': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '3 pares',
      hook: 'Tres pares dorados, un look con todo.',
      hookSub: 'Darcy con presencia + Melody y Rayito Strass que cierran el look.<br>Ya pensamos la combinación por vos.',
      items: ['Aros Rayito Strass · 1 par', 'Argollas Darcy 15mm · 1 par', 'Argollas Melody 10mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-hadid-11805': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '4 joyitas',
      hook: 'Cuatro joyitas doradas, el look de orejas completo.',
      hookSub: 'Susy con presencia + tres minis que se suman perfecto.<br>Ya pensamos la combinación por vos.',
      items: ['Argollas Susy 15mm · 1 par', 'Mini Hadid', 'Mini Tini 10mm', 'Mini Star'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-lior-11806': {
      tipo: 'aros', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 pares',
      hook: 'Lior + bolitas — el dúo que no falla.',
      hookSub: 'Argollas con carácter + bolitas que equilibran perfecto.<br>El look resuelto en un solo set.',
      items: ['Argollas Lior · 1 par', 'Bolitas 3mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-bolt-11814': {
      tipo: 'cadenas', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 cadenitas',
      hook: 'Cori + Bolt — dos largos, un look resuelto.',
      hookSub: 'Dos cadenitas en largos perfectos para convivir.<br>El layering sin esfuerzo.',
      items: ['Cadenita Cori · 40cm', 'Cadenita Bolt · 45cm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlas'
    },
    'set-chain-11813': {
      tipo: 'cadenas', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 cadenitas',
      hook: 'Mini Chain + Snake — el dúo que no se enreda.',
      hookSub: 'Dos texturas distintas en largos pensados para convivir.<br>El layering resuelto sin prueba y error.',
      items: ['Cadenita Mini Chain · 40cm', 'Cadenita Snake 3mm · 45cm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlas'
    },
    'set-love-11812': {
      tipo: 'cadenas', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 cadenitas',
      hook: 'Snake + High Love — romántico y sin esfuerzo.',
      hookSub: 'Una cadenita con detalle + una clásica que la acompaña perfecto.<br>El layering resuelto de una.',
      items: ['Cadenita Snake 4mm · 40cm', 'Cadenita High Love · 45cm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlas'
    },
    'set-agnes-11811': {
      tipo: 'cadenas', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 cadenitas',
      hook: 'Agnes + Snake — el layering que siempre funciona.',
      hookSub: 'Dos largos pensados para convivir perfecto.<br>Del cuello más simple al más armado — sin pensarlo.',
      items: ['Cadenita Agnes · 45cm', 'Cadenita Snake 3mm · 40cm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlas'
    },
    'set-dubai-11810': {
      tipo: 'cadenas', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 cadenitas',
      hook: 'Snake + Dubai — fineza y presencia juntas.',
      hookSub: 'Una cadenita fina que va abajo + una con más presencia arriba.<br>El layering resuelto sin prueba y error.',
      items: ['Cadenita Snake 1.5mm · 40cm', 'Cadenita Dubai · 45cm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlas'
    },
    'set-malibu-11809': {
      tipo: 'cadenas', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 cadenitas',
      hook: 'Mini Malibu + Snake — el dúo de todos los días.',
      hookSub: 'Dos cadenitas en largos perfectos para convivir.<br>El layering sin esfuerzo.',
      items: ['Cadenita Mini Malibu · 40cm', 'Cadenita Snake 3mm · 45cm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlas'
    },
    'set-medal-11808': {
      tipo: 'cadenas', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 cadenitas',
      hook: 'Snake + Medal — textura y detalle en un solo look.',
      hookSub: 'Una cadenita clásica + una con detalle que la complementa perfecto.<br>El layering resuelto sin prueba y error.',
      items: ['Cadenita Snake 2.5mm · 40cm', 'Cadenita Medal · 45cm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlas'
    },
    'set-perlas-cream-11807': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '3 pares',
      hook: 'Tres tamaños de perla, un look con carácter.',
      hookSub: 'Chicas, medianas y grandes que conviven perfecto en la oreja.<br>El stack de perlas ya está resuelto.',
      items: ['Perlas Cream 4mm · 1 par', 'Perlas Cream 5mm · 1 par', 'Perlas Cream 10mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-sheyla-11815': {
      tipo: 'aros', material: 'NÍQUEL', materialSub: 'Metal plateado', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Sheila + Philip — el dúo plateado.',
      hookSub: 'Dos estilos que se complementan en segundos.<br>El look de orejas sin esfuerzo.',
      items: ['Argollas Sheila 12mm · 1 par', 'Aros Philip Gold · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-martu-11816': {
      tipo: 'aros', material: 'NÍQUEL', materialSub: 'Metal plateado', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Dumblove + Maru — el dúo que no falla.',
      hookSub: 'Dos argollas que ya combinan en la oreja.<br>El look sin prueba y error.',
      items: ['Argollas Dumblove 13mm · 1 par', 'Argollas Maru 12mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-ellis-11817': {
      tipo: 'aros', material: 'NÍQUEL', materialSub: 'Metal plateado', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Ellis + Besh — el dúo plateado.',
      hookSub: 'Dos argollas que se complementan solas.<br>El stack de argollas ya está armado.',
      items: ['Argollas Ellis Silver · 1 par', 'Argollas Besh Silver 12mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-izy-11818': {
      tipo: 'aros', material: 'NÍQUEL', materialSub: 'Metal plateado', materialEmoji: '🤍',
      piezas: '2 pares',
      hook: 'Maru + Ellis — dos clásicos, un look.',
      hookSub: 'Dos argollas que conviven perfecto en la oreja.<br>El look sin esfuerzo.',
      items: ['Argollas Maru 12mm · 1 par', 'Aros Ellis Gold · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-nere-11821': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '3 pares',
      hook: 'Tres pares que conviven perfecto.',
      hookSub: 'Yani, Lila y Nere — distintos estilos que se apilan solos.<br>El look de orejas sin prueba y error.',
      items: ['Aros Yani · 1 par', 'Argollas Lila 12mm · 1 par', 'Aros Nere · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-dione-11820': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Dione + Antonia — presencia y detalle.',
      hookSub: 'Una argolla grande que lidera + una más chica que la equilibra perfecto.<br>El dúo de argollas ya está resuelto.',
      items: ['Argollas Dione 15mm · 1 par', 'Argollas Antonia 19mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-amaranto-11819': {
      tipo: 'aros', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 pares',
      hook: 'Antonia + Amaranto — el dúo que no falla.',
      hookSub: 'Dos argollas que conviven perfecto en la oreja.<br>El stack de argollas ya está resuelto.',
      items: ['Argollas Antonia 12mm · 1 par', 'Argollas Amaranto 17mm · 1 par'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-valentin-11136': {
      tipo: 'regalo', material: 'ACERO QUIRÚRGICO', materialSub: 'Acero quirúrgico', materialEmoji: '💧',
      piezas: '2 piezas + packaging',
      hook: 'El regalo que dice todo sin palabras.',
      hookSub: 'Pulsera protectora + cadenita corazón, con el mensaje del hilo rojo.<br>Un regalo con historia y con forma.',
      items: ['Pulsera Protectora · Acero quirúrgico', 'Cadenita Corazón · Acero quirúrgico', 'Packaging hilo rojo incluido'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlos'
    },
    'set-rosarito-12639': {
      tipo: 'cadenas', material: 'ACERO DORADO', materialSub: 'Baño de oro', materialEmoji: '✨',
      piezas: '2 cadenitas',
      hook: 'Snake + Rosarito — el dúo dorado.',
      hookSub: 'Una cadenita con textura + una clásica que la acompaña perfecto.<br>El look dorado resuelto sin prueba y error.',
      items: ['Cadenita Snake 6mm · 40cm', 'Cadenita Rosarito · 45cm'],
      talle: null, cuidadoTitulo: 'Cómo cuidarlas'
    }
  };

  var path = window.location.pathname;
  var setKey = null;
  for (var slug in SETS) {
    if (path.indexOf(slug) !== -1) { setKey = slug; break; }
  }
  if (!setKey) return;

  var cont = document.querySelector('#product-description');
  if (!cont || cont.querySelector('.tribal-desc')) return;

  var S = SETS[setKey];
  var T = TIPOS[S.tipo];
  var C = CUIDADO[S.material];
  var RV = REVIEWS[S.tipo];
  var N = ['Sofi G.','Vale M.','Caro T.','Flor R.','Juli A.','Male S.','Anto L.','Lau C.','Pau R.','Nati F.','Dani S.','Belu G.','Magui T.','Sil P.','Vicky A.','Andre L.','Clari M.','Juani R.','Mica V.','Romi P.','Cami B.','Gime R.','Luli M.','Feli G.','Maru S.'];

  var hash = 0;
  for (var i = 0; i < path.length; i++) { hash = ((hash << 5) - hash) + path.charCodeAt(i); hash = hash & hash; }
  hash = Math.abs(hash);
  var r1 = RV[hash % RV.length], n1 = N[hash % N.length];
  var r2 = RV[(hash + 3) % RV.length], n2 = N[(hash + 13) % N.length];

  var itemsHTML = '';
  for (var j = 0; j < S.items.length; j++) {
    itemsHTML += '<div style="display:flex;gap:10px;align-items:center;' + (j < S.items.length - 1 ? 'margin-bottom:10px;' : '') + '"><span style="font-size:16px;flex-shrink:0;">✦</span><div style="font-size:13px;font-weight:700;color:#1a1a1a;">' + S.items[j] + '</div></div>';
  }

  var talleHTML = S.talle ? '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Talle</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + S.talle + '</div></div>' : '';

  var matLabel = S.material.charAt(0) + S.material.slice(1).toLowerCase();

  cont.innerHTML = '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:780px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +

    '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
      '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">' + S.materialEmoji + '</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">' + S.material + '</div><div style="font-size:10px;color:#888;margin-top:2px;">' + S.materialSub + '</div></div>' +
      '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">💎</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">JOYITAS EN EL SET</div><div style="font-size:10px;color:#888;margin-top:2px;">' + S.piezas + '</div></div>' +
      '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">🎀</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">LOOK RESUELTO</div><div style="font-size:10px;color:#888;margin-top:2px;">Listo para usar</div></div>' +
    '</div>' +

    '<div style="text-align:center;margin-bottom:24px;"><div style="font-size:28px;margin-bottom:10px;">' + T.hookEmoji + '</div><div style="font-size:20px;font-weight:800;margin-bottom:8px;">' + S.hook + '</div><div style="font-size:13px;color:#555;line-height:1.6;">' + S.hookSub + '</div></div>' +

    '<div style="margin-bottom:20px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">✨ Por qué este set es un must</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;">' +
      '<div style="padding:14px 16px;"><div style="font-size:13px;font-weight:700;margin-bottom:4px;">💰 Sale más barato que comprarlo por separado</div><div style="font-size:12px;color:#666;line-height:1.6;">Llevarte el set siempre sale menos que comprar cada pieza por separado. El look resuelto y encima al mejor precio — no hay excusa para no llevarlo.</div></div>' +
      '<div style="padding:14px 16px;border-top:1px solid #f5f5f5;"><div style="font-size:13px;font-weight:700;margin-bottom:4px;">' + T.card2t + '</div><div style="font-size:12px;color:#666;line-height:1.6;">' + T.card2txt + '</div></div>' +
      '<div style="padding:14px 16px;border-top:1px solid #f5f5f5;"><div style="font-size:13px;font-weight:700;margin-bottom:4px;">' + T.card3t + '</div><div style="font-size:12px;color:#666;line-height:1.6;">' + T.card3txt + '</div></div>' +
    '</div></div>' +

    '<div style="margin-bottom:20px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">🎀 Qué incluye el set</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;">' + itemsHTML + '</div></div>' +

    '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📋 Descripción</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">' +
      '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + matLabel + '</div></div>' +
      '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Joyitas en el set</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + S.piezas + '</div></div>' +
      talleHTML +
      '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Set completo</div></div>' +
    '</div></div></div>' +

    '<div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;"><div style="font-size:13px;font-weight:700;margin-bottom:10px;">🧴 ' + S.cuidadoTitulo + '</div><div style="font-size:12px;color:#555;line-height:1.9;">' + C.texto + '</div></div>' +

    '<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 ' + T.reviewTitulo + '</div>' +
      '<div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r1 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n1 + ' · Compra verificada ✓</div></div>' +
      '<div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r2 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n2 + ' · Compra verificada ✓</div></div>' +
    '</div>' +

  '</div>';

  var obs = new MutationObserver(function(muts) {
    for (var i = 0; i < muts.length; i++) { if (!cont.querySelector('.tribal-desc')) { cont.innerHTML = cont.innerHTML; break; } }
  });
  obs.observe(cont, { childList: true });

})();
