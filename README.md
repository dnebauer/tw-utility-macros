# Tiddlywiki Plugin: Utilty Macros #

This plugin provides the macros:

* check-var-or-macro -- check whether macro-or variable exists
* home-path-link -- display hyperlink to a path in user's home directory
* list-item-space -- add vertical space after a list item
* number-format -- format a number.

## Installation ##

### Single file wiki ##

Install plugin file
[$\_\_plugins\_.dtn\_utility-macros.json](https://github.com/dnebauer/tw-utility-macros/blob/master/%24__plugins_.dtn_utility-macros.json)
to a single file wiki by:

* Dragging and dropping it into your wiki, or
* Saving the plugin tiddler file and importing it into your wiki.

### Node.js server wiki ###

Copy the contents of the `source` subdirectory to a suitable subdirectory under
the server plugins directory, and update individual wiki `tiddlywiki.info`
files accordingly.

Note: the server plugins directory may be something like
`/usr/local/lib/node_modules/tiddlywiki/plugins/`.

## License ##

This plugin is distributed under the same license as Tiddlywiki, the [3-Clause
BSD](https://opensource.org/licenses/BSD-3-Clause) License (also known as
BSD-3-Clause, the New BSD License, and the Modified BSD License).
