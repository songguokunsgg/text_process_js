import "./css/fonts.css"

function EditableTextbox({ value, onChange, style }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      style={{ ...style, resize: "none" }}
      className="textarea-custom"
    />
  );
}

export default EditableTextbox;
