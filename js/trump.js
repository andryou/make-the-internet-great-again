// Make the Internet Great Again - Copyright (C) andryou
// Distributed under the terms of the GNU General Public License
// The GNU General Public License can be found in the gpl.txt file. Alternatively, see <http://www.gnu.org/licenses/>.
$(document).ready(function() {
	loaded();
});
function loaded() {
	trump();
	new MutationObserver(trump).observe(document.querySelector("body"), { childList: true, subtree : true, attributes: false, characterData : false });
}
function trump() {
	$('body *:not(:has("*")):icontains("trump"), body p:icontains("trump")').remove();
	$('body a[title*="trump" i], body a[href*="trump" i], body img[src*="trump" i], body img[alt*="trump" i], body img[title*="trump" i]').remove();
}
$.expr[':'].icontains = $.expr.createPseudo(function(text) {
    return function(e) {
        return $(e).text().toUpperCase().indexOf(text.toUpperCase()) >= 0;
    };
});