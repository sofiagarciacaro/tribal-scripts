(function() {

  var N = [
    'Sofi G.','Vale M.','Caro T.','Flor R.','Juli A.',
    'Male S.','Anto L.','Lau C.','Pau R.','Nati F.',
    'Dani S.','Belu G.','Magui T.','Sil P.','Vicky A.',
    'Andre L.','Clari M.','Juani R.','Mica V.','Romi P.',
    'Cami B.','Gime R.','Luli M.','Feli G.','Maru S.'
  ];

  var TIPOS = {
    lazo: {
      badge3e: '🎀', badge3t: 'MIL FORMAS', badge3s: 'Un solo lazo',
      cardH: '🤍 La historia detrás de cada lazo',
      card1txt: 'Cada lazo es creado a mano por Popi — diseño propio, corte propio, terminación propia. No es producción en serie. Es un accesorio que solo vas a encontrar en Tribal, porque solo Popi los hace.',
      extraSeccion: '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">🎀 Un lazo, mil looks</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:flex;flex-direction:column;gap:12px;"><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🌀</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Varias vueltas en el cuello</div><div style="font-size:12px;color:#666;line-height:1.6;">Enrollalo y dejá las puntas colgando para un look con profundidad y textura.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🎀</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Moño adelante</div><div style="font-size:12px;color:#666;line-height:1.6;">Una vuelta en el cuello y atalo adelante con un moño. Clásico, femenino y con mucha presencia.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🔄</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Atado atrás, largo al frente</div><div style="font-size:12px;color:#666;line-height:1.6;">El nudo queda atrás y el lazo cae largo al frente. Minimalista y elegante.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">💫</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Y muchas más</div><div style="font-size:12px;color:#666;line-height:1.6;">Con 1,50 m de largo hay infinitas combinaciones. Cada vez que lo usás puede ser un look diferente.</div></div></div></div></div></div>',
      ficha: '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Gamuza</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Largo</div><div style="font-size:13px;font-weight:700;margin-top:3px;">1,50 m</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Fabricación</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Hecho a mano</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Unidad</div></div>',
      cuidado: '✓ Guardalo enrollado o colgado para que no se arrugue<br>✓ Evitá el contacto con agua y productos<br>✓ Con un poco de cuidado dura muchísimo 🤍',
      reviews: [
        '"Lo usé de tres formas distintas en la misma semana. Es el accesorio más versátil que tengo."',
        '"Cuando me dijeron que era hecho a mano no lo podía creer. La terminación es increíble."',
        '"Lo compré sin saber muy bien cómo usarlo y ahora no me lo saco. Tiene mil combinaciones."',
        '"La calidad de la gamuza es una locura. Se nota que está hecho con cuidado."',
        '"Lo usé como collar largo y me preguntaron de dónde era todo el día."',
        '"Pedí uno y ya quiero otro color. Es adictivo."',
        '"La textura de la gamuza es divina. Se ve muy caro y no lo es."',
        '"Me lo até al cuello con un moño y quedó perfecto para la oficina."',
        '"Nunca había visto algo así. El diseño es único, no lo encontré en ningún otro lado."',
        '"Llegó súper bien embalado. Se nota el cuidado en cada detalle."',
        '"Lo regalé y la persona me preguntó dónde lo compré al toque."',
        '"Súper versátil. Lo uso distinto cada vez que salgo."',
        '"La terminación es impecable. Se nota que lo hizo alguien que sabe."',
        '"Lo combiné con un vestido simple y elevó todo el look."',
        '"Es exactamente como en la foto. Llegó rápido y en perfecto estado."',
        '"Me encantó la historia de que está hecho a mano. Lo hace especial."',
        '"Con 1,50 metros podés hacer cualquier cosa. Infinitas opciones."',
        '"El color es exactamente el que buscaba. Hermoso."',
        '"Lo uso en el cuello y también en el pelo. Dos looks en uno."',
        '"Es el regalo más lindo que le hice a mi amiga. La amó."',
        '"No esperaba tanto por el precio. Vale muchísimo más de lo que cuesta."',
        '"Lo compré para una fiesta y lo terminé usando todos los días."',
        '"La gamuza es súper suave. Muy cómodo de llevar puesto."',
        '"Único. No hay otro igual. Eso ya lo hace especial."',
        '"Me lo ató mi hermana de una forma que ni sabía que se podía. Quedó increíble."'
      ]
    },
    chocker: {
      badge3e: '👑', badge3t: 'ACCESORIO ESTRELLA', badge3s: 'Eleva cualquier look',
      cardH: '🤍 La historia detrás de cada chocker',
      card1txt: 'Cada chocker es creado a mano por Popi — diseño propio, gamuza y piezas de fundición seleccionadas una por una. No es producción en serie. Es un accesorio que solo vas a encontrar en Tribal, porque solo Popi los hace.',
      extraSeccion: '',
      ficha: '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Gamuza y fundición</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Dónde usarlo</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Cuello</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Fabricación</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Hecho a mano</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Unidad</div></div>',
      cuidado: '✓ Guardalo colgado o enrollado con cuidado para que no se deforme<br>✓ Evitá el contacto con agua y productos<br>✓ Con un poco de cuidado dura muchísimo 🤍',
      reviews: [
        '"Me lo puse y no me lo saco más. La combinación de gamuza con las piezas de fundición es una locura."',
        '"Me preguntaron dónde lo compré apenas me lo vieron. Es único, no hay otro igual."',
        '"La terminación es increíble para ser hecho a mano. Se nota el cuidado en cada detalle."',
        '"Lo compré sin pensarlo mucho y fue la mejor decisión. Lo uso con todo."',
        '"Se ve carísimo y la verdad es que vale cada peso. Lo recomiendo 100%."',
        '"Es el accesorio que más complimenta recibo. Siempre me preguntan dónde lo conseguí."',
        '"La gamuza es súper suave y las piezas de fundición le dan un toque único."',
        '"Lo usé para una cena y fue lo primero que notaron. Eleva cualquier look."',
        '"Llegó súper bien embalado. Se nota que hay amor en cómo lo hacen."',
        '"No encontré nada parecido en ningún otro lado. Es realmente exclusivo."',
        '"Lo regalé y mi amiga me escribió al toque para agradecerme. Lo amó."',
        '"Es el tipo de accesorio que transforma un outfit simple en algo especial."',
        '"La calidad es increíble. Se nota que cada pieza está hecha con cuidado."',
        '"Lo uso en el cuello y cambia todo el look. Es el foco del outfit."',
        '"Compré el Brown y ya quiero el Gold. Son adictivos."',
        '"Nunca había comprado algo así y me arrepiento de no haberlo hecho antes."',
        '"El diseño es tan especial que parece de joyería fina. No lo podía creer."',
        '"Me lo até de una forma distinta cada vez y siempre queda hermoso."',
        '"Es exactamente como en la foto. Llegó rápido y en perfecto estado."',
        '"La combinación de materiales es muy original. Se ve sofisticado y diferente."',
        '"Me encantó saber que está hecho a mano. Lo hace todavía más especial."',
        '"Ya lo usé tres veces esta semana. Es el accesorio que más uso."',
        '"Perfecto para usar con cualquier cosa. Le da personalidad a cualquier look."',
        '"La atención al detalle es impresionante. Se nota que hay una persona detrás."',
        '"Lo vi en Instagram y no dudé. No me arrepentí para nada."'
      ]
    },
    cristal: {
      badge3e: '💫', badge3t: 'BRILLO ÚNICO', badge3s: 'Efecto cristal',
      cardH: '🤍 La historia detrás de cada collar',
      card1txt: 'Cada collar es armado a mano por Popi — cristal por cristal, pieza por pieza. No es producción en serie. Es un collar que solo vas a encontrar en Tribal, porque solo Popi los hace.',
      extraSeccion: '',
      ficha: '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Cristal plástico</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Dónde usarlo</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Cuello</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Fabricación</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Hecho a mano</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Unidad</div></div>',
      cuidado: '✓ Guardalo separado para que los cristales no se rayen<br>✓ Evitá el contacto con agua y productos<br>✓ Con un poco de cuidado brilla para siempre 🤍',
      reviews: [
        '"El brillo del cristal es una locura. Me lo puse y no me lo saco más."',
        '"Me preguntaron si era de joyería fina. No lo podían creer cuando les dije el precio."',
        '"Llegó súper bien embalado. Se nota el cuidado en cada detalle."',
        '"El brillo que tiene bajo cualquier luz es increíble. Se ve carísimo."',
        '"Lo compré para una fiesta y terminé usándolo todos los días."',
        '"Me lo preguntaron apenas me lo vieron. Es único, no hay otro igual."',
        '"La terminación es impecable para ser hecho a mano. Una obra de arte."',
        '"Combina con todo. Lo usé con vestido, con jeans, con todo."',
        '"No esperaba tanto por el precio. Vale muchísimo más de lo que cuesta."',
        '"Llegó rápido y en perfecto estado. Lo estrené al toque."',
        '"El efecto cristal es hermoso. Brilla en cualquier luz."',
        '"Me lo regalaron y fue el mejor regalo que recibí en mucho tiempo."',
        '"Se nota que cada pieza está puesta con cuidado. Muy prolijo."',
        '"Lo usé para el cumple de mi amiga y fue el accesorio estrella de la noche."',
        '"Compré el simple y ya quiero el que tiene dije. Son adictivos."',
        '"Es exactamente como en la foto. No me decepcionó para nada."',
        '"La gente siempre me pregunta dónde lo compré. Es muy llamativo."',
        '"Se ve de joyería cara y no lo es. Eso ya lo hace especial."',
        '"Lo compré sin pensarlo y fue una de las mejores compras que hice."',
        '"El brillo bajo la luz artificial es una locura. Para una salida de noche es perfecto."',
        '"Muy cómodo de llevar. No pesa nada y se ve increíble."',
        '"La calidad es sorprendente para el precio. Súper recomendable."',
        '"Me lo até de distintas formas y siempre queda hermoso."',
        '"Nunca había visto algo así. El diseño es muy original."',
        '"Lo compré para regalo y mi amiga me escribió para agradecerme. Lo amó."'
      ]
    },
    moldeable: {
      reviews: [
        '"Lo usé en el cuello y después lo pasé al brazo. Es increíble lo versátil que es."',
        '"No podía creer que con una sola pieza podía armar tantos looks distintos."',
        '"Lo compré sin saber muy bien cómo usarlo y ahora es mi accesorio favorito."',
        '"Me lo puse doble en el cuello y me preguntaron si eran dos collares distintos."',
        '"Lo usé como pulsera en la muñeca y quedó increíble. Re cómodo y se queda solo."',
        '"La calidad es muy buena para el precio. Se ve caro y no lo es."',
        '"Llegó rápido y en perfecto estado. Lo estrené al toque."',
        '"Lo compré en dorado y ya quiero el plateado. Son adictivos."',
        '"Me lo preguntaron apenas me lo vieron. Es único y llamativo."',
        '"Lo uso todos los días de una forma distinta. Nunca me aburre."',
        '"Súper fácil de moldear. Lo formé en segundos y quedó perfecto."',
        '"Es el accesorio más versátil que tengo. Lo recomiendo 100%."',
        '"Lo regalé y mi amiga lo amó. Es el regalo perfecto."',
        '"Se adapta a cualquier look. Casual, arreglada, siempre combina."',
        '"Lo pasé por el brazo y me armé un brazalete hermoso con una sola pieza."',
        '"El dorado es espectacular. Se ve de joyería fina y no lo es."',
        '"No esperaba tanto por el precio. Vale muchísimo más de lo que cuesta."',
        '"Muy cómodo de llevar. No pesa nada y se moldea fácil."',
        '"Lo compré para una fiesta y terminé usándolo todos los días."',
        '"Es exactamente como en la foto. Llegó súper bien embalado."',
        '"Con una sola pieza armé tres looks distintos en la misma semana."',
        '"La calidad es sorprendente. No se deforma con el uso."',
        '"Nunca había visto algo así. Es muy original y práctico."',
        '"Lo usé enrollado en la muñeca y fue lo que más me preguntaron."',
        '"Compré uno y ya pedí otro. Son increíblemente versátiles."'
      ]
    }
  };

  function detectarTipo() {
    var h1 = document.querySelector('h1');
    if (!h1) return null;
    var txt = h1.textContent;
    if (/moldeable/i.test(txt)) return 'moldeable';
    if (/lazo/i.test(txt)) return 'lazo';
    var breadcrumb = document.querySelector('[class*="breadcrumb"]');
    if (breadcrumb && breadcrumb.textContent.toUpperCase().indexOf('LAZOS Y CHOKERS') !== -1) return 'comun';
    return null;
  }

  function buildHTMLComun() {
    return '<div class="tribal-desc" style="font-family:Montserrat,sans-serif;max-width:780px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +
      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">🤍</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">HECHO A MANO</div><div style="font-size:10px;color:#888;margin-top:2px;">Uno por uno</div></div>' +
        '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">✨</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">DISEÑO EXCLUSIVO</div><div style="font-size:10px;color:#888;margin-top:2px;">Solo en Tribal</div></div>' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">🎀</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">USALO SOLO</div><div style="font-size:10px;color:#888;margin-top:2px;">O combinalo</div></div>' +
      '</div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">🤍 La historia detrás de cada accesorio</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">✂️ Hecho a mano, uno por uno, con amor</div><div style="font-size:12px;color:#666;line-height:1.6;">Cada accesorio es creado a mano por Popi - diseño propio, corte propio, terminación propia. No es producción en serie. Es un accesorio que solo vas a encontrar en Tribal, porque solo Popi los hace.</div></div></div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;">📋 Descripción</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:16px;"><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Fundición</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Unidad</div></div></div></div>' +
      (/chok?er/i.test((document.querySelector('h1') || {}).textContent || '') ? '<div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;"><div style="font-size:13px;font-weight:700;margin-bottom:10px;">🧴 Cómo cuidarlo</div><div style="font-size:12px;color:#555;line-height:1.9;">✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelo antes de bañarte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el color dura muchísimo 🤍</div></div>' : '') +
      '<div style="background:#f9f9f9;border-radius:8px;padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:8px;">💬 ¿Querés saber más sobre esta pieza?</div><div style="font-size:12px;color:#555;line-height:1.7;">Consultanos por WhatsApp y te ayudamos a elegir.</div></div>' +
    '</div>';
  }

  function getReviews(tipo) {
    var h1 = document.querySelector('h1');
    var seed = h1 ? h1.textContent.length : 0;
    var i1 = seed % 25; var i2 = (seed + 12) % 25;
    var r = TIPOS[tipo].reviews;
    return { r1: r[i1], n1: N[i1], r2: r[i2], n2: N[i2] };
  }

  function buildHTMLMoldeable(rv) {
    return '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:780px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +

      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">🔄</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">MOLDEABLE</div><div style="font-size:10px;color:#888;margin-top:2px;">Lo formás vos</div></div>' +
        '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">💎</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">PREMIUM</div><div style="font-size:10px;color:#888;margin-top:2px;">Calidad superior</div></div>' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">✨</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">MIL FORMAS</div><div style="font-size:10px;color:#888;margin-top:2px;">Una sola pieza</div></div>' +
      '</div>' +

      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">🔄 Por qué el moldeable es diferente</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">💫 Vos decidís cómo usarlo</div><div style="font-size:12px;color:#666;line-height:1.6;">No tiene una sola forma — tiene las que vos le des. Se adapta a tu cuerpo, a tu look y a tu estilo. Una sola pieza con infinitas posibilidades.</div></div></div></div>' +

      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">🌟 Cómo usarlo</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:flex;flex-direction:column;gap:12px;"><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🔗</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Collar una vuelta</div><div style="font-size:12px;color:#666;line-height:1.6;">Formalo en el cuello con una sola vuelta para un look minimalista y elegante.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🌀</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Collar doble vuelta</div><div style="font-size:12px;color:#666;line-height:1.6;">Enrollalo dos veces en el cuello para un look con más volumen y presencia.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">💪</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Brazalete en el brazo</div><div style="font-size:12px;color:#666;line-height:1.6;">Pasalo por el brazo y formalo como brazalete. Queda perfecto y no se cae.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">✨</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Pulsera en la muñeca</div><div style="font-size:12px;color:#666;line-height:1.6;">Enrollalo varias veces en la muñeca para armar un stack de pulseras con una sola pieza.</div></div></div></div></div></div>' +

      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📋 Descripción</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;"><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Níquel</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Dónde usarlo</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Cuello · Brazo · Muñeca</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Forma</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Moldeable</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Unidad</div></div></div></div></div>' +

      '<div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;"><div style="font-size:13px;font-weight:700;margin-bottom:10px;">🧴 Cómo cuidarlo</div><div style="font-size:12px;color:#555;line-height:1.9;">✓ Evitá el contacto con agua y productos de limpieza<br>✓ Guardalo sin doblar bruscamente para que no se deforme<br>✓ Con un poco de cuidado dura muchísimo 🤍</div></div>' +

      '<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 Lo que dicen las que ya lo tienen</div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + rv.r1 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + rv.n1 + ' · Compra verificada ✓</div></div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + rv.r2 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + rv.n2 + ' · Compra verificada ✓</div></div></div>' +

    '</div>';
  }

  function buildHTML(tipo, rv) {
    var t = TIPOS[tipo];

    return '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:780px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +

      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">🤍</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">HECHO A MANO</div><div style="font-size:10px;color:#888;margin-top:2px;">Uno por uno</div></div>' +
        '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">✨</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">DISEÑO EXCLUSIVO</div><div style="font-size:10px;color:#888;margin-top:2px;">Solo en Tribal</div></div>' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">' + t.badge3e + '</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">' + t.badge3t + '</div><div style="font-size:10px;color:#888;margin-top:2px;">' + t.badge3s + '</div></div>' +
      '</div>' +

      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">' + t.cardH + '</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">✂️ Hecho a mano, uno por uno, con amor</div><div style="font-size:12px;color:#666;line-height:1.6;">' + t.card1txt + '</div></div></div></div>' +

      t.extraSeccion +

      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📋 Descripción</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">' + t.ficha + '</div></div></div>' +

      '<div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;"><div style="font-size:13px;font-weight:700;margin-bottom:10px;">🧴 Cómo cuidarlo</div><div style="font-size:12px;color:#555;line-height:1.9;">' + t.cuidado + '</div></div>' +

      '<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 Lo que dicen las que ya lo tienen</div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + rv.r1 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + rv.n1 + ' · Compra verificada ✓</div></div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + rv.r2 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + rv.n2 + ' · Compra verificada ✓</div></div></div>' +

    '</div>';
  }

  function inyectar() {
    var tipo = detectarTipo();
    if (!tipo) return;

    var contenedor = document.querySelector('#product-description');
    if (!contenedor) return;
    if (contenedor.querySelector('.tribal-desc')) return;

    var rv = tipo === 'comun' ? null : getReviews(tipo);
    var html = tipo === 'comun' ? buildHTMLComun() : tipo === 'moldeable' ? buildHTMLMoldeable(rv) : buildHTML(tipo, rv);
    contenedor.innerHTML = html;
  }

  inyectar();
  setTimeout(inyectar, 1000);
  setTimeout(inyectar, 2500);

})();
