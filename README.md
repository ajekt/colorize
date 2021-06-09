<img src='color.gif'></img>

# Colorize
A little function I wrote to make using ANSI Escape sequences a bit more easy/pretty to use in javascript.
Colorize parses HTML style tags to insert ANSI sequences in their position.</br>
Here is a comparison between using colorize and raw escape sequences.</br></br>
ANSI Escape Sequences:</br>
```javascript
console.log('\x1b[33mHello \x1b[35mWorld!\x1b[0m');
```
Colorize:</br>
```javascript
colorize('<yellow>Hello <magenta>World!<clear>');
// OR
'<yellow>Hello <magenta>World!<clear>'.colorize();
```
# Tags
> **NOTE** Colorize is still pretty rough around the edges, if you find any problems make an issue or pull request.

All tags are encapsulated in angle brackets `<tag>` just like HTML. Using a closing tag `</tag>` will remove the tags effect.
## clear
This will remove all effects, excluding bright mode and background mode.</br>
Example:</br>
```javascript
colorize('<green>Very cool<clear> text')
```
Note that there is no need to close the `<green>` tag after using clear.
## bright (b)
Bright mode will increase the brightness of all selected text inside the tag.</br>
This function changes the values of the colors tags below, which could lead to some unexpected results.
It is being worked on to make this mode have more consistent behavior.
```javascript
colorize('<b><yellow>Bright Yellow</yellow></b>')
```
## background (bg)
Background mode will turn all colors inside the tag to background colors.</br>
```javascript
colorize('<bg><red>Red Background</red></bg>')
// OR
'<bg><red>Red Background</red></bg>'.colorize();
```
## bold
Adds a bold effect to text enclosed in the tag.
## dim
Dims the color of the text, not as commonly supported as bold.
## italic
Adds a slant effect to text, not commonly supported.
## underline (ul)
Adds an underline the text.
## invert
Reverses the foreground and background color of the text.
## strikethrough (strike)
Adds a strike through the selected text.
## colors
| Tag Names |
| ----- |
| black |
| red |
| green |
| yellow |
| blue |
| magenta |
| cyan |
| white |
## getLength( string )
Returns the length of actual text inside a string which uses colorize syntax.</br>
Example:</br>
```javascript
console.log('<red>red</red>'.getLength());
// Output: 3
```
