import { FC } from "react";
import { Section } from "./Categories.styled";
import { FormGroup } from "@mui/material";
import { useSelector } from "react-redux";
import { Category } from "../../components";
import categoryData from "../../data/home.json";
import { ICategoriesProps } from "./categories.d";
import { ICategoryRootState } from "../../store/reducer/types/category";


const Categories: FC<ICategoriesProps>= ({}) => {
  const data = categoryData.categories;
  const categories = useSelector(
    (state: ICategoryRootState) => state.category.category
  );
  return (
    <Section>
      <FormGroup>
        {data.map((item) => {
          return (
            <Category
              key={item.id}
              label={item.label}
              value={item.value}
              checked={categories.includes(item.value)}
            />
          );
        })}
      </FormGroup>
    </Section>
  );
};
export default Categories;
