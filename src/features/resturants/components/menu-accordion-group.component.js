import React from 'react';
import { List } from 'react-native-paper';

export const MenuAccordion = ({ items }) => {
  return (
    <>
      {items.map(
        ({ items, accordionTitle, icon, expanded, onPress }, index) => (
          <List.Accordion
            key={accordionTitle}
            title={accordionTitle}
            expanded={expanded}
            onPress={onPress}
            id={`${accordionTitle}-${index}`}
            left={(props) => <List.Icon {...props} icon={icon} />}
          >
            {items.map((item) => (
              <List.Item key={item} title={item} />
            ))}
          </List.Accordion>
        )
      )}
    </>
  );
};
