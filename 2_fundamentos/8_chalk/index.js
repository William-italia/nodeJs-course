import chalk from 'chalk'

function comparador(nota) {
  if (nota <= 5) {
    return console.log(chalk.red('Reprovado'));
  }
  return console.log(chalk.green('Aprovado'));
}

comparador(8);