(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{323:function(s,t,e){"use strict";e.r(t);var a=e(3),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"problem-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-description","aria-hidden":"true"}},[s._v("#")]),s._v(" Problem Description")]),s._v(" "),e("p",[s._v("For building the encrypted string:\nTake every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.\nDo this n times!")]),s._v(" "),e("p",[s._v("Examples:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('"This is a test!", 1 -> "hsi  etTi sats!"\n"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"\n')])])]),e("p",[s._v("Write two methods:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function encrypt(text, n)\nfunction decrypt(encryptedText, n)\n")])])]),e("p",[s._v("For both methods:\nIf the input-string is null or empty return exactly this value!\nIf n is <= 0 then return the input text.")]),s._v(" "),e("h2",{attrs:{id:"sample-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample-tests","aria-hidden":"true"}},[s._v("#")]),s._v(" Sample Tests")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('describe("Solution", function(){\n  it("EncryptExampleTests", function(){    \n    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");\n    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");\n    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");\n    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");\n    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");\n    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");\n    Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");\n  });\n});\n\ndescribe("Solution", function(){\n  it("DecryptExampleTests", function(){    \n    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");\n    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");\n    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");\n    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");\n    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");\n    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");\n    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");\n  });\n});\n\ndescribe("Solution", function(){\n  it("Null or Empty", function(){    \n    Test.assertEquals(encrypt("", 0), "");\n    Test.assertEquals(decrypt("", 0), "");\n    Test.assertEquals(encrypt(null, 0), null);\n    Test.assertEquals(decrypt(null, 0), null);\n  });\n});\n')])])])])},[],!1,null,null,null);t.default=n.exports}}]);