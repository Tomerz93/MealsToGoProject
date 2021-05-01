import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeArea } from '../../../components/SafeArea/safe-area.component';
import { RestaurantInfo } from '../components/restaurant-info.component';
import { MenuAccordion } from '../components/menu-accordion-group.component';

export const RestaurantDetailsScreen = ({
  route: { params: { restaurant } = {} },
}) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLaunchExpended] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const AccordionItems = [
    {
      accordionTitle: 'Breakfast',
      icon: 'bread-slice',
      expanded: breakfastExpanded,
      onPress: () => setBreakfastExpanded((prev) => !prev),
      items: ['Toast with Cheese', 'Bread with Scrambled Eggs'],
    },
    {
      accordionTitle: 'Lunch',
      icon: 'hamburger',
      expanded: lunchExpanded,
      onPress: () => setLaunchExpended((prev) => !prev),
      items: ['Burger with Fries', 'Steak with Baked Potatoes'],
    },
    {
      accordionTitle: 'Dinner',
      icon: 'food-variant',
      expanded: dinnerExpanded,
      onPress: () => setDinnerExpanded((prev) => !prev),
      items: ['Chicken Curry', 'Fried Chicken with Rice'],
    },
    {
      accordionTitle: 'Drinks',
      icon: 'cup',
      expanded: drinksExpanded,
      onPress: () => setDrinksExpanded((prev) => !prev),
      items: ['Japanese Sake', 'Draft Beer'],
    },
  ];
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <MenuAccordion items={AccordionItems} />
      </ScrollView>
    </SafeArea>
  );
};
