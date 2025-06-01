'use client';

import { useState } from 'react';
import { convertToRawGitHubUrl } from '../api/lib/url'

export default function Home() {
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const convertedUrl = convertToRawGitHubUrl(url) || ''

  const fetchCode = async () => {
    setError('');
    setCode('');
    try {
      const res = await fetch(`/api/fetch-code?url=${encodeURIComponent(convertedUrl)}`);
      const data = await res.json();
      if (data.code) {
        setCode(data.code);
      } else {
        setError(data.error || '不明なエラー');
      }
    } catch (err) {
      setError('通信エラーが発生しました');
    }
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHubコード読解ツール</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="GitHub URL を入力）"
        className="w-full border p-3 rounded mb-4"
      />
      <button
        onClick={fetchCode}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        コードを取得
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {code && (
        <pre className="mt-6 bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap text-sm">
          {code}
        </pre>
      )}
    </main>
  );
}
