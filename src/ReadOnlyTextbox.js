function ReadOnlyTextbox({ value, style }) {
  return (
    <textarea
      value={value}
      readOnly
      style={{
        ...style,
        resize: "none",
        background: "transparent",
        border: "none",
        outline: "none",
      }}
      className="textarea-custom"
    />
  );
}

export default ReadOnlyTextbox;