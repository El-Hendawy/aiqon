/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Aiqon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'aiqon-united-arab-emiratesaiqon': '&#xe900;',
		'aiqon-united-arab-emirates-1aiqon': '&#xe902;',
		'aiqon-united-arab-emirates-2aiqon': '&#xe907;',
		'aiqon-united-arab-emirates-3aiqon': '&#xe90f;',
		'aiqon-united-arab-emirates-4aiqon': '&#xe91d;',
		'aiqon-desertaiqon': '&#xe920;',
		'aiqon-teapotaiqon': '&#xe93a;',
		'aiqon-islamaiqon': '&#xe93f;',
		'aiqon-united-arab-emirates-5aiqon': '&#xe948;',
		'aiqon-united-arab-emirates-6aiqon': '&#xe94a;',
		'aiqon-knifeaiqon': '&#xe94c;',
		'aiqon-united-arab-emirates-7aiqon': '&#xe953;',
		'aiqon-carpetaiqon': '&#xe961;',
		'aiqon-perfumeaiqon': '&#xe968;',
		'aiqon-oil-pumpaiqon': '&#xe973;',
		'aiqon-monumentaiqon': '&#xe97c;',
		'aiqon-quranaiqon': '&#xe98a;',
		'aiqon-diamondaiqon': '&#xe994;',
		'aiqon-hookahaiqon': '&#xe997;',
		'aiqon-camelaiqon': '&#xe99e;',
		'aiqon-arab-womanaiqon': '&#xe9a3;',
		'aiqon-arab-manaiqon': '&#xe9a9;',
		'aiqon-cityscapeaiqon': '&#xe9b0;',
		'aiqon-necklaceaiqon': '&#xe9c6;',
		'aiqon-palm-islandsaiqon': '&#xe9ca;',
		'aiqon-castleaiqon': '&#xe9d9;',
		'aiqon-burj-al-arabaiqon': '&#xe9f2;',
		'aiqon-mosqueaiqon': '&#xe9f7;',
		'aiqon-buildingaiqon': '&#xea09;',
		'aiqon-building-1aiqon': '&#xea0b;',
		'aiqon-woman-with-hijabaiqon': '&#xea11;',
		'aiqon-tasbihaiqon': '&#xea12;',
		'aiqon-scimitar-1aiqon': '&#xea13;',
		'aiqon-scimitaraiqon': '&#xea14;',
		'aiqon-pyramidsaiqon': '&#xea15;',
		'aiqon-palm-trees-1aiqon': '&#xea16;',
		'aiqon-palm-treesaiqon': '&#xea17;',
		'aiqon-oil-lampaiqon': '&#xea18;',
		'aiqon-muslim-woman-with-hijabaiqon': '&#xea19;',
		'aiqon-muslim-woman-1aiqon': '&#xea1a;',
		'aiqon-muslim-womanaiqon': '&#xea1b;',
		'aiqon-muslim-praying-1aiqon': '&#xea1c;',
		'aiqon-muslim-prayingaiqon': '&#xea1d;',
		'aiqon-muslim-manaiqon': '&#xea1e;',
		'aiqon-mosque-moon-and-staraiqon': '&#xea1f;',
		'aiqon-mosque-and-moonaiqon': '&#xea20;',
		'aiqon-mosque-8aiqon': '&#xea21;',
		'aiqon-mosque-7aiqon': '&#xea22;',
		'aiqon-mosque-6aiqon': '&#xea23;',
		'aiqon-mosque-5aiqon': '&#xea24;',
		'aiqon-mosque-4aiqon': '&#xea25;',
		'aiqon-mosque-3aiqon': '&#xea26;',
		'aiqon-mosque-2aiqon': '&#xea27;',
		'aiqon-mosque-1aiqon': '&#xea28;',
		'aiqon-mosque1aiqon': '&#xea29;',
		'aiqon-minaretaiqon': '&#xea2a;',
		'aiqon-lanternaiqon': '&#xea2b;',
		'aiqon-koranaiqon': '&#xea2c;',
		'aiqon-kaabaaiqon': '&#xea2d;',
		'aiqon-islamic-prayer-1aiqon': '&#xea2e;',
		'aiqon-islamic-prayeraiqon': '&#xea2f;',
		'aiqon-islamic-moonaiqon': '&#xea30;',
		'aiqon-islamic-art-4aiqon': '&#xea31;',
		'aiqon-islamic-art-3aiqon': '&#xea32;',
		'aiqon-islamic-art-2aiqon': '&#xea33;',
		'aiqon-islamic-art-1aiqon': '&#xea34;',
		'aiqon-islamic-artaiqon': '&#xea35;',
		'aiqon-hookah1aiqon': '&#xea36;',
		'aiqon-half-moon-and-staraiqon': '&#xea37;',
		'aiqon-dromedaryaiqon': '&#xea38;',
		'aiqon-cloud-and-moonaiqon': '&#xea39;',
		'aiqon-burj-al-arab1aiqon': '&#xea3a;',
		'aiqon-belly-danceaiqon': '&#xea3b;',
		'aiqon-baggy-trousersaiqon': '&#xea3c;',
		'aiqon-arab-woman-with-hijabaiqon': '&#xea3d;',
		'aiqon-arab-woman-1aiqon': '&#xea3e;',
		'aiqon-arab-woman1aiqon': '&#xea3f;',
		'aiqon-arab-man-2aiqon': '&#xea40;',
		'aiqon-arab-man-1aiqon': '&#xea41;',
		'aiqon-arab-man1aiqon': '&#xea42;',
		'aiqon-arabic-lanternaiqon': '&#xea43;',
		'aiqon-arabic-jaraiqon': '&#xea44;',
		'aiqon-arabian-womanaiqon': '&#xea45;',
		'aiqon-arab-horseaiqon': '&#xea46;',
		'aiqon-araba-womanaiqon': '&#xea47;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/aiqon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
