import { FC } from "react";
import FormGroup from "@mui/material/FormGroup";
import { useSelector } from "react-redux";
import categoryData from "../../data/home.json";
import { Category } from "../../components/index";
import { Section } from "./Categories.styled";
import { ICategoriesProps } from "./Categories.d";
import { ICategoryRootState } from "../../store/reducer/types/category";

const Categories: FC<ICategoriesProps> = ({}) => {
  const data = categoryData.categories;

  const categories = useSelector(
    (state: ICategoryRootState) => state.category.category
  );

  return (
    <Section>
      <FormGroup>
        {data.map((item, i) => {
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
