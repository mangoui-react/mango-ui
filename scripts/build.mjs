/* eslint-disable @typescript-eslint/no-misused-promises */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { globSync } from 'glob';
import {
  copyFileSync,
  existsSync,
  readFileSync,
  /* rmSync, */
  writeFileSync,
} from 'node:fs';
import path from 'path';
import * as tsup from 'tsup';

// @mangoui/* build function
async function build(packagePath) {
  const indexFile = `${packagePath}/src/index.ts`;
  if (!existsSync(indexFile)) return;

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
    external: [/@mangoui\/.+/],
  });
  // console.log(`Built ${distPath}`);

  // package.json 파일 생성
  const packageName = await createPackageFile(packagePath);

  // README.md 파일 copy
  await Promise.all(
    [`${packagePath}/README.md`].map(async (file) => {
      copyFileSync(file, `${buildPath}/${path.basename(file)}`);
    }),
  );

  console.log('Built', packageName);
}

async function createPackageFile(packagePath, addDependencies) {
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

  if (addDependencies) {
    newPackageData.dependencies = {
      ...newPackageData.dependencies,
      ...addDependencies,
    };
  }

  const targetPath = path.resolve(buildPath, './package.json');

  writeFileSync(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  // console.log(`Created package.json in ${targetPath}`);

  return newPackageData.name;
}

// @mangoui/react build function
async function buildReact(packagePath) {
  const buildPath = `${packagePath}/build`;
  const distPath = `${buildPath}/dist`;

  const indexContents = readFileSync(path.resolve(`${packagePath}/src`, './index.ts'), 'utf8');
  const newIndexContents = indexContents.replace(/.\//gi, '@mangoui/');

  const indexFile = path.resolve(`${packagePath}/src`, './index.ts');

  // index 파일 쓰기 - @mangoui
  writeFileSync(indexFile, newIndexContents, 'utf8');

  await tsup.build({
    entry: [indexFile],
    format: ['cjs', 'esm'],
    // dts: { only: true },
    dts: true,
    sourcemap: true,
    outDir: distPath,
    silent: true,
    external: [/@mangoui\/.+/],
  });
  // console.log(`Built ${distPath}`);

  // index 파일 쓰기 - ./ 으로 되돌리기
  writeFileSync(indexFile, indexContents, 'utf8');

  // package.json 파일 생성
  const dependencies = {};
  globSync(`${packagePath}/src/*`).forEach((dirPath) => {
    const packageFile = `${dirPath}/package.json`;
    if (!existsSync(packageFile)) return;

    const packageData = readFileSync(packageFile, 'utf8');
    const { version } = JSON.parse(packageData);
    dependencies[`@mangoui/${path.basename(dirPath)}`] = `^${version}`;
  });
  const packageName = await createPackageFile(packagePath, dependencies);

  // README.md 파일 copy
  await Promise.all(
    [`${packagePath}/README.md`].map(async (file) => {
      copyFileSync(file, `${buildPath}/${path.basename(file)}`);
    }),
  );

  console.log('Built', packageName);
}

const packagePath = process.cwd();

// @mangoui/* build
globSync(`${packagePath}/src/*`).forEach(build);

// @mangoui/react build
void buildReact(packagePath);

// globSync(`${packagePath}/src/tooltip`).forEach(build);

// globSync(`${packagePath}/src/accordion`).forEach((path) => {
//   console.log('=====test path', path);
// });
