
yarn add typescript @types/node

npx tsc --init --rootDir src --outDir dist --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
