import { globSync } from 'glob';
import {
  copyFileSync,
  readFileSync,
  /* rmSync, */
  writeFileSync,
} from 'node:fs';
import path from 'path';
import * as tsup from 'tsup';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function build(packagePath) {
  const indexFile = `${packagePath}/src/index.ts`;
  const buildPath = `${packagePath}/build`;
  const distPath = `${buildPath}/dist`;

  // rmSync(buildPath, { recursive: true, force: true });

  await tsup.build({
    entry: [indexFile],
    format: ['cjs', 'esm'],
    // dts: { only: true },
    dts: true,
    sourcemap: true,
    outDir: distPath,
    silent: true,
    external: [/@melio-ui\/.+/],
  });
  // console.log(`Built ${distPath}`);

  // package.json 파일 생성
  const packageName = await createPackageFile(packagePath);

  // README.md 파일 copy
  await Promise.all(
    [`${packagePath}/README.md`].map(async (file) => {
      // await fse.copy(file, `${buildPath}/${path.basename(file)}`);
      copyFileSync(file, `${buildPath}/${path.basename(file)}`);
    }),
  );

  console.log('Built', packageName);
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function createPackageFile(packagePath) {
  const buildPath = `${packagePath}/build`;

  const packageData = readFileSync(path.resolve(packagePath, './package.json'), 'utf8');
  const { scripts, devDependencies, ...packageDataOthers } = JSON.parse(packageData);

  const newPackageData = {
    ...packageDataOthers,
    private: false,
    exports: {
      '.': {
        import: {
          types: './dist/index.d.mts',
          default: './dist/index.mjs',
        },
        require: {
          types: './dist/index.d.ts',
          default: './dist/index.js',
        },
      },
    },
    main: './dist/index.js',
    module: './dist/index.mjs',
    types: './dist/index.d.ts',
  };

  const targetPath = path.resolve(buildPath, './package.json');

  writeFileSync(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  // console.log(`Created package.json in ${targetPath}`);

  return newPackageData.name;
}

const packagePath = process.cwd();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
// globSync(`${packagePath}/src/*`).forEach(build);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
globSync(`${packagePath}/src/tooltip`).forEach(build);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
// globSync(`${packagePath}/src/use-portal`).forEach(build);

// globSync(`${packagePath}/src/accordion`).forEach((path) => {
//   console.log('=====test path', path);
// });

// const packages = glob.sync('*/index.{ts,tsx}', { cwd: `${packagePath}/src` });
// const packages = glob.sync(packagePath);
// console.log('====== packages: ', packages);
