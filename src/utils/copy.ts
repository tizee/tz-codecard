// copy to clipboard
// to-do: maybe could add a copy button ?
export const CopyToClipboard = (str: string) => {
  if ('clipboard' in window.navigator) {
    return window.navigator.clipboard.writeText(str);
  } else {
    // create a temporary textarea
    const area = document.createElement('textarea');
    area.style.opacity = '0';
    area.style.position = 'absolute';
    area.style.left = '-9999px';
    area.value = str;
    area.setAttribute('readonly', 'true');
    area.setAttribute('contenteditable', 'false');
    document.body.appendChild(area);
    area.select();
    const range = document.createRange();
    const selected = window.getSelection();
    selected?.removeAllRanges();
    selected?.addRange(range);
    area.setSelectionRange(0, area.value.length);
    document.execCommand('copy');
    document.removeChild(area);
    return Promise.resolve(true);
  }
};
