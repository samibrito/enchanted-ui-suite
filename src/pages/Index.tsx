import React, { useState } from 'react';
import StorybookLayout from '../storybook/StorybookLayout';
import OverviewSection from '../storybook/sections/OverviewSection';
import ColorsSection from '../storybook/sections/ColorsSection';
import TypographySection from '../storybook/sections/TypographySection';
import IconsSection from '../storybook/sections/IconsSection';
import AnimationsSection from '../storybook/sections/AnimationsSection';
import ButtonsSection from '../storybook/sections/ButtonsSection';
import FormsSection from '../storybook/sections/FormsSection';
import CardsSection from '../storybook/sections/CardsSection';
import TablesSection from '../storybook/sections/TablesSection';
import BadgesSection from '../storybook/sections/BadgesSection';
import AlertsSection from '../storybook/sections/AlertsSection';
import NavigationSection from '../storybook/sections/NavigationSection';
import DataDisplaySection from '../storybook/sections/DataDisplaySection';
import InteractiveSection from '../storybook/sections/InteractiveSection';
import LayoutSection from '../storybook/sections/LayoutSection';

const sectionComponents: Record<string, React.FC> = {
  overview: OverviewSection,
  colors: ColorsSection,
  typography: TypographySection,
  icons: IconsSection,
  animations: AnimationsSection,
  buttons: ButtonsSection,
  forms: FormsSection,
  cards: CardsSection,
  tables: TablesSection,
  badges: BadgesSection,
  alerts: AlertsSection,
  navigation: NavigationSection,
  dataDisplay: DataDisplaySection,
  interactive: InteractiveSection,
  layout: LayoutSection,
};

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const SectionComponent = sectionComponents[activeSection] || OverviewSection;

  return (
    <StorybookLayout activeSection={activeSection} onSectionChange={setActiveSection}>
      <SectionComponent />
    </StorybookLayout>
  );
};

export default Index;
