import React from 'react';
import hljs from 'highlight.js';

interface Props {
  children: string;
  languages?: Array<string>;
}

interface State {
  codeStr: string;
}

export class Highlight extends React.PureComponent<Props, State> {
  static defaultProps = {
    children: '',
    languages: [],
  };
  state: State = { codeStr: '' };

  componentDidUpdate(prev: Props) {
    if (prev.children !== this.props.children) {
      this.setState({ codeStr: '' });
      return;
    }
    if (this.state.codeStr && this.state.codeStr.length > 0) {
      return;
    }
    this.highlightCode();
  }

  componentDidMount() {
    this.highlightCode();
  }

  highlightCode() {
    const { children, languages } = this.props;
    if (languages && languages.length === 1) {
      let ans = hljs.highlight(languages[0], children);
      this.setState({ codeStr: ans.value });
    } else {
      let ans = hljs.highlightAuto(children, languages);
      this.setState({ codeStr: ans.value });
    }
  }

  render() {
    const { languages } = this.props;
    const cls = [languages ? languages[0] : '', 'hljs'].join(' ');
    return (
      <pre>
        <code
          className={cls}
          dangerouslySetInnerHTML={{ __html: this.state.codeStr }}
        ></code>
      </pre>
    );
  }
}

export default Highlight;
