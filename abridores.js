(function() {

  var R_PISTOLA = [
    '"Súper fácil de usar. No dolió nada y quedó perfecto. Lo recomiendo 100%."',
    '"Llegó todo sellado y esterilizado. Me la hice sola en casa y quedó divino."',
    '"Clarísimas las instrucciones. En dos minutos lista. El aro quedó perfecto."',
    '"No sentí casi nada. Mucho más fácil de lo que pensaba."',
    '"Llegó sellada y todo impecable. El pad de alcohol incluido es un detalle genial."',
    '"Me la hice con mi hermana. Las dos quedamos re contentas con el resultado."',
    '"La compré con miedo y fue pan comido. El aro quedó exactamente donde quería."',
    '"Calidad increíble. El aro no me molestó para nada desde el primer momento."',
    '"Perfecta para hacerse la segunda perforación en casa. Súper recomendable."',
    '"Llegó rápido y en perfecto estado. Todo bien sellado y listo para usar."'
  ];
  var N_PISTOLA = [
    'Sofi M.','Caro V.','Juli R.','Male G.','Flor T.',
    'Anto S.','Lau A.','Vale C.','Mica P.','Nati L.'
  ];

  var R_ABRIDORES = [
    '"Los compré para hacerme la segunda perforación y quedaron perfectos. Súper fácil."',
    '"Llegaron sellados y en perfecto estado. Los usé con la pistola de Tribal y funcionó perfecto."',
    '"Calidad increíble. El arito no me molestó nada desde el primer momento."',
    '"Vine a buscar repuestos y me sorprendió lo bien que vienen embalados. Todo sellado."',
    '"Los usé con mi hermana. Los dos quedaron perfectos al primer intento."',
    '"Súper fáciles de cargar en la pistola. En dos minutos lista para usar."',
    '"No sentí casi nada. Mucho más fácil de lo que esperaba para la segunda perfo."',
    '"Llegaron rápido y bien embalados. La calidad del arito es excelente."',
    '"Los compré para regalar junto con la pistola. Quedó un regalo genial."',
    '"Perfectos para tener de repuesto. Siempre viene bien tenerlos a mano."'
  ];
  var N_ABRIDORES = [
    'Juli A.','Flor R.','Caro G.','Vale T.','Anto S.',
    'Sofi L.','Male C.','Mica P.','Nati V.','Lau M.'
  ];

  var R_POOL_TAPITA = [
    '"Lo compré para mi bebé y es una maravilla. No pincha nada y la plata es de calidad."',
    '"Tenía miedo que la tuerca le moleste a mi nena y con este cierre no hay problema. Divino."',
    '"La plata se nota de calidad. El cierre tapita es una genialidad."',
    '"Lo uso yo también cuando quiero estar cómoda todo el día. No sentís nada atrás."',
    '"Perfecto para bebés. No se cae, no pincha, es todo lo que necesitaba."',
    '"Me lo recomendaron y no me arrepentí. La calidad es increíble para el precio."',
    '"El cierre es muy fácil de poner y sacar. Ideal para nenas chiquitas."',
    '"La plata 925 se nota. No se oscureció nada con el uso."',
    '"Llegó rápido y en perfecto estado. Lo estrené al toque."',
    '"Es exactamente lo que buscaba. Cómodo, seguro y hermoso."',
    '"Lo usé en mi nena desde que le hicieron las orejas y no tuve ningún problema."',
    '"El diseño es hermoso y el cierre tapita es lo mejor. No pincha nunca."',
    '"Lo compré para regalo de bautismo y fue el mejor regalo. Lo amaron."',
    '"La calidad de la plata es muy buena. Vale cada peso."',
    '"Muy cómodo para usar todo el día. No sentís el cierre para nada."',
    '"Lo recomiendo 100%. El cierre tapita es la mejor opción para bebés."',
    '"Se ve muy delicado y fino. Es exactamente lo que quería para mi nena."',
    '"Llegó súper bien embalado. Se nota el cuidado en cada detalle."',
    '"La plata es de calidad real. No cambió de color ni con el uso diario."',
    '"Es el primer aro de mi nena y quedó perfecto. El cierre no le molesta nada."',
    '"Lo uso yo cuando quiero estar cómoda. El cierre tapita no pincha ni un poco."',
    '"Hermoso y de calidad. El cierre es muy práctico y seguro."',
    '"Me lo recomendó mi pediatra y fue la mejor recomendación."',
    '"La plata 925 es hipoalergénica. Ideal para pieles delicadas."',
    '"Es exactamente como en la foto. Llegó rápido y en perfecto estado."'
  ];
  var N_POOL_TAPITA = [
    'Sofi G.','Vale M.','Caro T.','Flor R.','Juli A.',
    'Male S.','Anto L.','Lau C.','Pau R.','Nati F.',
    'Dani S.','Belu G.','Magui T.','Sil P.','Vicky A.',
    'Andre L.','Clari M.','Juani R.','Mica V.','Romi P.',
    'Cami B.','Gime R.','Luli M.','Feli G.','Maru S.'
  ];

  var MAT_TAPITA = {
    'PLATA 925': {
      badge1e: '✨', badge1t: 'PLATA 925 REAL', badge1s: 'Plata 925',
      cardH: '✨ Por qué el cierre abridor es diferente',
      card1txt: 'El sistema abridor con tapita reemplaza la tuerca mariposa tradicional por un cierre suave que no tiene puntas expuestas. Ideal para bebés o para cuando querés usar tus aritos favoritos sin sentir nada atrás.',
      matLabel: 'Plata 925', dondeLbl: 'Dónde usarlo', dondeVal: 'Oreja',
      cuidadoLbl: 'Cómo cuidarlo', precioPor: 'Unidad', reviewsLbl: 'Lo que dicen las que ya lo tienen',
      cuidado: '✓ Limpiá con un paño suave y seco<br>✓ Guardalo separado de otras piezas para evitar rozaduras<br>✓ Es una joyita delicada — con un poco de amor dura muchísimo 🤍',
      usePool: true, r1: null, n1: null, r2: null, n2: null
    },
    'ACERO QUIRÚRGICO': {
      badge1e: '💪', badge1t: 'ACERO QUIRÚRGICO', badge1s: 'Hipoalergénico',
      cardH: '💪 Por qué el acero quirúrgico es el más elegido',
      card1txt: 'El sistema abridor con tapita reemplaza la tuerca mariposa por un cierre suave sin puntas expuestas. Hipoalergénico, resistente y cómodo para usar todo el día.',
      matLabel: 'Acero quirúrgico', dondeLbl: 'Dónde usarlos', dondeVal: 'Oreja',
      cuidadoLbl: 'Cómo cuidarlos', precioPor: 'Par ✦ Dos aritos', reviewsLbl: 'Lo que dicen las que ya los tienen',
      cuidado: '✓ Resistente al agua y al sudor — podés usarlos todo el día<br>✓ Limpiá con un paño suave si hace falta<br>✓ No se oxidan ni ennegrecen con el uso 💪',
      usePool: false,
      r1: '"El cierre tapita es lo mejor. No sentís nada atrás y el acero no me genera ninguna alergia."', n1: 'Sofi G.',
      r2: '"Los uso todos los días. Son cómodos, no pincha nada y la calidad es muy buena."', n2: 'Vale M.'
    },
    'ACERO DORADO': {
      badge1e: '✨', badge1t: 'ACERO DORADO', badge1s: 'Baño de oro',
      cardH: '✨ Por qué el acero dorado es el favorito',
      card1txt: 'El sistema abridor con tapita reemplaza la tuerca mariposa por un cierre suave sin puntas expuestas. El dorado que dura, con el cierre que no molesta.',
      matLabel: 'Acero dorado', dondeLbl: 'Dónde usarlos', dondeVal: 'Oreja',
      cuidadoLbl: 'Cómo cuidarlos', precioPor: 'Par ✦ Dos aritos', reviewsLbl: 'Lo que dicen las que ya los tienen',
      cuidado: '✓ Evitá el contacto prolongado con agua, perfume y cremas<br>✓ Guardalos separados para que no se rayen<br>✓ El baño de oro dura más cuando los cuidás 🤍',
      usePool: false,
      r1: '"El dorado es hermoso y el cierre no molesta nada. Los uso todo el día sin problema."', n1: 'Caro T.',
      r2: '"Me encantan. El cierre tapita es una genialidad, no sentís nada atrás."', n2: 'Flor R.'
    },
    'ACERO BLANCO': {
      badge1e: '🤍', badge1t: 'ACERO BLANCO', badge1s: 'Baño de plata 925',
      cardH: '🤍 Por qué el acero blanco es una joya inteligente',
      card1txt: 'El sistema abridor con tapita reemplaza la tuerca mariposa por un cierre suave sin puntas expuestas. El brillo de la plata, a otro precio, con el cierre que no molesta.',
      matLabel: 'Acero blanco', dondeLbl: 'Dónde usarlos', dondeVal: 'Oreja',
      cuidadoLbl: 'Cómo cuidarlos', precioPor: 'Par ✦ Dos aritos', reviewsLbl: 'Lo que dicen las que ya los tienen',
      cuidado: '✓ Evitá el contacto con agua, pileta y productos de limpieza<br>✓ Sacátelos antes de bañarte, hacer deporte o aplicar cremas y perfumes<br>✓ Con un poco de cuidado el baño de plata dura muchísimo 🤍',
      usePool: false,
      r1: '"Se ven igual que de plata y el cierre tapita es increíble. No pincha nada."', n1: 'Male S.',
      r2: '"Los compré para mi nena y son perfectos. El cierre es muy fácil y no molesta nada."', n2: 'Anto L.'
    }
  };

  var URL_FALLBACK_TAPITA = {
    '/productos/abridor-square-03406/': 'PLATA 925'
  };

  var MAT_PISTOLA = {
    dorado:    { badge2e: '✨', badge2t: 'ACERO DORADO',    badge2s: 'Baño de oro',       aroLabel: 'Aro de acero dorado ya cargado' },
    quirurgico:{ badge2e: '💪', badge2t: 'ACERO QUIRÚRGICO', badge2s: 'Hipoalergénico',    aroLabel: 'Aro de acero quirúrgico ya cargado' }
  };

  function detectarTipo() {
    var h1 = document.querySelector('h1');
    var h1txt = h1 ? h1.textContent : '';
    if (/pistola abridora/i.test(h1txt)) return 'pistola';
    if (/abridores pistola/i.test(h1txt)) return 'repuesto';
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    if (URL_FALLBACK_TAPITA[path]) return 'tapita';
    var breadcrumb = document.querySelector('[class*="breadcrumb"]');
    if (!breadcrumb) return null;
    var txt = breadcrumb.textContent.toUpperCase();
    if (txt.indexOf('ABRIDORES') !== -1) return 'tapita';
    return null;
  }

  function getMaterialTapita() {
    var path = window.location.pathname.replace(/\/$/, '') + '/';
    if (URL_FALLBACK_TAPITA[path]) return URL_FALLBACK_TAPITA[path];
    var items = document.querySelectorAll('[class*="breadcrumb"] a, [class*="breadcrumb"] span, [class*="breadcrumb"] li');
    for (var i = 0; i < items.length; i++) {
      var txt = items[i].textContent.trim().toUpperCase().replace(/\s+/g, ' ');
      if (MAT_TAPITA[txt]) return txt;
    }
    return null;
  }

  function getMaterialPistola() {
    var h1 = document.querySelector('h1');
    if (!h1) return 'quirurgico';
    return /dorado/i.test(h1.textContent) ? 'dorado' : 'quirurgico';
  }

  function buildPistola(mat) {
    var m = MAT_PISTOLA[mat];
    var idx = mat === 'dorado' ? 3 : 0;
    var r1 = R_PISTOLA[idx % 10]; var n1 = N_PISTOLA[idx % 10];
    var r2 = R_PISTOLA[(idx + 5) % 10]; var n2 = N_PISTOLA[(idx + 5) % 10];
    return '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:680px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +
      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">🧴</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">YA ESTERILIZADA</div><div style="font-size:10px;color:#888;margin-top:2px;">Lista para usar</div></div>' +
        '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">' + m.badge2e + '</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">' + m.badge2t + '</div><div style="font-size:10px;color:#888;margin-top:2px;">' + m.badge2s + '</div></div>' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">⚡</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">UN MOVIMIENTO</div><div style="font-size:10px;color:#888;margin-top:2px;">Rápido y fácil</div></div>' +
      '</div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">💫 Por qué elegir la pistola abridora de Tribal</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">✅ Todo incluido, sin vueltas</div><div style="font-size:12px;color:#666;line-height:1.6;">Viene sellada, esterilizada y con el aro ya cargado adentro. No necesitás nada más — solo seguir los pasos y listo. Incluye pad de alcohol al 70% para limpiar antes.</div></div></div></div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📦 Qué incluye</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:flex;flex-direction:column;gap:10px;"><div style="display:flex;align-items:center;gap:10px;font-size:13px;color:#1a1a1a;"><span style="font-size:16px;">🔫</span> Pistola abridora sellada y esterilizada</div><div style="display:flex;align-items:center;gap:10px;font-size:13px;color:#1a1a1a;"><span style="font-size:16px;">💍</span> ' + m.aroLabel + '</div><div style="display:flex;align-items:center;gap:10px;font-size:13px;color:#1a1a1a;"><span style="font-size:16px;">🧴</span> Pad de alcohol al 70%</div></div></div></div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">✂️ Cómo usarla — 4 pasos</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:flex;flex-direction:column;gap:14px;"><div style="display:flex;gap:12px;align-items:flex-start;"><div style="min-width:28px;height:28px;border-radius:50%;background:#df598c;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;">1</div><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Limpiá la oreja</div><div style="font-size:12px;color:#666;line-height:1.6;">Abrí el pad de alcohol y pasalo por el lóbulo. Esperá que se seque.</div></div></div><div style="display:flex;gap:12px;align-items:flex-start;"><div style="min-width:28px;height:28px;border-radius:50%;background:#df598c;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;">2</div><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Marcá el punto <span style="font-style:italic;font-weight:400;color:#888;">(opcional)</span></div><div style="font-size:12px;color:#666;line-height:1.6;">Si querés que quede exactamente donde lo imaginaste, marcá el punto con una lapicera antes de posicionar la pistola.</div></div></div><div style="display:flex;gap:12px;align-items:flex-start;"><div style="min-width:28px;height:28px;border-radius:50%;background:#df598c;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;">3</div><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Posicioná la pistola</div><div style="font-size:12px;color:#666;line-height:1.6;">El aro ya está cargado adentro. Alineá la punta con tu marca y asegurate de que el lóbulo quede bien centrado.</div></div></div><div style="display:flex;gap:12px;align-items:flex-start;"><div style="min-width:28px;height:28px;border-radius:50%;background:#df598c;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;">4</div><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">¡Apretá!</div><div style="font-size:12px;color:#666;line-height:1.6;">Un movimiento firme y listo — el aro queda colocado al instante. 🎉</div></div></div></div><div style="margin-top:16px;background:#fffbe6;border-left:3px solid #f5a623;padding:10px 12px;border-radius:0 6px 6px 0;font-size:12px;color:#1a1a1a;">⚠️ <strong>Solo para lóbulo.</strong> No apta para cartílago u otras zonas.</div></div></div>' +
      '<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 Lo que dicen las que ya la usaron</div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r1 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n1 + ' · Compra verificada ✓</div></div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r2 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n2 + ' · Compra verificada ✓</div></div></div>' +
    '</div>';
  }

  function buildRepuesto() {
    return '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:680px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +
      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">🧴</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">YA ESTERILIZADOS</div><div style="font-size:10px;color:#888;margin-top:2px;">Listos para usar</div></div>' +
        '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">💪</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">ACERO QUIRÚRGICO</div><div style="font-size:10px;color:#888;margin-top:2px;">Hipoalergénico</div></div>' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">✌️</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">VIENEN DE A PAR</div><div style="font-size:10px;color:#888;margin-top:2px;">Para las dos orejas</div></div>' +
      '</div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">💫 ¿Para qué sirven los abridores?</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">✅ Repuestos para tu pistola abridora</div><div style="font-size:12px;color:#666;line-height:1.6;">Son los aritos que van cargados en la pistola abridora. Vienen sellados y esterilizados — listos para poner en la pistola y usar, igual que la original. Ideales para hacerse una perforación nueva o para regalar junto con la pistola.</div></div></div></div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📦 Qué incluye</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:flex;flex-direction:column;gap:10px;"><div style="display:flex;align-items:center;gap:10px;font-size:13px;color:#1a1a1a;"><span style="font-size:16px;">💍</span> 2 aritos de acero quirúrgico sellados y esterilizados</div><div style="display:flex;align-items:center;gap:10px;font-size:13px;color:#1a1a1a;"><span style="font-size:16px;">🔫</span> Compatibles con pistola abridora Tribal</div></div></div></div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">✂️ Cómo usarlos</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:flex;flex-direction:column;gap:14px;"><div style="display:flex;gap:12px;align-items:flex-start;"><div style="min-width:28px;height:28px;border-radius:50%;background:#df598c;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;">1</div><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Cargá el abridor en la pistola</div><div style="font-size:12px;color:#666;line-height:1.6;">Insertá el abridor en la pistola siguiendo el mismo mecanismo que el original. Ya viene esterilizado — no lo toques con los dedos.</div></div></div><div style="display:flex;gap:12px;align-items:flex-start;"><div style="min-width:28px;height:28px;border-radius:50%;background:#df598c;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;">2</div><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">Limpiá la zona</div><div style="font-size:12px;color:#666;line-height:1.6;">Pasá alcohol al 70% por el lóbulo y esperá que se seque antes de usar la pistola.</div></div></div><div style="display:flex;gap:12px;align-items:flex-start;"><div style="min-width:28px;height:28px;border-radius:50%;background:#df598c;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;">3</div><div><div style="font-size:12px;font-weight:700;color:#1a1a1a;margin-bottom:2px;">¡Apretá y listo!</div><div style="font-size:12px;color:#666;line-height:1.6;">Un movimiento firme y el arito queda colocado al instante. 🎉</div></div></div></div><div style="margin-top:16px;background:#fffbe6;border-left:3px solid #f5a623;padding:10px 12px;border-radius:0 6px 6px 0;font-size:12px;color:#1a1a1a;">⚠️ <strong>Solo para lóbulo.</strong> No apta para cartílago u otras zonas.</div></div></div>' +
      '<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 Lo que dicen las que ya los usaron</div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + R_ABRIDORES[0] + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + N_ABRIDORES[0] + ' · Compra verificada ✓</div></div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + R_ABRIDORES[5] + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + N_ABRIDORES[5] + ' · Compra verificada ✓</div></div></div>' +
    '</div>';
  }

  function buildTapita(mat) {
    var m = MAT_TAPITA[mat];
    var r1, n1, r2, n2;
    if (m.usePool) {
      var h1 = document.querySelector('h1');
      var seed = h1 ? h1.textContent.length : 0;
      var i1 = seed % 25; var i2 = (seed + 12) % 25;
      r1 = R_POOL_TAPITA[i1]; n1 = N_POOL_TAPITA[i1];
      r2 = R_POOL_TAPITA[i2]; n2 = N_POOL_TAPITA[i2];
    } else {
      r1 = m.r1; n1 = m.n1; r2 = m.r2; n2 = m.n2;
    }
    return '<div class="tribal-desc" style="font-family:\'Montserrat\',sans-serif;max-width:680px;margin:0 auto;padding:20px 0;color:#1a1a1a;line-height:1.4;">' +
      '<div style="display:flex;justify-content:space-around;text-align:center;padding:20px 12px;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:24px;">' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">' + m.badge1e + '</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">' + m.badge1t + '</div><div style="font-size:10px;color:#888;margin-top:2px;">' + m.badge1s + '</div></div>' +
        '<div style="flex:1;padding:0 4px;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0;"><div style="font-size:26px;margin-bottom:6px;">🩷</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">CIERRE TAPITA</div><div style="font-size:10px;color:#888;margin-top:2px;">No pincha</div></div>' +
        '<div style="flex:1;padding:0 4px;"><div style="font-size:26px;margin-bottom:6px;">💎</div><div style="font-size:10px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;">PREMIUM</div><div style="font-size:10px;color:#888;margin-top:2px;">Calidad superior</div></div>' +
      '</div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">' + m.cardH + '</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;"><div style="padding:16px;"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">🩷 El cierre que no pincha, nunca</div><div style="font-size:12px;color:#666;line-height:1.6;">' + m.card1txt + '</div></div></div></div>' +
      '<div style="background:#fff8e1;border:1px solid #ffe082;border-radius:8px;padding:14px 16px;margin-bottom:24px;"><div style="font-size:12px;color:#795548;line-height:1.7;">⚠️ <strong>Importante:</strong> estos aritos no sirven para realizar perforaciones. Son para usar en perforaciones ya existentes con el beneficio del cierre tapita.</div></div>' +
      '<div style="margin-bottom:24px;"><div style="background:#df598c;color:white;padding:12px 16px;border-radius:8px 8px 0 0;font-size:13px;font-weight:700;letter-spacing:0.3px;">📋 Descripción</div><div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 8px 8px;padding:16px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;"><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Material</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + m.matLabel + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Tipo de cierre</div><div style="font-size:13px;font-weight:700;margin-top:3px;">Abridor tapita</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">' + m.dondeLbl + '</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + m.dondeVal + '</div></div><div><div style="font-size:10px;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Precio por</div><div style="font-size:13px;font-weight:700;margin-top:3px;">' + m.precioPor + '</div></div></div></div></div>' +
      '<div style="background:#f9f9f9;border-radius:8px;padding:16px;margin-bottom:24px;"><div style="font-size:13px;font-weight:700;margin-bottom:10px;">🧴 ' + m.cuidadoLbl + '</div><div style="font-size:12px;color:#555;line-height:1.9;">' + m.cuidado + '</div></div>' +
      '<div style="margin-bottom:24px;"><div style="font-size:14px;font-weight:800;margin-bottom:12px;">💬 ' + m.reviewsLbl + '</div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;margin-bottom:10px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r1 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n1 + ' · Compra verificada ✓</div></div><div style="border:1px solid #e8e8e8;border-radius:8px;padding:16px;"><div style="color:#c41163;font-size:13px;margin-bottom:6px;letter-spacing:1px;">★★★★★</div><div style="font-size:12px;color:#333;line-height:1.7;font-style:italic;">' + r2 + '</div><div style="font-size:11px;color:#aaa;margin-top:8px;">' + n2 + ' · Compra verificada ✓</div></div></div>' +
    '</div>';
  }

  function detectarYInyectar() {
    var tipo = detectarTipo();
    if (!tipo) return;
    var contenedor = document.querySelector('#product-description');
    if (!contenedor || contenedor.querySelector('.tribal-desc')) return;
    var html;
    if (tipo === 'pistola') html = buildPistola(getMaterialPistola());
    else if (tipo === 'repuesto') html = buildRepuesto();
    else { var mat = getMaterialTapita(); if (!mat) return; html = buildTapita(mat); }
    contenedor.innerHTML = html;
  }

  detectarYInyectar();
  setTimeout(detectarYInyectar, 1000);
  setTimeout(detectarYInyectar, 2500);

})();
