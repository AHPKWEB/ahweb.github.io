function placeCaretAtEnd(t){if(t.focus(),void 0!==window.getSelection&&void 0!==document.createRange){const e=document.createRange();e.selectNodeContents(t),e.collapse(!1);const o=window.getSelection();o.removeAllRanges(),o.addRange(e)}}$(document).ready((function(){$("#inputCode").on("input",(function(){const t=$(this).text(),e=hljs.highlight("javascript",t).value;$(this).html(e),placeCaretAtEnd(this)})),$("#minifyBtn").click((async function(){const t=$("#inputCode").text().trim();if(""!==t)try{const e=(await Terser.minify(t)).code;if(!e)throw new Error("Minification failed.");$("#outputCode").text(e),hljs.highlightElement(document.getElementById("outputCode")),$("#outputContainer").show(),$("#copyBtn, #downloadBtn").show()}catch(t){alert("Error minifying JavaScript: "+t.message)}else alert("Please enter JavaScript code to minify.")})),$("#clearTextBtn").click((()=>{$(".code-editor").text(""),$("#outputCode").text(""),$("#outputContainer").hide(),$("#copyBtn, #downloadBtn").hide()})),$("#copyBtn").click((function(){const t=$("#outputCode").text();navigator.clipboard.writeText(t).then((()=>{alert("Minified code copied to clipboard!")})).catch((t=>{alert("Failed to copy code: "+t)}))})),$("#downloadBtn").click((function(){const t=$("#outputCode").text(),e=new Blob([t],{type:"text/javascript"}),o=URL.createObjectURL(e),n=document.createElement("a");n.href=o,n.download="minified.js",n.click(),URL.revokeObjectURL(o)}))}));