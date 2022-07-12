import { FC } from "react";
import MaterialTabs from "@mui/material/Tabs";
import MaterialTab from "@mui/material/Tab";
import { useDispatch, useSelector } from "react-redux";

import { Section } from "./Tabs.styled";

import { setTab } from "../../store/reducer/tabs.reducer";

import { ITabsProps } from "./Tabs.d";
import { ITabsRootState } from "../../store/reducer/types/tabs";

const Tabs: FC<ITabsProps> = ({}) => {
  const dispatch = useDispatch();

  const activeTab = useSelector(
    (state: ITabsRootState) => state.tabs.activeTab
  );

  const items = [
    {
      id: "ti-1",
      label: "Product",
      disable: false,
    },
    {
      id: "ti-2",
      label: "Addresses",
      disable: true,
    },
    {
      id: "ti-3",
      label: "Overview",
      disable: true,
    },
  ];

  const tabChangeHandel = (event: React.SyntheticEvent, newValue: number) => {
    return dispatch(
      setTab({
        activeTab: newValue,
      })
    );
  };

  return (
    <Section>
      <MaterialTabs
        value={activeTab}
        onChange={tabChangeHandel}
        aria-label="basic tabs example"
      >
        {items.map((item, i) => {
          return (
            <MaterialTab
              key={item.id}
              label={`${i + 1} ${item.label}`}
              disabled={item.disable}
              style={{
                textTransform: "capitalize",
              }}
            />
          );
        })}
      </MaterialTabs>
    </Section>
  );
};

export default Tabs;
