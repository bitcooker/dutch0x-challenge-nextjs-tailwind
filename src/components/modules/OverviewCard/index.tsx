import React from 'react';
import { TOverview, TOverviewItem } from '@/types/overview';
import { ArrowRightIcon } from '@/components/elements/Svg/svg';
import {
  Container,
  Header,
  HeaderLabel,
  List,
  ListItem,
  ListItemName,
  ListItemRight,
  ListItemValue,
} from './styles';

interface IOverviewCardProps {
  title?: string;
  items: TOverviewItem[];
}

const OverviewCard: React.FC<IOverviewCardProps> = (
  props: IOverviewCardProps
) => {
  const { title, items } = props;
  const isTitle = !!title;

  return (
    <Container>
      {isTitle && (
        <Header>
          <HeaderLabel>{title}</HeaderLabel>
        </Header>
      )}

      <List>
        {items.map((item) => (
          <ListItem key={item.name}>
            <ListItemName>{item.name}</ListItemName>
            <ListItemRight>
              {item.value && <ListItemValue>{item.value}</ListItemValue>}
              <ArrowRightIcon />
            </ListItemRight>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default OverviewCard;
