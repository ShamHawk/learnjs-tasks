let styles = ['Джаз', 'Блюз'];
styles.push ('Рок-н-ролл');
styles[1] = 'Классика';
styles[2].pop
console.log (styles.shift());
styles.unshift('Рэп', 'Рэгги')

for (style of styles) {
    console.log (style)
}
