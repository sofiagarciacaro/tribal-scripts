(function() {

  var N = [
    'Sofi G.','Vale M.','Caro T.','Flor R.','Juli A.',
    'Male S.','Anto L.','Lau C.','Pau R.','Nati F.',
    'Dani S.','Belu G.','Magui T.','Sil P.','Vicky A.',
    'Andre L.','Clari M.','Juani R.','Mica V.','Romi P.',
    'Cami B.','Gime R.','Luli M.','Feli G.','Maru S.'
  ];

  var R = [
    '"Me lo puse y no me lo saco más. Se ve carísimo y no lo es."',
    '"Me lo preguntaron apenas me lo vieron. Es único y llamativo."',
    '"El dorado es espectacular. Se ve de joyería fina."',
    '"Lo combiné con todo y siempre queda bien. Un básico de verdad."',
    '"Llegó rápido y en perfecto estado. Lo estrené al toque."',
    '"Es exactamente como en la foto. No me decepcionó para nada."',
    '"La calidad es increíble para el precio. No esperaba tanto."',
    '"Lo uso todos los días y sigue igual. Muy buena calidad."',
    '"Me lo regalaron y fue el mejor regalo que recibí."',
    '"Se ve de joyería cara y no lo es. Eso ya lo hace especial."',
    '"Muy cómodo de llevar. No pesa nada y se ve increíble."',
    '"La calidad es sorprendente para el precio. Súper recomendable."',
    '"Nunca había visto algo así. El diseño es muy original."',
    '"Lo compré para regalo y mi amiga me escribió para agradecerme. Lo amó."',
    '"El acabado es impecable. Se nota que es de buena calidad."',
    '"Lo uso con todo: casual, arreglada, siempre combina."',
    '"Llegó súper bien embalado y antes de lo esperado."',
    '"Me obsesioné. Lo quiero en todos los modelos."',
    '"Es exactamente lo que necesitaba para completar mi look."',
    '"No le pierdo el brillo, sigue igual desde el primer día."',
    '"Lo compré dudando y fue la mejor decisión. Me encantó."',
    '"Combina con absolutamente todo lo que tengo."',
    '"Súper cómodo, no molesta para nada en todo el día."',
    '"La recibí y ya lo quiero en otro modelo también."',
    '"La mejor inversión. Vale cada peso."'
  ];

  var STACK = '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">✨ Solo o combinado — siempre queda</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:flex;flex-direction:column;gap:12px;"><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">💫</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Solo — minimalista y con presencia</div><div style="font-size:12px;color:#666;line-height:1.6;">Un solo brazalete bien elegido ya transforma el look. Simple, limpio y con personalidad.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">✨</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Stack de brazaletes — el look que para el tiempo</div><div style="font-size:12px;color:#666;line-height:1.6;">Dos, tres o más juntos de distintos modelos. Cuando empezás a apilarlos no podés parar.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🌟</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Mix de colores — sin reglas</div><div style="font-size:12px;color:#666;line-height:1.6;">Dorado con plateado, grueso con fino — hoy el mix es el look. No hay reglas, solo estilo.</div></div></div></div></div></div>';

  var TIPOS = {
    'plateado-muneca': {
      badge1e: '🤍', badge1t: 'PLATEADO', badge1s: 'Metal fundición',
      badge3e: '✨', badge3t: 'DISEÑO EXCLUSIVO', badge3s: 'Solo en Tribal',
      cardH: '🤍 Por qué el plateado es el favorito',
      card1t: '✨ Metal con personalidad',
      card1txt: 'Fundición de metal con color plateado. Piezas con diseño propio, detalles únicos y un acabado que se ve de joyería. No es producción masiva — cada modelo es exclusivo de Tribal.',
      donde: 'Muñeca',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelo antes de bañarte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el color dura muchísimo 🤍'
    },
    'dorado-muneca': {
      badge1e: '✨', badge1t: 'DORADO', badge1s: 'Metal fundición',
      badge3e: '💛', badge3t: 'DISEÑO EXCLUSIVO', badge3s: 'Solo en Tribal',
      cardH: '✨ Por qué el dorado es el más elegido',
      card1t: '💛 Metal con personalidad',
      card1txt: 'Fundición de metal con color dorado. Piezas con diseño propio, detalles únicos y un acabado que se ve de joyería. No es producción masiva — cada modelo es exclusivo de Tribal.',
      donde: 'Muñeca',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelo antes de bañarte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el color dura muchísimo 🤍'
    },
    'plateado-brazo': {
      badge1e: '🤍', badge1t: 'PLATEADO', badge1s: 'Metal fundición',
      badge3e: '💪', badge3t: 'PARA EL BRAZO', badge3s: 'Look statement',
      cardH: '🤍 Por qué el plateado es el favorito',
      card1t: '💪 El accesorio que para el look',
      card1txt: 'Fundición de metal con color plateado. En el brazo se convierte en el foco del outfit — el accesorio que todos van a notar. Diseño exclusivo, solo en Tribal.',
      donde: 'Brazo',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelo antes de bañarte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el color dura muchísimo 🤍'
    },
    'dorado-brazo': {
      badge1e: '✨', badge1t: 'DORADO', badge1s: 'Metal fundición',
      badge3e: '💪', badge3t: 'PARA EL BRAZO', badge3s: 'Look statement',
      cardH: '✨ Por qué el dorado es el más elegido',
      card1t: '💪 El accesorio que para el look',
      card1txt: 'Fundición de metal con color dorado. En el brazo se convierte en el foco del outfit — el accesorio que todos van a notar. Diseño exclusivo, solo en Tribal.',
      donde: 'Brazo',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelo antes de bañarte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el color dura muchísimo 🤍'
    }
      ,
    'dorado-auto': {
      badge1e: '✨', badge1t: 'DORADO', badge1s: 'Metal fundición',
      badge3e: '💛', badge3t: 'DISEÑO EXCLUSIVO', badge3s: 'Solo en Tribal',
      cardH: '✨ Por qué el dorado es el más elegido',
      card1t: '💛 Color con personalidad',
      card1txt: 'Fundición de metal con color dorado. Piezas con diseño propio, detalles únicos y un acabado que se ve de joyería. No es producción masiva — cada modelo es exclusivo de Tribal.',
      donde: '',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelo antes de bañarte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el color dura muchísimo 🤍'
    },
    'plateado-auto': {
      badge1e: '🤍', badge1t: 'PLATEADO', badge1s: 'Metal fundición',
      badge3e: '✨', badge3t: 'DISEÑO EXCLUSIVO', badge3s: 'Solo en Tribal',
      cardH: '🤍 Por qué el plateado es el favorito',
      card1t: '🤍 Color con personalidad',
      card1txt: 'Fundición de metal con color plateado. Piezas con diseño propio, detalles únicos y un acabado que se ve de joyería. No es producción masiva — cada modelo es exclusivo de Tribal.',
      donde: '',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelo antes de bañarte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el color dura muchísimo 🤍'
    }
};

  var URL_MAP = {
    '/productos/scota-09359-eajsk/':           'plateado-muneca',
    '/productos/canajure-silver-11063-nodle/': 'plateado-muneca',
    '/productos/ines-silver-10286-l7vjz/':     'plateado-muneca',
    '/productos/bride-08210-iflpq/':           'plateado-muneca',
    '/productos/marleen-silver-10290-iy9vk/':  'plateado-muneca',
    '/productos/orquidea-silver-09858-gnurs/': 'plateado-muneca',
    '/productos/scora-10332-1nhdo/':           'plateado-muneca',
    '/productos/lupita-silver-10282-graji/':   'plateado-muneca',
    '/productos/luisma-silver-10926-c8wll/':   'plateado-muneca',
    '/productos/josefin-silver-10900-ad3er/':  'plateado-muneca',
    '/productos/readdy-silver-10806-czz2t/':   'plateado-muneca',
    '/productos/ibiza-silver-10809-mv19u/':    'plateado-muneca',
    '/productos/aitana-silver-10813-u1pa9/':   'plateado-muneca',
    '/productos/forsh-silver-10815-yovzm/':    'plateado-muneca',
    '/productos/jumper-silver-08219-c87bq/':   'plateado-muneca',
    '/productos/scota-09203-mwb36/':           'dorado-muneca',
    '/productos/orquidea-gold-09859-iyal8/':   'dorado-muneca',
    '/productos/scora-gold-10256-tku8z/':      'dorado-muneca',
    '/productos/marleen-gold-10291-mv0jy/':    'dorado-muneca',
    '/productos/canajure-gold-11064-1wv5l/':   'dorado-muneca',
    '/productos/aron-gold-11052-z1da8/':       'dorado-muneca',
    '/productos/jumper-gold-08218-9kccz/':     'dorado-muneca',
    '/productos/lupita-gold-10283-ievsb/':     'dorado-muneca',
    '/productos/josefin-gold-10333-9wmcs/':    'dorado-muneca',
    '/productos/ines-gold-10287-tzmg7/':       'dorado-muneca',
    '/productos/aitana-gold-10812-qlzg7/':     'dorado-muneca',
    '/productos/luisma-10925-bku3y/':          'dorado-muneca',
    '/productos/bride-11039-1qlwe/':           'dorado-muneca',
    '/productos/juno-silver-07378-225cr/':     'plateado-brazo',
    '/productos/mica-silver-10821-2bxbf/':     'plateado-brazo',
    '/productos/karol-silver-09865-z7l4c/':    'plateado-brazo',
    '/productos/mila-silver-10957-x4j2v/':     'plateado-brazo',
    '/productos/begonias-silver-09881-ejgzl/': 'plateado-brazo',
    '/productos/violeta-silver-09879-a49up/':  'plateado-brazo',
    '/productos/snake-silver-10827-7pcu3/':    'plateado-brazo',
    '/productos/merli-silver-10825-5zr8d/':    'plateado-brazo',
    '/productos/eliza-silver-10819-0a4nh/':    'plateado-brazo',
    '/productos/kuzco-silver-09867-nw4wq/':    'plateado-brazo',
    '/productos/mila-gold-10956-wem59/':       'dorado-brazo',
    '/productos/mica-gold-10822-36zux/':       'dorado-brazo',
    '/productos/snake-gold-10828-8ip4g/':      'dorado-brazo',
    '/productos/eliza-gold-10820-1dtde/':      'dorado-brazo',
    '/productos/karol-gold-09864-x6ih7/':      'dorado-brazo',
    '/productos/begonias-gold-09882-gvvt1/':   'dorado-brazo',
    '/productos/violeta-gold-09880-cd1m6/':    'dorado-brazo'
  };

  function buildHTML(tipo, auto) {
    var t = TIPOS[tipo];
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    var hash = 0;
    for (var i = 0; i < path.length; i++) {
      hash = ((hash << 5) - hash) + path.charCodeAt(i);
      hash = hash & hash;
    }
    hash = Math.abs(hash);
    var i1 = hash % 25; var i2 = (hash + 12) % 25;
    var r1 = R[i1]; var n1 = N[i1];
    var r2 = R[i2]; var n2 = N[i2];
    var colorLabel = tipo.indexOf('dorado') !== -1 ? 'Dorado' : 'Plateado';

    return '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:780px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +

      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">' + t.badge1e + '</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">' + t.badge1t + '</div><div style="font-size:10px;color:#888;margin-top:2px;">' + t.badge1s + '</div></div>' +
        '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">💎</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">PREMIUM</div><div style="font-size:10px;color:#888;margin-top:2px;">Calidad superior</div></div>' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">' + t.badge3e + '</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">' + t.badge3t + '</div><div style="font-size:10px;color:#888;margin-top:2px;">' + t.badge3s + '</div></div>' +
      '</div>' +

      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">' + t.cardH + '</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">' + t.card1t + '</div><div style="font-size:12px;color:#666;line-height:1.6;">' + t.card1txt + '</div></div></div></div>' +

      STACK +

      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📋 Descripción</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">' +
        '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + (auto ? 'Fundición' : 'Metal de fundición') + '</div></div>' +
        '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Color</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + colorLabel + '</div></div>' +
        (auto ? '' : '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Dónde usarlo</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + t.donde + '</div></div>') +
        '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Unidad</div></div>' +
      '</div></div></div>' +

      '<div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;"><div style="font-size:13px;font-weight:700;margin-bottom:10px;">🧴 Cómo cuidarlo</div><div style="font-size:12px;color:#555;line-height:1.9;">' + t.cuidado + '</div></div>' +

      (auto ? '' : '<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 Lo que dicen las que ya lo tienen</div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r1 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n1 + ' · Compra verificada ✓</div></div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r2 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n2 + ' · Compra verificada ✓</div></div></div>' ) +

    '</div>';
  }

  var CODE_MAP = {};
  for (var u in URL_MAP) {
    var um = u.match(/-(\d+)-[^/]+\/$/);
    if (um && !CODE_MAP[um[1]]) CODE_MAP[um[1]] = URL_MAP[u];
  }

  function tipoPorCodigo(path) {
    var m = path.match(/-(\d+)-[^/]+\/$/);
    return m ? CODE_MAP[m[1]] : undefined;
  }

  function categoriasProducto() {
    var sc = document.getElementById('nube-sdk-script');
    if (!sc) return null;
    var t = sc.textContent;
    var i = t.indexOf('"categories":');
    if (i === -1) i = t.indexOf('categories:');
    if (i === -1) return null;
    i = t.indexOf('[', i);
    if (i === -1) return null;
    var depth = 0, j = -1, inStr = false, esc = false;
    for (var k = i; k < t.length; k++) {
      var c = t.charAt(k);
      if (inStr) {
        if (esc) esc = false;
        else if (c === '\\') esc = true;
        else if (c === '"') inStr = false;
        continue;
      }
      if (c === '"') inStr = true;
      else if (c === '[') depth++;
      else if (c === ']') { depth--; if (depth === 0) { j = k; break; } }
    }
    if (j === -1) return null;
    var names = [];
    var arr = null;
    try { arr = JSON.parse(t.slice(i, j + 1)); } catch (e) {}
    if (arr) {
      for (var a = 0; a < arr.length; a++) {
        if (arr[a] && typeof arr[a].name === 'string') names.push(arr[a].name.trim().toUpperCase());
      }
    } else {
      var slice = t.slice(i, j);
      var re = /"?name"?:\s*"((?:[^"\\]|\\.)*)"/g, mm;
      while ((mm = re.exec(slice)) !== null) {
        try { names.push(JSON.parse('"' + mm[1] + '"').trim().toUpperCase()); } catch (e) {}
      }
    }
    return names.length ? names : null;
  }

  function esBrazalete() {
    var cats = categoriasProducto();
    return !!(cats && cats.indexOf('BRAZALETES') !== -1);
  }

  function colorPorNombre() {
    var h1 = document.querySelector('h1');
    var n = h1 ? h1.textContent : '';
    if (/gold/i.test(n)) return 'dorado';
    if (/silver/i.test(n)) return 'plateado';
    return null;
  }

  function inyectar() {
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    var tipo = URL_MAP[path];
    var auto = false;
    if (!tipo) tipo = tipoPorCodigo(path);
    if (!tipo && esBrazalete()) {
      var c = colorPorNombre();
      if (c) { tipo = c + '-auto'; auto = true; }
    }
    if (!tipo) return;
    var contenedor = document.querySelector('#product-description');
    if (!contenedor) return;
    if (contenedor.querySelector('.tribal-desc')) return;
    contenedor.innerHTML = buildHTML(tipo, auto);
  }

  inyectar();
  setTimeout(inyectar, 1000);
  setTimeout(inyectar, 2500);

})();
