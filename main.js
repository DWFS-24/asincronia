const fs = require('fs').promises;

async function main() {
  try {
    // lee el documento de input.txt
    const inputContent = await fs.readFile('input.txt', 'utf-8');
    console.log('Contenido de input.txt', inputContent);

    // Escreibe el contenido en el archivo output.txt
    await fs.writeFile('output.txt', inputContent);
    console.log('Contenido copiado a output.txt');
  } catch (error) {
    console.error('Error', error.message)
  }
}
//Ejecuta la funcion principal
main()