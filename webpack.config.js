const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");



module.exports = {
  name: "Webpack-React-TypeScript-CSS-HTML", // 큰 의미는 없다.
  mode: "development", // 나중에 배포용으로는 production
  devtool: "eval", // 빠르게 build 하겠다.
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"], // entry에 자동으로 적용할 확장자.
  },

  entry: {
    app: ["./src/index"], // src 폴더에 js 또는 jsx 확장자를 가진 index 파일을 entry로 삼겠다!
  }, // 입력

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/, // 정규 표현식 적용 가능. 모듈을 적용할 파일의 이름 찾기. (js, jsx, tsx, ts)
        loader: "babel-loader", // 테스트를 통과한 파일에 적용할 모듈
        options: {
          presets: [
            // 그 모듈에서 추가적으로 사용할 다른 옵션(프로그램)
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: ["react-refresh/babel"], // React용 Hot Reloading 모듈(모듈에 탑재)
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // css확장자를 사용할 때 사용할 loader, 역순으로 loader가 실행된다. 순서 주의
      },
    ],
  }, // entry에 파일을 읽고 거기에 모듈을 적용한 후 -> webpack을 적용한다.

  plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    // 최종 출력할 번들링된 js / 절대경로
    path: path.join(__dirname, "public"), // C://...public/app.js
    filename: "app.js",
  },

  devServer: {
    hot: true, // hot reloading을 할 것인가.
    static: {
      // 지정한 디렉토리를 서버의 '메모리'에 등록. 메모리에서 파일을 호출하는 것.
      directory: path.resolve(__dirname, "public"),
    },
  },
  mode: "development",
};
