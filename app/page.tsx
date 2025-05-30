export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2">🧠 CodeReader</h1>
        <p className="text-center text-gray-600 mb-6">
          「このコード、何してる？」を楽しく学ぼう！
        </p>

        <input
          type="text"
          placeholder="GitHubのrawファイルURLを入力"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-6">
          🔍 コードを読み込む
        </button>

        <div>
          <h2 className="text-xl font-semibold mb-2">📘 抽出されたコード</h2>
          <pre className="bg-gray-100 rounded-lg p-4 text-sm overflow-x-auto mb-6">
            {`function useState(initialValue) {
  let value = initialValue;
  function setValue(newValue) {
    value = newValue;
  }
  return [value, setValue];
}`}
          </pre>

          <h3 className="text-lg font-medium mb-2">🤔 この関数の目的は？</h3>
          <div className="space-y-2 mb-4">
            <label className="block">
              <input type="radio" name="answer" className="mr-2" />
              A. 状態管理の仕組みを提供する
            </label>
            <label className="block">
              <input type="radio" name="answer" className="mr-2" />
              B. DOM操作を行う
            </label>
            <label className="block">
              <input type="radio" name="answer" className="mr-2" />
              C. イベント定義をする
            </label>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
            回答する
          </button>
        </div>

        <footer className="mt-8 text-center text-sm text-gray-400">
          GitHub APIで動いてるよ（予定）
        </footer>
      </div>
    </main>
  );
}
