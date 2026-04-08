(function() {
  var N = [
    'Sofi G.','Vale M.','Caro T.','Flor R.','Juli A.',
    'Male S.','Anto L.','Lau C.','Pau R.','Nati F.',
    'Dani S.','Belu G.','Magui T.','Sil P.','Vicky A.',
    'Andre L.','Clari M.','Juani R.','Mica V.','Romi P.',
    'Cami B.','Gime R.','Luli M.','Feli G.','Maru S.',
    'Ceci A.','Agus T.','Bea M.','Lore C.','Pipi R.',
    'Mora G.','Tere V.','Meli A.','Rochi S.','Aye M.',
    'Soli R.','Valen G.','Jime M.','Delfina C.','Bren A.',
    'Cande R.','Lu M.','Ine G.','Fran S.','Ro A.',
    'Noe M.','Cris R.','Ale G.','Yami S.','Gabi M.'
  ];
  var R = [
    '"La compré y no me la saco más. El dorado es hermoso y dura."',
    '"Me la preguntan siempre. Se ve cara y no lo es."',
    '"La uso todos los días, hasta en el gimnasio. Sigue igual que el primer día."',
    '"Tengo piel súper sensible y nunca me molestó. Un básico real."',
    '"Se ve exactamente igual que una de plata. Nadie nota la diferencia."',
    '"El brillo es hermoso. La cuido bien y sigue igual que el primer día."',
    '"Los detalles son una locura. Se ve carísima y me preguntan dónde la compré."',
    '"El diseño es único, no encontré nada igual en ningún otro lado."',
    '"La usé para un casamiento y quedó perfecta. Se veía re cara y la pagué poco."',
    '"Los detalles y el brillo son hermosos. Para el precio que tiene es increíble."',
    '"Divina. La uso todos los días y sigue igual."',
    '"Perfecta. Llegó rápido y es igual a la foto."',
    '"Me encantó la calidad. Se nota que es buena."',
    '"La compré y ya la quiero en otro modelo. Adictiva."',
    '"Cómoda y hermosa. Combina con todo."',
    '"La mejor compra. Es exactamente lo que buscaba."',
    '"Hermosa. La calidad es top para el precio."',
    '"Llegó perfecta y se ve de muy buena calidad."',
    '"Re linda. Ya se la recomendé a todas mis amigas."',
    '"La tengo hace meses y sigue igual. Muy buena calidad."',
    '"Me llegó y me la puse al toque. Perfecta."',
    '"Es exactamente como en la foto. Llegó rápido."',
    '"Posta que es hermosa. La uso todos los días."',
    '"Un básico que no puede faltar."',
    '"No me la saco ni para dormir. Es comodísima."',
    '"La mejor inversión. Vale cada peso."',
    '"Fina, elegante y de buena calidad. Qué más querés."',
    '"El acabado es impecable. Se nota que es buena calidad."',
    '"La uso con todo: casual, arreglada, siempre combina."',
    '"Llegó súper bien embalada y antes de lo esperado."',
    '"Mi accesorio favorito del momento. La recomiendo."',
    '"Es más linda en persona que en la foto, y eso que la foto ya es buena."',
    '"Calidad increíble para el precio. No esperaba tanto."',
    '"La uso todos los días y sigue como nueva."',
    '"Me la regalaron y fue el mejor regalo que recibí."',
    '"Combina con absolutamente todo lo que tengo."',
    '"Es finita y delicada pero se ve un montón. Me encanta."',
    '"Perfecta para usar sola o combinada. Muy versátil."',
    '"Llegó antes de lo esperado y en perfecto estado."',
    '"Muy buena calidad para el precio. Súper recomendable."',
    '"Me obsesioné. La quiero en todos los modelos."',
    '"Es exactamente lo que necesitaba para completar mi look."',
    '"La compré para regalo y la terminé quedando yo. Jaja."',
    '"Súper cómoda, no molesta para nada en todo el día."',
    '"La recibí y ya la quiero en otro modelo también."',
    '"No le pierdo el brillo, sigue igual desde el primer día."',
    '"La tengo en dos modelos. Me obsesioné."',
    '"Llegó sellada y todo impecable."',
    '"Se ve cara y no lo es. La recomiendo."',
    '"La mejor. Ya es mi favorita."'
  ];
  var R_PROT = [
    '"La uso desde que me llegó y no me la saco más. Me da tranquilidad tenerla puesta."',
    '"Se la compré a mi nena y a mí también. El ojito es hermoso y el significado no tiene precio."',
    '"La recibí y la até al toque. Hermosa y con mucho significado."',
    '"Me la regalaron y la uso todos los días. Me encanta el mensaje que tiene."',
    '"La compré para regalar y terminé quedándome una también. Es muy especial."',
    '"El ojito es divino. Simple, bonito y con mucho significado."',
    '"Me la ató mi mamá en la muñeca izquierda y no me la saco más."',
    '"Es el regalo más lindo y significativo que le pude dar. La amó."',
    '"Se la compré a toda mi familia. Es un regalo que siempre emociona."',
    '"Hermosa y delicada. El hilo rojo con el ojito es una combinación perfecta."',
    '"La uso con todo y además me protege. No hay nada mejor."',
    '"Llegó rápido y bien embalada. El detalle del ojito es precioso."',
    '"Me la compré para renovar la que se me rompió. Señal de que cumplió su trabajo."',
    '"Muy linda y con mucho significado. La recomiendo como regalo."',
    '"La uso hace meses y sigue igual de linda. Me encanta."',
    '"Es simple pero con un significado enorme. La amo."',
    '"Se la compré a mi hija recién nacida. Es perfecta para protegerla."',
    '"El ojito brilla hermoso. Se nota que es de buena calidad."',
    '"Un regalo único y significativo. Todo el mundo me pregunta dónde la compré."',
    '"La uso en la muñeca izquierda como dice la tradición. Me da paz."',
    '"Hermosa. El hilo rojo con el dije del ojito es una combinación única."',
    '"La compré por el significado y también porque es muy linda."',
    '"Se la regalé a mi mejor amiga y le encantó. La usa todos los días."',
    '"Es un accesorio que va más allá de la moda. Tiene alma."',
    '"La renové por tercera vez. Cada vez que se rompe sé que me protegió."'
  ];
  var MAT = {
    'ACERO QUIRÚRGICO': {
      badge1e: '💪', badge1t: 'ACERO QUIRÚRGICO', badge1s: 'Hipoalergénico',
      badge3e: '🩷', badge3t: 'NO SE OXIDA', badge3s: 'Dura para siempre',
      cardH: '💪 Por qué el acero quirúrgico es el más elegido',
      card1t: '💧 Agua, sudor, pileta — no le importa nada',
      card1txt: 'Resistente al uso diario más intenso. No se oxida, no se ennegrece, no te da trabajo. El material ideal para quien la quiere puesta todo el día.',
      cuidado: '✓ Resistente al agua y al sudor — podés usarla todo el día<br>✓ Limpiá con un paño suave si hace falta<br>✓ No se oxida ni ennegrece con el uso 💪',
      r1: 2, r2: 3
    },
    'ACERO DORADO': {
      badge1e: '✨', badge1t: 'ACERO DORADO', badge1s: 'Baño de oro',
      badge3e: '🩷', badge3t: 'NO SE OXIDA', badge3s: 'Dura para siempre',
      cardH: '✨ Por qué el acero dorado es el favorito',
      card1t: '💛 El dorado que no se va',
      card1txt: 'Baño de oro de calidad sobre acero. El color se mantiene con el uso cotidiano — no es el dorado que desaparece a las semanas.',
      cuidado: '✓ Evitá el contacto prolongado con agua, perfume y cremas<br>✓ Guardala separada para que no se raye<br>✓ El baño de oro dura más cuando la cuidás 🤍',
      r1: 0, r2: 1
    },
    'ACERO BLANCO': {
      badge1e: '🤍', badge1t: 'ACERO BLANCO', badge1s: 'Baño de plata 925',
      badge3e: '✨', badge3t: 'BRILLO DIVINO', badge3s: 'Color plata real',
      cardH: '🤍 Por qué el acero blanco es una joya inteligente',
      card1t: '✨ El brillo de la plata, a otro precio',
      card1txt: 'Tiene un baño de plata 925 que le da ese color característico y luminoso. Se ve igual que la plata pero es mucho más accesible — la forma inteligente de sumar piezas hermosas.',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátela antes de bañarte, hacer deporte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el baño de plata dura muchísimo 🤍',
      r1: 4, r2: 5
    },
    'BRONCE ENCHAPADO': {
      badge1e: '🌟', badge1t: 'BRONCE ENCHAPADO', badge1s: 'Acabado premium',
      badge3e: '🌸', badge3t: 'DISEÑO EXCLUSIVO', badge3s: 'Detalles únicos',
      cardH: '🌟 Por qué el bronce enchapado es diferente',
      card1t: '🌸 Diseños que el acero no puede lograr',
      card1txt: 'El bronce permite engarces más delicados y formas más complejas. Cada pieza tiene un nivel de detalle que se nota — son las joyitas que generan conversación.',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátela antes de bañarte, hacer deporte o aplicar cremas y perfumes<br>✓ El baño puede desgastarse con el tiempo — cuanto más la cuidás, más dura 🤍',
      r1: 6, r2: 7
    },
    'NIQUEL': {
      badge1e: '🎉', badge1t: 'NÍQUEL', badge1s: 'Look de fiesta',
      badge3e: '✨', badge3t: 'BRILLOS Y DETALLES', badge3s: 'Diseño especial',
      cardH: '🎉 Por qué el níquel es la opción de fiesta',
      card1t: '✨ Diseños con brillo y detalle, a un precio accesible',
      card1txt: 'El níquel permite diseños elaborados con brillos y detalles especiales a un precio muy accesible. Ideal para completar un look de fiesta o evento sin gastar de más.',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátela antes de bañarte o aplicar cremas y perfumes<br>✓ Con cuidado el brillo y el detalle duran mucho más 🤍',
      r1: 8, r2: 9
    },
    'PLATA 925': {
      badge1e: '✨', badge1t: 'PLATA 925 REAL', badge1s: 'Plata 925',
      badge3e: '💫', badge3t: 'COMBINA CON TODO', badge3s: 'Sola o en stack',
      cardH: '✨ Por qué la plata 925 es la mejor elección',
      card1t: '💫 La pulsera de calidad real',
      card1txt: 'Plata 925 de verdad — el material más noble. La base perfecta para usar sola o combinar con otras pulseras.',
      cuidado: '✓ Limpiá con un paño suave y seco<br>✓ Guardala separada de otras piezas para evitar rozaduras<br>✓ Es una joyita delicada — con un poco de amor dura muchísimo 🤍',
      r1: 10, r2: 11
    }
  };
  var MEDIDA = '<div style="border:1px solid #e8e8e8;border-radius:12px;overflow:hidden;margin-bottom:24px;"><div style="background:#df598c;color:white;padding:14px 16px;font-size:13px;font-weight:700;letter-spacing:0.3px;">📏 Sobre la medida de nuestras argollas</div><div style="padding:16px;"><p style="font-size:12px;color:#555;line-height:1.8;margin:0 0 8px;">La medida que indicamos es el <strong style="color:#1a1a1a;">diámetro externo</strong> de la argolla — o sea, el tamaño total de un extremo al otro por afuera.</p><p style="font-size:12px;color:#555;line-height:1.8;margin:0 0 10px;">Por ejemplo, una argolla de <strong style="color:#1a1a1a;">DIAM</strong> mide DIAM de lado a lado por fuera.</p><img src="https://d1a9qnv764bsoo.cloudfront.net/stores/001/149/801/rte/medida.png" style="width:100%;max-width:280px;display:block;margin:0 auto;border-radius:8px;" alt="Medida argolla"></div></div>';
  var MIX = '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">🔥 Mix de pulseras — el trend que no para</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:flex;flex-direction:column;gap:12px;"><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">💫</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Sola — minimalista y con clase</div><div style="font-size:12px;color:#666;line-height:1.6;">Una sola pulsera bien elegida ya eleva cualquier look. Simple, limpio, efectivo.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">✨</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Mix de pulseras — el look que para el tiempo</div><div style="font-size:12px;color:#666;line-height:1.6;">Dos, tres o más pulseras juntas de distintos estilos y grosores. Cuando lo probás no podés volver atrás.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🌟</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Mix de materiales — sin reglas</div><div style="font-size:12px;color:#666;line-height:1.6;">Dorado con plateado, pulsera con cadenita — las reglas de no mezclar metales quedaron en el pasado. Hoy el mix es el look.</div></div></div></div></div></div>';
  var AVISO_CLIP = '<div style="background:#f0f8ff;border:1px solid #b3d9f7;border-radius:8px;padding:14px 16px;margin-bottom:24px;"><div style="font-size:12px;color:#1a5276;line-height:1.7;">👂 <strong>Sin perforación, sin problema:</strong> estos aros tienen cierre clip — se sujetan a la oreja por presión, sin necesitar perforación. Ideales para quienes no tienen las orejas perforadas o quieren usar aros en cualquier parte de la oreja.</div></div>';
  var URL_FALLBACK_ARGOLLAS = {
    '/productos/sin-fin-7mm-00616/':             'ACERO QUIRÚRGICO',
    '/productos/cubanitas-20mm-04831/':          'ACERO BLANCO',
    '/productos/melody-10mm-08796/':             'ACERO DORADO',
    '/productos/paquina-15mm-08640/':            'ACERO QUIRÚRGICO',
    '/productos/exa-20mm-11490-1v52r/':          'ACERO DORADO',
    '/productos/exa-20mm-11489-kx3o1/':          'ACERO QUIRÚRGICO',
    '/productos/exa-20mm-11488-mo4bn/':          'ACERO BLANCO',
    '/productos/adams-13mm-11486-16bs4/':        'ACERO QUIRÚRGICO',
    '/productos/queda-15mm-11454-1dzdv/':        'ACERO QUIRÚRGICO',
    '/productos/jackie-25mm-08093/':             'ACERO DORADO',
    '/productos/jackie-34mm-07432/':             'ACERO QUIRÚRGICO',
    '/productos/jackie-22mm-08121/':             'ACERO BLANCO',
    '/productos/jackie-22mm-08092/':             'ACERO DORADO',
    '/productos/juana-60mm-00661-bchzw/':        'ACERO QUIRÚRGICO',
    '/productos/jackie-25mm-08131/':             'ACERO QUIRÚRGICO',
    '/productos/jackie-25mm-08122/':             'ACERO BLANCO',
    '/productos/juana-50mm-00659/':              'ACERO QUIRÚRGICO',
    '/productos/delvina-12mm-11499-mqzja/':      'ACERO QUIRÚRGICO',
    '/productos/adams-16mm-11487-vqhsc/':        'ACERO QUIRÚRGICO',
    '/productos/adams-10mm-11485-3h1g7/':        'ACERO QUIRÚRGICO',
    '/productos/jackie-22mm-08130/':             'ACERO QUIRÚRGICO',
    '/productos/jackie-40mm-08139/':             'ACERO BLANCO',
    '/productos/jackie-32mm-08137/':             'ACERO BLANCO',
    '/productos/jackie-30mm-08127/':             'ACERO DORADO',
    '/productos/juana-55mm-00660/':              'ACERO QUIRÚRGICO',
    '/productos/jackie-30mm-07431/':             'ACERO QUIRÚRGICO',
    '/productos/jackie-34mm-08138/':             'ACERO BLANCO',
    '/productos/jackie-35mm-08128/':             'ACERO DORADO',
    '/productos/jackie-40mm-08129/':             'ACERO DORADO',
    '/productos/clicker-8mm-09022-e6762/':       'ACERO QUIRÚRGICO',
    '/productos/clicker-mariposa-11310-1xf1e/':  'ACERO QUIRÚRGICO',
    '/productos/emi-12mm-07082/':                'ACERO QUIRÚRGICO',
    '/productos/sin-fin-12mm-05374/':            'ACERO QUIRÚRGICO',
    '/productos/sin-fin-12mm-black-07080/':      'ACERO QUIRÚRGICO',
    '/productos/sin-fin-slim-10mm-08996/':       'ACERO QUIRÚRGICO',
    '/productos/duna-derecha-05610/':            'ACERO DORADO'
  };
  var URL_UNIDAD_ARGOLLAS = {
    '/productos/emi-10mm-07100/':                true,
    '/productos/sin-fin-10mm-07102/':            true,
    '/productos/sin-fin-7mm-00616/':             true,
    '/productos/sin-fin-slim-7mm-00620-do9z2/':  true,
    '/productos/celine-12mm-07290/':             true,
    '/productos/amara-heart-12mm-11317-1sfqg/':  true,
    '/productos/churi-9mm-08439/':               true,
    '/productos/clicker-10mm-09002-p3vrm/':      true,
    '/productos/clicker-12mm-11306-78hxm/':      true,
    '/productos/clicker-8mm-09001-kn1lu/':       true,
    '/productos/lisa-10mm-07143-xxtax/':         true,
    '/productos/sin-fin-10mm-02753-kji07/':      true,
    '/productos/sin-fin-11mm-05166-owep5/':      true,
    '/productos/sin-fin-11mm-slim-02754-1i0wf/': true,
    '/productos/sin-fin-9mm-slim-06207-pyap0/':  true,
    '/productos/clicker-8mm-09022-e6762/':       true,
    '/productos/clicker-mariposa-11310-1xf1e/':  true,
    '/productos/emi-12mm-07082/':                true,
    '/productos/sin-fin-12mm-05374/':            true,
    '/productos/sin-fin-12mm-black-07080/':      true,
    '/productos/sin-fin-slim-10mm-08996/':       true,
    '/productos/duna-derecha-05610/':            true
  };
  var URL_FALLBACK_AROS = {
    '/productos/gota-jack-23mm-09353/':          'ACERO DORADO',
    '/productos/bionica-11505-1sbgh/':           'ACERO DORADO',
    '/productos/mini-bionica-11504-1uytv/':      'ACERO DORADO',
    '/productos/shory-11500-uzewd/':             'ACERO DORADO',
    '/productos/forgon-11496-1uttl/':            'ACERO DORADO',
    '/productos/song-11493-1p8m0/':              'ACERO DORADO',
    '/productos/aisha-11476-1m911/':             'ACERO DORADO',
    '/productos/serlmira-11470-np6w9/':          'ACERO DORADO',
    '/productos/shory-11501-419df/':             'ACERO QUIRÚRGICO',
    '/productos/forgon-11495-1wvqr/':            'ACERO QUIRÚRGICO',
    '/productos/song-11494-1rvca/':              'ACERO QUIRÚRGICO',
    '/productos/sardis-11491-qc4fm/':            'ACERO QUIRÚRGICO',
    '/productos/noor-white-11479-1tekk/':        'ACERO QUIRÚRGICO',
    '/productos/noor-black-11478-1733o/':        'ACERO QUIRÚRGICO',
    '/productos/aleia-white-11475-gp3qq/':       'ACERO QUIRÚRGICO',
    '/productos/aleia-pink-11474-1xq90/':        'ACERO QUIRÚRGICO',
    '/productos/sarria-11455-63bwe/':            'ACERO QUIRÚRGICO',
    '/productos/gota-jack-18mm-09094-fa2pe/':    'ACERO QUIRÚRGICO',
    '/productos/amalfi-gold-08675/':             'ACERO DORADO',
    '/productos/corazon-clip-11449-we49i/':      'ACERO DORADO',
    '/productos/ilira-clip-11542-1pbff/':        'ACERO DORADO',
    '/productos/ilira-clip-11543-1esc8/':        'ACERO QUIRÚRGICO',
    '/productos/corazon-clip-11448-nx2av/':      'ACERO QUIRÚRGICO'
  };
  var URL_UNIDAD_AROS = {
    '/productos/mini-kate-06550/':               true,
    '/productos/hadid-10688-hirm0/':             true,
    '/productos/strar-08661/':                   true,
    '/productos/positano-silver-08676/':         true,
    '/productos/mini-coris-08791/':              true,
    '/productos/amalfi-gold-08675/':             true,
    '/productos/corazon-clip-11449-we49i/':      true,
    '/productos/ilira-clip-11542-1pbff/':        true,
    '/productos/ilira-clip-11543-1esc8/':        true,
    '/productos/corazon-clip-11448-nx2av/':      true
  };
  var URL_CIERRE_AROS = {
    '/productos/mini-kate-06550/':               'Bolita a rosca',
    '/productos/positano-silver-08676/':         'Bolita a rosca',
    '/productos/amalfi-gold-08675/':             'Bolita a rosca',
    '/productos/corazon-clip-11449-we49i/':      'Clip',
    '/productos/ilira-clip-11542-1pbff/':        'Clip',
    '/productos/ilira-clip-11543-1esc8/':        'Clip',
    '/productos/corazon-clip-11448-nx2av/':      'Clip'
  };
  var URL_CLIP_AROS = {
    '/productos/corazon-clip-11449-we49i/':      true,
    '/productos/ilira-clip-11542-1pbff/':        true,
    '/productos/ilira-clip-11543-1esc8/':        true,
    '/productos/corazon-clip-11448-nx2av/':      true
  };
  var URL_FALLBACK_PULSERAS = {
    '/productos/chain-04341/':                   'ACERO BLANCO',
    '/productos/froxy-08639/':                   'ACERO DORADO',
    '/productos/snake-08724/':                   'ACERO QUIRÚRGICO',
    '/productos/cristal-red-10345-1k4oq/':       'ACERO QUIRÚRGICO',
    '/productos/pia-11502-1rhfp/':               'ACERO QUIRÚRGICO',
    '/productos/caramel-11469-wmz8r/':           'ACERO QUIRÚRGICO',
    '/productos/talia-11460-1873f/':             'ACERO QUIRÚRGICO',
    '/productos/kenysa-11492-1fm8h/':            'ACERO DORADO',
    '/productos/caramel-11468-1qb03/':           'ACERO DORADO',
    '/productos/destiny-11466-y7fac/':           'ACERO DORADO',
    '/productos/munda-11467-rvy8p/':             'ACERO DORADO',
    '/productos/yandel-11464-1e0uo/':            'ACERO DORADO',
    '/productos/shanala-11459-r1tl8/':           'ACERO DORADO',
    '/productos/talia-10212-1euo6/':             'ACERO DORADO',
    '/productos/pia-11503-144th/':               'ACERO DORADO'
  };
  var URL_PROTECTORAS = {
    '/productos/protectora-laila-09963-mffnl/':  'Hilo rojo · Dije ojito · Bolitas plata 925',
    '/productos/protectora-lily-06341-guonr/':   'Hilo rojo · Dije ojito'
  };
  var URL_MATERIAL_CUSTOM = {
    '/productos/cristal-red-10345-1k4oq/':       'Tanza y cristales'
  };

  function detectarTipo() {
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    if (URL_PROTECTORAS[path]) return 'protectora';
    if (URL_FALLBACK_ARGOLLAS[path]) return 'argolla';
    if (URL_FALLBACK_AROS[path]) return 'aro';
    if (URL_FALLBACK_PULSERAS[path]) return 'pulsera';
    var breadcrumb = document.querySelector('[class*="breadcrumb"]');
    if (!breadcrumb) return null;
    var txt = breadcrumb.textContent.toUpperCase();
    if (txt.indexOf('TOBILLERAS') !== -1) return 'tobillera';
    if (txt.indexOf('ARGOLLAS') !== -1) {
      if (txt.indexOf('PLATA') !== -1) return null;
      return 'argolla';
    }
    if (txt.indexOf('AROS') !== -1) return 'aro';
    if (txt.indexOf('PULSERAS') !== -1) return 'pulsera';
    return null;
  }

  function getMaterial(tipo) {
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    if (tipo === 'argolla' && URL_FALLBACK_ARGOLLAS[path]) return URL_FALLBACK_ARGOLLAS[path];
    if (tipo === 'aro' && URL_FALLBACK_AROS[path]) return URL_FALLBACK_AROS[path];
    if (tipo === 'pulsera' && URL_FALLBACK_PULSERAS[path]) return URL_FALLBACK_PULSERAS[path];
    var items = document.querySelectorAll('[class*="breadcrumb"] a, [class*="breadcrumb"] span, [class*="breadcrumb"] li');
    for (var i = 0; i < items.length; i++) {
      var txt = items[i].textContent.trim().toUpperCase().replace(/\s+/g, ' ');
      if (MAT[txt]) return txt;
      if (txt === 'NÍQUEL' || txt === 'NIQUEL') return 'NIQUEL';
    }
    return null;
  }

  function getDiametro() {
    var h1 = document.querySelector('h1');
    if (!h1) return null;
    var m = h1.textContent.match(/(\d+)mm/i);
    return m ? m[1] + 'mm' : null;
  }

  function capitalizar(str) {
    return str.split(' ').map(function(w) {
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }).join(' ');
  }

  function buildHTMLProtectora() {
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    var matDisplay = URL_PROTECTORAS[path];
    var h1 = document.querySelector('h1');
    var seed = h1 ? h1.textContent.length : 0;
    var i1 = seed % 25; var i2 = (seed + 12) % 25;
    var r1 = R_PROT[i1]; var n1 = N[i1 % 50];
    var r2 = R_PROT[i2]; var n2 = N[i2 % 50];
    return '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:680px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +
      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;"><div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">🧿</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">PROTECTORA</div><div style="font-size:10px;color:#888;margin-top:2px;">Mal de ojo y envidia</div></div><div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">❤️</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">HILO ROJO</div><div style="font-size:10px;color:#888;margin-top:2px;">Símbolo de protección</div></div><div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">✨</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">ENERGÍA POSITIVA</div><div style="font-size:10px;color:#888;margin-top:2px;">Para vos y los tuyos</div></div></div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">🧿 Por qué la pulsera roja protege</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">❤️ El hilo rojo — una protección milenaria</div><div style="font-size:12px;color:#666;line-height:1.6;">El hilo rojo es uno de los amuletos más antiguos del mundo. Se usa en la muñeca izquierda — el lado del corazón — para proteger de las energías negativas, el mal de ojo y la envidia. No es solo un accesorio: es un escudo invisible que cargás con vos.</div></div></div></div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">🌟 Cómo usarla</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:flex;flex-direction:column;gap:12px;"><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🤝</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Atala en la muñeca izquierda</div><div style="font-size:12px;color:#666;line-height:1.6;">La muñeca izquierda es el lado del corazón — el lugar indicado para recibir protección.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🧿</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Usala todo el tiempo</div><div style="font-size:12px;color:#666;line-height:1.6;">Cuanto más tiempo la uses, más energía protectora acumula. No hace falta sacársela.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🔄</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Cuando se rompe o se cae — renovála</div><div style="font-size:12px;color:#666;line-height:1.6;">Cuando la pulsera se pierde o se suelta sola, es señal de que ya protegió y cumplió su ciclo. Es momento de renovarla con una nueva.</div></div></div></div></div></div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📋 Descripción</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;"><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + matDisplay + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Dónde usarla</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Muñeca izquierda</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Cierre</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Se ata</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Unidad</div></div></div></div></div>' +
      '<div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;"><div style="font-size:13px;font-weight:700;margin-bottom:10px;">🧴 Cómo cuidarla</div><div style="font-size:12px;color:#555;line-height:1.9;">✓ Podés usarla todo el tiempo — es parte de su función<br>✓ Si se moja o se ensucia, dejala secar naturalmente<br>✓ Cuando se rompe o se cae sola, es momento de renovarla 🧿</div></div>' +
      '<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 Lo que dicen las que ya la tienen</div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r1 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n1 + ' · Compra verificada ✓</div></div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r2 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n2 + ' · Compra verificada ✓</div></div></div>' +
    '</div>';
  }

  function buildFicha(tipo, mat, matLabel) {
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    var matDisplay = URL_MATERIAL_CUSTOM[path] || matLabel;
    if (tipo === 'argolla') {
      var diametro = getDiametro();
      var precioPor = URL_UNIDAD_ARGOLLAS[path] ? 'Unidad' : 'Par ✦ Dos argollas';
      return '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + matDisplay + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Diámetro externo</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + (diametro || '—') + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Dónde usarla</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Oreja</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + precioPor + '</div></div>';
    }
    if (tipo === 'aro') {
      var precioPorAro = URL_UNIDAD_AROS[path] ? 'Unidad' : 'Par ✦ Dos aros';
      var cierre = URL_CIERRE_AROS[path] || 'Tuerca mariposa';
      return '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + matDisplay + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Tipo de cierre</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + cierre + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Dónde usarlos</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Oreja</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + precioPorAro + '</div></div>';
    }
    if (tipo === 'tobillera') {
      return '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + matDisplay + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Dónde usarla</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Tobillo</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Unidad</div></div>';
    }
    return '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + matDisplay + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Dónde usarla</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Muñeca</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Unidad</div></div>';
  }

  function buildHTML(tipo, mat) {
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    var m = MAT[mat];
    var r1 = R[m.r1 % 50]; var n1 = N[m.r1 % 50];
    var r2 = R[m.r2 % 50]; var n2 = N[m.r2 % 50];
    var matLabel = capitalizar(mat.replace('QUIRÚRGICO', 'Quirúrgico').replace('NIQUEL', 'Níquel'));
    var diametro = tipo === 'argolla' ? getDiametro() : null;
    var medidaBlock = tipo === 'argolla' ? MEDIDA.replace(/DIAM/g, diametro || '—') : '';
    var mixBlock = tipo === 'pulsera' ? MIX : '';
    var clipBlock = (tipo === 'aro' && URL_CLIP_AROS[path]) ? AVISO_CLIP : '';
    return '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:680px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +
      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">' + m.badge1e + '</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">' + m.badge1t + '</div><div style="font-size:10px;color:#888;margin-top:2px;">' + m.badge1s + '</div></div>' +
        '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">💎</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">PREMIUM</div><div style="font-size:10px;color:#888;margin-top:2px;">CALIDAD SUPERIOR</div></div>' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">' + m.badge3e + '</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">' + m.badge3t + '</div><div style="font-size:10px;color:#888;margin-top:2px;">' + m.badge3s + '</div></div>' +
      '</div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">' + m.cardH + '</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">' + m.card1t + '</div><div style="font-size:12px;color:#666;line-height:1.6;">' + m.card1txt + '</div></div></div></div>' +
      clipBlock +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📋 Descripción</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">' + buildFicha(tipo, mat, matLabel) + '</div></div></div>' +
      mixBlock +
      '<div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;"><div style="font-size:13px;font-weight:700;margin-bottom:10px;">🧴 Cómo cuidarla</div><div style="font-size:12px;color:#555;line-height:1.9;">' + m.cuidado + '</div></div>' +
      medidaBlock +
      '<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 Lo que dicen las que ya la tienen</div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r1 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n1 + ' · Compra verificada ✓</div></div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r2 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n2 + ' · Compra verificada ✓</div></div></div>' +
    '</div>';
  }

  function inyectar() {
    var tipo = detectarTipo();
    if (!tipo) return;
    var contenedor = document.querySelector('#product-description');
    if (!contenedor || contenedor.querySelector('.tribal-desc')) return;
    var html;
    if (tipo === 'protectora') {
      html = buildHTMLProtectora();
    } else {
      var mat = getMaterial(tipo);
      if (!mat) return;
      html = buildHTML(tipo, mat);
    }
    contenedor.innerHTML = html;
  }

  inyectar();
  setTimeout(inyectar, 1000);
  setTimeout(inyectar, 2500);
})();
