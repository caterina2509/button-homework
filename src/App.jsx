import { useState } from "react";
import { Button } from "./shared/ui/Button";
import { Stack } from "./shared/ui/Stack";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack direction="column" align="center" gap={32}>
      {/* Счётчик */}
      <Stack direction="column" align="center" justify="center" gap={16}>
        <p>count {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </Stack>

      {/* Все кнопки */}
      <Stack direction="row" align="center" gap={16} wrap>
        <div className="cell">
          <Button color="primary">Send</Button>
        </div>
        <div className="cell">
          <Button color="secondary">Send</Button>
        </div>
        <div className="cell">
          <Button color="outline">Send</Button>
        </div>
        <div className="cell">
          <Button color="transparent">Send</Button>
        </div>
        <div className="cell">
          <Button color="disabled">Send</Button>
        </div>
        <div className="cell">
          <Button cta>CTA</Button>
        </div>
        <div className="cell">
          <Button loading>Send</Button>
        </div>
      </Stack>
    </Stack>
  );
}

export default App;