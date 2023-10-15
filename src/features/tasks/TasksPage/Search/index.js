import Input from "../../Input";
import { Wrapper } from "./style";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameter";

export default () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const query = useQueryParameter(searchQueryParamName);

  const onInputChange = ({ target }) => {
    replaceQueryParameter({ key: searchQueryParamName, value: target });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
