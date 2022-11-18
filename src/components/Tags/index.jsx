import { useState } from "react";
import { TagsContainer } from "./styles";

const Tags = () => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();
    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      if (tags.length < 4) {
        setTags((prevState) => [...prevState, trimmedInput]);
        setInput("");
      }
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };
  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  return (
    <TagsContainer className="container">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
          <button onClick={() => deleteTag(index)}>x</button>
        </div>
      ))}
      <input
        id="input"
        value={input}
        type="number"
        min="1"
        placeholder="Digite os períodos separados com , "
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
      />
    </TagsContainer>
  );
};

export default Tags;
