// colorize.js
// --------------------------
// Liscence: MIT
// Developed by: ajekt
// Date created: 7th Jun 2021
// --------------------------


const tags = {
  bright: function(disable) {
    Object.keys(this).forEach(t => {
      if (typeof this[t] != "number") return;
      if (disable && this[t] >= 90) this[t] -= 60;
      if (!disable && this[t] < 50 && this[t] >= 30) this[t] += 60;
    });
  },
  
  background: function(disable) {
    Object.keys(this).forEach(t => {
      if (typeof this[t] != "number") return;
      if (!disable && this[t] >= 30) this[t] += 10;
      if (disable && this[t] >= 30) this[t] -= 10;
    });
  },
  clear: 0,
  bold: 1,
  dim: 2,
  italic: 3,
  underline: 4,
  // 5 & 6 are blink which don't typically work
  invert: 7,
  // 8 conceal/hide not widely supported
  strikethrough: 9,

  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
}

// Aliases
tags.b = tags.bright;
tags.bg = tags.background;
tags.strike = tags.strikethrough;
tags.ul = tags.underline;

function colorize(string) {
  let i = 0;
  let openTags = [];
  string = ' ' + string;
  while (i != -1) {
    i = string.indexOf('<', i);
    if (i == -1) continue;

    let tag = string.substring(i+1, string.indexOf('>', i));
    
    let tagDisable = false;
    if (tag[0] == '/') {
      tagDisable = true;
      tag = tag.substring(1);
    }

    if (!Object.keys(tags).includes(tag)) continue;
    if (typeof tags[tag] == "function") {
      string = string.substring(0, i) + string.substring(string.indexOf('>', i)+1);
      tags[tag](tagDisable);
      continue;
    }

    if (!openTags.includes(tag) && !tagDisable) {
      string = string.substring(0, i) + '\x1b['+tags[tag]+'m' + string.substring(string.indexOf('>', i)+1);
      openTags.push(tag);
    }

    if (openTags.includes(tag) && tagDisable) {
      openTags.splice(openTags.indexOf(tag), 1);
      let colors = '';
      openTags.forEach(t => {
        colors += `;${tags[t]}`;
      });

      string = string.substring(0, i) + '\x1b[0' + colors + 'm' + string.substring(string.indexOf('>', i)+1);
    }
  }
  return string.substring(1);
}

String.prototype.colorize = function() {
  return colorize(this);
}

function getLength(string) {
  let a = string.match(/<([^>]*)>/g);
  let res = string.length;
  if (!a) return res;
  a.forEach(t => {
    let len = t.length;
    t = t.substring(1, t.length-1);
    if (t.startsWith('/')) t = t.substring(1);
    if (Object.keys(tags).includes(t)) res -= len;
  })
  return res;
}

String.prototype.getLength = function() {
  return getLength(this);
}

module.exports = colorize;
