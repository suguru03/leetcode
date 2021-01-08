# leetcode

## Create a new problem

```
gulp init
prompt: num: <number>
prompt: language: [js|rust]
```

It will generate a folder and files automatically.

## Benchmark

```
npm run benchmark
node benchmark
node benchmark -t Roman
```

## Test

### Node.js

```sh
npm test
mocha test
mocha test -t Roman
```

#### Test Java using mocha

```
mocha test -t '001.Two Sum' --java
```

#### Test Ruby using mocha

```
mocha test -t '001.Two Sum' --ruby
```

### Rust

```sh
cargo test
cargo test --lib -p <target>
```
