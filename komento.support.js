"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "komento",
			"path": "komento/komento.js",
			"file": "komento.js",
			"module": "komento",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/komento.git",
			"test": "komento-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Parses comments inside javascript functions and converts them to string.
	@end-module-documentation

	@include:
		{
			"handlebar": "handlebars",
			"harden": "harden",
			"protype": "protype",
			"realign": "realign",
			"stuffed": "stuffed",
			"truly": "truly"
		}
	@end-include
*/

var handlebar = require("handlebars");
var harden = require("harden");
var protype = require("protype");
var realign = require("realign");
var stuffed = require("stuffed");
var truly = require("truly");

var komento = function komento(comment, option) {
	/*;
 	@meta-configuration:
 		{
 			"comment:required": "function",
 			"option": "object"
 		}
 	@end-meta-configuration
 */

	if (!protype(comment, FUNCTION)) {
		throw new Error("invalid function");
	}

	var string = (comment.toString().match(komento.MULTIPLE_LINE_COMMENT_PATTERN) || [])[1] || (comment.toString().match(komento.SINGLE_LINE_COMMENT_PATTERN) || [])[1];

	/*;
 	@note:
 		If there are no string from the comment,
 			we can safe to assume that it should return a string.
 	@end-note
 */
	if (!string) {
		string = comment();
	}

	string = realign(string);

	if (truly(string) && protype(option, OBJECT) && stuffed(option)) {
		string = handlebar.compile(string)(option);
	}

	return string;
};

harden.bind(komento)("MULTIPLE_LINE_COMMENT_PATTERN", /^function\s*\w*\([^\(\)]*\)\s*\{\s*[\s\S]*\s*\/\*\!?([\s\S]*|.*|[^]*)\*\/\S*\s*\}$/m).harden("SINGLE_LINE_COMMENT_PATTERN", /^function\s*\w*\([^\(\)]*\)\s*\{\s*[\s\S]*\s*\/\*\!?([\s\S]*|.*|[^]*)\*\/\S*\s*\}$/);

