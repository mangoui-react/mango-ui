/* eslint-disable @typescript-eslint/explicit-function-return-type */
import childProcess from 'child_process';
import glob from 'fast-glob';
import fse from 'fs-extra';
import path from 'path';
import { promisify } from 'util';

// import yargs from 'yargs';

const exec = promisify(childProcess.exec);

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './build');
const srcPath = path.join(packagePath, './src');

async function dTsCopy({ from, to }) {
  if (!(await fse.pathExists(to))) {
    console.warn(`path ${to} does not exists`);
    return [];
  }

  const files = await glob('**/*.d.ts', { cwd: from });
  const cmds = files.map((file) => fse.copy(path.resolve(from, file), path.resolve(to, file)));
  return await Promise.all(cmds);
}

async function copyFileInBuild(file) {
  const sourcePath = path.resolve(packagePath, file);
  const targetPath = path.resolve(buildPath, path.basename(file));
  await fse.copy(sourcePath, targetPath);
  console.log(`Copied ${sourcePath} to ${targetPath}`);
}

async function createRootPackageFile() {
  const packageData = await fse.readFile(path.resolve(packagePath, './package.json'), 'utf8');
  const { scripts, devDependencies, ...packageDataOthers } = JSON.parse(packageData);

  const newPackageData = {
    ...packageDataOthers,
    private: false,
    main: './index.js',
    module: './esm/index.js',
    types: './index.d.ts',
  };

  const targetPath = path.resolve(buildPath, './package.json');

  await fse.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

async function createPackageJson({ from, to }) {
  const directoryPackages = glob.sync('*/index.{ts,tsx}', { cwd: from }).map(path.dirname);

  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      const packageJsonPath = path.join(to, directoryPackage, 'package.json');

      const packageJson = {
        sideEffects: false,
        module: path.posix.join('../esm', directoryPackage, 'index.js'),
        main: './index.js',
        types: './index.d.ts',
      };

      const [typingsEntryExist, moduleEntryExists, mainEntryExists] = await Promise.all([
        fse.pathExists(path.resolve(path.dirname(packageJsonPath), packageJson.types)),
        fse.pathExists(path.resolve(path.dirname(packageJsonPath), packageJson.module)),
        fse.pathExists(path.resolve(path.dirname(packageJsonPath), packageJson.main)),
        fse.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2)),
      ]);

      const manifestErrorMessages = [];
      if (!typingsEntryExist) {
        manifestErrorMessages.push(`'types' entry '${packageJson.types}' does not exist`);
      }
      if (!moduleEntryExists) {
        manifestErrorMessages.push(`'module' entry '${packageJson.module}' does not exist`);
      }
      if (!mainEntryExists) {
        manifestErrorMessages.push(`'main' entry '${packageJson.main}' does not exist`);
      }
      if (manifestErrorMessages.length > 0) {
        throw new Error(`${packageJsonPath}:\n${manifestErrorMessages.join('\n')}`);
      }

      return packageJsonPath;
    }),
  );
}

async function run(/* argv */) {
  // const { packageName } = argv;

  try {
    const tsconfigPath = path.join(packagePath, 'tsconfig.build.json');
    if (!fse.existsSync(tsconfigPath)) {
      throw new Error(
        `${packagePath} package root 에 'tsconfig.build.json' 파일이 존재해야 합니다.`,
      );
    }

    // commonjs
    const tsconfigCjsOption = [
      '--target',
      'es5',
      '--module',
      'commonjs',
      '--lib',
      'es5,es2015,es2016,es2017,dom',
    ];
    await exec(['pnpm', 'tsc', '--project', tsconfigPath, ...tsconfigCjsOption].join(' '));

    // esm
    const tsconfigEsmOption = ['--outDir', 'build/esm', '--declaration', 'true'];
    await exec(['pnpm', 'tsc', '--project', tsconfigPath, ...tsconfigEsmOption].join(' '));

    // await exec(['pnpm', 'tsc', '-b', tsconfigPath].join(' '));

    // d.ts copy
    await dTsCopy({ from: srcPath, to: buildPath });

    // create root package.json
    await createRootPackageFile();

    // 배포시 필요한 파일 copy
    await Promise.all(
      ['./README.md', '../../LICENSE'].map(async (file) => {
        await copyFileInBuild(file);
      }),
    );

    // 각 컴포넌트마다 package.json 생성
    await createPackageJson({ from: srcPath, to: buildPath });

    // // ui 패키지인 경우
    // if (packageName === 'ui') {
    //   // compile scss
    //   // "build:scss": "sass ./src:./build",
    //   await exec(`pnpm sass ${srcPath}:${buildPath}`);
    //   // scss 파일 copy
    //   await scssCopy({ from: srcPath, to: buildPath });
    // }
    // // Icons 패키지인 경우
    // else if (packageName === 'icons') {
    //   // 배포시 필요한 파일 copy
    //   fse.copy(
    //     path.resolve(path.join(srcPath, './icons'), 'icons.json'),
    //     path.resolve(path.join(buildPath, './icons'), 'icons.json'),
    //   );

    //   // TODO: 소스관리와 배포시 사용자 import 편의성 모두 충족시키는 방법 좀더 고민
    //   // await buildIconCopy();
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

void run();
// yargs
//   .command({
//     command: '$0 [packageName]',
//     builder: (command) => {
//       return command.positional('packageName', {
//         description: 'build package',
//         type: 'string',
//         default: 'ui',
//       });
//     },
//     handler: run,
//   })
//   .help()
//   .strict(true)
//   .version(false)
//   .parse();
