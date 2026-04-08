(function() {
  var R = [
    '"Lo compré y no me lo saco más. Es hermoso y cómodo."',
    '"Perfecto. Llegó rápido y es igual a la foto."',
    '"Me encantó la calidad. Se nota que es bueno."',
    '"Divino. Lo uso todos los días y sigue igual."',
    '"Lo compré y ya lo quiero en otro diseño. Adictivo."',
    '"Cómodo y hermoso. Combina con todo."',
    '"La mejor compra. Es exactamente lo que buscaba."',
    '"Se ve caro y no lo es. Lo recomiendo."',
    '"Hermoso. La calidad es top para el precio."',
    '"Me lo preguntan siempre. Les digo que es de Tribal."',
    '"Llegó perfecto y se ve de muy buena calidad."',
    '"Re lindo. Ya se lo recomendé a todas mis amigas."',
    '"Lo tengo hace meses y sigue igual. Muy buena calidad."',
    '"Me llegó y me lo puse al toque. Perfecto."',
    '"El mejor. Ya es mi anillo favorito."',
    '"Es exactamente como en la foto. Llegó rápido."',
    '"Posta que es hermoso. Lo uso todos los días."',
    '"La calidad se nota. Hermoso y firme."',
    '"Un básico que no puede faltar en ninguna colección."',
    '"Lo compré para regalo y lo terminé quedando yo. Jaja."',
    '"No me lo saco ni para dormir. Es comodísimo."',
    '"La mejor inversión. Vale cada peso."',
    '"Me lo puse y quedó espectacular en el dedo."',
    '"Fino, elegante y de buena calidad. Qué más querés."',
    '"Ya lo compré tres veces, uno para mí y dos para regalar."',
    '"El acabado es impecable. Se nota que es buena calidad."',
    '"Lo uso con todo: casual, arreglada, siempre combina."',
    '"Llegó súper bien embalado y antes de lo esperado."',
    '"Mi accesorio favorito del momento. Lo recomiendo."',
    '"Súper cómodo, no molesta para nada en todo el día."',
    '"Es más lindo en persona que en la foto, y eso que la foto ya es buena."',
    '"Lo compré dudando y fue la mejor decisión. Me encantó."',
    '"Calidad increíble para el precio. No esperaba tanto."',
    '"Lo uso todos los días y sigue como nuevo."',
    '"Me lo regalaron y fue el mejor regalo que recibí."',
    '"Combina con absolutamente todo lo que tengo."',
    '"Es finito y delicado pero se ve un montón. Me encanta."',
    '"Lo recibí y ya lo quiero en otro diseño también."',
    '"Perfecto para usar solo o combinado. Muy versátil."',
    '"Llegó antes de lo esperado y en perfecto estado."',
    '"Muy buena calidad para el precio. Súper recomendable."',
    '"Me obsesioné con este anillo. Lo quiero en todos los talles."',
    '"Es exactamente lo que necesitaba para completar mi look."',
    '"Los detalles son una locura. Se ve carísimo."',
    '"El diseño es único, no encontré nada igual en ningún lado."',
    '"Se ve exactamente igual que uno de plata. Nadie nota la diferencia."',
    '"El brillo es hermoso. Lo cuido bien y sigue igual que el primer día."',
    '"Resistente y hermoso. Lo uso hasta en el gimnasio."',
    '"Tengo piel súper sensible y nunca me molestó. Un básico real."',
    '"Me lo puse el día que llegó y no me lo saqué más."'
  ];
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
  var GUIA_TALLE = '<div style="border:1px solid #e8e8e8;border-radius:12px;overflow:hidden;margin-bottom:24px;"><div style="background:#df598c;color:white;padding:14px 16px;font-size:13px;font-weight:700;letter-spacing:0.3px;">💍 ¿Qué talle de anillo soy?</div><div style="padding:16px;"><div style="display:flex;gap:16px;align-items:center;margin-bottom:20px;"><img src="https://d1a9qnv764bsoo.cloudfront.net/stores/001/149/801/rte/talle%20anillo.png" style="width:140px;flex-shrink:0;border-radius:8px;" alt="Cómo medir el talle"><div style="font-size:12px;color:#555;line-height:1.8;"><p style="margin:0 0 8px;color:#1a1a1a;font-weight:700;">El talle = diámetro interno en mm</p><p style="margin:0 0 8px;"><strong>Con un anillo:</strong> medí el diámetro interno con una regla. Esa cantidad de mm es tu talle.</p><p style="margin:0;"><strong>Midiendo tu dedo:</strong> apoyá la regla en la parte más ancha de la falange. Esa medida en mm es tu talle.</p></div></div><div style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;margin-bottom:12px;"><table style="width:100%;border-collapse:collapse;font-size:12px;"><tr style="background:#f9f9f9;"><th style="padding:8px 12px;text-align:left;font-weight:700;border-bottom:1px solid #e8e8e8;">Talle</th><th style="padding:8px 12px;text-align:left;font-weight:700;border-bottom:1px solid #e8e8e8;">Diámetro interno</th></tr><tr><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;">MIDI</td><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;color:#666;">15 mm · Media falange</td></tr><tr style="background:#f9f9f9;"><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;">16</td><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;color:#666;">16 mm</td></tr><tr><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;">17</td><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;color:#666;">17 mm</td></tr><tr style="background:#f9f9f9;"><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;">18</td><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;color:#666;">18 mm</td></tr><tr><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;">19</td><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;color:#666;">19 mm</td></tr><tr style="background:#f9f9f9;"><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;">20</td><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;color:#666;">20 mm</td></tr><tr><td style="padding:8px 12px;">🔄 Regulable</td><td style="padding:8px 12px;color:#666;">Se adapta entre talle 17, 18 y 19</td></tr></table></div><p style="font-size:12px;color:#666;margin:0;">⚠️ <strong>¿Tu medida cae entre dos talles?</strong> Elegí el talle mayor para mayor comodidad. Ante cualquier duda, escribinos. 🤍</p></div></div>';
  var MATERIALES = {
    'ACERO QUIRÚRGICO': {
      badge1e: '💪', badge1t: 'ACERO QUIRÚRGICO', badge1s: 'Hipoalergénico',
      badge3e: '🩷', badge3t: 'NO SE OXIDA', badge3s: 'DURA PARA SIEMPRE',
      cardH: '💪 Por qué el acero quirúrgico es el más elegido',
      card1t: '💧 Agua, sudor, pileta — no le importa nada',
      card1txt: 'Resistente al uso diario más intenso. No se oxida, no se ennegrece, no te da trabajo. El material ideal para quien lo quiere puesto todo el día.',
      cuidado: '✓ Resistente al agua y al sudor — podés usarlo todo el día<br>✓ Limpiá con un paño suave si hace falta<br>✓ No se oxida ni ennegrece con el uso 💪',
      r1: 47, r2: 48
    },
    'ACERO DORADO': {
      badge1e: '✨', badge1t: 'ACERO DORADO', badge1s: 'Baño de oro',
      badge3e: '🩷', badge3t: 'NO SE OXIDA', badge3s: 'DURA PARA SIEMPRE',
      cardH: '✨ Por qué el acero dorado es el favorito',
      card1t: '💛 El dorado que no se va',
      card1txt: 'Baño de oro de calidad sobre acero. El color se mantiene con el uso cotidiano — no es el dorado que desaparece a las semanas.',
      cuidado: '✓ Evitá el contacto prolongado con agua, perfume y cremas<br>✓ Guardalo separado para que no se raye<br>✓ El baño de oro dura más cuando lo cuidás 🤍',
      r1: 0, r2: 5
    },
    'ACERO BLANCO': {
      badge1e: '🤍', badge1t: 'ACERO BLANCO', badge1s: 'Baño de plata 925',
      badge3e: '✨', badge3t: 'BRILLO DIVINO', badge3s: 'Color plata real',
      cardH: '🤍 Por qué el acero blanco es una joya inteligente',
      card1t: '✨ El brillo de la plata, a otro precio',
      card1txt: 'Tiene un baño de plata 925 que le da ese color característico y luminoso que tanto amamos. Se ve igual que la plata pero es mucho más accesible — la forma inteligente de sumar piezas hermosas a tu colección.',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelo antes de bañarte, hacer deporte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el baño de plata dura muchísimo 🤍',
      r1: 45, r2: 46
    },
    'BRONCE ENCHAPADO': {
      badge1e: '🌟', badge1t: 'BRONCE ENCHAPADO', badge1s: 'Acabado premium',
      badge3e: '🌸', badge3t: 'DISEÑO EXCLUSIVO', badge3s: 'Detalles únicos',
      cardH: '🌟 Por qué el bronce enchapado es diferente',
      card1t: '🌸 Diseños que el acero no puede lograr',
      card1txt: 'El bronce permite engarces más delicados y formas más complejas que otros materiales. Cada pieza tiene un nivel de detalle que se nota — son las joyitas que generan conversación.',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelo antes de bañarte, hacer deporte o aplicar cremas y perfumes<br>✓ El baño puede desgastarse con el tiempo — cuanto más lo cuidás, más dura 🤍',
      r1: 43, r2: 44
    }
  };
  var URL_MATERIAL = {
    '/productos/rochi-regulable-10680-cw6sn/': 'ACERO BLANCO',
    '/productos/mau-regulable-10696-59vn5/':   'ACERO DORADO'
  };
  function getMaterial() {
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    if (URL_MATERIAL[path]) return URL_MATERIAL[path];
    var items = document.querySelectorAll('[class*="breadcrumb"] a, [class*="breadcrumb"] span, [class*="breadcrumb"] li');
    for (var i = 0; i < items.length; i++) {
      var txt = items[i].textContent.trim().toUpperCase();
      if (MATERIALES[txt]) return txt;
    }
    return null;
  }
  function getTalle() {
    var h1 = document.querySelector('h1');
    if (!h1) return null;
    var txt = h1.textContent;
    if (/regulable/i.test(txt)) return 'regulable';
    if (/midi/i.test(txt)) return 'midi';
    var m = txt.match(/talle\s+(\d+)/i);
    if (m) return m[1];
    return null;
  }
  function getTalleLabel(talle) {
    if (talle === 'regulable') return { talle: 'Regulable', diametro: 'Ajustable · 17 a 19 mm' };
    if (talle === 'midi')      return { talle: 'MIDI', diametro: '15 mm' };
    return { talle: talle, diametro: talle + ' mm' };
  }
  function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  function buildHTML(mat, talleData) {
    var m = MATERIALES[mat];
    var r1 = R[m.r1 % 50];
    var r2 = R[m.r2 % 50];
    var n1 = N[m.r1 % 50];
    var n2 = N[m.r2 % 50];
    var matLabel = mat.split(' ').map(capitalizar).join(' ');
    return '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:680px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +
      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">' + m.badge1e + '</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">' + m.badge1t + '</div><div style="font-size:10px;color:#888;margin-top:2px;">' + m.badge1s + '</div></div>' +
        '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">💎</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">PREMIUM</div><div style="font-size:10px;color:#888;margin-top:2px;">CALIDAD SUPERIOR</div></div>' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">' + m.badge3e + '</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">' + m.badge3t + '</div><div style="font-size:10px;color:#888;margin-top:2px;">' + m.badge3s + '</div></div>' +
      '</div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">' + m.cardH + '</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">' + m.card1t + '</div><div style="font-size:12px;color:#666;line-height:1.6;">' + m.card1txt + '</div></div></div></div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📋 Descripción</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;"><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + matLabel + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Talle</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + talleData.talle + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Diámetro interno</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + talleData.diametro + '</div></div></div></div></div>' +
      GUIA_TALLE +
      '<div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;"><div style="font-size:13px;font-weight:700;margin-bottom:10px;">🧴 Cómo cuidarlo</div><div style="font-size:12px;color:#555;line-height:1.9;">' + m.cuidado + '</div></div>' +
      '<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 Lo que dicen las que ya lo tienen</div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r1 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n1 + ' · Compra verificada ✓</div></div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r2 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n2 + ' · Compra verificada ✓</div></div></div>' +
    '</div>';
  }
  function inyectar() {
    var mat = getMaterial();
    if (!mat) return;
    var talle = getTalle();
    if (!talle) return;
    var talleData = getTalleLabel(talle);
    var contenedor = document.querySelector('#product-description');
    if (!contenedor || contenedor.querySelector('.tribal-desc')) return;
    contenedor.innerHTML = buildHTML(mat, talleData);
  }
  inyectar();
  setTimeout(inyectar, 1000);
  setTimeout(inyectar, 2500);
})();