module.exports = komento;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvbWVudG8uanMiXSwibmFtZXMiOlsiaGFuZGxlYmFyIiwicmVxdWlyZSIsImhhcmRlbiIsInByb3R5cGUiLCJyZWFsaWduIiwic3R1ZmZlZCIsInRydWx5Iiwia29tZW50byIsImNvbW1lbnQiLCJvcHRpb24iLCJGVU5DVElPTiIsIkVycm9yIiwic3RyaW5nIiwidG9TdHJpbmciLCJtYXRjaCIsIk1VTFRJUExFX0xJTkVfQ09NTUVOVF9QQVRURVJOIiwiU0lOR0xFX0xJTkVfQ09NTUVOVF9QQVRURVJOIiwiT0JKRUNUIiwiY29tcGlsZSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLFlBQVlDLFFBQVMsWUFBVCxDQUFsQjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUcsVUFBVUgsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUksVUFBVUosUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUssUUFBUUwsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTU0sVUFBVSxTQUFTQSxPQUFULENBQWtCQyxPQUFsQixFQUEyQkMsTUFBM0IsRUFBbUM7QUFDbEQ7Ozs7Ozs7OztBQVNBLEtBQUksQ0FBQ04sUUFBU0ssT0FBVCxFQUFrQkUsUUFBbEIsQ0FBTCxFQUFtQztBQUNsQyxRQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsU0FBUyxDQUFFSixRQUFRSyxRQUFSLEdBQW9CQyxLQUFwQixDQUEyQlAsUUFBUVEsNkJBQW5DLEtBQXNFLEVBQXhFLEVBQStFLENBQS9FLEtBQ1osQ0FBRVAsUUFBUUssUUFBUixHQUFvQkMsS0FBcEIsQ0FBMkJQLFFBQVFTLDJCQUFuQyxLQUFvRSxFQUF0RSxFQUE2RSxDQUE3RSxDQUREOztBQUdBOzs7Ozs7QUFNQSxLQUFJLENBQUNKLE1BQUwsRUFBYTtBQUNaQSxXQUFTSixTQUFUO0FBQ0E7O0FBRURJLFVBQVNSLFFBQVNRLE1BQVQsQ0FBVDs7QUFFQSxLQUFJTixNQUFPTSxNQUFQLEtBQW1CVCxRQUFTTSxNQUFULEVBQWlCUSxNQUFqQixDQUFuQixJQUFnRFosUUFBU0ksTUFBVCxDQUFwRCxFQUF1RTtBQUN0RUcsV0FBU1osVUFBVWtCLE9BQVYsQ0FBbUJOLE1BQW5CLEVBQTZCSCxNQUE3QixDQUFUO0FBQ0E7O0FBRUQsUUFBT0csTUFBUDtBQUNBLENBbENEOztBQW9DQVYsT0FDRWlCLElBREYsQ0FDUVosT0FEUixFQUNtQiwrQkFEbkIsRUFFRSxxRkFGRixFQUdFTCxNQUhGLENBR1UsNkJBSFYsRUFJRSxvRkFKRjs7QUFNQWtCLE9BQU9DLE9BQVAsR0FBaUJkLE9BQWpCIiwiZmlsZSI6ImtvbWVudG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTYgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImtvbWVudG9cIixcblx0XHRcdFwicGF0aFwiOiBcImtvbWVudG8va29tZW50by5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwia29tZW50by5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJrb21lbnRvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMva29tZW50by5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImtvbWVudG8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRQYXJzZXMgY29tbWVudHMgaW5zaWRlIGphdmFzY3JpcHQgZnVuY3Rpb25zIGFuZCBjb252ZXJ0cyB0aGVtIHRvIHN0cmluZy5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFuZGxlYmFyXCI6IFwiaGFuZGxlYmFyc1wiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmVhbGlnblwiOiBcInJlYWxpZ25cIixcblx0XHRcdFwic3R1ZmZlZFwiOiBcInN0dWZmZWRcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGhhbmRsZWJhciA9IHJlcXVpcmUoIFwiaGFuZGxlYmFyc1wiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJlYWxpZ24gPSByZXF1aXJlKCBcInJlYWxpZ25cIiApO1xuY29uc3Qgc3R1ZmZlZCA9IHJlcXVpcmUoIFwic3R1ZmZlZFwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuXG5jb25zdCBrb21lbnRvID0gZnVuY3Rpb24ga29tZW50byggY29tbWVudCwgb3B0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiY29tbWVudDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFwib3B0aW9uXCI6IFwib2JqZWN0XCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvdHlwZSggY29tbWVudCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZ1bmN0aW9uXCIgKTtcblx0fVxuXG5cdGxldCBzdHJpbmcgPSAoIGNvbW1lbnQudG9TdHJpbmcoICkubWF0Y2goIGtvbWVudG8uTVVMVElQTEVfTElORV9DT01NRU5UX1BBVFRFUk4gKSB8fCBbIF0gKVsgMSBdIHx8XG5cdFx0KCBjb21tZW50LnRvU3RyaW5nKCApLm1hdGNoKCBrb21lbnRvLlNJTkdMRV9MSU5FX0NPTU1FTlRfUEFUVEVSTiApIHx8IFsgXSApWyAxIF07XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRJZiB0aGVyZSBhcmUgbm8gc3RyaW5nIGZyb20gdGhlIGNvbW1lbnQsXG5cdFx0XHRcdHdlIGNhbiBzYWZlIHRvIGFzc3VtZSB0aGF0IGl0IHNob3VsZCByZXR1cm4gYSBzdHJpbmcuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlmKCAhc3RyaW5nICl7XG5cdFx0c3RyaW5nID0gY29tbWVudCggKTtcblx0fVxuXG5cdHN0cmluZyA9IHJlYWxpZ24oIHN0cmluZyApO1xuXG5cdGlmKCB0cnVseSggc3RyaW5nICkgJiYgcHJvdHlwZSggb3B0aW9uLCBPQkpFQ1QgKSAmJiBzdHVmZmVkKCBvcHRpb24gKSApe1xuXHRcdHN0cmluZyA9IGhhbmRsZWJhci5jb21waWxlKCBzdHJpbmcgKSggb3B0aW9uICk7XG5cdH1cblxuXHRyZXR1cm4gc3RyaW5nO1xufTtcblxuaGFyZGVuXG5cdC5iaW5kKCBrb21lbnRvICkoIFwiTVVMVElQTEVfTElORV9DT01NRU5UX1BBVFRFUk5cIixcblx0XHQvXmZ1bmN0aW9uXFxzKlxcdypcXChbXlxcKFxcKV0qXFwpXFxzKlxce1xccypbXFxzXFxTXSpcXHMqXFwvXFwqXFwhPyhbXFxzXFxTXSp8Lip8W15dKilcXCpcXC9cXFMqXFxzKlxcfSQvbSApXG5cdC5oYXJkZW4oIFwiU0lOR0xFX0xJTkVfQ09NTUVOVF9QQVRURVJOXCIsXG5cdFx0L15mdW5jdGlvblxccypcXHcqXFwoW15cXChcXCldKlxcKVxccypcXHtcXHMqW1xcc1xcU10qXFxzKlxcL1xcKlxcIT8oW1xcc1xcU10qfC4qfFteXSopXFwqXFwvXFxTKlxccypcXH0kLyApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtvbWVudG87XG4iXX0=
