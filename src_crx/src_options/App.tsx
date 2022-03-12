import "./App.less";
import TestAlias from "base/TestAlias";
function App() {
  return (
    <div>
      options
      <TestAlias></TestAlias>
      {/* <a href="../src_popup/">测试</a> */}
      {/* 不行,上线后会报错 */}
      <a href="/src_crx/src_popup/">测试</a>
      {/* 编译完成后就不支持这样了 */}
      {/* 只有../src_popup/index.html是有效的 */}
    </div>
  );
}

export default App;
