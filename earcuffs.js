(function() {

  var N = [
    'Sofi G.','Vale M.','Caro T.','Flor R.','Juli A.',
    'Male S.','Anto L.','Lau C.','Pau R.','Nati F.',
    'Dani S.','Belu G.','Magui T.','Sil P.','Vicky A.',
    'Andre L.','Clari M.','Juani R.','Mica V.','Romi P.',
    'Cami B.','Gime R.','Luli M.','Feli G.','Maru S.'
  ];

  var R = [
    '"Me lo puse y no me lo saco más. No necesité perforarme y queda igual que un piercing."',
    '"Siempre quise tener el cartílago perforado y con esto logré el mismo look sin dolor."',
    '"Me lo preguntaron creyendo que era un piercing real. La ilusión es perfecta."',
    '"Lo usé para una salida y me preguntaron dónde me había hecho el piercing. Jaja."',
    '"Es exactamente como en la foto. Llegó rápido y queda hermoso."',
    '"La calidad es increíble para el precio. No esperaba tanto."',
    '"Lo uso todos los días y sigue igual. Muy buena calidad."',
    '"Me lo regalaron y fue el mejor regalo que recibí."',
    '"Se ve de joyería cara y no lo es. Eso ya lo hace especial."',
    '"Muy cómodo de llevar. No molesta para nada en todo el día."',
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
    '"La mejor inversión. Vale cada peso."',
    '"Queda tan bien que nadie cree que no es un piercing real."'
  ];

  var MAT = {
    'PLATA 925': {
      badge1e: '✨', badge1t: 'PLATA 925 REAL', badge1s: 'Plata 925',
      cardH: '✨ Por qué la plata 925 es la mejor elección',
      card1t: '💫 Calidad real, brillo real',
      card1txt: 'Plata 925 de verdad — el material más noble para un ear cuff. El brillo y la durabilidad que solo la plata genuina puede dar.',
      cuidado: '✓ Limpiá con un paño suave y seco<br>✓ Guardalo separado de otras piezas para evitar rozaduras<br>✓ Es una joyita delicada — con un poco de amor dura muchísimo 🤍'
    },
    'ACERO QUIRÚRGICO': {
      badge1e: '💪', badge1t: 'ACERO QUIRÚRGICO', badge1s: 'Hipoalergénico',
      cardH: '💪 Por qué el acero quirúrgico es el más elegido',
      card1t: '💧 Agua, sudor, uso diario — no le importa nada',
      card1txt: 'Resistente al uso diario más intenso. No se oxida, no se ennegrece. El material ideal para quien lo quiere puesto todo el día.',
      cuidado: '✓ Resistente al agua y al sudor — podés usarlo todo el día<br>✓ Limpiá con un paño suave si hace falta<br>✓ No se oxida ni ennegrece con el uso 💪'
    },
    'ACERO DORADO': {
      badge1e: '✨', badge1t: 'ACERO DORADO', badge1s: 'Baño de oro',
      cardH: '✨ Por qué el acero dorado es el favorito',
      card1t: '💛 El dorado que no se va',
      card1txt: 'Baño de oro de calidad sobre acero. El color se mantiene con el uso cotidiano — no es el dorado que desaparece a las semanas.',
      cuidado: '✓ Evitá el contacto prolongado con agua, perfume y cremas<br>✓ Guardalo separado para que no se raye<br>✓ El baño de oro dura más cuando lo cuidás 🤍'
    },
    'ACERO BLANCO': {
      badge1e: '🤍', badge1t: 'ACERO BLANCO', badge1s: 'Baño de plata 925',
      cardH: '🤍 Por qué el acero blanco es una joya inteligente',
      card1t: '✨ El brillo de la plata, a otro precio',
      card1txt: 'Tiene un baño de plata 925 que le da ese color característico y luminoso. Se ve igual que la plata pero es mucho más accesible.',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelo antes de bañarte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el baño de plata dura muchísimo 🤍'
    }
  };

  var URL_FALLBACK = {
    '/productos/ear-cuff-bebu-05177/':       'PLATA 925',
    '/productos/ear-cuff-zachi-10296-kl4iq/':'ACERO DORADO',
    '/productos/falso-piercing-10mm-08277/': 'PLATA 925',
    '/productos/ear-cuff-liso-00178/':       'PLATA 925'
  };

  var AVISO_NOPERFO = '<div style="background:#f0fff4;border:1px solid #b2dfdb;border-radius:8px;padding:14px 16px;margin-bottom:24px;"><div style="font-size:12px;color:#1b5e20;line-height:1.7;">👂 <strong>Sin perforación, sin dolor:</strong> el ear cuff se coloca a presión en el cartílago o el conch — no necesitás ninguna perforación. Lo ponés, lo ajustás y listo. El look de piercing sin el compromiso.</div></div>';

  function categoriasProducto() {
    var sc = document.getElementById('nube-sdk-script');
    if (!sc) return null;
    var i = sc.textContent.indexOf('categories:');
    if (i === -1) return null;
    var j = sc.textContent.indexOf(']', i);
    if (j === -1) return null;
    var slice = sc.textContent.slice(i, j);
    var names = [];
    var re = /name:\s*"((?:[^"\\]|\\.)*)"/g, mm;
    while ((mm = re.exec(slice)) !== null) {
      try { names.push(JSON.parse('"' + mm[1] + '"').trim().toUpperCase()); } catch (e) {}
    }
    return names.length ? names : null;
  }

  var usoCategorias = false;

  function getMaterial() {
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    if (URL_FALLBACK[path]) return URL_FALLBACK[path];
    var items = document.querySelectorAll('[class*="breadcrumb"] a, [class*="breadcrumb"] span, [class*="breadcrumb"] li');
    for (var i = 0; i < items.length; i++) {
      var txt = items[i].textContent.trim().toUpperCase().replace(/\s+/g, ' ');
      if (MAT[txt]) return txt;
    }
    var cats = categoriasProducto();
    if (cats) {
      for (var j = 0; j < cats.length; j++) {
        if (MAT[cats[j]]) { usoCategorias = true; return cats[j]; }
      }
    }
    return null;
  }

  function esEarCuff() {
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    if (URL_FALLBACK[path]) return true;
    var breadcrumb = document.querySelector('[class*="breadcrumb"]');
    if (breadcrumb && breadcrumb.textContent.toUpperCase().indexOf('EAR CUFFS') !== -1) return true;
    var cats = categoriasProducto();
    if (cats && cats.indexOf('EAR CUFFS') !== -1) { usoCategorias = true; return true; }
    return false;
  }

  function getHash() {
    var url = window.location.pathname;
    var hash = 0;
    for (var i = 0; i < url.length; i++) {
      hash = ((hash << 5) - hash) + url.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash);
  }

  function buildHTML(mat) {
    var m = MAT[mat];
    var hash = getHash();
    var i1 = hash % 25; var i2 = (hash + 12) % 25;
    var r1 = R[i1]; var n1 = N[i1];
    var r2 = R[i2]; var n2 = N[i2];
    var matLabel = mat.charAt(0) + mat.slice(1).toLowerCase();

    return '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:780px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +

      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">' + m.badge1e + '</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">' + m.badge1t + '</div><div style="font-size:10px;color:#888;margin-top:2px;">' + m.badge1s + '</div></div>' +
        '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">👂</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">SIN PERFORACIÓN</div><div style="font-size:10px;color:#888;margin-top:2px;">A presión</div></div>' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">💎</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">DISEÑO EXCLUSIVO</div><div style="font-size:10px;color:#888;margin-top:2px;">Solo en Tribal</div></div>' +
      '</div>' +

      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">' + m.cardH + '</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">' + m.card1t + '</div><div style="font-size:12px;color:#666;line-height:1.6;">' + m.card1txt + '</div></div></div></div>' +

      AVISO_NOPERFO +

      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">🌟 Cómo usarlo</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:flex;flex-direction:column;gap:12px;"><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">1️⃣</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Posicioná el ear cuff</div><div style="font-size:12px;color:#666;line-height:1.6;">Colocalo en el cartílago superior de la oreja o en el conch (la parte interna). No hace falta perforación.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">2️⃣</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Ajustá la presión</div><div style="font-size:12px;color:#666;line-height:1.6;">Presionalo suavemente hasta que quede firme y cómodo. Si molesta, aflojá un poco. Si se cae, apretá un poco más.</div></div></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">✨</span><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Listo — look de piercing sin el compromiso</div><div style="font-size:12px;color:#666;line-height:1.6;">Nadie va a notar que no es un piercing real. Podés cambiarlo cuando quieras, sin cicatriz ni dolor.</div></div></div></div></div></div>' +

      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📋 Descripción</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">' +
        '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + matLabel + '</div></div>' +
        '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Tipo de cierre</div><div style="font-size:13px;font-weight:700;margin-top:3px;">A presión</div></div>' +
        '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Dónde usarlo</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Cartílago · Conch</div></div>' +
        '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Perforación</div><div style="font-size:13px;font-weight:700;margin-top:3px;">No necesita</div></div>' +
        '<div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Unidad</div></div>' +
      '</div></div></div>' +

      '<div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;"><div style="font-size:13px;font-weight:700;margin-bottom:10px;">🧴 Cómo cuidarlo</div><div style="font-size:12px;color:#555;line-height:1.9;">' + m.cuidado + '</div></div>' +

           (usoCategorias ? '' :'<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 Lo que dicen las que ya lo tienen</div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r1 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n1 + ' · Compra verificada ✓</div></div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r2 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n2 + ' · Compra verificada ✓</div></div></div>') +

    '</div>';
  }

  function inyectar() {
    usoCategorias = false;
    if (!esEarCuff()) return;
    var mat = getMaterial();
    if (!mat) return;
    var contenedor = document.querySelector('#product-description');
    if (!contenedor) return;
    if (contenedor.querySelector('.tribal-desc')) return;
    contenedor.innerHTML = buildHTML(mat);
  }

  inyectar();
  setTimeout(inyectar, 1000);
  setTimeout(inyectar, 2500);

})();
