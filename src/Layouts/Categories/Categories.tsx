import { FC } from "react";
import { Section } from "./Categories.styled";
import { FormGroup } from "@mui/material";
import { Category } from "../../components";
import categoryData from "../../data/home.json";

const data = categoryData.categories; 
const Categories: FC = () => {
  return (
    <Section>
      <FormGroup>
        {
          data.map((value)=>{
            return <Category key={value.id} label={value.label} value={value.value}></Category>
          })
        }
      </FormGroup>
    </Section>
  );
};
export default Categories;
