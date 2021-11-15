import React from "react";
import { fetchEmployee } from "./api";

type Props = {};
type State = { input: string; loading: boolean };

export class ClassComponent extends React.Component<Props, State> {
  constructor() {
    super({});
    this.state = {
      input: "",
      loading: true,
    };
  }

  componentDidMount() {
    fetchEmployee().then(({ firstName }) => {
      this.setState({ input: firstName, loading: false });
    });
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        {this.state.loading ? (
          "Loading"
        ) : (
          <>
            <label htmlFor="first_name">First name </label>
            <input
              id="first_name"
              value={this.state.input}
              onChange={(e) => this.setState({ input: e.target.value })}
            />
            <button onClick={() => alert(this.state.input)}>Submit!</button>
          </>
        )}
      </div>
    );
  }
}
