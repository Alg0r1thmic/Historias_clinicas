// import { generateTemplateFiles } from 'generate-template-files';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
    {
        option: 'Generar Servicio y Controlador',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/generate-template-files/templates/CRUD',
        },
        stringReplacers: [
            {question: 'Ingrese el nombre de la entidad', slot: '__entity__'},
            {question: 'Ingrese el nombre del módulo', slot: '__modulo__'}
        ],
        output: {
            path: './src/features/__modulo__(kebabCase)/__entity__(kebabCase)',
            pathAndFileNameDefaultCase: '(kebabCase)',
        },
        onComplete: () => {
            console.log('Archivos generados correctamente');
        },
    }
]);