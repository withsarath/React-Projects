import { useState } from "react";
import QRCode from "react-qr-code";
function QrCode() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  function handleGenerateQrCode() {
    setQrCode(input)
    setInput("")
  }
  return (
    <div>
      <h1>Qr code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter you value here"
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
        <div>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
      </div>
    </div>
  );
}

export default QrCode;
