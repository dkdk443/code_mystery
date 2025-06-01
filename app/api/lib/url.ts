/**
 * GitHubの通常URLをraw URLに変換する
 * 例: https://github.com/user/repo/blob/main/path/to/file.js
 * →  https://raw.githubusercontent.com/user/repo/main/path/to/file.js
 */
export function convertToRawGitHubUrl(url: string): string | null {
  try {
    const githubRegex = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/;
    const match = url.match(githubRegex);
    if (!match) return null;

    const [, user, repo, branch, path] = match;
    return `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${path}`;
  } catch {
    return null;
  }
}
