import MarkdownIt from 'markdown-it';
import twemoji from 'twemoji';

export default ({app}, inject) => {

  const md = new MarkdownIt({"preset": "default", "html": true, "linkify": true, "typographer": true, "breaks": false});

  md.use(require('markdown-it-emoji'));
  md.use(require('markdown-it-github-headings'), {"enableHeadingLinkIcons": false});

  md.renderer.rules.emoji = function (token, idx) {
    return twemoji.parse(token[idx].content);
  };

  inject('md', md);
}
