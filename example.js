const colorize = require('./colorize');
let colors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];

console.log('<bold>Backgrounds</bold>'.colorize());
colors.forEach(color => {
  console.log(`\t> <bg><${color}>${color}</${color}></bg>`.colorize())
});
console.log('<bold>Foregrounds</bold>'.colorize());
colors.forEach(color => {
  console.log(`\t> <${color}>${color}</${color}>`.colorize());
})
console.log('<bold>Bright</bold>'.colorize());
colors.forEach(color => {
  console.log(`\t> <b><${color}>${color}</${color}>`.colorize());
});

console.log('\
<bold>Other Effects</bold>\n\
\t> <dim>Dim</dim>\n\
\t> <italic>Italics</italic>\n\
\t> <ul>Underline</ul>\n\
\t> <invert>Invert</invert>\n\
\t> <strike>Strikethrough</strike>\n\
'.colorize()
);
